import Card2 from "../components/Card2";
import Pagination from "../components/Pagination";
import { getTrendingProjects } from "../services/projectData.js";
import { useState, useEffect } from "react";
import Pagination2 from "../components/Pagination2.jsx";
import ProjectList from "../components/ProjectList.jsx";

function HomePage() {
  const [trendingProjects, setTrendingProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);


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
      <div className="ml-28 flex flex-row flex-wrap">
        <ProjectList
        trendingProjects={currentPosts}
          // name="E-Portal Case management"
          // descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
        />
</div>
        <div>
        <Pagination2
        totalPosts={trendingProjects.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        
        />
        
        {/* <Card2
          name="E-Portal Case management"
          descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
        /> */}
        {/* <Card2
          name="E-Portal Case management"
          descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
        /> */}
        {/* <Card2
          name="E-Portal Case management"
          descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
        /> */}
        {/* <Card2
          name="E-Portal Case management"
          descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
        /> */}
        {/* <Card2
          name="E-Portal Case management"
          descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
        /> */}
        {/* <Card2 */}
          {/* // name="E-Portal Case management" */}
        {/* //   descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....." */}
        {/* // /> */}
      </div>
      <div className="ml-[65vw]">
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default HomePage;
