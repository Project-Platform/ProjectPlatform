// Import required modules and dependencies
import dotenv from "dotenv"; // Load environment variables
import express, { Router, json } from "express";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";
import projectRouter from "./Routes/projectRouter.js";
import searchRouter from "./Routes/searchRouter.js";
import studentRouter from "./Routes/userRouter.js";
import authRouter from "./Routes/authRouter.js";
import configurePassport from "./Config/passportConfig.js";
import { authenticated } from "./Middleware/auth.js"; // Import authentication middleware
import passport from "passport";

dotenv.config(); // Load environment variables from .env file

// Create an Express application
const app = express();

// Retrieve MongoDB connection URI from environment variables
const url = process.env.MONGODB_URL;

// Retrieve the port from environment variables
const PORT = process.env.PORT;

// Set up Express to use sessions with a specific configuration
app.use(
  session({
    name: "ProjectPlatform-session",
    secret: process.env.JWT_SECRET, // Secret used to sign the session ID cookie
    resave: false, // Do not save the session if it hasn't been modified
    saveUninitialized: false, // Do not save uninitialized sessions
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 }, // Session cookie configuration (e.g., max age)
  })
);

configurePassport(); // Configure Passport for authentication

// Connect to MongoDB using Mongoose
try {
  await connect(url); // Attempt to connect to MongoDB
  console.log("Connected to MongoDB Atlas");
} catch (error) {
  console.error("Error connecting to MongoDB Atlas:", error);
}

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
app.use("/api/students", authenticated, studentRouter);

app.use("/api/search", searchRouter); // Route for search-related endpoints

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Start the Express server and log a message on successful start
});
