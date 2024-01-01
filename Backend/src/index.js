// Import required modules and dependencies
import dotenv from "dotenv"; // Load environment variables
import express, { Router, json } from "express";
import {connect }from 'mongoose';
import cookieParser from "cookie-parser";
import authRouter from "./Routes/authRouter.js";
import projectRouter from "./Routes/projectRouter.js";
import searchRouter from "./Routes/searchRouter.js";
import studentRouter from "./Routes/userRouter.js";
dotenv.config();

// Create an Express application
const app = express();

// Retrieve MongoDB connection URI from environment variables
const url = process.env.MONGODB_URL;

// Retrieve the port from environment variables
const PORT = process.env.PORT;

// Connect to MongoDB using Mongoose

try {
  await connect(url);
  console.log("Connected to MongoDB Atlas");
} catch (error) {
  console.error("Error connecting to MongoDB Atlas:", error);
}
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// Enable JSON parsing for incoming requests
app.use(json());

app.use("/api/auth", authRouter);

app.use("/projects", projectRouter);

app.use("/api/students", studentRouter);

app.use("/search",searchRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Start the Express server and log a message on successful start
});

