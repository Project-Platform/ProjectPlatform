import axios from "axios";
import { getServerUrl } from "../utils/serverUrl";

const getSession = async () => {
  try {
    const serverUrl = getServerUrl()
    const response = await axios.get(`${serverUrl}/api/auth/session`, {withCredentials:true});
    return response.data;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw error;
  }
};

export { getSession };
