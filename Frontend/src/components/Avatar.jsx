import { Avatar } from "@material-tailwind/react";
 
export function AvatarCustomStyles(props) {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src={props.src}
      className={props.className}
    />
  );
}

export default AvatarCustomStyles;