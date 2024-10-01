import React from 'react';
import './AnimatedTextBelowNavbar.css';

const AnimatedTextBelowNavbar = ({ text, nightMode }) => {
  return (
    <div className={`animated-text-below-navbar my-2 mp-2 ${nightMode ? 'night-mode' : ''}`}>
      <div className="text-container">{text}</div>
    </div>
  );
};

export default AnimatedTextBelowNavbar;
