import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Filters(){

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <div className="flex items-center justify-center mt-20"><Button onClick={openDrawer}>Filters</Button></div>
      <Drawer open={open} onClose={closeDrawer} className="p-4 overflow-y-auto">
        <div className=" mb-6 flex items-center justify-between">
          <Typography variant="h3" color="blue-gray" className="mt-5">
            Filters:
          </Typography>
          {/* <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton> */}
        </div>
        {open && (
        <div className="flex flex-col gap-0 mb-1">
        <Typography variant="h5" color="black" className="flex items-center justify-start">
            Technology Focus:
          </Typography>
            <Radio name='TechFocus' label='AI' />
            <Radio name='TechFocus' label='Virtual Reality' />
            <Radio name='TechFocus' label='Biosensor' />
            <Radio name='TechFocus' label='Raspberry Pi' />
        </div>
        )}
        {open && (
        <div className="flex flex-col gap-0 mb-1">
        <Typography variant="h5" color="black" className="flex items-center justify-start">
            Application Domain:
          </Typography>
            <Radio name='AppDomain' label='Image Recognition' ripple={true}/>
            <Radio name='AppDomain' label='Museum Experience' ripple={true}/>
            <Radio name='AppDomain' label='Drug Discovery' ripple={true}/>
            <Radio name='AppDomain' label='Access Control System' ripple={true}/>
        </div>
        )}
        {open && (
        <div className="flex flex-col gap-0 mb-1">
        <Typography variant="h5" color="black" className="flex items-center justify-start">
            Skill Requirement:
          </Typography>
            <Radio name='SkillReq' label='Deep Learning' ripple={true}/>
            <Radio name='SkillReq' label='Virtual Reality' ripple={true}/>
            <Radio name='SkillReq' label='Biometric Technology' ripple={true}/>
            <Radio name='SkillReq' label='Moleculat Dynamics' ripple={true}/>
        </div>
        )}
        {open && (
        <div className="flex flex-col gap-0 mb-1">
        <Typography variant="h5" color="black" className="flex items-center justify-start">
            Project Type:
          </Typography>
            <Radio name='ProjType' label='Hardware Integration' ripple={true}/>
            <Radio name='ProjType' label='Software Development' ripple={true}/>
            <Radio name='ProjType' label='Computational Modeling' ripple={true}/>
            <Radio name='ProjType' label='Data Science and Analytics' ripple={true}/>
        </div>
        )}
        {open && (
        <div className="flex flex-col gap-0 mb-1">
        <Typography variant="h5" color="black" className="flex items-center justify-start mb-2">
        Domain Expertise:
          </Typography>
            <Radio name='DomExpert' label='Healthcare and Biotechnology' ripple={true}/>
            <Radio name='DomExpert' label='Security' ripple={true}/>
            <Radio name='DomExpert' label='Cultural Experiences' ripple={true}/>
            <Radio name='DomExpert' label='Computer Vision' ripple={true}/>
        </div>
        )}
      </Drawer>
    </React.Fragment>
  );
}