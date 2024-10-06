import React from 'react';
import '../styles/GrayFilter.css';

const GrayFilter = ({ isVisible, onClick }) => {
    if (!isVisible) return null;

    return (
        <div className="gray-filter" onClick={onClick}>
        </div>
    );
};

export default GrayFilter;