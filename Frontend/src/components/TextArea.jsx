import { Textarea } from "@material-tailwind/react";

function TextArea(props) {
  return (
    <div className="md:col-span-2 lg:col-span-1 p-3 md:p-3 w-full">
      <Textarea label={props.label} />
    </div>
  );
}

export default TextArea;
