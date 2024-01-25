import axios from "axios";
import { getSession } from "./authData";
import { getServerUrl } from "../utils/serverUrl";

const getStudentByUsername = async () => {
  const session = await getSession();
  const serverUrl = getServerUrl();
  if (session.user) {
    const response = await axios.get(
      `${serverUrl}/api/students/${session.user.username}`,
      { withCredentials: true }
    );
    return response.data;
  }
  return undefined;
};

const createStudent = async (data) => {
  const session = await getSession();
  const serverUrl = getServerUrl();
  if (session.user) {
    const studentData = {
      username: session.user.username,
      email: session.user.email,
      ...data,
    };
    const response = await axios.post(
      `${serverUrl}/api/students/`,
      studentData,
      { withCredentials: true }
    );
    return response.data;
  }
  return undefined;
};

const updateStudent = async (updatedFields) => {
  const session = await getSession();
  const serverUrl = getServerUrl();
  if (session.user) {
    const response = await axios.patch(
      `${serverUrl}/api/students/${session.user.username}`,
      updatedFields,
      { withCredentials: true }
    );
    return response.data;
  }
  return undefined;
};

export { getStudentByUsername, createStudent, updateStudent };
