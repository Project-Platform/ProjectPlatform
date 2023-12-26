import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard(props) {
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
        <Button>
          <Link to="/ProjectPage">Read More</Link>
        </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SimpleCard;
