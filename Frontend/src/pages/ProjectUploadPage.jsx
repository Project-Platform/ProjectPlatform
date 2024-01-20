// import React, { useState, useEffect } from "react";
// import { TagsInput } from "react-tag-input-component";
// import { Button, Input, Textarea } from "@material-tailwind/react";
// import { addProject } from "../services/projectData";

// function ProjectUploadPage() {
//   const [projectData, setProjectData] = useState({
//     title: "",
//     author: [],
//     domain: [],
//     abstract: "",
//     docs: null,
//   });

//   useEffect(() => {
   
//     const storedData = JSON.parse(localStorage.getItem("projectData"));
//     if (storedData) {
//       setProjectData(storedData);
//     }
//   }, []);

//   const handleInputChange = (field, value) => {
//     setProjectData((prevData) => {
//       const newData = { ...prevData, [field]: value };

//       // Store the updated data in local storage
//       localStorage.setItem("projectData", JSON.stringify(newData));

//       return newData;
//     });
//   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     setProjectData({ ...projectData, docs: file });
// //   };
// // ;

// const handleFileChange = (e) => {
//   const file = e.target.files[0];
//   setProjectData({ ...projectData, docs: file });

//   // Save the updated projectData including the document in local storage
//   localStorage.setItem("projectData", JSON.stringify({ ...projectData, docs: file }));
// };

//   const handleUploadProject = async () => {
//     try {
//       console.log(projectData);
//       const newProject = await addProject(projectData);
//       console.log("Project uploaded successfully:", newProject);
//       localStorage.removeItem("projectData");
//     } catch (error) {
//       console.error("Error uploading project:", error);
//     }
//   };
import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { addProject } from "../services/projectData";

function ProjectUploadPage() {
  const [projectData, setProjectData] = useState({
    title: "",
    author: [],
    domain: [],
    abstract: "",
    docs: null,
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("projectData"));
    if (storedData) {
      setProjectData(storedData);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setProjectData((prevData) => {
      const newData = { ...prevData, [field]: value };
      localStorage.setItem("projectData", JSON.stringify(newData));
      return newData;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Convert the file to a data URL (Base64)
    const reader = new FileReader();
    reader.onloadend = () => {
      const fileDataUrl = reader.result;
      setProjectData((prevData) => {
        const newData = { ...prevData, docs: fileDataUrl };
        localStorage.setItem("projectData", JSON.stringify(newData));
        return newData;
      });
    };
    reader.readAsDataURL(file);
  };

  const handleUploadProject = async () => {
    try {
      console.log(projectData);
      // For the actual file upload, you might need to handle the data URL on the server
      const newProject = await addProject(projectData);
      console.log("Project uploaded successfully:", newProject);
      localStorage.removeItem("projectData");
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };
  

  return (
    <>
      <div className="mt-16">
        <h1 className="flex justify-center mt-3 mb-6 text-3xl md:text-5xl text-bold">
          Project Upload
        </h1>
      </div>
      <div className="flex justify-center m-0 p-0">
        <section className="flex flex-col md:flex-row mx-auto p-2 md:p-4 shadow-md rounded-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUploadProject();
            }}
            encType="multipart/form-data"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-center"
          >
            <div className="col-span-2 md:col-span-1 p-2 md:p-4 rounded-4 text-18 font-bold text-xl">
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

            <div className="col-span-2 md:col-span-1 p-2 md:p-6 rounded-4 text-18 font-bold text-xl">
              Author(s) Username:
            </div>
            <TagsInput
              value={projectData.author}
              onChange={(value) => handleInputChange("author", value)}
              name="Author"
              placeHolder="Enter Author Name:"
            />

            <div className="col-span-2 md:col-span-1 p-2 md:p-6 rounded-4 text-18 font-bold text-xl">
              Domain (AIML, Blockchain, etc):
            </div>
            <TagsInput
              value={projectData.domain}
              onChange={(value) => handleInputChange("domain", value)}
              name="Domain"
              placeHolder="Enter Domain:"
            />

            <div className="col-span-2 md:col-span-1 p-2 md:p-12 rounded-4 text-18 font-bold text-xl content-center">
              Abstract (1500 characters):
            </div>
            <Textarea
              label="Abstract"
              onChange={(e) => handleInputChange("abstract", e.target.value)}
              value={projectData.abstract}
            />

            <div className="col-span-2 md:col-span-1 p-2 md:p-6 rounded-4 text-18 font-bold text-xl">
              Document (PDF or word format, up to 500Kb):
            </div>
            <div className="col-span-2 md:col-span-1 p-2 md:p-6 rounded-4 text-18 font-bold text-xl">
              <input
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                multiple
              />
            </div>

            <div className="mx-auto col-span-2">
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

// import React, { useState, useEffect } from "react";
// import { Button } from "@material-tailwind/react";
// import AlertBox from "../components/AlertBox";
// import ProjectUploadForm from "../components/ProjectUploadForm";
// import { addProject } from "../services/projectData";

// function ProjectUploadPage() {
//   const [projectData, setProjectData] = useState({ title: "", author: [], domain: [], abstract: "", docs: null });
//   const [message, setMessage] = useState(null);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("projectData"));
//     storedData && setProjectData(storedData);
//   }, []);

//   const handleInputChange = (field, value) => {
//     const newData = { ...projectData, [field]: value };
//     setProjectData(newData);
//     localStorage.setItem("projectData", JSON.stringify(newData));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     file && setProjectData({ ...projectData, docs: file });
//     file && localStorage.setItem("projectData", JSON.stringify({ ...projectData, docs: file }));
//   };

//   const handleUploadProject = async () => {
//     try {
//       localStorage.setItem("projectData", JSON.stringify(projectData));
//       const newProject = await addProject(projectData);
//       setMessage({ type: "success", message: "Project successfully uploaded." });
      
//       localStorage.removeItem("projectData");
//     } catch (error) {
//       setMessage({ type: "error", message: "Project failed to upload." });
//       console.error("Error uploading project:", error);
//     }
//   };

//   const isFormValid = () => ["title", "author", "domain", "abstract", "docs"].every((field) => projectData[field]);

//   return (
//     <>
//       {message && <AlertBox type={message.type} message={message.message} onClose={setMessage} />}
//       <div className="mt-10">
//         <h1 className="flex justify-center mt-3 mb-6 text-3xl md:text-5xl text-bold">Project Upload</h1>
//       </div>
//       <div className="flex justify-center m-0 p-0">
//         <section className="flex flex-col md:flex-row mx-auto p-2 md:p-4 shadow-md rounded-8 max-w-4xl">
//           <ProjectUploadForm
//             projectData={projectData}
//             setProjectData={setProjectData}
//             handleFileChange={handleFileChange}
//             handleUploadProject={handleUploadProject}
//             isFormValid={isFormValid}
//             setMessage={setMessage}
//           />
//         </section>
//       </div>
//     </>
//   );
// }

// export default ProjectUploadPage;
