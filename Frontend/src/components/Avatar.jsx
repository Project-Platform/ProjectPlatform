import { Avatar } from "@material-tailwind/react";

export function AvatarCustomStyles() {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src="https://media.licdn.com/dms/image/D5603AQEtuQNXTpAocw/profile-displayphoto-shrink_200_200/0/1682246579147?e=2147483647&v=beta&t=whQ_rFU32x2UXTsyoDXZbCR8ktnopFy4kYRdLm5ssCM"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  );
}

export default AvatarCustomStyles;
