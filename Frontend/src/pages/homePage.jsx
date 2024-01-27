import Pagination from "../components/Pagination";
import { getTrendingProjects } from "../services/projectData";
import { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import AlertBox from "../components/AlertBox";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [message, setMessage] = useState(null);
  //useState,set trendingProjects to an empty array.you can change the value of the trendingProjects
  //  with the help of setTrendingProjects.
  const [trendingProjects, setTrendingProjects] = useState([]);
  // sets the currentPage to 1
  // you can change the value of currentPage with the help of setCurrentPage.
  const [currentPage, setCurrentPage] = useState(1);
  // this is for the implementation of the plagiarism
  const postsPerPage = 6;
  let [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    // Check if the "existingUser" param is present
    if (searchParams.get("existingUser")) {
      setMessage({
        type: "info",
        message:
          "It seems your email was previously used with a different provider. We have gone ahead and logged you in using that.",
      });

      // Remove the "existingUser" param from the URL
      setSearchParams((prevSearchParams) => {
        prevSearchParams.delete("existingUser");
        return prevSearchParams;
      });
    }
  }, [searchParams]);

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
        showAlertMessage("Error fetching trending projects:");
      }
    };

    // Call the function to fetch trending projects
    TrendingProjects();

    return () => {
      ignore = true;
    };
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = trendingProjects.slice(firstPostIndex, lastPostIndex);
  const trendingProjectsCount = Math.ceil(
    trendingProjects.length / postsPerPage
  );
  
  const showAlertMessage = (message) => {
    setMessage({ type: "error", message});
  };

  return (
    <>
      {message && (
        <AlertBox
          type={message.type}
          message={message.message}
          onClose={() => setMessage(null)}
        />
      )}
      <ProjectList name="Trending Projects" trendingProjects={currentPosts} />
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={trendingProjectsCount}
      />
    </>
  );
}

export default HomePage;
