import axios from "axios";

const searchResult = async (word) => {
  try {
    const response = await axios.get(`/search/${word}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};
export  {searchResult};