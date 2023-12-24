import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

export function LoginPage() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

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
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            value={username}
            placeholder="Username"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            size="lg"
            type="password"
            value={password}
            placeholder="*******"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>
            Login
          </Button>
          <hr className="my-5 border-blue-gray-50" />
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            fullWidth
            className="mt-3"
          >
            Continue with Email
          </Button>
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            fullWidth
            className="flex items-center gap-3 mt-3"
          >
            <img
              src="../../github-mark.svg"
              alt="metamask"
              className="h-6 w-6 ml-5"
            />
            Continue with GitHub
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="student/register"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
}
export default LoginPage;
