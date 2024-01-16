import { Schema, model } from "mongoose";

// Define a Mongoose schema for the 'students' collection
const studentSchema = new Schema({
  // Full name of the student, a required string field
  name: {
    type: String,
    required: true,
  },

  // Unique username for the student, a required string field
  username: {
    type: String,
    unique: true,
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
    required: true,
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
export default model("Student", studentSchema);
