import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard(props) {
  const navigate = useNavigate();

  const handleClick = async (id) => {
    const project = await getProjectById(id);
    navigate(`/ProjectPage/${id}`, { state: project });
    // window.open(`/ProjectPage/${id}`, '_blank');
  };
  // w-9/12 sm:w-5/12 xl:w-3/12
  const cardClass = `m-5 mt-6 ${props.className}`;
  return (
    <Card className={cardClass}>
      <CardBody className="h-full">
        <Typography variant="h5" color="blue-gray" className="mb-2 h-20">
          {props.name}
        </Typography>
        <Typography>{props.descp.slice(0, 270) + " ...."}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => handleClick(props.id)}>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
