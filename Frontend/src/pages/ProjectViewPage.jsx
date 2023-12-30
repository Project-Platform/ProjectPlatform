import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AvatarCustomStyles from "../components/Avatar";
import ProjectView from "../components/ProjectView";
import { getTrendingProjects, getProjectById } from "../services/projectData";

export default function ProjectViewPage() {
  const location = useLocation();

  const projectData = location.state;

  // details={trendingProjects[1]}
  return <ProjectView 
  title={projectData.title}
    abstract={projectData.abstract}
    author1={projectData.author[0]}
    author2= {projectData.author[1]}
    date={projectData.date}
    domain1={projectData.domain[0]}
    domain2={projectData.domain[1]}

    githubLink={projectData.githubLink}
    youtubeLink={projectData.youtubeLink}




      
    

  
  />;
}
