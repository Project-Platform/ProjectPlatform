// Import required modules and dependencies
const express = require("express");      // Express framework for building web applications
const mongoose = require("mongoose");    // Mongoose for MongoDB database interaction
const models = require("./Models");      // Custom models for MongoDB collections
const generateEmbeddings = require("./utils/embeddings");   // Utility function for generating embeddings
const semanticSearch = require("./utils/semanticSearch");    // Utility function for semantic search
require("dotenv").config();              // Load environment variables from a .env file

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
    console.log(`Server is running on http://localhost:${PORT}`);   // Start the Express server and log a message on successful start
});
