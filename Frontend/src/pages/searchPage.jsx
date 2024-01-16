import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";
import results from "../utils/filterProjects";
import {
  Card,
  Button,
  CardBody,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";

const computerScienceTags = [
  "3D Printing",
  "Artificial Intelligence",
  "Agriculture",
  "Automation",
  "Blockchain",
  "Cloud Computing",
  "Communication",
  "Computer Science",
  "Cybersecurity",
  "Data Privacy",
  "Data Science",
  "Data Streaming",
  "Deep Learning",
  "Diagnostics",
  "Drones",
  "E-commerce",
  "Education",
  "Education Technology",
  "Embedded Systems",
  "Energy",
];

export function TestimonialCard() {
  const location = useLocation();
  const word = location.state || "";
  const [dataProject, setDataProject] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);

  const handleResults = async (selectedTags) => {
    try {
      const searchResults = await results(word, selectedTags);
      setDataProject(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle the error as needed
    }
  };

  const handleCheckboxChange = async (tag) => {
    // Toggle the checked state of the tag
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = prevCheckedItems.includes(tag)
        ? prevCheckedItems.filter((item) => item !== tag)
        : [...prevCheckedItems, tag];

      // Call the results function with the updatedCheckedItems
      if (updatedCheckedItems.length > 0) {
        handleResults(updatedCheckedItems);
      }

      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    // Use handleResults directly inside the useEffect
    handleResults(checkedItems);
  }, [word, checkedItems]);


  const navigate = useNavigate();

  const handleClick = async (id) => {
    console.log(id);
    const project = await getProjectById(id);
    console.log(project);
    navigate(`/ProjectPage/${id}`, { state: project });
  };

  return (
    <div className="flex ">
      <div className="w-1/4">
        <Card className=" m-4 h-[calc(100vh-2rem)] bg-white w-full max-w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto">
          <Typography variant="h4" color="black">
            Filters:
          </Typography>
          <List>
            {computerScienceTags.map((tag) => (
              <ListItem key={tag} className="p-0 h-8">
                <label
                  htmlFor={`vertical-list-${tag}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id={`vertical-list-${tag}`}
                      ripple={false}
                      checked={checkedItems.includes(tag)}
                      onChange={() => handleCheckboxChange(tag)}
                      className="hover:before:opacity-0 w-4 h-4"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    {tag}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
      <div
        className="m-2 mt-8 flex-grow p-4 w-full"
        style={{ marginLeft: "320px" }}
      >
        {dataProject.projectNo === 0 && (
  <h1 className="flex items-center justify-center ">
    Most relevant projects are:
  </h1>
)}
      {dataProject.ans && dataProject.ans.map((project, index) => (
          <Card className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-20[rem] flex-row mb-6" key={project._id}>
            <CardBody>
              <Typography
                variant="h4"
                color="black"
                className="mb-4 uppercase"
              >
                {project.title}
              </Typography>
              <Typography color="blue-gray"className="font-semibold">
                Domain: {project.domain.join(" , ")}
              </Typography>
              <Typography color="blue-gray" className="mb-4">
                {project.abstract.length > 270
                  ? project.showFullDescription
                    ? project.abstract
                    : project.abstract.slice(0, 270) + " ...."
                  : project.abstract}
              </Typography>
              <a className="inline-block">
                <Button onClick={() => handleClick(project._id)}>
                  Read More
                </Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
