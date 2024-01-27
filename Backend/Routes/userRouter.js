import express from "express";
import Student from "../Models/student.js";
import { authenticated } from "../Middleware/auth.js";

const studentRouter = express.Router();

studentRouter.get("/:username", async (req, res, next) => {
  try {
    const studentUsername = req.params.username;

    // Find the student by ID
    const student = await Student.findOne({ username: studentUsername });

    if (!student) {
      return res.status(404).json({ message: "The requested user could not be found"});
    }

    res.status(200).json(student);

  } catch (error) {
    next(error)
  }
});

studentRouter.post("/", authenticated, async (req, res, next) => {
  try {
    // Assuming the request body contains the necessary data for creating a student profile
    const {
      name,
      username,
      email,
      universityName,
      githubUsername,
      linkedinProfile
    } = req.body;

    // Create a new student instance
    const newStudent = new Student({
      name,
      username,
      email,
      universityName,
      githubUsername,
      linkedinProfile,
    });

    // Save the student to the database
    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    if (error.name === "ValidationError") {
      // Handle Mongoose validation errors
      console.error(error);
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: "Validation error", errors: validationErrors });
    }
    next(error)
  }
});

studentRouter.patch("/:username", authenticated, async (req, res, next) => {
  try {
    const studentUsername = req.params.username;

    // Update only the fields provided in the request
    const result = await Student.updateOne(
      { username: studentUsername },
      { $set: req.body }
    );

    if (result.n === 0) {
      return res.status(404).json({ message: "The requested user could not be found." });
    }

    res.status(200).json({ message: "Student profile data updated successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Handle Mongoose validation errors
      console.error(error);
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: "Validation error", errors: validationErrors });
    }
    next(error);
  }
});

export default studentRouter;
