import { useContext,useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { SessionContext } from "../components/SessionProvider.jsx";

const ProjectUploadForm = ({
  projectData,
  handleFileChange,
  handleUploadProject,
  isFormValid,
  setMessage,
  handleInputChange,
}) => {
  const { user } = useContext(SessionContext);
  const [descCountTitle, setDescCountTitle] = useState(0);
  const [descCountAbstract, setDescCountAbstract] = useState(0);
  const getDefaultAuthor = () => (user && user.username ? [user.username] : []);

  const showAlertMessage = (message) => {
    setMessage({ type: "error", message });
  };
  const handleDescChange = (e,limit,tag) => {
    let inputValue = e.target.value;
    if (inputValue.length > limit) {
      inputValue = inputValue.slice(0, limit);
    }
    if (tag==="title"){
    setDescCountTitle(inputValue.length);}
    else{
      setDescCountAbstract(inputValue.length);
    }
  };
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !projectData.author ||
          !projectData.author.includes(user.username)
        ) {
          showAlertMessage("Please enter your username in the Author field.");
          return;
        }
        if (isFormValid()) {
          handleUploadProject();
        } else {
          setMessage({
            type: "error",
            message: "Please fill in all required fields.",
          });
        }
      }}
      encType="multipart/form-data"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left pt-4 m-2 md:m-4"
    >
      <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
        <Typography color="red" variant="h5" className="relative bottom-1">
          *
        </Typography>
        Idea Title (100 characters) :
      </div>
      <div>
      <Input
        label="Title"
        onChange={(e) => {handleInputChange("title", e.target.value),handleDescChange(e,100,"title");}}
        value={projectData.title}
        containerProps={{ className: "place-self-center" }}
        maxLength={100}
      />
      <div className="text-blue-gray-500 text-right">
          <span id="ideaDescCount">{descCountTitle}</span>/100
        </div>
        </div>

      <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
        <Typography color="red" variant="h5" className="relative bottom-8">
          *
        </Typography>
        Author(s) Username :
        <br />
        (Your username - First part of your respective email Id)
      </div>
      <TagsInput
        value={projectData.author || getDefaultAuthor()}
        onChange={(value) => handleInputChange("author", value)}
        name="Author"
        placeHolder="Enter Author Name:"
      />

      <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
        <Typography color="red" variant="h5" className="relative bottom-1">
          *
        </Typography>
        Domain (AIML, Blockchain, etc) :
      </div>
      <TagsInput
        value={projectData.domain}
        onChange={(value) => handleInputChange("domain", value)}
        name="Domain"
        placeHolder="Enter Domain:"
      />
      <div className="md:py-14 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl content-center">
        <Typography color="red" variant="h5" className="relative bottom-1">
          *
        </Typography>
        Abstract (1500 characters) :
      </div>
      <div>
      <Textarea
        label="Abstract"
        onChange={(e) =>{ handleInputChange("abstract", e.target.value),handleDescChange(e,1500,"abstract");}}
        value={projectData.abstract}
        maxLength={1500}
      />
      <div className="text-blue-gray-500 text-right">
          <span id="ideaDescCount">{descCountAbstract}</span>/1500
        </div>
        </div>
      <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
        Youtube Video Link:
      </div>
      <Input
        label="Youtube Video Link"
        onChange={(e) => handleInputChange("youtubeLink", e.target.value)}
        value={projectData.youtubeLink}
        containerProps={{ className: "place-self-center" }}
      />

      <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
        Github Repository Link:
      </div>
      <Input
        label="Github Repository Link"
        onChange={(e) => handleInputChange("githubLink", e.target.value)}
        value={projectData.githubLink}
        containerProps={{ className: "place-self-center" }}
      />

      <div className="md:py-3 flex place-items-center pl-4 col-span-2 md:col-span-1 rounded-4 text-18 font-bold text-xl">
        <Typography color="red" variant="h5" className="relative bottom-4 sm:bottom-1 md:bottom-4">
          *
        </Typography>
        Document (PDF or word format, up to 500Kb) :
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
        <Button variant="filled" size="lg" type="submit">
          Upload Project
        </Button>
      </div>
    </form>
  );
};

export default ProjectUploadForm;
