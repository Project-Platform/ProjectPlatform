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

    const handleClick= async (id)=>{
      const project = await getProjectById(id);
      navigate(`/ProjectPage/${id}`, {state: project});
    }

  return (
    <Card className="m-5 mt-6 w-[25vw] relative">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography>{props.descp}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="absolute inset-x-6 bottom-2">
        <Button onClick={()=> handleClick(props.id)}>
          Read More
        </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SimpleCard;
