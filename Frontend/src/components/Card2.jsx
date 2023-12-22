import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SimpleCard(props) {
    return (
      <Card className="m-5 mt-6 w-96 ">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {props.name}
          </Typography>
          <Typography>
            {props.descp}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }

  export default SimpleCard;