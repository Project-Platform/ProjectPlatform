import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import results from "../utils/filterProjects";
import { useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import {
  Card,
  Button,
  CardBody,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Drawer,
  Checkbox
} from "@material-tailwind/react";
const computerScienceTags = [
  "3D Printing",
  "Artificial Intelligence",
  "Agriculture",
  "Automation",
  "Blockchain",
  "Cloud Computing",
  "Communication",
  "Computer Science",
  "Cybersecurity",
  "Data Privacy",
  "Data Science",
  "Data Streaming",
  "Deep Learning",
  "Diagnostics",
  "Drones",
  "E-commerce",
  "Education",
  "Education Technology",
  "Embedded Systems",
  "Energy",
];

export function TestimonialCard() {
    const navigate = useNavigate();
  const location = useLocation();
  const word = location.state || "";
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  const [open, setOpen] = useState(false);
  const [dataProject, setDataProject] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [message, setMessage] = useState(null);

  const updateViewportWidth = () => {
    setViewportWidth(document.documentElement.clientWidth);
  };

    const openDrawer = () => {
        setOpen(true);
      };
    
      const closeDrawer = () => {
        setOpen(false);
      };
  
    useEffect(() => {
      window.addEventListener('resize', updateViewportWidth);
  
      return () => {
        window.removeEventListener('resize', updateViewportWidth);
      };
    }, []);

  const handleResults = async (selectedTags) => {
    try {
      const searchResults = await results(word, selectedTags);
      setDataProject(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
      showAlertMessage("Error fetching search results:");
      // Handle the error as needed
    }
  };

  const handleCheckboxChange = async (tag) => {
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = prevCheckedItems.includes(tag)
        ? prevCheckedItems.filter((item) => item !== tag)
        : [...prevCheckedItems, tag];

      if (updatedCheckedItems.length > 0) {
        handleResults(updatedCheckedItems);
      }

      return updatedCheckedItems;
    });
  };

  useEffect(() => {
    handleResults(checkedItems);
  }, [word, checkedItems]);

  const handleClick = async (id) => {
    navigate(`/ProjectPage/${id}`, { state: id });
  };
  const showAlertMessage = (message) => {
    setMessage({ type: "error", message});
  };

  return (
    <div >
      {viewportWidth <= 640 ? (
        <div>
          <div className='flex justify-center mt-8'>
            <Button onClick={openDrawer} size="lg">Filters</Button>
          </div>
          <Drawer open={open} onClose={closeDrawer} className="p-4 w-320px">
            {/* Drawer content for small viewport */}
            <div className="h-screen bg-white w-[17rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto pt-2 fixed">
    <Card className="h-[calc(100vh-2rem)] bg-white w-full max-w-[17rem] p-4 shadow-xl shadow-blue-900/5 overflow-y-auto">
    <div className="mb-6">
      <Typography variant="h4" color="black">
        Filters:
      </Typography>
      </div>
      <List>
        {computerScienceTags.map((tag) => (
          <ListItem key={tag} className="p-0 h-8">
            <label
              htmlFor={`vertical-list-${tag}`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={`vertical-list-${tag}`}
                  ripple={false}
                  checked={checkedItems.includes(tag)}
                  onChange={() => handleCheckboxChange(tag)}
                  className="hover:before:opacity-0 w-4 h-4"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {tag}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
    </div>
          </Drawer>
        </div>
      ) : (
        <div className="w-[18rem] overflow-y-auto pt-2 fixed">
          {/* Content for large viewport */}
          <Card className="h-[80vh] bg-white w-full max-w-[18rem] p-2 shadow-xl shadow-blue-900/5">
    <div className="mb-6 flex items-center justify-between">
      <Typography variant="h4" color="black">
        Filters:
      </Typography>
      </div>
      <List>
        {computerScienceTags.map((tag) => (
          <ListItem key={tag} className="p-0 h-8">
            <label
              htmlFor={`vertical-list-${tag}`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={`vertical-list-${tag}`}
                      ripple={false}
                      checked={checkedItems.includes(tag)}
                      onChange={() => handleCheckboxChange(tag)}
                      className="hover:before:opacity-0 w-4 h-4"
                      containerProps={{
                        className: "p-0",
                      }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {tag}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
        </div>
      )}
      {dataProject.projectNo === 0 && (
          <h1 className="m-4 flex items-center justify-center font-bold text-2xl">
          No projects found for the chosen set of filters. These are some relevant projects that may interest you.
        </h1>
        
        )}
      <div className="m-2 mt-8 p-4 w-[140 vh] grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-72">
        {dataProject.ans && dataProject.ans.map((project, index) => (
          <Card key={project._id} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-20[rem] flex-row mb-6">
            <CardBody>
              <Typography variant="h4" color="black" className="mb-4 uppercase">
                {project.title}
              </Typography>
              <Typography color="blue-gray" className="font-semibold">
                Domain: {project.domain.join(" , ")}
              </Typography>
              <Typography color="blue-gray" className="mb-4">
                {project.abstract.length > 270
                  ? project.showFullDescription
                    ? project.abstract
                    : project.abstract.slice(0, 270) + " ...."
                  : project.abstract}
              </Typography>
              <a className="inline-block">
                <Button onClick={() => handleClick(project._id)}>
                  Read More
                </Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
