import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchResult } from "../services/searchData";
import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";
import Filters from "./Filters";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";

export function TestimonialCard() {
  const location = useLocation();
  const word = location.state || "";
  const [size, setSize] = useState(false);
  const [dataProject, setDataProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await searchResult(word);
        console.log(projects);
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
    console.log(project)
    navigate(`/ProjectPage/${id}`, { state: project });
  };


return (
  <div className="flex ">
  <Filters />
  <div className="m-2 mt-8 flex-grow p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginLeft: '320px' }}>
  {dataProject.map((project, index) => (
  <Card className="w-full max-w-20[rem] flex-row mb-6">
      <CardBody>
        <Typography variant="h4" color="black" className="mb-4 uppercase">
          {project.title}
        </Typography>
        <Typography color="blue-gray">Domain: {project.domain.join(', ')}</Typography>
        <Typography color="blue-gray" className="mb-4">
            {project.abstract.length > 270
              ? project.showFullDescription
                ? project.abstract
                : project.abstract.slice(0, 270) + " ...."
              : project.abstract}
          </Typography>
        <a href="#" className="inline-block">
        <Button onClick={() => handleClick(project._id)}>Read More</Button>
        </a>
      </CardBody>
    </Card>
  ))}

  </div>
  </div>
);
}

export default TestimonialCard;
