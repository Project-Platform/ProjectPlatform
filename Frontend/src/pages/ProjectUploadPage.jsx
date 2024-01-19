import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { addProject } from "../services/projectData";
import AlertBox from "../components/AlertBox";


function ProjectUploadPage() {
  const [projectData, setProjectData] = useState({
    title: "",
    author: [],
    domain: [],
    abstract: "",
    docs: null,
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
   
    const storedData = JSON.parse(localStorage.getItem("projectData"));
    if (storedData) {
      setProjectData(storedData);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setProjectData((prevData) => {
      const newData = { ...prevData, [field]: value };

      // Store the updated data in local storage
      localStorage.setItem("projectData", JSON.stringify(newData));

      return newData;
    });
  };


const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setProjectData({ ...projectData, docs: file });

    // Save the updated projectData including the document in local storage
    localStorage.setItem("projectData", JSON.stringify({ ...projectData, docs: file }));
  }
};

  const handleUploadProject = async () => {
    try {
      console.log(projectData);
      localStorage.setItem("projectData", JSON.stringify(projectData));
      const newProject = await addProject(projectData);
      console.log("Project uploaded successfully:", newProject);

      setMessage({type: "success", message: "Project successfully uploaded."});
      
      // setProjectData({
      //   title: "",
      //   author: [],
      //   domain: [],
      //   abstract: "",
      //   docs: null,
      // });
    } catch (error) {
      setMessage({ type: "error", message: "Project failed to upload." });
      console.error("Error uploading project:", error);
    }
  };


  return (
    <>
      {message && (
        <AlertBox
          type={message.type}
          message={message.message}
          onClose={setMessage}
        />
      )}
      <div className="mt-10">
        <h1 className="flex justify-center mt-3 mb-6 text-3xl md:text-5xl text-bold">
          Project Upload
        </h1>
      </div>
      <div className="flex justify-center m-0 p-0">
        <section className="flex flex-col md:flex-row mx-auto p-2 md:p-4 shadow-md rounded-8 max-w-4xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUploadProject();
            }}
            encType="multipart/form-data"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left"
          >
            <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
              Idea Title (100 characters):
            </div>
            <Input
              label="Title"
              onChange={(e) => {
                handleInputChange("title", e.target.value);
              }}
              value={projectData.title}
              containerProps={{ className: "place-self-center" }}
            />

            <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
              Author(s) Username:
            </div>
            <TagsInput
              value={projectData.author}
              onChange={(value) => handleInputChange("author", value)}
              name="Author"
              placeHolder="Enter Author Name:"
            />

            <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
              Domain (AIML, Blockchain, etc):
            </div>
            <TagsInput
              value={projectData.domain}
              onChange={(value) => handleInputChange("domain", value)}
              name="Domain"
              placeHolder="Enter Domain:"
            />

            <div className="md:py-14 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl content-center">
              Abstract (1500 characters):
            </div>
            <Textarea
              label="Abstract"
              onChange={(e) => handleInputChange("abstract", e.target.value)}
              value={projectData.abstract}
            />

            <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
              Document (PDF or word format, up to 500Kb):
            </div>
            <div className="flex place-items-center col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
              <input
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                multiple
              />
            </div>

            <div className="flex flex-col justify-center items-center mx-auto col-span-2">
              <Button className="mb-4" variant="filled" size="lg" type="submit">
                Plagiarism Checker
              </Button>
              <br />
              <Button variant="filled" size="lg" type="submit">
                Upload Project
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default ProjectUploadPage;
