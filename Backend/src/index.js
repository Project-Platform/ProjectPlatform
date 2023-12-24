// Import required modules and dependencies
import dotenv from "dotenv"; // Load environment variables
import express, { Router, json } from "express";
import { connect } from "mongoose";
import authRouter from "./Routes/authRouter.js";
import projectRouter from "./Routes/projectRouter.js";
import { authentication } from "./Middleware/auth.js";

dotenv.config();

const router = Router();

// Create an Express application
const app = express();

// Retrieve MongoDB connection URI from environment variables
const url = process.env.MONGODB_URL;

// Retrieve the port from environment variables
const PORT = process.env.PORT;

// Connect to MongoDB using Mongoose
connect(url);

// Enable JSON parsing for incoming requests
app.use(json());

app.use("/api/auth", authRouter);

app.use("/projects", projectRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Start the Express server and log a message on successful start
});
