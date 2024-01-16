import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectViewPage from "./pages/ProjectViewPage";
import HomePage from "./pages/homePage";
import AuthorProfilePage from "./pages/AuthorProfilePage";
import StudentProfile from "./pages/StudentProfile";
import MyProjects from "./pages/MyProjects";
import MyProfile from "./pages/MyProfile";
import ProjectUploadPage from "./pages/ProjectUploadPage";
import LoginPage from "./pages/loginPage.jsx";
import SearchResults from "./pages/searchPage.jsx";
import Layout2 from "./components/Layout2.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />           
            <Route path="/MyProjects" element={<MyProjects />} />
            <Route path="/StudentProfile" element={<StudentProfile />} />
            <Route path="/ProjectPage/:id" element={<ProjectViewPage />} />
            <Route path="/AuthorProfile" element={<AuthorProfilePage />} />
            <Route path="/search/:word" element={<SearchResults />} />
          </Route>
          <Route path="/" element={<Layout2 />}>
            <Route path="/Projectupload" element={<ProjectUploadPage />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
