import { Link } from "react-router-dom";

export default function ProjectView(props) {
  const myArray = props.author;
  const arrayElementsWithSpaces = myArray.join(' ');
  return (
    <div className="min-h-screen">
      <h1 className="font-semibold text-5xl ml-[18vw] mt-[3vw] underline underline-offset-auto ">
        {props.title}
      </h1>
      <h2 className="font-medium text-lg ml-[18vw] mt-[1vw]">
        Authors: {arrayElementsWithSpaces}
    </h2>

      <h2 className="font-medium text-lg ml-[18vw]">Date: {props.date}</h2>

      <h2 className="font-medium text-lg ml-[18vw]">
        Domain: {props.domain1}, {props.domain2}
      </h2>

      <p className="p-5 mx-60  text-xl ">{props.abstract}</p>
      <div className="ml-[17vw] mt-[1vw]">
        <Link to={props.githubLink}>GitHub Link</Link>
        <br />
        <Link to={props.youtubeLink}>Youtube Link</Link>
      </div>
    </div>
  );
}
