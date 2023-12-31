import Pagination from "../components/Pagination";
import { getTrendingProjects } from "../services/projectData";
import { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";

function HomePage() {
   //useState,set trendingProjects to an empty array.you can change the value of the trendingProjects
  //  with the help of setTrendingProjects.
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
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  // console.log(trendingProjects);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = trendingProjects.slice(firstPostIndex, lastPostIndex);

  console.log(trendingProjects);

  return (
    <div>
      <br />
      <ProjectList trendingProjects={currentPosts} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default HomePage;
