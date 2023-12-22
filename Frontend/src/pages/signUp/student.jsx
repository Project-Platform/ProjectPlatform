
import {
    Card,
    Input,
    Button,
    Typography,
    
  } from "@material-tailwind/react";
  import { useState } from "react";
  
  export function StudentRegistrationForm() {
    const [university, setuniversity] = useState(""); 
    const [username, setusername] = useState("");
    const [name, setName] = useState("");
    const [gmail, setgmail] = useState("");
    

    return (
      <div className="flex justify-center items-center h-screen m-2">
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
              University Name
            </Typography>
            <Input
              value={university}
              size="lg"
              placeholder="Keshav Memorial Institute of Technology"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                setuniversity(e.target.value);
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
               Student Name
            </Typography>
            <Input
            value={name}
              size="lg"
              placeholder="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>{ setName(e.target.value);
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
               Username
            </Typography>
            <Input
            value={username}
              size="lg"
              placeholder="Username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>{ setusername(e.target.value);
              }}
            />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
            value={gmail}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {setgmail(e.target.value);}}
            />
            
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Sign Up
           </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-gray-900">
              Log In
            </a>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }
  export default StudentRegistrationForm;