import { useLocation } from "react-router-dom";
import ProjectView from "../components/ProjectView";
import ProjectList from "../components/ProjectList";
import { useEffect } from "react";
import { useState } from "react";
import { getTrendingProjects } from "../services/projectData";
import ProjectCard from "../components/ProjectCard";
import { useParams } from 'react-router-dom';
import { getProjectById } from '../services/projectData';

export default function ProjectViewPage() {

  const location = useLocation();

  const response = location.state;
  const projectData = response.project;
  console.log(response);

  return (
    <>
      <ProjectView
        title={projectData.title}
        abstract={projectData.abstract}
        author={projectData.author}
        date={projectData.date}
        field={projectData.field}
        domain={projectData.domain}
        githubLink={projectData.githubLink}
        youtubeLink={projectData.youtubeLink}
        docs={projectData.docs}
      />
      <div className="flex flex-row flex-wrap place-content-evenly">
      {response.similarProjects.map((curr) => {
        return (
          <ProjectCard
            className="w-9/12 sm:w-6/12 lg:w-4/12"
            key={curr._id}
            name={curr.title}
            descp={curr.abstract}
            id={curr._id}
          />
        );
      })}
      </div>

      {/* for showing the similar Projects. */}
      {/* <ProjectList name="Similar Projects" trendingProjects={response.similarProjects} /> */}
    </>
  );
}
