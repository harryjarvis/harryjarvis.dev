import React from 'react';
import BiographyPopup from './popups/biography/biography.jsx';

const popupData = {
  biography: { icon: '/manpc.png', title: 'About Me', width: 550, height: 442, showTopbar: true },
  music: { icon: '/music.png', title: 'My Music', width: 550, height: 442, showTopbar: true },
  mail: { icon: '/mail.png', title: 'Contact Me', width: 550, height: 442, showTopbar: true },
  photos: { icon: '/photos.png', title: 'Photos', width: 550, height: 442, showTopbar: true },
  whatsnew: { icon: '/whatsnew.png', title: 'Whats New', width: 550, height: 442, showTopbar: true },
  steam: { icon: '/steam.png', title: 'Steam Profile', width: '80vw', height: '80vh', showTopbar: false },
  msn: { icon: '/msn.png', title: 'MSN Messenger', width: 700, height: 500, showTopbar: false },
};

function Topbar({ name, closeWindow }) {
  return (
    <div className="dragbar">
      <div className="dragbar-left">
        <img src={popupData[name]?.icon || '/default.png'} alt={`${name}-icon`} className="dragbar-icon" />
        <span>{popupData[name]?.title || name}</span>
      </div>
      <div className="dragbar-right">
        <button className="window-btn minimise-btn">-</button>
        <button className="window-btn resize-btn">❐</button>
        <button className="window-btn close-btn" onClick={() => closeWindow(name)}>×</button>
      </div>
    </div>
  );
}

export default function Popups({ windows, handleMouseDown, closeWindow }) {
  return (
    <>
      {Object.entries(windows).map(([name, win]) => {
        if (!win.isOpen) return null;

        const { width = 550, height = 442, showTopbar = true } = popupData[name] || {};
        const isSteam = name === 'steam';

        const popupStyles = {
          position: 'absolute',
          top: isSteam ? '50vh' : win.position.y,
          left: isSteam ? '50vw' : win.position.x,
          transform: isSteam ? 'translate(-50%, -50%)' : 'none',
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          backgroundColor: 'var(--taskbar-gray)',
          border: '2px solid white',
          zIndex: 1000,
        };

        return (
          <div
            key={name}
            onMouseDown={(e) => handleMouseDown(e, name)}
            style={popupStyles}
            className={`${name}-window`}
          >
            {showTopbar && (
              <Topbar name={name} closeWindow={closeWindow} />
            )}

            {name === 'biography' && <BiographyPopup />}

            {name === 'music' && <MusicPopup/>}

            {name === 'mail' && <MailPopup/>}
            
            {name === 'photos' && <PhotosPopup/>}
            
            {name === 'msn' && <MSNPopup/>}
            
            {name === 'steam' && <steamPopup/>}
            
            
          </div>
        );
      })}
    </>
  );
}
