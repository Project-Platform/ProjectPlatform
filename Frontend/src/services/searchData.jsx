import axios from "axios";
import { getServerUrl } from "../utils/serverUrl";

const searchResult = async (word) => {
  const serverUrl = getServerUrl();
  const response = await axios.get(`${serverUrl}/api/search/${word}`, {
    withCredentials: true,
  });
  return response.data;
};
export { searchResult };
