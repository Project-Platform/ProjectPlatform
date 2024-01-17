import ProjectCard from "./ProjectCard";

const ProjectList = ({ trendingProjects }) => {
  return (
    <div>
      <h1 className="text-2xl  font-semibold text-gray-800 m-4 mt-12 flex flex-row place-content-center">
        Trending Projects
      </h1>
      <div className="flex flex-row flex-wrap place-content-center">
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
    </div>
  );
};

export default ProjectList;
