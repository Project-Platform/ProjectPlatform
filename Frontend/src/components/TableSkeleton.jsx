import { Typography, Tooltip, IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import InitialRowOfTable from "./InitialRowOfTable";

const arrayToRender = [1, 2, 3, 4, 5, 6];

const TableSkeleton = () => (
    <>
    <InitialRowOfTable/>
    <tbody>
      {/* Use the map function to render the same piece of code 6 times */}
      {arrayToRender.map((item, index) => (
          <tr key={index} className="animate-pulse">
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
                <div className="h-6 w-80 rounded-full bg-gray-300">.</div>
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
                  <IconButton variant="text">
                    <TrashIcon className="h-5 w-6" />
                  </IconButton>
                </Tooltip>
              </td>
          </tr>
      ))}
    </tbody>
    </>
);

export default TableSkeleton;
