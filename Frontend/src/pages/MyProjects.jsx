import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import Table from "../components/Table";
import TableBodyComponent from "../components/TableBodyComponent";
import MyProjectsHeader from "../components/MyProjectsHeader";
import InitialRowOfTable from "../components/InitialRowOfTable";
import MyProjectsFooter from "../components/MyProjectsFooter";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

export default function MyProjects(props) {
  const [projects, setProjects] = useState([]); // useState, set projects to an empty array.
  const [error, setError] = useState(null);

  const getStudentProjects = async () => {
    try {
      const session = await getSession();
      if (session) {
        // session.user.name
        const response = await axios.get(`/api/projects/student/${"Emma"}`);
        setProjects(response.data); // Update state with fetched projects
      } else {
        signIn(); // Trigger sign-in if no session is found
      }
    } catch (error) {
      console.error("Error fetching student projects:", error);
      setError(error); // Update state with error
    }
  };

  useEffect(() => {
    getStudentProjects();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) {
    return <div>Error fetching projects: {error.message}</div>;
  }
  console.log(projects);

  return (
    <Card className="h-full w-full">
      <MyProjectsHeader />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <InitialRowOfTable />
          <TableBodyComponent tableRows={projects} />
        </table>
      </CardBody>
      <MyProjectsFooter />
    </Card>
  );
}
