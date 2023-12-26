// import <</Card2 from "./CryptoCard";
import Card2 from "./Card2";
// import "./CryptoList.css";

const ProjectList = ({ trendingProjects }) => {
    return (
        <div className='Project_list ml-25 flex flex-row flex-wrap'>
            {trendingProjects.map((curr, index) => {
                return (
                    <Card2
                        key={index}
                        // image={coin.image}
                        name={curr.title}
                        // price={coin.current_price}
                        descp={curr.abstract}
                    />
                );
            })}
        </div>
    );
};

export default ProjectList;