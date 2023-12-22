import Navbar from "../components/Navbar";
// import Card from "./Card";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination"

function HomePage(){
  return (<div>
    <Navbar/>
    <br/>
    <div className="ml-28 flex flex-row flex-wrap">

    <Card2 
    name="E-Portal Case management"
    descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
    />
        <Card2 
    name="E-Portal Case management"
    descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
    />
            <Card2 
    name="E-Portal Case management"
    descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
    />
                  <Card2 
      name="E-Portal Case management"
      descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
      />
                     <Card2 
      name="E-Portal Case management"
      descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
      />
                          <Card2 
      name="E-Portal Case management"
      descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
      />
                          <Card2 
      name="E-Portal Case management"
      descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
      />
    </div>
    <div className="ml-[65vw]"><Pagination/>
    </div>
<Footer/>
    </div>
  )
};

export default HomePage;