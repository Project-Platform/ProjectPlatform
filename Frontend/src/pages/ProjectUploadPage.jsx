import { useState, useEffect, useContext } from "react";
import { Button, Dialog, Spinner } from "@material-tailwind/react";
import AlertBox from "../components/AlertBox";
import ProjectUploadForm from "../components/ProjectUploadForm";
import { addProject } from "../services/projectData";
import { LongDialog } from "../components/showResult";
import { SessionContext } from "../components/SessionProvider.jsx";

function ProjectUploadPage() {
  const { user } = useContext(SessionContext);
  const [loading, setLoading] = useState(false);

  const [projectData, setProjectData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("projectData"));
    const defaultAuthor = user ? [user.username] : [];
    return storedData || { title: "", author: defaultAuthor, domain: [], abstract: "", docs: null };
  });
  
  
  const [similarProjects, setSimilarProjects] = useState(null);
  const [showDialog,setShowDialog] = useState(false);
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(null);

  const handlePlagiarismCheck = async () => {
    try {
      setShowDialog(true);
      setOpen(true);

    } catch (error){
        console.error("Error in plagiarism check", error);
      }
};
  
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
      setLoading(true); // Set loading to true when starting the request
      const newProject = await addProject(projectData);
      setMessage({ type: "success", message: "Project successfully uploaded." });
      setProjectData({ title: "", author:user?[user.username] : [] , domain: [], abstract: "", docs: null });
      localStorage.removeItem("projectData");
    } catch (error) {
      console.log(error.response.data.similarProjects);
      if(error.response.status===409){
        setShowDialog(true);
        setOpen(true);
        setSimilarProjects(error.response.data.similarProjects);
      }
      else{
        setMessage({ type: "error", message: "Project failed to upload." });
      }
      console.error("Error uploading project:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
  };
 
 
  const handleOpen = () => setOpen(!open);


  const isFormValid = () => {
    const requiredFields = ["title", "author", "domain", "abstract", "docs"];
    const allFieldsFilled = requiredFields.every((field) => projectData[field]);
    const loggedInUser = user && user.username;
    const userIsAuthor = loggedInUser && projectData.author.includes(loggedInUser);

    return allFieldsFilled && userIsAuthor;
  };
  const { allFieldsFilled, userIsAuthor } = isFormValid();

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
}

export default ProjectUploadPage;