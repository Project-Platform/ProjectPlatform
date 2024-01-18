import { useLocation } from "react-router-dom";
import ProjectView from "../components/ProjectView";

export default function ProjectViewPage() {
  const location = useLocation();

  const response = location.state;
  const projectData = response.project
  console.log(response)

  return (
    <ProjectView
      title={projectData.title}
      abstract={projectData.abstract}
      author = {projectData.author}
      date={projectData.date}
      field={projectData.field}
      domain={projectData.domain}
      githubLink={projectData.githubLink}
      youtubeLink={projectData.youtubeLink}
      docs={projectData.docs}
    />
  );
}
