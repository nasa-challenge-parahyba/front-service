import React from 'react';
import '../styles/Impact.css';
import image1 from "../assets/images/yellow.jpeg";
import image2 from "../assets/images/red.jpeg";
import image3 from "../assets/images/blue.jpeg";
import image4 from "../assets/images/green.jpeg";

export default function Impact2({ children }) {
    return (
        <div className="impact-container">
            <div className="quadrant quadrant-1">
                {children[0]}
            </div>
            <div className="quadrant quadrant-2">
                {children[1]}
            </div>
            <div className="quadrant quadrant-3">
                {children[2]}
            </div>
            <div className="quadrant quadrant-4">
                {children[3]}
            </div>

            <img src={image1} alt="imagem 1" className="round-image image-left" />
            <img src={image2} alt="imagem 2" className="round-image image-right" />
            <img src={image3} alt="imagem 3" className="round-image image-top" />
            <img src={image4} alt="imagem 4" className="round-image image-bottom" />
        </div>
    );
}