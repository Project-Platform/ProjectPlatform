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
                    {props.similarProjects.map((project, index) => (
                        <ResultCard key={project._id} project={project} />
                    ))}
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
