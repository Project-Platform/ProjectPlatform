import { Schema, model } from 'mongoose';

// Define a Mongoose schema for the 'projects' collection
const projectSchema = new Schema({
  // Title of the project, a required string field
  title: {
    type: String,
    required: true,
  },

  // Domain(s) of the project, an array of strings, required
  domain: {
    type: [String],
    required: true,
  },

  // Mentor's ID, a reference to the 'mentors' collection
  mentorId: {
    type: String,
    ref: "mentors", // Reference to the 'mentors' collection
    required: true,
    default: "tempMentor",
    select: false,
  },

  // University's ID, a reference to the 'univs' collection
  universityId: {
    type: String,
    ref: "univs", // Reference to the 'univs' collection
    required: true,
    default: "tempUnivesity",
    select: false,
  },

  // Author(s) of the project, an array of strings, a reference to the 'students' collection
  author: {
    type: [String],
    ref: "students", // Reference to the 'students' collection
    required: true
  },

  // Abstract of the project, a required string field
  abstract: {
    type: String,
    required: true,
  },

  githubLink: {
    type: String,
  },

  youtubeLink: {
    type: String,
  },

  // Document's ID, a reference to the 'docs' collection
  docs: {
    type: Schema.Types.ObjectId,
    ref: "docs",
    select: false
  },

  // Date of the project, a string field with a default value
  date: {
    type: String,
    required: false,
    default: new Date().getFullYear(), // Default value set to the current year
  },

  // Embeddings of the project, an array of numbers, required
  embeddings: {
    type: [Number],
    required: true,
    select: false,
  },
  views: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Export the project schema for use in creating a model
export default model("projects", projectSchema);
