// import React, { useState, useEffect, useContext } from "react";
// import { Button } from "@material-tailwind/react";
// import AlertBox from "../components/AlertBox";
// import ProjectUploadForm from "../components/ProjectUploadForm";
// import { addProject } from "../services/projectData";
// import { SessionContext } from "../components/SessionProvider.jsx";

// function ProjectUploadPage() {
//   const { user } = useContext(SessionContext);

//   const [projectData, setProjectData] = useState({
//     title: "",
//     author: user ? [user.username] : [],
//     domain: [],
//     abstract: "",
//     docs: null,
//   });

//   const [message, setMessage] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("projectData", JSON.stringify(projectData));
//   }, [projectData]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     file && setProjectData({ ...projectData, docs: file });
//   };


//   const handleInputChange = (field, value) => {
//     setProjectData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   const handleUploadProject = async () => {
//     try {
//       const newProject = await addProject(projectData);
//       setMessage({ type: "success", message: "Project successfully uploaded." });

//       setProjectData({ title: "", author: [], domain: [], abstract: "", docs: null });
//       localStorage.removeItem("projectData");
//     } catch (error) {
//       setMessage({ type: "error", message: "Project failed to upload." });
//       console.error("Error uploading project:", error);
//     }
//   };

//   const isFormValid = () => {
//     const requiredFields = ["title", "author", "domain", "abstract", "docs"];
//     const allFieldsFilled = requiredFields.every((field) => projectData[field]);
//     const loggedInUser = user && user.username;
//     const userIsAuthor = loggedInUser && projectData.author.includes(loggedInUser);

//     return allFieldsFilled && loggedInUser;
//   };

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
//             handleInputChange={handleInputChange} // Pass handleInputChange to ProjectUploadForm
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
import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-tailwind/react";
import AlertBox from "../components/AlertBox";
import ProjectUploadForm from "../components/ProjectUploadForm";
import { addProject } from "../services/projectData";
import { SessionContext } from "../components/SessionProvider.jsx";

function ProjectUploadPage() {
  const { user } = useContext(SessionContext);

  const [projectData, setProjectData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("projectData"));
    const defaultAuthor = user ? [user.username] : [];
    return storedData || { title: "", author: user? [user.username] : [] , domain: [], abstract: "", docs: null };
  });

  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("projectData"));
  //   const defaultAuthor = user ? [user.username] : [];
  //   setProjectData(storedData || { title: "", author: defaultAuthor, domain: [], abstract: "", docs: null });
  // }, [user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file && setProjectData({ ...projectData, docs: file });
  };

  const handleInputChange = (field, value) => {
    const newData = { ...projectData, [field]: value };
    setProjectData(newData);
    localStorage.setItem("projectData", JSON.stringify(newData));
  };

  const handleUploadProject = async () => {
    try {
      const newProject = await addProject(projectData);
      setMessage({ type: "success", message: "Project successfully uploaded." });

      setProjectData({ title: "", author:user? [user.username] : [] , domain: [], abstract: "", docs: null });
      localStorage.removeItem("projectData");
    } catch (error) {
      setMessage({ type: "error", message: "Project failed to upload." });
      console.error("Error uploading project:", error);
    }
  };

  const isFormValid = () => {
    const requiredFields = ["title", "author", "domain", "abstract", "docs"];
    const allFieldsFilled = requiredFields.every((field) => projectData[field]);
    const loggedInUser = user && user.username;
    const userIsAuthor = loggedInUser && projectData.author.includes(loggedInUser);

    return allFieldsFilled && userIsAuthor;
  };

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
            handleInputChange={handleInputChange}
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
