import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

import { Typography } from "@material-tailwind/react";

export default function InitialRowOfTable(){

    const TABLE_HEAD = ["Projects", "Authors", "Domain", "Date", "Delete"];

return (
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
);
}
