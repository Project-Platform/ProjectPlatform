import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { searchResult } from "../services/searchData";


const AlgoliaSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchSearchResults = async () => {
    try {
      console.log("Search for:", searchTerm);
      const projects = await searchResult(searchTerm);
      console.log(projects);
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle the error as needed
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Call the async function
      fetchSearchResults();
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="group relative">
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          className="focus:!border-t-gray-900 group-hover:border-2 group-hover:!border-gray-900"
          labelProps={{
            className: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default AlgoliaSearch;
