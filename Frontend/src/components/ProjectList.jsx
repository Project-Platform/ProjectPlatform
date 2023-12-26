import Card2 from "./Card2";

const ProjectList = ({ trendingProjects }) => {
  return (
    <div className="Project_list ml-25 flex flex-row flex-wrap">
      {trendingProjects.map((curr, index) => {
        return <Card2 key={index} name={curr.title} descp={curr.abstract} />;
      })}
    </div>
  );
};

export default ProjectList;
