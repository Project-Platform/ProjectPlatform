import axios from "axios";
import { getSession, signIn } from "next-auth/react";

const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`/api/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

// const addProject = async (newProject) => {
//   try {
//     const response = await axios.post("/api/projects", newProject);
//     console.log("Project added successfully:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding project:", error);
//     throw error;
//   }
// };

const addProject = async (newProject) => {
  try {
    const formData = new FormData();

    Object.keys(newProject).forEach((key) => {
      if (key === "document") {
        formData.append(key, newProject[key]);
      } else if (Array.isArray(newProject[key])) {
        // If the field is an array, convert it to a JSON string
        formData.append(key, JSON.stringify(newProject[key]));
      } else {
        formData.append(key, newProject[key]);
      }
    });

    const response = await axios.post("/api/projects", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Project added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};





const getTrendingProjects = async () => {
  try {
    const response = await axios.get("/api/projects/trending");
    return response.data;
  } catch (error) {
    console.error("Error fetching trending projects:", error);
    throw error;
  }
};

const deleteProjectById = async (projectId) => {
  try {
    const response = await axios.delete(`/api/projects/${projectId}`);
    console.log("Project deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};

const getStudentProjects = async () => {
  try {
    const session = await getSession();
    if (session) {
      const response = await axios.get(`/api/projects/student/${session.user.name}`);
      return response.data;
    }
    else{
      signIn();
    }
  } catch (error) {
    console.error("Error fetching student projects:", error);
    throw error;
  }
};

export {
  getProjectById,
  getTrendingProjects,
  addProject,
  deleteProjectById,
  getStudentProjects,
};
