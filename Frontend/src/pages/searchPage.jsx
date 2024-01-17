import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchResult } from "../services/searchData";
import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";
import results from "../utils/filterProjects";
import Filters from "../components/Filters";
import {
  Card,
  Button,
  Drawer,
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
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  const [open, setOpen] = useState(false);


  const updateViewportWidth = () => {
    setViewportWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateViewportWidth);

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const location = useLocation();
  const word = location.state || "";
  const [dataProject, setDataProject] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await searchResult(word);
        setDataProject(projects);
      } catch (error) {
        console.error("Error fetching search results:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, [word]);

  const navigate = useNavigate();

  const handleClick = async (id) => {
    console.log(id);
    const project = await getProjectById(id);
    console.log(project);
    navigate(`/ProjectPage/${id}`, { state: project });
  };

  if(viewportWidth <=640){
    return (
      <div className="flex flex-col">
      <Filters />
        <div
        className="m-2 mt-0 flex-grow p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {dataProject.map((project) => (
          <Card className="w-full max-w-20[rem] flex-row mb-6" key={project._id}>
            <CardBody>
              <Typography
                variant="h4"
                color="black"
                className="mb-4 uppercase"
              >
                {project.title}
              </Typography>
              <Typography color="blue-gray" className="font-semibold">
                Domain: {project.domain.join(", ")}
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
  else{
    return(
    <div className="flex flex-col">
          <Filters />
    <div
        className="m-2 mt-8 p-4 w-[140 vh] grid grid-cols-1 md:grid-cols-2 gap-4 ml-72"
      >
        {dataProject.map((project) => (
          <Card className="w-full max-w-20[rem] flex-row mb-6" key={project._id}>
            <CardBody>
              <Typography
                variant="h4"
                color="black"
                className="mb-4 uppercase"
              >
                {project.title}
              </Typography>
              <Typography color="blue-gray" className="font-semibold">
                Domain: {project.domain.join(", ")}
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
    </div>);
    
  }
}

export default TestimonialCard;
