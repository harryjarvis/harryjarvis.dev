// Import global styles and required packages
import '/src/index.css';
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';

// Clock component: Displays a live-updating time string in HH:MM AM/PM format
function Clock() {
  const [time, setTime] = useState(() => new Date()); // initial time state

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000); // update every second
    return () => clearInterval(interval); // cleanup on component unmount
  }, []);

  // Format time with uppercase AM/PM
  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return <span>{formattedTime.toUpperCase()}</span>;
}

// Main component: HomePage
export default function HomePage() {

  // State to control whether calendar is visible
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  // State to control whether start menu is visible
  const [isStartMenuVisible, setIsStartMenuVisible] = useState(false);

  // start menu changing color on click
  const [isStartMenuOpen, setStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    setStartMenuOpen(prev => !prev);
  }

  // Refs for detecting outside clicks
  const calendarRef = useRef(null);
  const startMenuRef = useRef(null);

  // Handle clicking the time box (toggles calendar)
  const handleTimeBoxClick = () => {
    setIsCalendarVisible((prev) => !prev); // toggle calendar
    setIsStartMenuVisible(false); // close start menu
  };

  // Handle clicking the start button (toggles start menu)
  const handleStartButtonClick = () => {
    setIsStartMenuVisible((prev) => !prev); // toggle start menu
    setIsCalendarVisible(false); // close calendar
  };

  // Effect: Close both menus when clicking outside of them
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideCalendar =
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        !event.target.closest('.right-task'); // ignore clicks inside clock

      const clickedOutsideStartMenu =
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target) &&
        !event.target.closest('.start-button'); // ignore clicks inside start button

      // If clicked outside both areas, close both menus
      if (clickedOutsideCalendar && clickedOutsideStartMenu) {
        setIsCalendarVisible(false);
        setIsStartMenuVisible(false);
      }
    }

    // Attach listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside); // cleanup
  }, []);

  // Desktop icon state component

  const [windows, setWindows] = useState({});

const openWindow = (name) => {
  setWindows((prev) => ({
    ...prev,
    [name]: {
      isOpen: true,
      position: { x: 150, y: 150 }
    }
  }));
};

const closeWindow = (name) => {
  setWindows((prev) => ({
    ...prev,
    [name]: {
      ...prev[name],
      isOpen: false,
    }
  }));
};

// dragging windows

const [draggingWindow, setDraggingWindow] = useState(null);
const dragOffset = useRef({ x: 0, y: 0 });

const handleMouseDown = (e, name) => {
  if (!windows[name]) return;
  setDraggingWindow(name);
  dragOffset.current = {
    x: e.clientX - windows[name].position.x,
    y: e.clientY - windows[name].position.y,
  };
};

const handleMouseMove = (e) => {
  if (!draggingWindow) return;
  setWindows((prev) => ({
    ...prev,
    [draggingWindow]: {
      ...prev[draggingWindow],
      position: {
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      }
    }
  }));
};

const handleMouseUp = () => setDraggingWindow(null);

useEffect(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
}, [draggingWindow]);

