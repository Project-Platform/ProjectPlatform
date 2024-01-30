import { useState, useContext } from "react";
import { Spinner, Typography } from "@material-tailwind/react";
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
    return (
      storedData || {
        title: "",
        author: defaultAuthor,
        domain: [],
        abstract: "",
        youtubeLink: "",
        githubLink: "",
        docs: null,
      }
    );
  });

  const [similarProjects, setSimilarProjects] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      // Check the file size (in bytes)
      const fileSizeInBytes = file.size;
  
      // Convert fileSize to KB
      const fileSizeInKB = fileSizeInBytes / 1024;
  
      // Maximum allowed file size (500KB in this example)
      const maxFileSizeKB = 500;
  
      // Check if the file size is within the limit
      if (fileSizeInKB > maxFileSizeKB) {
        setMessage({
          type: "failure",
          message: "File size exceeds the limit. Please select a smaller file.",
        });
        //clear the file input
        e.target.value = null;
        return;
      }
  
      // Update projectData with the selected file
      setProjectData({ ...projectData, docs: file });
    }
  };
  

  const handleInputChange = (field, value) => {
    const newData = { ...projectData, [field]: value };
    setProjectData(newData);
    localStorage.setItem("projectData", JSON.stringify(newData));
  };

  const handleUploadProject = async () => {
    try {
      setLoading(true); // Set loading to true when starting the request

      const usernameToMaintainAtIndexZero = user.username;
      const { author } = projectData;

      projectData.author = [
        usernameToMaintainAtIndexZero,
        ...author.filter(
          (username) => username !== usernameToMaintainAtIndexZero
        ),
      ];

      const newProject = await addProject(projectData);
      setMessage({
        type: "success",
        message: "Project successfully uploaded.",
      });
      setProjectData({
        title: "",
        author: user ? [user.username] : [],
        domain: [],
        abstract: "",
        docs: null,
      });
      localStorage.removeItem("projectData");
    } catch (error) {
      if (error.response.status === 409) {
        setShowDialog(true);
        setOpen(true);
        setSimilarProjects(error.response.data.similarProjects);
      } else {
        setMessage({ type: "error", message: "Project failed to upload." });
      }
      console.error("Error uploading project:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  const handleOpen = () => setOpen(!open);

  const isFormValid = () => {
    const requiredFields = ["title", "author", "domain", "abstract", "docs"];
    const allFieldsFilled = requiredFields.every((field) => projectData[field]);
    const loggedInUser = user && user.username;
    const userIsAuthor =
      loggedInUser && projectData.author.includes(loggedInUser);

    return allFieldsFilled && userIsAuthor;
  };
  const { allFieldsFilled, userIsAuthor } = isFormValid();

  return (
    <>
      {message && (
        <AlertBox
          type={message.type}
          message={message.message}
          onClose={setMessage}
        />
      )}
      {showDialog && (
        <LongDialog
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          similarProjects={similarProjects}
          open={open}
          handleOpen={handleOpen}
        />
      )}
      <div className="mt-10">
        <h1 className="flex justify-center mt-3 mb-6 text-3xl md:text-5xl text-bold">
          Project Upload
        </h1>
      </div>
      <div className="flex justify-center">
        <section className="flex flex-col md:flex-row mx-auto shadow-md rounded-8 max-w-4xl mt-2">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
              <Spinner className="h-12 w-12" />
            </div>
          ) : (
            <>
              <Typography className="absolute " variant="h6">
                Fields marked as <span className="text-red-600">*</span> are
                mandatory
              </Typography>
              <ProjectUploadForm
                projectData={projectData}
                handleInputChange={handleInputChange}
                handleFileChange={handleFileChange}
                handleUploadProject={handleUploadProject}
                isFormValid={isFormValid}
                setMessage={setMessage}
              />
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default ProjectUploadPage;
