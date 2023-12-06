const mongoose = require('mongoose');

// Define a Mongoose schema for the 'users' collection
const userSchema = new mongoose.Schema({
    // Full name of the user, a required string field
    name: {
        type: String,
        required: true
    },

    // Unique username for the user, a required string field
    username: {
        type: String,
        unique: true,
        required: true
    },

    // Email of the user, a required string field
    email: {
        type: String,
        required: true
    },

    // Roll number of the user, a required string field
    rollNo: {
        type: String,
        required: true
    },

    // Mentor's ID, a reference to the 'mentor' collection
    mentorId: {
        type: String,
        ref: "mentors",
        required: true
    },

    // University's ID, a reference to the 'univ' collection
    universityId: {
        type: String,
        ref: "univs",
        required: true
    },

    // Number of projects associated with the user, a required number field with a default of 0
    projectNo: {
        type: Number,
        required: true,
        default: 0
    },
});

// Export the user schema for use in creating a model
module.exports = mongoose.model('users', userSchema);
