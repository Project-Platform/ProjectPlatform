import { Schema, model } from 'mongoose';

// Define a Mongoose schema for the 'univ' collection
const univSchema = new Schema({
    // Unique username for the university, a required string field
    username: {
        type: String,
        unique: true,
        required: true
    },

    // Name of the university, a required string field
    name: {
        type: String,
        required: true
    },

    // Email of the university, a required string field
    email: {
        type: String,
        required: true
    },

    // Password of the university, a required string field
    password: {
        type: String,
        required: true
    },

    // Location of the university, a required string field
    location: {
        type: String,
        required: true
    },

    // Number of students in the university, a required number field with a default of 0
    studentCount: {
        type: Number,
        required: true,
        default: 0
    },

    // Number of mentors in the university, a required number field with a default of 0
    mentorCount: {
        type: Number,
        required: true,
        default: 0
    },
});

// Export the university schema for use in creating a model
export default model('univ', univSchema);
