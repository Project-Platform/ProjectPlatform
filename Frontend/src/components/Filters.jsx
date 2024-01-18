import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchResult } from "../services/searchData";
import { useNavigate } from "react-router-dom";
import { getProjectById } from "../services/projectData";
import results from "../utils/filterProjects";
import {
    Card,
    Button,
    Drawer,
    CardBody,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Checkbox,
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

export default function Filters(){
    const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
    const [open, setOpen] = useState(false);
    const [dataProject, setDataProject] = useState([]);
    const openDrawer = () => {
        setOpen(true);
      };
    
      const closeDrawer = () => {
        setOpen(false);
      };
  
    const updateViewportWidth = () => {
      setViewportWidth(document.documentElement.clientWidth);
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
          // Handle the error as needed
        }
      };
    
      const handleCheckboxChange = async (tag) => {
        // Toggle the checked state of the tag
        setCheckedItems((prevCheckedItems) => {
          const updatedCheckedItems = prevCheckedItems.includes(tag)
            ? prevCheckedItems.filter((item) => item !== tag)
            : [...prevCheckedItems, tag];
    
          // Call the results function with the updatedCheckedItems
          if (updatedCheckedItems.length > 0) {
            handleResults(updatedCheckedItems);
          }
    
          return updatedCheckedItems;
        });
      };
    
      const location = useLocation();
      const word = location.state || "";
      const [checkedItems, setCheckedItems] = useState([]);

      useEffect(() => {
        // Use handleResults directly inside the useEffect
        handleResults(checkedItems);
      }, [word, checkedItems]);

    if(viewportWidth <=640){
        return(
            <div>
            <div className='flex justify-center mt-8'><Button onClick={openDrawer} size="lg">Filters</Button></div>
        <Drawer open={open} onClose={closeDrawer} className="p-4 w-320px">
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
        );
    }else{
        return(
            <div className=" w-[18rem] overflow-y-auto pt-2 fixed">
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
        );
    }
}