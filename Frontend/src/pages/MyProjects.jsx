import { useState, useEffect } from "react";
import { getStudentProjects } from "../services/projectData";
import TableBodyComponent from "../components/TableBodyComponent";
import MyProjectsHeader from "../components/MyProjectsHeader";
import InitialRowOfTable from "../components/InitialRowOfTable";
import AlertBox from "../components/AlertBox";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import Pagination from "../components/Pagination";
import AlertBox from "../components/AlertBox";

export default function MyProjects(props) {
  const [message, setMessage] = useState(null);
  const [projects, setProjects] = useState([]); // useState, set projects to an empty array.
  const [currPage, setCurrPage] = useState(1);
  const postPerPage = 6;

  //for pagination
  const showAlertMessage = (message) => {
     setMessage({ type: "error", message});
   };
    
  // Fetch projects
  const fetchProjects = async () => {
    try {
      const projects = await getStudentProjects();
      setProjects(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      showAlertMessage("Error fetching your projects.")
    }
  };

  // useEffect for initial fetch
  useEffect(() => {
    fetchProjects();
  }, []);

  // Function to refresh projects
  const refreshProjects = () => {
    fetchProjects();
  };

  if (error) {
    return <div>Error fetching projects: {error.message}</div>;
  }

  const lastpostIndex = currPage * postPerPage;
  const firstpostIndex = lastpostIndex - postPerPage;

  const currPosts = projects.slice(firstpostIndex, lastpostIndex);

  const MyProjectsCount = Math.ceil(projects.length / postPerPage);

  //for alert to tell so and so project as been deleted.

  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    // Add a function to show the alert
    const showAlert = (message, type) => {
      setAlert({ show: true, message, type });
      // Optionally, auto-hide the alert after some time
      setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
    };

  return (
    <Card className="h-full w-full">
            {alert.show && <AlertBox type={alert.type} message={alert.message} onClose={() => setAlert({ show: false, message: '', type: '' })} />}
      <MyProjectsHeader />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <InitialRowOfTable />
          <TableBodyComponent tableRows={currPosts} refreshProjects={refreshProjects} showAlert={showAlert} />
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
