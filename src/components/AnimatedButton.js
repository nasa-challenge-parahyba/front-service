import React from 'react';
import '../styles/animatedButton.css';

const AnimatedButton = ({ onClick, children }) => {
    return (
        <button className="animated-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default AnimatedButton;
