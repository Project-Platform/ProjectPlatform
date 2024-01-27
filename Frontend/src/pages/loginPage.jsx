import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function LoginPage() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-content-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Typography
            as="a"
            href={'/api/auth/google'}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] w-full flex place-content-center gap-3 mt-3"
          >
            <img
              src="../../icons8-google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Log in with Google
          </Typography>
          <Typography
            as="a"
            href={'/api/auth/github'}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] w-full flex place-content-center gap-3 mt-3"
          >
            <img
              src="../../github-mark.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Log in with GitHub
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
export default LoginPage;
