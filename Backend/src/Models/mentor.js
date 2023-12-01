const mongoose = require('mongoose');

// Define a Mongoose schema for the 'mentors' collection
const mentorSchema = new mongoose.Schema({
    // Unique username for the mentor, a required string field
    username: {
        type: String,
        unique: true,
        required: true
    },

    // Full name of the mentor, a required string field
    name: {
        type: String,
        required: true
    },

    // Email of the mentor, a required string field
    email: {
        type: String,
        required: true
    },

    // Major or specialization of the mentor, a string field
    major: {
        type: String,
    },

    // University's ID, a reference to the 'univ' collection, a required string field
    universityId: {
        type: String,
        ref: "univ",
        required: true
    },
});

// Export the mentor schema for use in creating a model
module.exports = mongoose.model('mentor', mentorSchema);
