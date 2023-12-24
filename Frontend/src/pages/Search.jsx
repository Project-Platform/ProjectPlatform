"use client";
// import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
// import { useState } from "react";
import Avatar from "../components/Avatar";
import { words } from "../data";
// import

const Search = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((w) => w.includes(e.target.value)).slice(0, 8)
    );
  };

  return (
    // relative mt-10
    <form className="w-[500px] relative mt-[55px] ml-[32vw]  ">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full p-4 rounded-full bg-gray-300"
          onChange={(e) => handleSearch(e)}
        />
        <button>
          <Avatar
            src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3.5 bg-gray-400 rounded-full"
          />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-gray-600 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {/* <span>Tech Driven Solutions for undertrail Prisoners</span>
        <span>E-Portal Case Management</span> */}
        {
            activeSearch.map(s=>(
                <span> {s}</span>
            ))
        }
        
        
        </div>
      )}

      {/* <div className="absolute top-20 p-4 bg-gray-600 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"> */}
      {/* <span>Tech Driven Solutions for undertrail Prisoners</span>
        <span>E-Portal Case Management</span> */}

      {/* </div> */}
    </form>
  );
};

export default Search;
