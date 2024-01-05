import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchResult } from "../services/searchData";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function TestimonialCard() {
  const location = useLocation();
  const word = location.state || "";

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

  return (
    <>
      {dataProject.map((project, index) => (
        <Card
          key={index}
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
          </CardHeader>
          <CardBody className="ml-8 mb-6 p-0">
            <Typography variant="h5" color="blue-gray">
              {project.title}
            </Typography>
            <Typography color="blue-gray">
              Description: {project.abstract}
            </Typography>
            <Typography color="blue-gray">Domain: {project.domain}</Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default TestimonialCard;
