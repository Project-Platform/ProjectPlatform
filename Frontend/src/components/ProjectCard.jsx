import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard(props) {
  const navigate = useNavigate();

  const handleClick = async (id) => {
    const project = await getProjectById(id);
    navigate(`/ProjectPage/${id}`, { state: project });
  };

  return (
    <Card className="m-5 mt-6 w-9/12 sm:w-5/12 xl:w-3/12">
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

export default SimpleCard;
