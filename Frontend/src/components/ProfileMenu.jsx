import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  FolderOpenIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/solid";

import { signOut } from "next-auth/react";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    route: "/MyProfile", // Add the route path
  },
  {
    label: "My Projects",
    icon: FolderOpenIcon,
    route: "/MyProjects", // Add the route path
  },
  {
    label: "Upload Projects",
    icon: DocumentPlusIcon,
    route: "/Projectupload", // Add the route path
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ image, update }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={image}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, route }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={isLastItem ? () => signOut() : closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {" "}
              {route ? (
                <Link
                  to={route}
                  onClick={closeMenu}
                  style={{ textDecoration: "none" }}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}

                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </Link>
              ) : (
                <>
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}

                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
