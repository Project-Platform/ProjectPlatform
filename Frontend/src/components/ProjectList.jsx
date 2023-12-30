import Card2 from "./Card2";

const ProjectList = ({ trendingProjects }) => {
  return (
    <div className="flex flex-row flex-wrap place-content-evenly">
      {trendingProjects.map((curr, index) => {
        return <Card2 key={index} name={curr.title} descp={curr.abstract} id={curr._id} />;
      })}
    </div>
  );
};

export default ProjectList;
