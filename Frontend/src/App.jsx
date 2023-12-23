import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ProjectViewPage from './pages/ProjectViewPage';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import StudentRegistrationForm from './pages/signUp/student';
import AuthorProfilePage from './pages/AuthorProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<LoginPage />} />
          <Route path="/student/register" element={<StudentRegistrationForm />} />
          <Route path="/ProjectPage" element={<ProjectViewPage/>} />
          <Route path="/AuthorProfile" element={<AuthorProfilePage/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
