// Import the FeatureExtractor class from the 'featureExtractor' module.
import FeatureExtractor from "./featureExtractor.js";

// Function to concatenate the title and abstract of a project for embeddings.
// This assumes that projectData has 'title' and 'abstract' properties.
const extractTextForEmbeddings = (projectData) => {
  // Concatenate the title and abstract with a period in between.
  return projectData.title + ". " + projectData.abstract;
};

// Async function to generate embeddings for a given projectData using a FeatureExtractor.
const generateEmbeddings = async (projectData) => {
  // Obtain an instance of the FeatureExtractor (initialized with a pre-trained model).
  const extractor = await FeatureExtractor.getInstance();

  // Extract text from the projectData for generating embeddings.
  const text = extractTextForEmbeddings(projectData);

  // Use the FeatureExtractor to generate embeddings for the provided text.
  // Options include 'pooling' (mean pooling in this case) and 'normalize'.
  const embedding = await extractor(text, { pooling: "mean", normalize: true });

  // Return the first embedding as a JavaScript array.
  return embedding[0].tolist();
};

// Export the generateEmbeddings function as the default module export.
export default generateEmbeddings;
