import { useState, useEffect } from "react";
import { getStudentProjects } from "../services/projectData";
import TableBodyComponent from "../components/TableBodyComponent";
import MyProjectsHeader from "../components/MyProjectsHeader";
import AlertBox from "../components/AlertBox";
import {
  Card,
  CardBody,
  Typography, 
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Pagination from "../components/Pagination";

export default function MyProjects(props) {
  const [message, setMessage] = useState(null);
  const [projects, setProjects] = useState([]); // useState, set projects to an empty array.
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  const postPerPage = 6;

  //for pagination
  const showMessage = (type, message) => {
     setMessage({type,message});
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
      showMessage("error", "Error fetching your projects.")
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
  const TABLE_HEAD = ["Projects", "Authors", "Domain", "Date", "Delete"];
  const arrayToRender = [1, 2, 3, 4, 5, 6];

  return (
    <Card className="h-full w-full">
        {message && <AlertBox type={message.type} message={message.message} onClose={setMessage} />}
      <MyProjectsHeader />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-fixed text-left">
        {loading ? (
          <>
          <thead>
    <tr>
      {TABLE_HEAD.map((head, index) => (
        <th
        // cursor-pointer
        // hover:bg-blue-gray-50
          key={head}
          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
          >
            {head}{" "}
            {index !== TABLE_HEAD.length - 1 && (
              <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
            )}
          </Typography>
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
  {/* Use the map function to render the same piece of code 6 times */}
  {arrayToRender.map((item, index) => (
        <div key={index}>
        <tr>
          <div className="animate-pulse">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="h-6 w-80 rounded-full bg-gray-300"
                      >
                      .
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="h-6 w-80 rounded-full bg-gray-300"
                    >
                      .
                    </Typography>
                  </div>
                </td>
                <td className="p-4">
                  <div
                    className="h-6 w-80 rounded-full bg-gray-300"
                  >
                    .
                  </div>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="h-6 w-72 rounded-full bg-gray-300"
                  >
                    .
                  </Typography>
                </td>
                <td className="p-4">
                  <Tooltip content="Delete">
                    <IconButton
                      variant="text"
                    >
                      <TrashIcon className="h-5 w-6" />
                    </IconButton>
                  </Tooltip>
                </td>
              </div>
              </tr>
        </div>
      ))}
              </tbody> 
              </>) :
              <TableBodyComponent tableRows={currPosts} refreshProjects={refreshProjects} showAlert={showAlert}/>
              }
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
