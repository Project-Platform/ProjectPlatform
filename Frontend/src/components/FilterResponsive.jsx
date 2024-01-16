// import React, { useState, useEffect } from 'react';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
//   } from "@material-tailwind/react";
//   import {
//     Drawer,
//     IconButton,
//   } from "@material-tailwind/react";
//   import { Radio } from "@material-tailwind/react";


// function FilterResponsive(){
//   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
// const updateViewportWidth = () => {
//     setViewportWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener('resize', updateViewportWidth);

//     return () => {
//       window.removeEventListener('resize', updateViewportWidth);
//     };
//   }, []);
//   const [open, setOpen] = useState(false);
//   const openDrawer = () => {
//     setOpen(true);
//   };

//   const closeDrawer = () => {
//     setOpen(false);
//   };


//   if (viewportWidth<= 640) {
//     return (
//       <React.Fragment>
//         <Button onClick={openDrawer} className='flex justify-center'>Open Drawer</Button>
//         <Drawer open={open} onClose={closeDrawer} className="p-4">
//           {/* Your 'if' block code goes here */}
//           <div className="mb-6 flex items-center justify-between">
//             <Typography variant="h5" color="blue-gray">
//               Material Tailwind
//             </Typography>
//             <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined">
//             Documentation
//           </Button>
//           <Button size="sm">Get Started</Button>
//           </div>
//         </Drawer>
//       <div className=" h-screen bg-white w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto pt-2 fixed ">
//         <Card className="h-[calc(100vh-2rem)] bg-white w-full max-w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto ">
//             <div className=" mb-6 flex items-center justify-between">
//                 <Typography variant="h3" color="black">
//                   Filters:
//                 </Typography>
//               </div>
//               {/* <hr className="my-2 border-blue-gray-50" /> 
//               <Switch
//             label={
//               <div>
//                 <Typography color="blue-gray" className="font-medium">
//                   Switch
//                 </Typography>
//                 <Typography variant="small" color="gray" className="font-normal">
//                   We can keep a random choice.
//                 </Typography>
//               </div>
//             }
//             containerProps={{
//               className: "-mt-5",
//             }}
//           />
//               <hr className="my-2 border-blue-gray-50" /> */}
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Technology Focus:
//                 </Typography>
//                   <Radio name='TechFocus' label='AI' ripple={true}/>
//                   <Radio name='TechFocus' label='Virtual Reality' ripple={true}/>
//                   <Radio name='TechFocus' label='Biosensor' ripple={true}/>
//                   <Radio name='TechFocus' label='Raspberry Pi' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Application Domain:
//                 </Typography>
//                   <Radio name='AppDomain' label='Image Recognition' ripple={true}/>
//                   <Radio name='AppDomain' label='Museum Experience' ripple={true}/>
//                   <Radio name='AppDomain' label='Drug Discovery' ripple={true}/>
//                   <Radio name='AppDomain' label='Access Control System' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Skill Requirement:
//                 </Typography>
//                   <Radio name='SkillReq' label='Deep Learning' ripple={true}/>
//                   <Radio name='SkillReq' label='Virtual Reality' ripple={true}/>
//                   <Radio name='SkillReq' label='Biometric Technology' ripple={true}/>
//                   <Radio name='SkillReq' label='Moleculat Dynamics' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Project Type:
//                 </Typography>
//                   <Radio name='ProjType' label='Hardware Integration' ripple={true}/>
//                   <Radio name='ProjType' label='Software Development' ripple={true}/>
//                   <Radio name='ProjType' label='Computational Modeling' ripple={true}/>
//                   <Radio name='ProjType' label='Data Science and Analytics' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start mb-2">
//               Domain Expertise:
//                 </Typography>
//                   <Radio name='DomExpert' label='Healthcare and Biotechnology' ripple={true}/>
//                   <Radio name='DomExpert' label='Security' ripple={true}/>
//                   <Radio name='DomExpert' label='Cultural Experiences' ripple={true}/>
//                   <Radio name='DomExpert' label='Computer Vision' ripple={true}/>
//               </div>       
//           </Card>
//         </div>
//         </React.Fragment>
//     );
    
