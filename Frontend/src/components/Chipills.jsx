import { Chip } from "@material-tailwind/react";
 
export default function ChipPills(props) {
  return (
    <div className="flex gap-2">

      <Chip variant="ghost" value={props.name} className="rounded-full my-1 " />
    </div>
  );
}