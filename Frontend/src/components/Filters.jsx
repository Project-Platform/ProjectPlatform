import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { Radio } from "@material-tailwind/react";
  import { Button } from "@material-tailwind/react";

export default function Filters(){
    return(
    <div className=" h-screen bg-white w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto pt-2 fixed ">
    <Card className="h-[calc(100vh-2rem)] bg-white w-full max-w-[20rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto ">
        <div className=" mb-6 flex items-center justify-between">
            <Typography variant="h3" color="black">
              Filters:
            </Typography>
          </div>
          {/* <hr className="my-2 border-blue-gray-50" /> 
          <Switch
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              Switch
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              We can keep a random choice.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
          <hr className="my-2 border-blue-gray-50" /> */}
          <div className="flex flex-col gap-0 mb-1">
          <Typography variant="h5" color="black" className="flex items-center justify-start">
              Technology Focus:
            </Typography>
              <Radio name='TechFocus' label='AI' ripple={true}/>
              <Radio name='TechFocus' label='Virtual Reality' ripple={true}/>
              <Radio name='TechFocus' label='Biosensor' ripple={true}/>
              <Radio name='TechFocus' label='Raspberry Pi' ripple={true}/>
          </div>
          <div className="flex flex-col gap-0 mb-1">
          <Typography variant="h5" color="black" className="flex items-center justify-start">
              Application Domain:
            </Typography>
              <Radio name='AppDomain' label='Image Recognition' ripple={true}/>
              <Radio name='AppDomain' label='Museum Experience' ripple={true}/>
              <Radio name='AppDomain' label='Drug Discovery' ripple={true}/>
              <Radio name='AppDomain' label='Access Control System' ripple={true}/>
          </div>
          <div className="flex flex-col gap-0 mb-1">
          <Typography variant="h5" color="black" className="flex items-center justify-start">
              Skill Requirement:
            </Typography>
              <Radio name='SkillReq' label='Deep Learning' ripple={true}/>
              <Radio name='SkillReq' label='Virtual Reality' ripple={true}/>
              <Radio name='SkillReq' label='Biometric Technology' ripple={true}/>
              <Radio name='SkillReq' label='Moleculat Dynamics' ripple={true}/>
          </div>
          <div className="flex flex-col gap-0 mb-1">
          <Typography variant="h5" color="black" className="flex items-center justify-start">
              Project Type:
            </Typography>
              <Radio name='ProjType' label='Hardware Integration' ripple={true}/>
              <Radio name='ProjType' label='Software Development' ripple={true}/>
              <Radio name='ProjType' label='Computational Modeling' ripple={true}/>
              <Radio name='ProjType' label='Data Science and Analytics' ripple={true}/>
          </div>
          <div className="flex flex-col gap-0 mb-1">
          <Typography variant="h5" color="black" className="flex items-center justify-start mb-2">
          Domain Expertise:
            </Typography>
              <Radio name='DomExpert' label='Healthcare and Biotechnology' ripple={true}/>
              <Radio name='DomExpert' label='Security' ripple={true}/>
              <Radio name='DomExpert' label='Cultural Experiences' ripple={true}/>
              <Radio name='DomExpert' label='Computer Vision' ripple={true}/>
          </div>       
      </Card>
    </div>
    );
}