import React from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "./SessionProvider";

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

import axios from "axios";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    route: "/MyProfile",
  },
  {
    label: "My Projects",
    icon: FolderOpenIcon,
    route: "/MyProjects",
  },
  {
    label: "Upload Projects",
    icon: DocumentPlusIcon,
    route: "/Projectupload",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ image }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { setUser } = React.useContext(SessionContext);

  const signOut = async () => {
    const response = await axios.get("/api/auth/signout");
    setUser(response.data.user);
    navigate("/")
  };

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
            className="border border-gray-900 p-0.5"
            alt="User"
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
              onClick={
                isLastItem
                  ? () => {
                      signOut();
                    }
                  : () => navigate(route)
              }
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
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
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
