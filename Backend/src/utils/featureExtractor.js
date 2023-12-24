// Define a class for handling feature extraction using a pre-trained model.
class FeatureExtractor {
  // Define static properties for the task, model, and an instance of the pipeline.
  static task = "feature-extraction";
  static model = "Xenova/multi-qa-MiniLM-L6-cos-v1";
  static instance = null;

  // Static method to obtain an instance of the feature extraction pipeline.
  static async getInstance(progress_callback = null) {
    // Check if an instance already exists.
    if (this.instance === null) {
      // Dynamically import the 'pipeline' function from the '@xenova/transformers' library.
      // This import is performed only when a new instance is requested.
      // It allows for lazy loading of the library.
      let { pipeline } = await import("@xenova/transformers");

      // Create a new instance of the pipeline with the specified task, model, and options.
      // The 'quantized' option is set to 'false', and the 'progress_callback' function is provided.
      this.instance = pipeline(this.task, this.model, {
        quantized: false,
        progress_callback,
      });
    }

    // Return the instance of the pipeline.
    return this.instance;
  }
}

// Export the FeatureExtractor class as the default module.
export default FeatureExtractor;
