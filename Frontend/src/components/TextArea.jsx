import { Textarea } from "@material-tailwind/react";

function TextArea(props){
    return(<div className="w-100">
    <Textarea label={props.label} />    
</div>);
}

export default TextArea;