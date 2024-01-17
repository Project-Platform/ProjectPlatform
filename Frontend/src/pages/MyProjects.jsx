import { useState, useEffect } from "react";
import { getStudentProjects } from "../services/projectData";
import TableBodyComponent from "../components/TableBodyComponent";
import MyProjectsHeader from "../components/MyProjectsHeader";
import InitialRowOfTable from "../components/InitialRowOfTable";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import Pagination from "../components/Pagination";

export default function MyProjects(props) {
  const [projects, setProjects] = useState([]); // useState, set projects to an empty array.
  const [currPage, setCurrPage] = useState(1);
  const postPerPage = 6;

  //for pagination

  const [error, setError] = useState(null);

  // use of useEffect
  useEffect(() => {
    // Define a function to fetch trending projects
    let ignore = false;
    const StudentProjects = async () => {
      try {
        const projects = await getStudentProjects();
        if (!ignore) {
          setProjects(projects); // Assuming the response is an array of projects
        }
      } catch (error) {
        console.error("Error fetching trending projects:", error);
      }
    };

    // Call the function to fetch trending projects
    StudentProjects();

    return () => {
      ignore = true;
    };
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  if (error) {
    return <div>Error fetching projects: {error.message}</div>;
  }

  const lastpostIndex = currPage * postPerPage;
  const firstpostIndex = lastpostIndex - postPerPage;

  const currPosts = projects.slice(firstpostIndex, lastpostIndex);

  const MyProjectsCount = Math.ceil(projects.length / postPerPage);

  return (
    <Card className="h-full w-full">
      <MyProjectsHeader />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <InitialRowOfTable />
          <TableBodyComponent tableRows={currPosts} />
        </table>
      </CardBody>
      <Pagination
        setCurrentPage={setCurrPage}
        currentPage={currPage}
        totalPages={MyProjectsCount}
      />

      {/* <MyProjectsFooter /> */}
    </Card>
  );
}
