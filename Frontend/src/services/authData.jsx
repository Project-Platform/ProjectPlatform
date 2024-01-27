import axios from "axios";

const getSession = async () => {
  try {
    const response = await axios.get('/api/auth/session');
    return response.data;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw error;
  }
};

export { getSession };
