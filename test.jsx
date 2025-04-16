import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '/pages/HomePage.jsx'; // use relative path!
import './index.css';

// Onboarding screen component
function Onboarding() {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio('/skins2.mp3'); // must be in /public folder
    audio.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });

    // Navigate after short delay to let audio play (optional)
    setTimeout(() => {
      navigate('/home');
    }, 500); // Delay is optional; adjust to your liking
  };

  return (
    <div className="centre-box">
      <div className="styled-box">
        <div className="inner-content">
          <img src="/HJw95.png" alt="harry-jarvis-portfolio" className="hjp-logo" />
          <div className="right-side">
            <div className="teal-box" onClick={handleClick}>
              <img src="/chess.png" alt="User Icon" className="user-icon" />
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

// Old onboarding screen

.centre-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #008080;
  margin: 0;
  padding: 0;
}

.styled-box {
  background-color: #c0c0c0;
  width: 100%;
  max-width: 100%;
  height: 400px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Tahoma' sans-serif;
}

.hjp-logo {
  height: 370px;
  max-height: 100%;
  width: auto;
  margin-right: 15px;
  object-fit: contain;
  margin-left: 23%;
  filter: 
    drop-shadow(-1px -1px 0px white),
    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.6)),
    drop-shadow(2px 2px 4px rgba(0, 0, 0, 1));
}

.hjp-logo img {
  box-shadow:
  inset -1px -1px 0px black,
  inset 1px 1px 0px white,
  2px 2px 5px rgba(0, 0, 0, 0.2);
}

.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Tahoma' sans-serif;
}

.teal-box {
  background-color: #008080;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  height: 110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  font-family: 'Tahoma' sans-serif;
  cursor: pointer;
}

.user-icon {
  width: auto;
  height: 50px;
  margin-right: 10px;
  box-shadow:
    inset -2px -2px 0 white,
    inset 2px 2px 0 black,
    2px 2px 4px rgba(0, 0, 0, 0.3);
}

.user-desc {
  margin-top: 10px;
  color: black;
  font-size: 1.1rem;
  margin-left: 25px;
  color: #202020;
  text-shadow:
    -1px -1px 0 rgba(255, 255, 255, 0.2),
    1px 1px 0 black;
}

.user-click {
  color: #202020;
  font-size: 1.2rem;
  text-shadow:
  -1px -1px 0 rgba(255, 255, 255, 0.2),
  1px 1px 0 black;
}

.teal-box p{
  font-family: 'Tahoma', sans-serif;
}

.logo-wrapper {
  display: inline-block;
  box-shadow:
    inset -2px -2px 0 white,
    inset 2px 2px 0 black,
    2px 2px 4px rgba(0, 0, 0, 0.3);
}