// In a file like 'database.js'
import { connect } from "mongoose";

export const connectToDatabase = async (url) => {
  try {
    await connect(url);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
};

