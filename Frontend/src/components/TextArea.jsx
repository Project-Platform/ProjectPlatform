import { Textarea } from "@material-tailwind/react";

function TextArea(props){
    return(<div className="flex p-3 md:p-3 col-span-2 md:col-span-1 lg:col-span-2 w-full md:w-auto">
    <Textarea label={props.label}/>    
</div>);
}

export default TextArea;