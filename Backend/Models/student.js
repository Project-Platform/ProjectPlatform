import { Schema, model } from "mongoose";

// Define a Mongoose schema for the 'students' collection
const studentSchema = new Schema({
  // Full name of the student, a required string field
  name: {
    type: String,
    required: false,
  },
  // Unique username for the student, a required string field
  username: {
    type: String,
    unique: true,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },

  providerId: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    required: true,
  },
  // Email of the student, a required string field
  email: {
    type: String,
    unique: true,
    required: true,
  },

  // University's Name, a reference to the 'univ' collection
  universityName: {
    type: String,
    required: false,
  },

  githubUsername: {
    type: String,
    required: false,
  },
  linkedinProfile: {
    type: String,
    required: false,
  },
});

// Export the user schema for use in creating a model
export default model("students", studentSchema);