/* PLACE DIVS HERE */
/* PLACE DIVS HERE */
/* PLACE DIVS HERE */
/* PLACE DIVS HERE */
/* PLACE DIVS HERE */
/* PLACE DIVS HERE */
/* PLACE DIVS HERE */

  return (
    <div className="bliss">

      <div className="desk-rows">

        {/* desktop icons - row1 */}
        <div className="desk-items">
        
          {/* biography */}
          <div className="desk-biography" onDoubleClick={() => openWindow("biography")}>
            <img src="/computer.png" alt="biography-icon" className="desk-icon-biography"/>
            <span className="desk-biography">Biography</span>
          </div>

          {/* music */}
          <div className="desk-music" onDoubleClick={() => openWindow("music")}>
            <img src="/music.png" alt="music-icon" className="desk-icon-music"/>
            <span className="desk-music">My Music</span>
          </div>

          {/* mail */}
          <div className="desk-mail">
            <img src="/mail.png" alt="mail-icon" className="desk-icon-mail"/>
            <span className="desk-mail">Mail</span>
          </div>

          {/* MSN */}
          <div className="desk-msn">
            <img src="/msn.png" alt="msn-icon" className="desk-icon-msn"/>
            <span className="desk-msn">MSN</span>
          </div>

          {/* steam */}
          <div className="desk-steam">
            <img src="/steam.png" alt="steam-icon" className="desk-icon-steam"/>
            <span className="desk-steam">Steam</span>
          </div>
        </div>

          {/* desktop icons - row2 */}
        <div className="desk-items2">
            
              {/* photos */}
              <div className="desk-photos">
                <img src="/photos.png" alt="photos-icon" className="desk-icon-photos"/>
                <span className="desk-photos">Photos</span>
              </div>

              {/* counter-strike */}
              <div className="desk-cs">
                <img src="/counterstrike.png" alt="cs-icon" className="desk-icon-cs"/>
                <span className="desk-cs">Counter-Strike</span>
              </div>
          </div>

        

      </div>

      {/* desktop icons - ON OPEN */  }

{/* BIOGRAPHY */}
      {Object.entries(windows).map(([name, win]) =>
  win.isOpen ? (
    <div
      key={name}
      className="biography"
      onMouseDown={(e) => handleMouseDown(e, name)}
      style={{
        position: 'absolute',
        top: win.position.y,
        left: win.position.x,
        width: '500px',
        minWidth: '500px',
        height: '400px',
        backgroundColor: 'var(--taskbar-gray)',
        border: '2px solid white',
        zIndex: 1000,
      }}>
      <div className="biography-window-topbar">
        <div className="biography-wt-leftside">
          <img src="/computer.png" alt="computer-icon" className="biography-icon-mini"/>
          <span>Biography</span>
        </div>

        <div className="biography-wt-rightside">
          <button className="biography-min-btn">_</button>
          <button className="biography-close-btn" onClick={() => closeWindow(name)}>x</button>
        </div>
      </div>

      <div className="biography-content">
        <div className="biography-picture-container">
          <img src="/HJ.png" alt="me!" className="biography-pic-1"/>
        </div>

        <div className="biography-content-right">
          
          <h1 className="biography-title">Harry Jarvis</h1>
          <h1 className="biography-line1">Economics Graduate @ Manchester Metropolitan University,
          aspiring front-end web developer  
          </h1>

          <h1 className="biography-line2">📍 Manchester, UK</h1>

          <div className="programming-buttons">
            <img className="JS" alt="JavaScript" src="https://img.shields.io/badge/-Javascript-green"/>
            <img className="HTML/CSS" alt="HTML/CSS" src="https://img.shields.io/badge/-HTML/CSS-orange"/>
            <img className="React" alt="React" src="https://img.shields.io/badge/-React-blue"/>
            <img className="SQL" alt="SQL" src="https://img.shields.io/badge/-SQL-red"/>
            <img className="Figma" alt="Figma" src="https://img.shields.io/badge/-Figma-purple"/>
            <img className="Photoshop" alt="Photoshop" src="https://img.shields.io/badge/-Photoshop-gray"/>
          </div>

          <h1 className="biography-line3">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and 
            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
             pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through 
             weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly
              simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents 
              our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain 
              circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures
               have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle 
               of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</h1>
        </div>
      </div>

    </div>

  ) : null
)}

{/* Music */}

{/* Taskbar */}
      <div className="taskbar">

 {/*      <button className="start-button" onClick={handleStartButtonClick}>
          <img src="/win95old.png" alt="start" className="start-icon" />
          <span className="start-text">Start</span>
        </button>  */}

        <button
      className={`start-button ${isStartMenuVisible ? 'start-button-active' : ''}`}
      onClick={handleStartButtonClick}>

      <img src="/win95old.png" alt="start" className="start-icon" />
      <span className="start-text">Start</span>
      </button>

        {/* Clock */}
        <div className="right-task" onClick={handleTimeBoxClick}>
          <img src="/network.png" alt="network" className="right-task-icon"/>
          <Clock />
        </div>

        {/* Calendar (shows on toggle) */}
        {isCalendarVisible && (
          <div className="calendar-model" ref={calendarRef}>
            <div className="calendar-container">
              <Calendar />
            </div>
          </div>
        )}
      </div>

      {/* Start Menu (shows on toggle) */}
      {isStartMenuVisible && (
        <div className="start-menu" ref={startMenuRef}>
          {/* Vertical strip on the left with image */}
          <div className="start-strip">
            <img src="/HJ25(1).png" alt="strip-logo" className="start-strip-logo" />
          </div>

          {/* Menu items on the right */}
          <div className="start-content">

            {/* Biography */}
            <div className="start-item-biography" onClick={() => window.location.href = '/'}>
              <img src="/computer.png" alt="computer" className="biography-icon" />
              <span>Biography</span>
            </div>

            {/* Placeholder */}
            <div className="start-item-placeholder" onClick={() => window.location.href = '/'}>
              <img src="/openfolder.png" alt="placeholder" className="placeholder-icon"/>
              <span>Placeholder</span>
            </div>

            {/* Resume Button */}
            <div className="start-item-resume" onClick={() => window.location.href = '/'}>
              <img src="/folder.png" alt="resume" className="resume-icon" />
              <span>Resume</span>
            </div>

            {/* Instagram */}
            <div className="start-item-insta" onClick={() => window.location.href = 'https://www.instagram.com/'}>
              <img src="/insta.png" alt="insta" className="insta-icon" />
              <span>Instagram</span>
            </div>

            {/* GitHub */}
            <div className="start-item-github" onClick={() => window.location.href = 'https://github.com/harryjarvis'}>
              <img src="/github.png" alt="github" className="github-icon" />
              <span>Github</span>
            </div>

            {/* LinkedIn */}
            <div className="start-item-linked" onClick={() => window.location.href = 'https://www.linkedin.com/in/harryjamesjarvis/'}>
              <img src="/linked.png" alt="linkedin" className="linked-icon" />
              <span>LinkedIn</span>
            </div>

            {/* Shut Down */}
            <div className="start-item-shutdown" onClick={() => window.location.href = '/'}>
              <img src="/shutdown.png" alt="shutdown" className="shutdown-icon" />
              <span>Shut Down...</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
