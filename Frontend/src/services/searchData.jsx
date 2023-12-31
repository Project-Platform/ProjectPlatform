import axios from "axios";

const getProject = async (word) => {
  try {
    const response = await axios.post(`/search/${word}`,word);
    console.log(response.data);
    console.log("Hi");
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};
export default getProject;