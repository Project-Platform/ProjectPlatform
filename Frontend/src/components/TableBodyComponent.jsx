import React from 'react';
import { Typography, IconButton, Tooltip } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  
  Button,
} from "@material-tailwind/react";
import { deleteProjectById } from '../services/projectData';

import { useNavigate } from "react-router-dom";


import { getProjectById } from '../services/projectData';

export default function TableBodyComponent({ tableRows,refreshProjects, showAlert }) {
  const navigate = useNavigate();
  const handleClick = async (id) => {
    const project = await getProjectById(id);
    navigate(`/ProjectPage/${id}`, { state: project });
  };
  const handleDelete = async (projectId,projectTitle) => {
    try {
      await deleteProjectById(projectId);
      console.log(`Project with id ${projectId} deleted.`);
      refreshProjects(); // This function should be passed from the parent component to refresh the project list.
      showAlert(`Project ${projectTitle} deleted.`, 'success'); // Show alert on successful deletion
    } catch (error) {
      console.error("Error deleting project:", error);
      showAlert('Error occurred while deleting project.', 'error'); // Show alert on error
    }
  };



  return (
    <tbody>
      {tableRows.map(({ _id, title, author, domain, date }, index) => {
        const isLast = index === tableRows.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
        const newDate = new Date(date);
        const NewAuthor = author.join(', ')
        return (
          <tr key={_id}>
            {/* Table cells */}
            <td className={classes}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <Typography variant="small" color="blue-gray" className="font-normal cursor-pointer" onClick={() => handleClick(_id)}>
                    {title}
                  </Typography>
                </div>
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography variant="small" color="blue-gray" className="font-normal cursor-pointer" onClick={() => handleClick(_id)}>
                  {NewAuthor}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div onClick={() => handleClick(_id)} className="w-max cursor-pointer">{domain.join(' ')}</div>
            </td>
            <td className={classes}>
              <Typography variant="small" color="blue-gray" className="font-normal cursor-pointer" onClick={() => handleClick(_id)}>
                {`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`}
              </Typography>
            </td>
            <td className={classes}>
              <Tooltip content="Delete">
                <IconButton variant="text" onClick={() => handleDelete(_id,title)}>
                {/* <Button onClick={() => handleClick(_id)}> */}
                  {/* <ArrowTopRightOnSquareIcon onClick={() => handleClick(_id)} className="h-5 w-5" />
                   */}
                  <TrashIcon  className="h-5 w-6" />
                  {/* </Button> */}
                </IconButton>
              </Tooltip>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

// export default TableBodyComponent;
