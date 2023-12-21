import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
// import StudentRegistrationForm from './pages/signUp/student';


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
