import { Typography, IconButton, Tooltip } from "@material-tailwind/react";
import { ChevronUpDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import { deleteProjectById, getProjectById } from '../services/projectData';
import { useNavigate } from "react-router-dom";
import { getProjectById } from '../services/projectData';

const TABLE_HEAD = ["Projects", "Authors", "Domain", "Date", "Delete"];

export default function TableBodyComponent({ tableRows,refreshProjects, showMessage }) {
  const navigate = useNavigate();
  const handleClick = async (id) => {
    try {
      const project = await getProjectById(id);
      navigate(`/ProjectPage/${id}`, { state: project });
    } catch (error) {
      console.error("Error fetching project details:", error);
      showAlert("Error occurred while fetching project details.", "error"); // Show alert on error
    }
  };
  const handleDelete = async (projectId, projectTitle) => {
    try {
      await deleteProjectById(projectId);
      console.log(`Project with id ${projectId} deleted.`);
      refreshProjects(); // This function should be passed from the parent component to refresh the project list.
      showMessage('success', `Project ${projectTitle} deleted successfully.`); // Show alert on successful deletion
    } catch (error) {
      console.error("Error deleting project:", error);
      showMessage('error', 'Error occurred while deleting project.'); // Show alert on error
    }
  };

  return (
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
      {tableRows.map(({ _id, title, author, domain, date }, index) => {
        const isLast = index === tableRows.length - 1;
        const classes = isLast ? "p-4" : "p-4";
        const newDate = new Date(date);
        const NewAuthor = author.join(", ");
        return (
          <tr key={_id}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal cursor-pointer"
                        onClick={() => handleClick(_id)}
                      >
                        {title}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal cursor-pointer"
                      onClick={() => handleClick(_id)}
                    >
                      {NewAuthor}
                    </Typography>
                  </div>
                </td>
                <td className={classes}>
                  <div
                    onClick={() => handleClick(_id)}
                    className="w-max cursor-pointer"
                  >
                    {" "}
                    {domain.join(", ")}
                  </div>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal cursor-pointer"
                    onClick={() => handleClick(_id)}
                  >
                    {`${newDate.getDate()}/${
                      newDate.getMonth() + 1
                    }/${newDate.getFullYear()}`}
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
                  <TrashIcon  className="h-5 w-6" />
                </IconButton>
              </Tooltip>
            </td>
          </tr>
        );
      })}
    </tbody>
    </>
  );
}
