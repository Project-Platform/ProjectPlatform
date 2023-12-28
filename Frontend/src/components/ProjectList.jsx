import Card2 from "./Card2";

const ProjectList = ({ trendingProjects }) => {
  return (
    <div className="ml-25 flex flex-row flex-wrap">
      {trendingProjects.map((curr) => {
        return <Card2 key={curr._id} name={curr.title} descp={curr.abstract} id={curr._id} />;
      })}
    </div>
  );
};

export default ProjectList;
