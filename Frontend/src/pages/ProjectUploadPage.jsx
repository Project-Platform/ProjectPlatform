import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import AlertBox from "../components/AlertBox";
import ProjectUploadForm from "../components/ProjectUploadForm";
import { addProject } from "../services/projectData";

function ProjectUploadPage() {
  const [projectData, setProjectData] = useState({ title: "", author: [], domain: [], abstract: "", docs: null });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("projectData"));
    storedData && setProjectData(storedData);
  }, []);

  const handleInputChange = (field, value) => {
    const newData = { ...projectData, [field]: value };
    setProjectData(newData);
    localStorage.setItem("projectData", JSON.stringify(newData));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file && setProjectData({ ...projectData, docs: file });
    file && localStorage.setItem("projectData", JSON.stringify({ ...projectData, docs: file }));
  };

  const handleUploadProject = async () => {
    try {
      localStorage.setItem("projectData", JSON.stringify(projectData));
      const newProject = await addProject(projectData);
      setMessage({ type: "success", message: "Project successfully uploaded." });
      localStorage.removeItem("projectData");
    } catch (error) {
      setMessage({ type: "error", message: "Project failed to upload." });
      console.error("Error uploading project:", error);
    }
  };

  const isFormValid = () => ["title", "author", "domain", "abstract", "docs"].every((field) => projectData[field]);

  return (
    <>
      {message && <AlertBox type={message.type} message={message.message} onClose={setMessage} />}
      <div className="mt-10">
        <h1 className="flex justify-center mt-3 mb-6 text-3xl md:text-5xl text-bold">Project Upload</h1>
      </div>
      <div className="flex justify-center m-0 p-0">
        <section className="flex flex-col md:flex-row mx-auto p-2 md:p-4 shadow-md rounded-8 max-w-4xl">
          <ProjectUploadForm
            projectData={projectData}
            setProjectData={setProjectData}
            handleFileChange={handleFileChange}
            handleUploadProject={handleUploadProject}
            isFormValid={isFormValid}
            setMessage={setMessage}
          />
        </section>
      </div>
    </>
  );
}

export default ProjectUploadPage;
