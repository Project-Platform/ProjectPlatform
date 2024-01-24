import { Link } from "react-router-dom";
import ChipPills from "./Chipills";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard(props) {
  const cardClass = `${props.className}`;
  return (
    <Card className={cardClass}>
      <CardBody className="h-full">
        <Typography variant="h4" color="black" className="h-17">
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
        {/* Use Link for opening link in a new tab and pass state as a query parameter */}
        <Link
  to={`/ProjectPage/${props.id}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>Read More</Button>
</Link>

      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
