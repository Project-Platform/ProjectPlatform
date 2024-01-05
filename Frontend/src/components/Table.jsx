import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import MyProjectsFooter from "./MyProjectsFooter";
import MyProjectsHeader from "./MyProjectsHeader";
import InitialRowOfTable from "./InitialRowOfTable";
// import TableBodyComponent from "./TableBodyComponent";
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

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Projects", "Authors", "Domain", "Date", "View"];

const TABLE_ROWS = [
  {
    name: "Abhinav",

    authors: "Manager",
    org: "Organization",
    domain: "domain",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",

    authors: "Programator",
    org: "Developer",
    domain: "domain",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",

    authors: "Executive",
    org: "Projects",
    domain: "domain",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    authors: "Programator",
    org: "Developer",
    domain: "domain",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    authors: "Manager",
    org: "Executive",
    domain: "domain",
    date: "04/10/21",
  },
];

export default function Table(props) {
  return (
    <Card className="h-full w-full">
      <MyProjectsHeader/>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
         <InitialRowOfTable/>
          <tbody>
            {TABLE_ROWS.map(({_id, title, author, domain, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      {/* <Avatar src={img} alt={name} size="sm" /> */}
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
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
                        className="font-normal"
                      >
                        {author}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">{domain}</div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                      {/* {date.date()} */}

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
        </table>
      </CardBody>
<MyProjectsFooter/>
    </Card>
  );
}
