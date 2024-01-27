import axios from "axios";
import { getSession } from "./authData";

const getStudentByUsername = async (username = "") => {
  const session = await getSession();
  
  if (username) {
    const response = await axios.get(
      `/api/students/${username}`);
    return response.data;
  } else if (session.user) {
    const response = await axios.get(
      `/api/students/${session.user.username}`);
    return response.data;
  }

  return undefined;
};


const createStudent = async (data) => {
  const session = await getSession();

  if (session.user) {
    const studentData = {
      username: session.user.username,
      email: session.user.email,
      ...data,
    };
    const response = await axios.post(
      '/api/students/',
      studentData);
    return response.data;
  }
  return undefined;
};

const updateStudent = async (updatedFields) => {
  const session = await getSession();

  if (session.user) {
    const response = await axios.patch(
      `/api/students/${session.user.username}`,
      updatedFields);
    return response.data;
  }
  return undefined;
};

export { getStudentByUsername, createStudent, updateStudent };
