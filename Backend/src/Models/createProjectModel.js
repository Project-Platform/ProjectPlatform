const projectSchema = require("./project"); // Import the project schema
const University = require("./university"); // Import the University model
const mongoose = require("mongoose");

// Create a project instance associated with a specific university.
const project = async (data) => {
    // Find the university information based on the provided universityId
    const universityInfo = await University.findOne({ username: data.universityId }).exec();
    console.log(universityInfo);

    // Generate a collection name based on the university's username
    const collectionName = `${universityInfo.username}_project`;

    // Create a Mongoose model for the project with the specific collection name
    const projectModel = mongoose.model(collectionName, projectSchema);

    // Return a new project instance using the provided data
    return new projectModel(data);
};

module.exports = project;
