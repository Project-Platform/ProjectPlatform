import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import ResultCard from './resultCard';
 
export function LongDialog(props) {

// const truncateText = (text, maxLength) => {
//   if (text.length > maxLength) {
//     return text.substring(0, maxLength) + '...';
//   }
//   return text;
// };

 
  return (
    <>
      <Dialog open={props.open} handler={props.handleOpen}>
        <DialogHeader>Plagiarism Check Results: </DialogHeader>
        <DialogBody className="h-[42rem]">
          <Typography className="font-normal mt-4 mb-4">
                  <>
                  <strong>
                  Your project matches with the following project(s).<br/>
                  Review your project and try again.<br/>
                  </strong>
                  <ul>
                    {props.similarProjects.map((project, index) => (
                      <li key={index}>
                        <ResultCard project={project} />
                        </li>
                    ))}
                  </ul>
                </>
          
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="gradient" color="green" onClick={props.handleClose}>
            Proceed
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
