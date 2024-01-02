import ProjectCard from "./ProjectCard";

const ProjectList = ({ trendingProjects }) => {
  return (
    <div className="flex flex-row flex-wrap place-content-evenly">
      {trendingProjects.map((curr) => {
        return (
          <ProjectCard
            key={curr._id}
            name={curr.title}
            descp={curr.abstract}
            id={curr._id}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
