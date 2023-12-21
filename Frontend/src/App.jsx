import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
// import StudentRegistrationForm from './pages/signUp/student';

// import Navbar from "./Navbar";
// import Card from "./Card";
// import Card2 from "./Card2";
// import Footer from "./Footer";
// import Pagination from "./Pagination"

// function HomePage(){
//   return (<div>
//     <Navbar/>
//     <br/>
//     <div className="ml-28 flex flex-row flex-wrap">

//     <Card2 
//     name="E-Portal Case management"
//     descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//     />
//         <Card2 
//     name="E-Portal Case management"
//     descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//     />
//             <Card2 
//     name="E-Portal Case management"
//     descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//     />
//                   <Card2 
//       name="E-Portal Case management"
//       descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//       />
//                      <Card2 
//       name="E-Portal Case management"
//       descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//       />
//                           <Card2 
//       name="E-Portal Case management"
//       descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//       />
//                           <Card2 
//       name="E-Portal Case management"
//       descp="An e-portal case management project is a digital platform designed to streamline and enhance the process of managing cases or incidents within an organization or a specific....."
//       />



//     {/* <Card2
//     name="Breast Cancer detection"
//     descp=""
//     /> */}
//     </div>
//     <div className="ml-[80vw]"><Pagination/>
//     </div>
// <Footer/>
//     </div>
//   )
// };

// export default HomePage;



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/student/register" element={<StudentRegistrationForm />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
