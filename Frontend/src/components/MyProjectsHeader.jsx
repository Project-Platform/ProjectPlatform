import { UserPlusIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

import {
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function MyProjectsHeader() {
  const navigate = useNavigate();

  const navigateToProjectUpload = () => {
    navigate("/Projectupload");
  };

  return (
    <CardHeader floated={false} shadow={false} className="mt-10 rounded-none">
      <div className="flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            My Projects
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all the Projects
          </Typography>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button
            className="flex items-center gap-3"
            size="sm"
            onClick={navigateToProjectUpload}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add a project
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="w-full md:w-72 ml-[80vw]">
        </div>
      </div>
    </CardHeader>
  );
}
