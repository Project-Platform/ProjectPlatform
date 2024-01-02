import React from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { useSession, signIn } from "next-auth/react";


export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { data: session, status } = useSession();
  // console.log(session, status);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Search
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+24px)]">
      <Navbar className="mt-6 mr-0 sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/"
            className="ml-3 mr-4 cursor-pointer py-1.5 font-medium"
          >
            Project Platform
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {status === "authenticated" ? (
                <ProfileMenu image={session.user.image} />
              ) : (
                <Button
                  variant="text"
                  size="sm"
                  className="inline-block"
                  onClick={() => signIn()}
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
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;
