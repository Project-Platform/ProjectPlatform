import Pagination from "../components/Pagination";
import { getTrendingProjects } from "../services/projectData";
import { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";

function HomePage() {
  const [trendingProjects, setTrendingProjects] = useState([]);//useState,set trendingProjects to an empty array.
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Define a function to fetch trending projects
    const TrendingProjects = async () => {
      try {
        const projects = await getTrendingProjects();
        setTrendingProjects(projects); // Assuming the response is an array of projects
      } catch (error) {
        console.error("Error fetching trending projects:", error);
      }
    };

    // Call the function to fetch trending projects
    TrendingProjects();
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  console.log(trendingProjects);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = trendingProjects.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <br />
        <ProjectList trendingProjects={currentPosts} />
        <Pagination setCurrentPage={setCurrentPage}
          currentPage={currentPage}/>
    </div>
  );
}

export default HomePage;
