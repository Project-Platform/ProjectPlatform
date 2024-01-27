import axios from "axios";

const searchResult = async (word) => {
  const response = await axios.get(`/api/search/${word}`);
  return response.data;
};
export { searchResult };
