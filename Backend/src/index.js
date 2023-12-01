// Import required modules and dependencies
const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/user"); // Import User model
const University = require("./Models/university"); // Import University model
const Mentor = require("./Models/mentor"); // Import Mentor model
const Project = require("./Models/createProjectModel"); // Import Project model
require("dotenv").config(); // Load environment variables

// Create an Express application
const app = express();

// Retrieve MongoDB connection URI from environment variables
const url = process.env.MONGODB_URL;

// Retrieve the port from environment variables
const PORT = process.env.PORT;

// Connect to MongoDB using Mongoose
mongoose.connect(url);

// Enable JSON parsing for incoming requests
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
