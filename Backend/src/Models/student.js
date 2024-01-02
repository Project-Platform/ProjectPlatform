import { Schema, model } from 'mongoose';


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
    required: true,
  },

  // Mentor's ID, a reference to the 'mentor' collection
  mentorId: {
    type: String,
    ref: "mentors",
    required: true,
    default: "tempMentor",
    select: false,
  },

  // University's Name, a reference to the 'univ' collection
  universityName: {
    type: String,
    required: true,
  },

  // Number of projects associated with the student, a required number field with a default of 0
  projectNo: {
    type: Number,
    required: true,
    default: 0,
  },
  contacts: {
    githubUsername: {
      type: String,
      required: false,
    },
    linkedinProfile: {
      type: String,
      required: false,
    },
  },
});


// Export the user schema for use in creating a model
export default model('Student', studentSchema);
