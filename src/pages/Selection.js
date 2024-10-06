import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Selection.css';
import videoVaca from '../assets/videos/vacas.mp4';
import videoC02 from '../assets/videos/co2.mp4';

const Selection = () => {

    const [backgroundColor, setBackgroundColor] = useState('black');
    const [isCurtainOpen, setIsCurtainOpen] = useState(false);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    const navigate = useNavigate();

    const handleMouseEnter = (videoRef) => {
        videoRef.current.play();
    };

    const handleMouseLeave = (videoRef) => {
        videoRef.current.pause();
    };

    const handleButtonClick = (color, path) => {
        setBackgroundColor(color);
        setIsCurtainOpen(true);
        navigate(path);
    };

    return (
        <div>
            <div className="continue-arrow-container" onClick={() => navigate('/game')}>
                <div className="continue-arrow">↓</div>
            </div>

            <div className="video-container" style={{ backgroundColor: backgroundColor }}>
                <div
                    className="video-box"
                    style={{ marginRight: isCurtainOpen ? '50%' : '5px', transition: 'margin 0.5s ease, width 0.5s ease' }}
                    onMouseEnter={() => handleMouseEnter(videoRef1)}
                    onMouseLeave={() => handleMouseLeave(videoRef1)}
                >
                    <video
                        ref={videoRef1}
                        src={videoVaca}
                        muted
                        loop
                        className="video"
                    />
                    {/* {CH4 && (
                    <div className="overlay">
                        <button className="checkmark-button">
                            <span className="checkmark">✔️</span>
                        </button>
                    </div>
                )} */}
                    <button
                        className="hover-button button1"
                        onClick={() => handleButtonClick('rgba(0, 0, 255, 0.5)', '/ch4')}
                    >
                        Methane CH4
                    </button>
                </div>
                <div
                    className="video-box"
                    style={{ marginLeft: isCurtainOpen ? '50%' : '5px', transition: 'margin 0.5s ease, width 0.5s ease' }}
                    onMouseEnter={() => handleMouseEnter(videoRef2)}
                    onMouseLeave={() => handleMouseLeave(videoRef2)}
                >
                    <video
                        ref={videoRef2}
                        src={videoC02}
                        muted
                        loop
                        className="video"
                    />
                    {/* {CO2 && (
                    <div className="overlay">
                        <button className="checkmark-button">
                            <span className="checkmark">✔️</span>
                        </button>
                    </div>
                )} */}
                    <button
                        className="hover-button button2"
                        onClick={() => handleButtonClick('rgba(255, 0, 0, 0.5)', '/co2')}
                    >
                        Carbon Dioxide CO2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Selection;