import { useLocation } from "react-router-dom";
import ProjectView from "../components/ProjectView";

export default function ProjectViewPage() {
  const location = useLocation();

  const projectData = location.state;

  return (
    <ProjectView
      title={projectData.title}
      abstract={projectData.abstract}
      // author1={projectData.author[0]}
      // author2={projectData.author[1]}
      author = {projectData.author}
      date={projectData.date}
      field={projectData.field}
      domain={projectData.domain}
      githubLink={projectData.githubLink}
      youtubeLink={projectData.youtubeLink}
    />
  );
}
