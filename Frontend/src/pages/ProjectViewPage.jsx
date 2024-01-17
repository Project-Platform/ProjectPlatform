import { useLocation, } from "react-router-dom";
import ProjectView from "../components/ProjectView";
import ProjectList from "../components/ProjectList";
import { useEffect } from "react";
import { useState } from "react";
import { getTrendingProjects } from "../services/projectData";


export default function ProjectViewPage() {
  const location = useLocation();

  const projectData = location.state;
  console.log(projectData);

//all of this is temp for getting trending Projects.

const [trendingProjects, setTrendingProjects] = useState([]);
// sets the currentPage to 1
// you can change the value of currentPage with the help of setCurrentPage.
const [currentPage, setCurrentPage] = useState(1);
// this is for the implementation of the plagiarism
const postsPerPage = 6;

// use of useEffect
useEffect(() => {
  // Define a function to fetch trending projects
  let ignore = false;
  const TrendingProjects = async () => {
    try {
      const projects = await getTrendingProjects();
      if (!ignore) {
        setTrendingProjects(projects); // Assuming the response is an array of projects
      }
    } catch (error) {
      console.error("Error fetching trending projects:", error);
    }
  };

  // Call the function to fetch trending projects
  TrendingProjects();

  return () => {
    ignore = true;
  };
}, []); 
//End of the part for the trending projects(similar projects function will come)


  return (
    <>
    <ProjectView
      title={projectData.title}
      abstract={projectData.abstract}
      author = {projectData.author}
      date={projectData.date}
      field={projectData.field}
      domain={projectData.domain}
      githubLink={projectData.githubLink}
      youtubeLink={projectData.youtubeLink}
      docs={projectData.docs}
    />
    {/* for showing the similar Projects. */}
    <ProjectList name="Similar Projects" trendingProjects={trendingProjects} />
    </>
  );
}
