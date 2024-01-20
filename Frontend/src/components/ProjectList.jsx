import ProjectCard from "./ProjectCard";
import React from "react";
import Filters from "./FiltersHome";
import {
  Typography,
} from "@material-tailwind/react";

const ProjectList = ({ trendingProjects,name }) => {
  return (
    <div>
      <div className="flex flex-wrap flex-col justify-center items-center bg-black">
        <Typography variant="h1" color="white" className="m-10 mt-28 text-center">PROJECT PLATFORM</Typography>
        <div className="ml-5 mr-5 mb-20 mt-12 flex justify-center items-center">
          <Typography variant="h5" color="white" className="text-center">A unified space for students to showcase their projects, exchange knowledge, and foster innovation, creating a hub for collaborative learning and knowledge sharing.</Typography>
        </div>
      </div>
      <Filters></Filters>
      <Typography variant="h4" color="black" className="flex justify-center mt-6 underline">Trending Projects</Typography>
      <div className="mt-2 flex flex-row flex-wrap place-content-evenly">
        {trendingProjects.map((curr) => {
          return (
            <ProjectCard 
              className="m-5 mt-6 w-9/12 sm:w-5/12 xl:w-3/12"
              key={curr._id}
              name={curr.title}
              descp={curr.abstract}
              id={curr._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
