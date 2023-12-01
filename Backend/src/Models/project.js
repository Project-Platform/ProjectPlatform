const mongoose = require('mongoose');

// Define a Mongoose schema for the 'projects' collection
const projectSchema = new mongoose.Schema({
  // Title of the project, a required string field
  title: {
    type: String,
    required: true
  },

  // Field of study for the project, a required string field
  field: {
    type: String,
    required: true
  },

  // Domain(s) of the project, an array of strings, required
  domain: {
    type: [String],
    required: true
  },

  // Mentor's ID, a reference to the 'mentors' collection
  mentorId: {
    type: String,
    ref: "mentor",
    required: true
  },

  // University's ID, a reference to the 'univ' collection
  universityId: {
    type: String,
    ref: "univ",
    required: true
  },

  // Author(s) of the project, an array of strings, required
  author: {
    type: [String],
    required: true
  },

  // Abstract of the project, a required string field
  abstract: {
    type: String,
    required: true
  },

  // Document's ID, a reference to the 'docs' collection
  docs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "docs",
    required: true
  },

  // Date of the project, a string field with a default value
  date: {
    type: String,
    required: false,
    default: new Date().getFullYear()
  }
});

// Export the project schema for use in creating a model
module.exports = projectSchema;
