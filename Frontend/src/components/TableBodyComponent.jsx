import React from 'react';
import { Typography, IconButton, Tooltip } from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function TableBodyComponent({ tableRows }) {
  return (
    <tbody>
      {tableRows.map(({ _id, title, author, domain, date }, index) => {
        const isLast = index === tableRows.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
        const newDate = new Date(date);
        return (
          <tr key={_id}>
            {/* Table cells */}
            <td className={classes}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {title}
                  </Typography>
                </div>
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {author}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div className="w-max">{domain}</div>
            </td>
            <td className={classes}>
              <Typography variant="small" color="blue-gray" className="font-normal">
                {`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`}
              </Typography>
            </td>
            <td className={classes}>
              <Tooltip content="Open">
                <IconButton variant="text">
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
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
