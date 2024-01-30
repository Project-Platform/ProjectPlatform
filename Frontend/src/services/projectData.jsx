import axios from "axios";
import { getSession } from "./authData";

const getProjectById = async (projectId) => {
  const response = await axios.get(`/api/projects/${projectId}`);
  return response.data;
};

const addProject = async (newProject) => {
  const response = await axios.postForm(
    '/api/projects',
    newProject);
  return response.data;
};

const getTrendingProjects = async () => {
  const response = await axios.get(`/api/projects/trending`);
  return response.data;
};

const deleteProjectById = async (projectId) => {
  const response = await axios.delete(
    `/api/projects/${projectId}`);
  return response.data;
};

const getStudentProjects = async () => {
  const session = await getSession();
  if (session.user) {
    const response = await axios.get(
      `/api/projects/student/${session.user.username}`);
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
