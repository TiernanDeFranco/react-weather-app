import React from 'react';
import './TempRangeBar.css';

const TempRangeBar = ({ start, end, value }) => {
    // Calculate the position of the marker
    let position = ((value - (start)) / ((end) - start)) * 100;

if (value === start) position += 6;
else if (value === end) position -= 6;

    return (
        <div className="bar-container">
            <div className="range-label">{start}</div>
            <div className="bar">
                <div className="marker" style={{ left: `${position}%` }}></div>
            </div>
            <div className="range-label">{end}</div>
        </div>
    );
};

export default TempRangeBar;
