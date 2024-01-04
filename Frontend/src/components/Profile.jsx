// import {
//     Card,
//     Input,
//     Checkbox,
//     Button,
//     Typography,
//   } from "@material-tailwind/react";
   
import React, { useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
// import studentData from "../services/studentData";
import { createStudent } from '../services/studentData';
import { useSession } from "next-auth/react";

// import { updateStudent } from '../services/studentData';

export default function Profile() {
  const { data: session, status } = useSession();
  // console.log(session.user.email, status)
  // const newemail = session.user.email
  const [profileData, setProfileData] = useState({
    name: '',
    universityName: '',
    github: '',
    linkedin: '',
  });

  const handleInputChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleSaveProfile = async () => {
    try {
      console.group(profileData);
      const createdStudent = await createStudent(profileData);

      console.log('Student created:', createdStudent);

      setProfileData({
        name: '',
        universityName: '',
        github: '',
        linkedin: '',
      });

    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <Card color="transparent" shadow={false} className="mt-10 place-items-center">
      <Typography variant="h4" color="blue-gray">
        My Profile
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Your Profile Details!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            size="lg"
            id="name"
            placeholder="Your Name"
            autoComplete="name"
            onChange={(e) => handleInputChange('name', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your University Name
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            size="lg"
            placeholder="Your University"
            id="university"
            autoComplete="organization"
            onChange={(e) => handleInputChange('universityName', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            size="lg"
            placeholder="name@mail.com"
            id="email"
            autoComplete="email"
            onChange={(e) => handleInputChange('email', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your GitHub Username
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            type="password"
            size="lg"
            placeholder="GitHub"
            id="github"  
            autoComplete="username"
            onChange={(e) => handleInputChange('github', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your LinkedIn Username
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            type="password"
            size="lg"
            placeholder="LinkedIn"
            id="linkedin"
            autoComplete="username"
            onChange={(e) => handleInputChange('linkedin', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth onClick={handleSaveProfile}>
          SAVE.
        </Button>
        <Button className="mt-6" fullWidth>
           EDIT!
          </Button>
      </form>
    </Card>
  );
}

  //   return (
  //      <Card color="transparent" shadow={false} className="mt-10 place-items-center">
  //       <Typography variant="h4" color="blue-gray">
  //         My Profile
  //       </Typography>
  //       <Typography color="gray" className="mt-1 font-normal">
  //         {/* Nice to meet you! Enter your details to register. */}
  //         Your Profile Details!
  //       </Typography>
  //       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
  //         <div className="mb-1 flex flex-col gap-6">
  //           <Typography variant="h6" color="blue-gray" className="-mb-3">
  //             Your Name
  //           </Typography>
  //           <Input
  //             size="lg"
  //             id="name"
  //             placeholder="Your Name"
  //             autoComplete="name"
  //             onChange={(e) => handleInputChange('name', e.target.value)}
  //             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{
  //               className: "before:content-none after:content-none",
  //             }}
  //           />
  //           {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
  //             Your Username
  //           </Typography>
  //           <Input
  //             size="lg"
  //             placeholder="Abhinav_MS"
  //             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{
  //               className: "before:content-none after:content-none",
  //             }}
  //           /> */}
  //           <Typography variant="h6" color="blue-gray" className="-mb-3">
  //             Your University Name
  //           </Typography>
  //           <Input
  //             size="lg"
  //             placeholder="Your University"
  //             id="university"
  //             autoComplete="organization"
  //             onChange={(e) => handleInputChange('university', e.target.value)}
  //             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{
  //               className: "before:content-none after:content-none",
  //             }}
  //           />
  //           <Typography variant="h6" color="blue-gray" className="-mb-3">
  //             Your Email
  //           </Typography>
  //           <Input
  //             size="lg"
  //             placeholder="name@mail.com"
  //             id="email"
  //             autoComplete="email"
  //             onChange={(e) => handleInputChange('email', e.target.value)}
  //             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{
  //               className: "before:content-none after:content-none",
  //             }}
  //           />
  //           <Typography variant="h6" color="blue-gray" className="-mb-3">
  //             Your GitHub Username
  //           </Typography>
  //           <Input
  //             type="password"
  //             size="lg"
  //             placeholder="GitHub"
  //             id="Github"
  //             autoComplete="username"
  //             onChange={(e) => handleInputChange('Github', e.target.value)}
  //             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{
  //               className: "before:content-none after:content-none",
  //             }}
  //           />
  //           <Typography variant="h6" color="blue-gray" className="-mb-3">
  //             Your Linkedln Username
  //           </Typography>
  //           <Input
  //             type="password"
  //             size="lg"
  //             placeholder="Linkedln"
  //             id="linkedin"
  //             autoComplete="username"
  //             onChange={(e) => handleInputChange('linkedin', e.target.value)}
  //             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  //             labelProps={{
  //               className: "before:content-none after:content-none",
  //             }}
  //           />
  //         </div>
          
            
            
    
  //         <Button className="mt-6" fullWidth>
  //           SAVE.
  //         </Button>
  //         <Button className="mt-6" fullWidth>
  //           EDIT!
  //         </Button>
  //         <Typography color="gray" className="mt-4 text-center font-normal">
  //           {/* Already have an account?{" "} */}
  //           <a href="#" className="font-medium text-gray-900">
  //             {/* Sign In */}
  //           </a>
  //         </Typography>
  //       </form>
  //     </Card>
  //   );
  // }

// // Profile.js
// // Profile.js
// import { useState } from 'react';
// import { Card, Input, Button, Typography } from "@material-tailwind/react";



// export default function Profile() {
//   const [profileData, setProfileData] = useState({
//     name: '',
//     university: '',
//     email: '',
//     github: '',
//     linkedin: '',
//   });
//   class ErrorBoundary extends React.Component {
//     componentDidCatch(error, errorInfo) {
//       // Log the error or send it to an error reporting service
//     }
  
//     render() {
//       return this.props.children;
//     }
//   }
//   const MemoizedComponent = React.memo(Component);
//   const handleInputChange = (field, value) => {
//     setProfileData({ ...profileData, [field]: value });
//   };

//   const handleSaveProfile = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/user/profile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(profileData),
//       });

//       const data = await response.json();
//       console.log(data); // Log the response from the server
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     }
//   };

  
// // import { useState } from 'react';
// // import { Card, Input, Button, Typography } from "@material-tailwind/react";

// // const Profile = () => {
// //   const [profileData, setProfileData] = useState({
// //     name: '',
// //     university: '',
// //     email: '',
// //     github: '',
// //     linkedin: '',
// //   });

// //   const [validationErrors, setValidationErrors] = useState({
// //     name: '',
// //     university: '',
// //     email: '',
// //     github: '',
// //     linkedin: '',
// //   });

// //   const validateInput = (field, value) => {
// //     // Add your validation rules here
// //     // For simplicity, let's check if the value is not empty
// //     return value.trim() !== '';
// //   };

// //   const handleInputChange = (field, value) => {
// //     setProfileData({ ...profileData, [field]: value });
// //     setValidationErrors({ ...validationErrors, [field]: '' });
// //   };

// //   const handleSaveProfile = async () => {
// //     // Validate inputs before saving
// //     const errors = {};
// //     Object.entries(profileData).forEach(([field, value]) => {
// //       if (!validateInput(field, value)) {
// //         errors[field] = 'This field is required';
// //       }
// //     });

// //     // If there are validation errors, update the state and return
// //     if (Object.keys(errors).length > 0) {
// //       setValidationErrors(errors);
// //       return;
// //     }

// //     // Proceed with saving the profile data
// //     try {
// //       const response = await fetch('http://localhost:3001/api/user/profile', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(profileData),
// //       });

// //       const data = await response.json();
// //       console.log(data); // Log the response from the server
// //     } catch (error) {
// //       console.error('Error saving profile:', error);
// //     }
// //   }; 

//   return (
//     <Card color="transparent" shadow={false} className="mt-10 place-items-center">
//       <Typography variant="h4" color="blue-gray">
//         My Profile
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Your Profile Details!
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-1 flex flex-col gap-6">
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your Name
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="Abhinav Chandra M.S."
//             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your University Name
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="Keshav Memorial Institute Of Technology"
//             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => handleInputChange('university', e.target.value)}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your Email
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="name@mail.com"
//             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your GitHub Username
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="GitHub"
//             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => handleInputChange('github', e.target.value)}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your LinkedIn Username
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="LinkedIn"
//             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => handleInputChange('linkedin', e.target.value)}
//           />
//         </div>

//         <Button className="mt-6" fullWidth onClick={handleSaveProfile}>
//           SAVE.
//         </Button>
//       </form>
//     </Card>
//   );
// }
