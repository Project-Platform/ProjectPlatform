// import <</Card2 from "./CryptoCard";
import Card2 from "./Card2";
// import "./CryptoList.css";
// import SingleProject from "../components/SingleProject.jsx";

const SingleProject = ({ trendingProjects }) => {
    const param = useParams()
    const req=trendingProjects.filter((param,index) => {

        return param==index
    })

    console.log(req)


    return (
        <div className=' mt-25'>

        {req.abstract}

            {/* {trendingProjects.filter((param,index) => {

                return param==index

            } */}

            {/* //     return (
            //         <Card2 */}
            {/* //             key={index}
            //             id={index}
            //             // image={coin.image}
            //             name={curr.title}
            //             // price={coin.current_price} */}
            {/* //             descp={curr.abstract}
            //         />
            //     );
            // )} */}
        </div>
    );
};

export default SingleProject;