import axios from "axios";
import { getSession } from "./authData";

const getStudentByUsername = async () => {
  try {
    const session = await getSession();
    if (session.user) {
      const response = await axios.get(`/api/students/${session.user.username}`);
      return response.data;
    }
  } catch (error) {
    console.error("Error getting student:", error);
    throw error;
  }
};

const createStudent = async (data) => {
  try {
    const session = await getSession();
    if (session.user) {
      const studentData = {
        username: session.user.username,
        email: session.user.email,
        ...data,
      };
      const response = await axios.post("/api/students/", studentData);
      return response.data;
    }
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

const updateStudent = async (updatedFields) => {
  try {
    const session = await getSession();
    if (session.user) {
      const response = await axios.patch(
        `/api/students/${session.user.username}`,
        updatedFields
      );
      return response.data;
    }
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};

export { getStudentByUsername, createStudent, updateStudent };
