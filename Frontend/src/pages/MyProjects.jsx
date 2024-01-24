import { useState, useEffect } from "react";
import { getStudentProjects } from "../services/projectData";
import TableBodyComponent from "../components/TableBodyComponent";
import MyProjectsHeader from "../components/MyProjectsHeader";
import InitialRowOfTable from "../components/InitialRowOfTable";
import TableSkeleton from "../components/TableSkeleton";
import AlertBox from "../components/AlertBox";
import { Card, CardBody } from "@material-tailwind/react";
import Pagination from "../components/Pagination";

export default function MyProjects(props) {
  const [message, setMessage] = useState(null);
  const [projects, setProjects] = useState([]); // useState, set projects to an empty array.
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  const postPerPage = 6;

  //for pagination
  const showMessage = (type, message) => {
    setMessage({ type, message });
  };

  // Fetch projects
  const fetchProjects = async () => {
    try {
      // Simulate a delay, you should replace this with your actual fetching logic
      const projects = await getStudentProjects();
      setProjects(projects); // Set projects after the delay
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false); // Set loading to false on error
      showMessage("error", "Error fetching your projects.");
    }
  };

  // useEffect for initial fetch
  useEffect(() => {
    fetchProjects();
  }, []);

  // Function to refresh projects
  const refreshProjects = () => {
    setLoading(true); // Set loading to true before refreshing
    fetchProjects();
  };

  const lastpostIndex = currPage * postPerPage;
  const firstpostIndex = lastpostIndex - postPerPage;

  const currPosts = projects.slice(firstpostIndex, lastpostIndex);

  const MyProjectsCount = Math.ceil(projects.length / postPerPage);

  return (
    <Card className="h-full w-full">
      {message && (
        <AlertBox
          type={message.type}
          message={message.message}
          onClose={setMessage}
        />
      )}
      <MyProjectsHeader />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          {loading ? (
            <TableSkeleton />
          ) : (
            <>
              <InitialRowOfTable />
              <TableBodyComponent
                tableRows={currPosts}
                refreshProjects={refreshProjects}
                showMessage={showMessage}
              />
            </>
          )}
        </table>
      </CardBody>
      <Pagination
        setCurrentPage={setCurrPage}
        currentPage={currPage}
        totalPages={MyProjectsCount}
      />
    </Card>
  );
}
