import { Schema, model } from 'mongoose';

// Define a Mongoose schema for the 'projects' collection
const projectSchema = new Schema({
  // Title of the project, a required string field
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },

  // Domain(s) of the project, an array of strings, required
  domain: {
    type: [String],
    required: true,
  },

  // Author(s) of the project, an array of strings, a reference to the 'students' collection
  author: {
    type: [String],
    required: true,
    select: false,
  },

  // Abstract of the project, a required string field
  abstract: {
    type: String,
    required: true,
    maxLength: 1500,
  },

  githubLink: {
    type: String,
    select: false,
  },

  youtubeLink: {
    type: String,
    select: false,
  },

  // Document's ID, a reference to the 'docs' collection
  docs: {
    type: Buffer,
    required: true,
    select: false,
  },

  // Date of the project, a string field with a default value
  date: {
    type: Date,
    required: false,
    default: new Date(), // Default value set to the current year
    select: false,
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
    select: false,
  },
});

// Export the project schema for use in creating a model
export default model("projects", projectSchema);
