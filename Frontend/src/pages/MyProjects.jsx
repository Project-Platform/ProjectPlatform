import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import Table from "../components/Table";
import Input from "../components/Table"; // Replace './path/to/Input' with the actual path to your Input component file

// ... rest of your code ...

export default function MyProjects(props) {
  const [projects, setProjects] = useState([]); // useState, set projects to an empty array.
  const [error, setError] = useState(null);

  const getStudentProjects = async () => {
    try {
      const session = await getSession();
      if (session) {
        const response = await axios.get(`/api/projects/student/${"Emma"}`);
        setProjects(response.data); // Update state with fetched projects
      } else {
        signIn(); // Trigger sign-in if no session is found
      }
    } catch (error) {
      console.error("Error fetching student projects:", error);
      setError(error); // Update state with error
    }
  };

  useEffect(() => {
    getStudentProjects();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) {
    return <div>Error fetching projects: {error.message}</div>;
  }

  console.log(projects);
  const headers = ["Name", "Role", "Organization", "Domain", "Date"];
  // <Table tableHeaders={headers} tableData={projects} />;
  return (
    <div>
      <h1 className="mt-10">My Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          {/* <Table tableHeaders={headers} tableData={project} /> */}
          <h2>{project.title}</h2>
          <p>{project.author[0]}, {project.author[1]}</p>
          Render other project details here
        </div>
      ))}
    </div>
  );
}
