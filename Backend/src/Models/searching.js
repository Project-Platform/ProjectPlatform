import { Schema, model } from 'mongoose';

const searchingSchema = new Schema({
    // Unique username for the university, a required string field
    search: {
        type: String,
        unique: true
    }
});

export default model('searching', searchingSchema);