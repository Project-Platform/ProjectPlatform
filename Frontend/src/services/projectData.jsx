import axios from "axios";
import { getSession } from "./authData";
import { getServerUrl } from "../utils/serverUrl";

const getProjectById = async (projectId) => {
  const serverUrl = getServerUrl();
  const response = await axios.get(`${serverUrl}/api/projects/${projectId}`, {
    withCredentials: true,
  });
  return response.data;
};

const addProject = async (newProject) => {
  const serverUrl = getServerUrl();
  const response = await axios.postForm(
    `${serverUrl}/api/projects`,
    newProject,
    { withCredentials: true }
  );
  return response.data;
};

const getTrendingProjects = async () => {
  const serverUrl = getServerUrl();
  const response = await axios.get(`${serverUrl}/api/projects/trending`, {
    withCredentials: true,
  });
  return response.data;
};

const deleteProjectById = async (projectId) => {
  const serverUrl = getServerUrl();
  const response = await axios.delete(
    `${serverUrl}/api/projects/${projectId}`,
    { withCredentials: true }
  );
  console.log("Project deleted successfully:", response.data);
  return response.data;
};

const getStudentProjects = async () => {
  const serverUrl = getServerUrl();
  const session = await getSession();
  if (session.user) {
    console.log(session.user.username);
    const response = await axios.get(
      `${serverUrl}/api/projects/student/${session.user.username}`,
      { withCredentials: true }
    );
    return response.data;
  }
};

export {
  getProjectById,
  getTrendingProjects,
  addProject,
  deleteProjectById,
  getStudentProjects,
};
