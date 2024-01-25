import Project from './Models/project.js';

async function fetchProjects() {
  try {
    const projects = await Project.find({}).lean().exec();
    return projects;  // Optionally, return the projects from the function
  } catch (err) {
    console.error('Error retrieving projects:', err);
    throw err;  // Optionally, rethrow the error
  }
}


  export {fetchProjects};
  