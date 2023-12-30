import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectViewPage from "./pages/ProjectViewPage";
import HomePage from "./pages/homePage";
import AuthorProfilePage from "./pages/AuthorProfilePage";
import StudentProfile from "./pages/StudentProfile";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/MyProjects" element={<MyProjects/>}/>

            <Route path="/StudentProfile" element={<StudentProfile/>}/>
            <Route path="/ProjectPage/:id" element={<ProjectViewPage />} />
            <Route path="/AuthorProfile" element={<AuthorProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
