// Import required modules and dependencies
import dotenv from "dotenv"; // Load environment variables
import express, { json } from "express";
import cookieParser from "cookie-parser";
import projectRouter from "./Routes/projectRouter.js";
import searchRouter from "./Routes/searchRouter.js";
import studentRouter from "./Routes/userRouter.js";
import authRouter from "./Routes/authRouter.js";
import configurePassport from "./Config/passportConfig.js";
import {connectToDatabase} from "./Config/dbConfig.js";
import {configureSession} from"./Config/sessionConfig.js";
import passport from "passport";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); // Load environment variables from .env file
// Create an Express application
const app = express();

app.set('trust proxy', 1);

app.use(compression())

// Retrieve MongoDB connection URI from environment variables
const url = process.env.MONGODB_URL;

// Retrieve the port from environment variables
const PORT = process.env.PORT;

// Connect to MongoDB using Mongoose
connectToDatabase(url)

// Set up Express to use sessions with specific configuration
app.use(configureSession());

configurePassport(); // Configure Passport for authentication

app.use(cookieParser()); // Parse cookies attached to incoming requests

app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded data in requests

// Enable JSON parsing for incoming requests
app.use(json());

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.authenticate("session")); // Passport middleware to support sessions

app.use("/api/auth", authRouter); // Route for authentication-related endpoints

app.use("/api/projects", projectRouter); // Route for project-related endpoints

// Route for student-related endpoints with authentication middleware
app.use("/api/students", studentRouter);

app.use("/api/search", searchRouter); // Route for search-related endpoints

if (process.env.NODE_ENV === "production"){
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.static(path.join(__dirname, "./dist")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist", "index.html"));
  });
}

app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging

  // Send a generic response to the client
  res.status(500).json({
    message: "Internal Server Error! Please reload the page or try again after some time.",
    error: process.env.NODE_ENV === "production" ? {} : err, // Don't expose detailed error information in production
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(process.env.NODE_ENV);
  console.log(`Server is running on http://localhost:${PORT}`); // Start the Express server and log a message on successful start
});
