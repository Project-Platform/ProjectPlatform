import axios from "axios";
import { getSession, signIn } from "next-auth/react";

const getStudentByUsername = async () => {
  try {
    const session = await getSession();
    if (session) {
      const response = await axios.get(`/api/students/${session.user.name}`);
      return response.data;
    } else {
      signIn();
    }
  } catch (error) {
    console.error("Error getting student:", error);
    throw error;
  }
};

const createStudent = async (data) => {
  try {
    const session = await getSession();
    if (session) {
      const studentData = {
        username: session.user.name,
        email: session.user.email,
        ...data,
      };
      const response = await axios.post("/api/students/", studentData);
      return response.data;
    } else {
      signIn();
    }
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

const updateStudent = async (updatedFields) => {
  try {
    const session = await getSession();
    if (session) {
      const response = await axios.patch(
        `/api/students/${session.user.name}`,
        updatedFields
      );
      return response.data;
    } else {
      signIn();
    }
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};

export { getStudentByUsername, createStudent, updateStudent };