//   } else {
//     // Return your 'else' block code
//     return (
//         <div className=" h-screen bg-white w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto pt-2 fixed ">
//         <Card className="h-[calc(100vh-2rem)] bg-white w-full max-w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto ">
//             <div className=" mb-6 flex items-center justify-between">
//                 <Typography variant="h3" color="black">
//                   Filters:
//                 </Typography>
//               </div>
//               {/* <hr className="my-2 border-blue-gray-50" /> 
//               <Switch
//             label={
//               <div>
//                 <Typography color="blue-gray" className="font-medium">
//                   Switch
//                 </Typography>
//                 <Typography variant="small" color="gray" className="font-normal">
//                   We can keep a random choice.
//                 </Typography>
//               </div>
//             }
//             containerProps={{
//               className: "-mt-5",
//             }}
//           />
//               <hr className="my-2 border-blue-gray-50" /> */}
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Technology Focus:
//                 </Typography>
//                   <Radio name='TechFocus' label='AI' ripple={true}/>
//                   <Radio name='TechFocus' label='Virtual Reality' ripple={true}/>
//                   <Radio name='TechFocus' label='Biosensor' ripple={true}/>
//                   <Radio name='TechFocus' label='Raspberry Pi' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Application Domain:
//                 </Typography>
//                   <Radio name='AppDomain' label='Image Recognition' ripple={true}/>
//                   <Radio name='AppDomain' label='Museum Experience' ripple={true}/>
//                   <Radio name='AppDomain' label='Drug Discovery' ripple={true}/>
//                   <Radio name='AppDomain' label='Access Control System' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Skill Requirement:
//                 </Typography>
//                   <Radio name='SkillReq' label='Deep Learning' ripple={true}/>
//                   <Radio name='SkillReq' label='Virtual Reality' ripple={true}/>
//                   <Radio name='SkillReq' label='Biometric Technology' ripple={true}/>
//                   <Radio name='SkillReq' label='Moleculat Dynamics' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start">
//                   Project Type:
//                 </Typography>
//                   <Radio name='ProjType' label='Hardware Integration' ripple={true}/>
//                   <Radio name='ProjType' label='Software Development' ripple={true}/>
//                   <Radio name='ProjType' label='Computational Modeling' ripple={true}/>
//                   <Radio name='ProjType' label='Data Science and Analytics' ripple={true}/>
//               </div>
//               <div className="flex flex-col gap-0 mb-1">
//               <Typography variant="h5" color="black" className="flex items-center justify-start mb-2">
//               Domain Expertise:
//                 </Typography>
//                   <Radio name='DomExpert' label='Healthcare and Biotechnology' ripple={true}/>
//                   <Radio name='DomExpert' label='Security' ripple={true}/>
//                   <Radio name='DomExpert' label='Cultural Experiences' ripple={true}/>
//                   <Radio name='DomExpert' label='Computer Vision' ripple={true}/>
//               </div>       
//           </Card>
//         </div>
//     );
//   }
// }

// export default FilterResponsive;

import React, { useState, useEffect } from 'react';
import { Button, Drawer, Typography} from "@material-tailwind/react"; 
import {
  Card,
  Checkbox,
  ListItem,
  List,
  ListItemPrefix,
} from "@material-tailwind/react";// Replace 'your-component-library' with the actual library you are using

const FilterResponsive = () => {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  const [open, setOpen] = useState(false);
  console.log('abc');
  const updateViewportWidth = () => {
    setViewportWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    console.log('abc');
    window.addEventListener('resize', updateViewportWidth);

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);
  
  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  const computerScienceTags = [
    "3D Printing",
    "AI (Artificial Intelligence)",
    "Agriculture",
    "Automation",
    "Blockchain",
    "Cloud Computing",
    "Communication",
    "Computer Science",
    "Cybersecurity",
    "Data Privacy",
    "Data Science",
    "Data Streaming",
    "Deep Learning",
    "Diagnostics",
    "Drones",
    "E-commerce",
    "Education",
    "Education Technology",
    "Embedded Systems",
    "Energy",
  ];
  console.log('abc');
  if (viewportWidth <= 640) {
    return (
      <div className='mt-16'>
      <div className='display-block flex justify-center mt-4'><Button onClick={openDrawer} size="lg" className='mt-16'>Filters</Button></div>
        <Drawer open={open} onClose={closeDrawer} className="p-4 w-320px">
        <div className="h-screen bg-white w-[17rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto pt-2 fixed">
    <Card className="h-[calc(100vh-2rem)] bg-white w-full max-w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto">
    <div className="mb-6">
      <Typography variant="h4" color="black">
        Filters:
      </Typography>
      </div>
      <List>
        {computerScienceTags.map((tag) => (
          <ListItem key={tag} className="p-0 h-8">
            <label
              htmlFor={`vertical-list-${tag}`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={`vertical-list-${tag}`}
                  ripple={false}
                  className="hover:before:opacity-0 w-4 h-4"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {tag}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
    </div>
        </Drawer>
        </div>
    );
  } else {
    return (
      <div className=''>
        <div className=" h-screen bg-white w-[18rem] p-2 shadow-xl shadow-blue-900/5 overflow-y-auto pt-2 fixed">
    <Card className="h-[calc(100vh-2rem)] bg-white w-full max-w-[18rem] p-2 shadow-xl shadow-blue-900/5 overflow-y-auto">
    <div className="mb-6 flex items-center justify-between">      
      <Typography variant="h4" color="black">
        Filters:
      </Typography>
      </div>
      <List>
        {computerScienceTags.map((tag) => (
          <ListItem key={tag} className="p-0 h-8">
            <label
              htmlFor={`vertical-list-${tag}`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={`vertical-list-${tag}`}
                  ripple={false}
                  className="hover:before:opacity-0 w-4 h-4"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {tag}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
    </div>
    </div>
    );
  }
};

export default FilterResponsive;