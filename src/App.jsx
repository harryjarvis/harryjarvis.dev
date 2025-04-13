import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '/pages/HomePage.jsx'; // use relative path!
import './App.css';

// Onboarding screen component
function Onboarding() {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio('/win95-startup.mp3'); // must be in /public folder
    audio.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });

    // Navigate after short delay to let audio play (optional)
    setTimeout(() => {
      navigate('/home');
    }, 300); // Delay is optional; adjust to your liking
  };

  return (
    <div className="centre-box">
      <div className="styled-box">
        <div className="inner-content">
          <img src="/HJw95.png" alt="harry-jarvis-portfolio" className="hjp-logo" />
          <div className="right-side">
            <div className="teal-box" onClick={handleClick}>
              <img src="/chess.png" alt="chess-picture-xp" className="user-icon" />
              <p className="user-click">User</p>
            </div>
            <p className="user-desc">To begin, click your user name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// App sets up the routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
