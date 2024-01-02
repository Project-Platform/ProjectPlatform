import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function TestimonialCard() {
  const location = useLocation();
  const responseData = location.state;
  const dataProject = responseData?.data || [];
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
          <CardBody className="mb-6 p-0">
            <Typography variant="h5" color="blue-gray">{project.title}</Typography>
            <Typography color="blue-gray">Description: {project.abstract}</Typography>
            <Typography color="blue-gray">Domain: {project.domain}</Typography>
            <Typography color="blue-gray">Field: {project.field}</Typography>
            <Typography color="blue-gray">Mentor ID: {project.mentorId}</Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default TestimonialCard;