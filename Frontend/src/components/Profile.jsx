// import {
//     Card,
//     Input,
//     Checkbox,
//     Button,
//     Typography,
//   } from "@material-tailwind/react";
   
//   export default function goProfile() {
//     return (
//        <Card color="transparent" shadow={false}>
//         <Typography variant="h4" color="blue-gray">
//           My Profile
//         </Typography>
//         <Typography color="gray" className="mt-1 font-normal">
//           {/* Nice to meet you! Enter your details to register. */}
//           Your Profile Details!
//         </Typography>
//         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//           <div className="mb-1 flex flex-col gap-6">
//             <Typography variant="h6" color="blue-gray" className="-mb-3">
//               Your Name
//             </Typography>
//             <Input
//               size="lg"
//               placeholder="Your Name"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//             {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
//               Your Username
//             </Typography>
//             <Input
//               size="lg"
//               placeholder="Abhinav_MS"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             /> */}
//             <Typography variant="h6" color="blue-gray" className="-mb-3">
//               Your University Name
//             </Typography>
//             <Input
//               size="lg"
//               placeholder="Your University name"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//             <Typography variant="h6" color="blue-gray" className="-mb-3">
//               Your Email
//             </Typography>
//             <Input
//               size="lg"
//               placeholder="name@mail.com"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//             <Typography variant="h6" color="blue-gray" className="-mb-3">
//               Your GitHub Username
//             </Typography>
//             <Input
//               type="password"
//               size="lg"
//               placeholder="GitHub"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//             <Typography variant="h6" color="blue-gray" className="-mb-3">
//               Your Linkedln Username
//             </Typography>
//             <Input
//               type="password"
//               size="lg"
//               placeholder="Linkedln"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//           </div>
          
            
            
    
          
//           <Button className="mt-6" fullWidth>
//             EDIT!
//           </Button>
//           <Typography color="gray" className="mt-4 text-center font-normal">
//             {/* Already have an account?{" "} */}
//             <a href="#" className="font-medium text-gray-900">
//               {/* Sign In */}
//             </a>
//           </Typography>
//         </form>
//       </Card>
//     );
//   }

import React, { useState, useEffect } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const GoProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://your-backend-api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed (e.g., authorization)
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        My Profile
      </Typography>
      {userDetails ? (
        <div>
          <Typography color="gray" className="mt-1 font-normal">
            Your Profile Details!
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userDetails.name || ""}
                readOnly
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your University Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your University name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userDetails.university || ""}
                readOnly
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userDetails.email || ""}
                readOnly
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your GitHub Username
              </Typography>
              <Input
                size="lg"
                placeholder="GitHub"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userDetails.githubUsername || ""}
                readOnly
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your LinkedIn Username
              </Typography>
              <Input
                size="lg"
                placeholder="LinkedIn"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userDetails.linkedinUsername || ""}
                readOnly
              />
            </div>
            <Button className="mt-6" fullWidth>
              EDIT!
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal"
            ></Typography>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
};

export default GoProfile;
