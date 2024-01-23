// Import the Project model from the "../Models/project" module.
import Project from "../Models/project.js";

// Async function for semantic search using vector indexing.
const semanticSearch = async (queryEmbedding) => {
    // Define an aggregation pipeline for MongoDB to perform semantic search.
    const aggregationPipeline = [
        {
            '$vectorSearch': {
                'index': 'vector_index',   // Name of the vector index to perform the search.
                'path': 'embeddings',      // Path to the embeddings field in the documents.
                'queryVector': queryEmbedding, // The vector used for the search.
                'numCandidates': 150,       // Maximum number of candidates to consider.
                'limit': 10                 // Limit the final result set to 10 documents.
            }
        },
        {
            '$project': {
                '_id': 1,                   // Include the document ID in the result.
                'title': 1,                 // Include the document title in the result.
                'domain': 1,                // Include the document domain in the result.
                'abstract': 1,              // Include the document abstract in the result.
                'author': 1,                // Include the document author in the result.
                'score': {                  // Include the search score in the result.
                    '$meta': 'vectorSearchScore'
                }
            }
        }
    ];

    // Execute the aggregation pipeline on the Project model.
    // The result is an array of documents matching the semantic search.
    const result = await Project.aggregate(aggregationPipeline);

    // Return the result of the semantic search.
    return result;
}

// Export the semanticSearch function as the module export.
export default semanticSearch;
