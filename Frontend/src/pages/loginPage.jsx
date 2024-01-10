import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { signIn } from "next-auth/react";

export function LoginPage() {
  return (
    <form className="flex justify-center items-center h-screen ">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            fullWidth
            className="flex place-content-center gap-3 mt-3"
          >
            <img
              src="../../icons8-google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Log in with Google
          </Button>
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            fullWidth
            className="flex place-content-center gap-3 mt-3"
            onClick={() => signIn()}
          >
            <img
              src="../../github-mark.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Log in with GitHub
          </Button>
        </CardBody>
      </Card>
    </form>
  );
}
export default LoginPage;
