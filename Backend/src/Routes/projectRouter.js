import express from "express";
import Project from "../Models/project.js";
import generateEmbeddings from "../utils/embeddings.js";
import multer from "multer";
import { authenticated } from "../Middleware/auth.js";
import semanticSearch from "../utils/semanticSearch.js";

const upload = multer({ storage: multer.memoryStorage() });

const projectRouter = express.Router();

// Get a list of top 50 trending projects with the highest views
projectRouter.get("/trending", async (req, res, next) => {
  try {
    const trendingProjects = await Project.find().sort({ views: -1 }).limit(54);
    res.status(200).json(trendingProjects);
  } catch (error) {
    next(error);
  }
});

// Post a new project
projectRouter.post("/", authenticated,upload.single("docs"), async (req, res, next) => {
    try {
      const newProject = new Project(req.body);
      newProject["embeddings"] = await generateEmbeddings(newProject);
      if (!req.file) {
        throw new Error("Document must be present along with project data.");
      }
      newProject["docs"] = req.file.buffer;
      const savedProject = await newProject.save();

      res.status(201).json(savedProject);
    } catch (error) {
      if (error.message === "Document must be present along with project data.") {
        // Handle the specific error you threw
        console.error(error);
        return res.status(400).json({ message: error.message });
      }

      if (error.name === "ValidationError") {
        // Extract validation error messages
        console.error(error);
        const validationErrors = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation error", errors: validationErrors });
      }

      next(error);
    }
  }
);

// Delete a project by _id
projectRouter.delete("/:id", authenticated, async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ message: "The requested project could not be found" });
    }
    res.status(200).json(deletedProject);
  } catch (error) {
    next(error);
  }
});

// Get a single project by _id
projectRouter.get("/:id", async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId).select(
      "+docs +embeddings"
    );
    const similarProjects = await semanticSearch(project.embeddings);
    const topSimilarProjects = similarProjects.slice(1, 7);
    if (!project) {
      return res
        .status(404)
        .json({ message: "The requested project could not be found" });
    }
    // Update views when a project is accessed
    project.views += 1;
    await project.save();

    res
      .status(200)
      .json({ project: project, similarProjects: topSimilarProjects });
  } catch (error) {
    next(error);
  }
});

projectRouter.get("/student/:username",authenticated, async (req, res, next) => {
    try {
      const studentUsername = req.params.username;

      // Find the projects where the given student is an author
      const projects = await Project.find({ author: studentUsername });
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }
);

export default projectRouter;
