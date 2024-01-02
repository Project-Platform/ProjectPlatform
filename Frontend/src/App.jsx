import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectViewPage from "./pages/ProjectViewPage";
import HomePage from "./pages/homePage";
import AuthorProfilePage from "./pages/AuthorProfilePage";
import ProjectUploadPage from "./pages/ProjectUploadPage";
import WordSearch from "./components/search.jsx"; // Renamed to WordSearch
import Results  from "./components/Result.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Projectupload" element={<ProjectUploadPage />}/>            
            <Route path="/ProjectPage/:id" element={<ProjectViewPage />} />
            <Route path="/AuthorProfile" element={<AuthorProfilePage />} />
            <Route path="/search" element={<WordSearch />} />
            <Route path="/search/:word" element={<Results />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
