import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function AuthorProfile({ username, name, university, githubUsername, linkedInUsername, email }) {
  return (
    <Card color="transparent" shadow={false} className="mt-10 place-items-center mb-10">
      <Typography variant="h4" color="blue-gray">
        User Profile Details
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {username} Profile Details!
      </Typography>
      <div className="grid grid-cols-2 gap-6 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="flex flex-col gap-6">
          {name && (
            <Typography variant="h6" color="blue-gray">
              Name:
            </Typography>
          )}
          {university && (
            <Typography variant="h6" color="blue-gray">
              University Name:
            </Typography>
          )}
          {email && (
            <Typography variant="h6" color="blue-gray">
              Email Id:
            </Typography>
          )}
          {githubUsername && (
            <Typography variant="h6" color="blue-gray">
              GitHub:
            </Typography>
          )}
          {linkedInUsername && (
            <Typography variant="h6" color="blue-gray">
              LinkedIn:
            </Typography>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {name && (
            <Typography variant="h6" color="blue-gray">
              {name}
            </Typography>
          )}
          {university && (
            <Typography variant="h6" color="blue-gray">
              {university}
            </Typography>
          )}
          {email && (
            <Typography variant="h6" color="blue-gray">
              {email}
            </Typography>
          )}
          {githubUsername && (
            <Typography variant="h6" color="blue-gray">
              <Link to={`https://github.com/${githubUsername}`} className="text-blue-500">{githubUsername}</Link>
            </Typography>
          )}
          {linkedInUsername && (
            <Typography variant="h6" color="blue-gray">
              <Link to={`https://linkedin.com/in/${linkedInUsername}`} className="text-blue-500">{linkedInUsername}</Link>
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

export default AuthorProfile;