import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Profile() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        My Profile
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {/* Nice to meet you! Enter your details to register. */}
        Your Profile Details!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="Abhinav Chandra M.S."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="Abhinav_MS"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            University Name
          </Typography>
          <Input
            size="lg"
            placeholder="Keshav Memorial Institute Of Technology"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            GitHub Username
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="GitHub"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Linkedln Username
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="Linkedln"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6" fullWidth>
          EDIT
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          {/* Already have an account?{" "} */}
          <a href="#" className="font-medium text-gray-900">
            {/* Sign In */}
          </a>
        </Typography>
      </form>
    </Card>
  );
}
