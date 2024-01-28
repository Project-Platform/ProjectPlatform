import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProjectViewPage from "./pages/ProjectViewPage";
import HomePage from "./pages/homePage";
import MyProjects from "./pages/MyProjects";
import MyProfile from "./pages/MyProfile";
import ProjectUploadPage from "./pages/ProjectUploadPage";
import LoginPage from "./pages/loginPage.jsx";
import SearchResults from "./pages/searchPage.jsx";
import Layout2 from "./components/Layout2.jsx";
import AuthorProfilePage from "./pages/AuthorProfilePage"; 
import { SessionContext } from "./components/SessionProvider.jsx";
import { useContext } from "react";

function App() {
  const { user } = useContext(SessionContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/MyProjects"
              element={user ? <MyProjects /> : <Navigate to="/login" />}
            />
            <Route path="/ProjectPage/:id" element={<ProjectViewPage />} />
            <Route path="/search/:word" element={<SearchResults />} />
            <Route path="/profile/:username" element={<AuthorProfilePage />} />
          </Route>
          <Route path="/" element={<Layout2 />}>
            <Route
              path="/Projectupload"
              element={user ? <ProjectUploadPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/MyProfile"
              element={user ? <MyProfile /> : <Navigate to="/login" />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;