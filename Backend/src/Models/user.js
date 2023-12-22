const mongoose = require('mongoose');

// Define a Mongoose schema for the 'students' collection
const studentSchema = new mongoose.Schema({
    // Full name of the student, a required string field
    name: {
        type: String,
        required: true
    },

    // Unique username for the student, a required string field
    username: {
        type: String,
        unique: true,
        required: true
    },

    // Email of the student, a required string field
    email: {
        type: String,
        required: true
    },

    // Password of the mentor, a required string field
    password: {
        type: String,
        required: true
    },

    // Roll number of the student, a required string field
    rollNo: {
        type: String,
        required: true
    },

    // Mentor's ID, a reference to the 'mentor' collection
    mentorId: {
        type: String,
        ref: "mentors",
        required: true,
        default: "tempMentor"
    },

    // University's ID, a reference to the 'univ' collection
    universityId: {
        type: String,
        ref: "univs",
        required: true,
        default: "tempUnivesity"
    },

    // Number of projects associated with the student, a required number field with a default of 0
    projectNo: {
        type: Number,
        required: true,
        default: 0
    },
});

// Export the student schema for use in creating a model
module.exports = mongoose.model('students', studentSchema);
