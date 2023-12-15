import React from 'react';
import '../../App.css';

const ProgressBar = ({ value, label }) => {
  const backgroundColor = 'rgb(219, 52, 136)'; // Set the background color to the specified pink shade
  const textColor = 'rgb(0, 0, 0)'; // Set the text color to black
  const uniqueId = Math.random().toString(36).substring(7);

  return (
    <div role="progressbar" id={`progressbar-${uniqueId}`} aria-labelledby={`progressbarLabel-${uniqueId}`} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <div
        className="progress-bar"
        style={{ width: `${value}%`, backgroundColor, color: textColor, textAlign: 'right' }}
      >
        <span id={`progressbarLabel-${uniqueId}`}>{`${value.toFixed(2)}%`}</span>
      </div>
    </div>
  );
  
  
};





export default ProgressBar;
