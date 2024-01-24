import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";
import ChipPills from "./Chipills";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard(props) {
  const navigate = useNavigate();
  const myArr = props.domain;

  const handleClick = async (id) => {
    const project = await getProjectById(id);
    navigate(`/ProjectPage/${id}`, { state: project });

  };

  const cardClass = `${props.className}`;
  return (
    <Card className={cardClass}>
      <CardBody className="h-full">
        <Typography variant="h5" color="blue-gray" className="h-17">
          {props.name}
        </Typography>
        {props.domain.map((curr,index) => {
        return (
          <ChipPills 
            key={index}
            name={curr}
          />
        );
      })}

        <Typography>{props.descp.slice(0, 270) + " ...."}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => handleClick(props.id)}>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
