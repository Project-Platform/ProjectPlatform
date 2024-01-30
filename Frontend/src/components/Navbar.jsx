import React from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "./SessionProvider";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(SessionContext);
  const handleKeyPress = (event,word) => {
    if (event.key === "Enter") {
      // Call the async function
      navigate(`/search/${word}`,{state: word});
    }
  };
  const handleClick = async (word) => {
    navigate(`/search/${word}`,{state: word});
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (

      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/"
            className="ml-3 mr-4 cursor-pointer py-1.5 font-medium"
          >
            Project Platform
          </Typography>
          <div className="hidden items-center gap-x-2 lg:flex">
            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e, searchTerm)}
              />
              <div className="!absolute left-3 top-[13px]">
                <MagnifyingGlassIcon className="h-4 w-4" strokeWidth={2} />
              </div>
            </div>
            <Button onClick={() => handleClick(searchTerm)} size="md" className="rounded-lg ">
              Search
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              {user ? (
                <ProfileMenu image={user.avatar} />
              ) : (
                <Button
                  variant="text"
                  size="sm"
                  className="inline-block"
                  onClick={() => navigate("/login")}
                >
                  <span>Log In</span>
                </Button>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6 mr-0" />
              ) : (
                <Bars3Icon className="h-6 w-6 mr-0" />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav} className="ml-2">
          <br />
          <div className="container mx-auto">
            <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
              <div className="relative w-full gap-2 md:w-max">
                <Input
                  type="search"
                  placeholder="Search"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                  className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, searchTerm)}
                />
                <div className="!absolute left-3 top-[13px]">
                  <MagnifyingGlassIcon
                    className="h-4 w-4"
                    fill="black"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <Button onClick={() => handleClick(searchTerm)} size="md" className="mt-1 rounded-lg sm:mt-0">
                Search
              </Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
  );
}

export default StickyNavbar;
