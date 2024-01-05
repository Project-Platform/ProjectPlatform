import express from "express";
import Student from "../Models/student.js";

const studentRouter = express.Router();

studentRouter.get("/:username", async (req, res) => {
  try {
    const studentUsername = req.params.username;

    // Find the student by ID
    const student = await Student.findOne({ username: studentUsername });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

studentRouter.post("/", async (req, res) => {
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
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

studentRouter.patch("/:username", async (req, res) => {
  try {
    const studentUsername = req.params.username;

    // Update only the fields provided in the request
    const result = await Student.updateOne(
      { username: studentUsername },
      { $set: req.body }
    );

    if (result.n === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student profile data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default studentRouter;
