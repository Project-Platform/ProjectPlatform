import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import results from "../utils/filterProjects";
import AlertBox from "../components/AlertBox";
import {
  Card,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Drawer,
  Spinner,
  Checkbox,
} from "@material-tailwind/react";
import ProjectCard from "../components/ProjectCard";
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
  const location = useLocation();
  const word = location.state || "";
  const [viewportWidth, setViewportWidth] = useState(
    document.documentElement.clientWidth
  );
  const [loading, setLoading] = useState(false);
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
    window.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  const handleResults = async (selectedTags) => {
    try {
      setLoading(true);
      const searchResults = await results(word, selectedTags);
      setDataProject(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
      showAlertMessage("Error fetching search results:");
      // Handle the error as needed
    } finally {
      setLoading(false);
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

  const showAlertMessage = (message) => {
    setMessage({ type: "error", message });
  };

  return (
    <>
      {message && (
        <AlertBox
          type={message.type}
          message={message.message}
          onClose={setMessage}
        />
      )}
      <div className="flex flex-col">
        {viewportWidth <= 640 ? (
          <div>
            <div className="flex justify-center mt-8">
              <Button onClick={openDrawer} size="lg">
                Filters
              </Button>
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
        <div style={{ marginLeft: viewportWidth <= 640 ? "0px" : "288px" }}>
          {dataProject.projectNo === 0 && (
            <h1 className="m-4 flex items-center justify-center font-bold text-2xl">
              No projects found for the chosen set of filters. These are some
              relevant projects that may interest you.
            </h1>
          )}
          {loading && (
            <div className="flex items-center justify-center">
              <Spinner className="h-10 w-10 mt-80 mb-80" />
            </div>
          )}
          <div className="mt-8 p-4 grid grid-cols-1 m-2 gap-4 lg:grid-cols-2">
            {dataProject.ans &&
              dataProject.ans.map((project, index) => (
                <ProjectCard
                  className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-20[rem] flex-row mb-6"
                  key={project._id}
                  domain={project.domain}
                  name={project.title}
                  descp={project.abstract}
                  id={project._id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
