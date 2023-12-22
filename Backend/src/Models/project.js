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
    required: true,
    default: "Computer Science"
  },

  // Domain(s) of the project, an array of strings, required
  domain: {
    type: [String],
    required: true
  },

  // Mentor's ID, a reference to the 'mentors' collection
  mentorId: {
    type: String,
    ref: "mentors",   // Reference to the 'mentors' collection
    required: true,
    default: "tempMentor"
  },

  // University's ID, a reference to the 'univs' collection
  universityId: {
    type: String,
    ref: "univs",     // Reference to the 'univs' collection
    required: true,
    default: "tempUnivesity"
  },

  // Author(s) of the project, an array of strings, a reference to the 'students' collection
  author: {
    type: [String],
    ref:"students",      // Reference to the 'students' collection
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
    ref: "docs",      // Reference to the 'docs' collection
    required: true,
    default: "6124a011afa203ac03b1ed5b"
  },

  // Date of the project, a string field with a default value
  date: {
    type: String,
    required: false,
    default: new Date().getFullYear()  // Default value set to the current year
  },

  // Embeddings of the project, an array of numbers, required
  embeddings: {
    type: [Number],
    required: true
  }
});

// Export the project schema for use in creating a model
module.exports = mongoose.model("projects", projectSchema);
