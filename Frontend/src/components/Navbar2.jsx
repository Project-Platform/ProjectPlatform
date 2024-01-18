import React from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "./SessionProvider";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";


export function StickyNavbar() {
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(SessionContext);
  // console.log(session, status);

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
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;
