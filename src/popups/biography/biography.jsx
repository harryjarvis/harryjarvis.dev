import React from 'react';
import '/src/popups/biography/biography.css';

export default function BiographyPopup() {
    return (

<div className="biography-content">
    <div className="file-actions">
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>V</u>iew</span>
        <span><u>H</u>elp</span>
    </div>
        <div className="biography-inner-content">
        <div className="biography-picture-container">
            <img src="/HJ.png" alt="me!" className="biography-pic-1" />
        </div>
        <div className="biography-content-right">
            <h1 className="biography-title">Harry Jarvis</h1>
            <h1 className="biography-line1">
            Economics Graduate @ Manchester Metropolitan University
            </h1>
            <h1 className="biography-line2">Manchester, UK 📍 </h1>
            <div className="programming-buttons">
            <img alt="JavaScript" src="https://img.shields.io/badge/-Javascript-purple" />
            <img alt="HTML/CSS" src="https://img.shields.io/badge/-HTML/CSS-green" />
            <img alt="React" src="https://img.shields.io/badge/-React-blue" />
            <img alt="SQL" src="https://img.shields.io/badge/-SQL-yellow" />
            <img alt="Figma" src="https://img.shields.io/badge/-Figma-red" />
            </div>
            <span className="biography-line1">When Dan "⁠apEX⁠" Madesclaire was offered Vitality's in-game leader role...</span>
        </div>
        </div>
        <div className="object-information">
        <div className="object-info">1 object(s) selected</div>
        <div className="size-info">689KB</div>
    </div>
</div>
    )}