import express from "express";
import Project from "../Models/project.js";
import generateEmbeddings from "../utils/embeddings.js";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const projectRouter = express.Router();

// Get a list of top 50 trending projects with the highest views
projectRouter.get("/trending", async (req, res) => {
  try {
    const trendingProjects = await Project.find().sort({ views: -1 }).limit(54);
    res.status(200).json(trendingProjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Post a new project
projectRouter.post("/", upload.single("docs"), async (req, res) => {
  try {
    const newProject = new Project(req.body);
    newProject["embeddings"] = await generateEmbeddings(newProject);
    newProject["docs"] = req.file.buffer;
    const savedProject = await newProject.save();

    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete a project by _id
projectRouter.delete("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(deletedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get a single project by _id
projectRouter.get("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId).select('+docs');
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    // Update views when a project is accessed
    project.views += 1;
    await project.save();

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

projectRouter.get("/student/:username", async (req, res) => {
  try {
    const studentUsername = req.params.username;

    // Find the projects where the given student is an author
    const projects = await Project.find({ author: studentUsername });

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
})

export default projectRouter;
