import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function AuthorProfile({ username, name, university, githubUsername, linkedInUsername, email }) {
  return (
    <Card color="transparent" shadow={false} className="mt-10 place-items-center mb-10">
      <Typography variant="h4" color="blue-gray">
        User Profile Details
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {username} Profile Details!
      </Typography>
      <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          {name && (
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name: {name}
            </Typography>
          )}
          {university && (
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              University Name: {university}
            </Typography>
          )}
          {email && (
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email Id: {email}
            </Typography>
          )}
          {githubUsername && (
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex gap-2">
              GitHub <FaGithub className="w-7 h-7 mx-1" />{" "}: <Link to={`https://github.com/${githubUsername}`} className="text-blue-500">{githubUsername}</Link>
            </Typography>
          )}
          {linkedInUsername && (
            <Typography variant="h6" color="blue-gray" className="-mb-3 flex gap">
              LinkedIn <FaLinkedin className="w-7 h-7 mx-1" />{" "}: {linkedInUsername}
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

export default AuthorProfile;