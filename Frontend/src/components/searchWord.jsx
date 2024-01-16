import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchResult } from "../services/searchData";
import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";
import FilterResponsive from "./FilterResponsive";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function TestimonialCard() {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);

  const updateViewportWidth = () => {
    setViewportWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateViewportWidth);

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);
  const location = useLocation();
  const word = location.state || "";
  const [dataProject, setDataProject] = useState([]);

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
    console.log(project)
    navigate(`/ProjectPage/${id}`, { state: project });
  };
  
  const projectStyleless = {
    marginLeft : "0px",
    marginTop : "0px"
  };

  const projectStylemore = {
    marginLeft : "280px",
    marginTop : "10px"
  };
  return (
  <div className="flex flex-col overflow-hidden">
  <FilterResponsive />
  <div className="m-2 p-4 w-auto grid grid-cols-1fr 1fr md:grid-cols-2 gap-4 " style={viewportWidth<=640 ? projectStyleless : projectStylemore}>
  {dataProject.map((project) => (
  <Card key={project._id} className="w-full flex-row mb-6">
      <CardBody className="">
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
