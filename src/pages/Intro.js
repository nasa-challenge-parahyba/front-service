import React, { useState, useEffect } from "react";
import PositionedText from "../components/PositionedText";
import DisappearingText from "../components/DisappearingText";
import Typewriter from "../components/Typewriter";
import VideoGlobe from "../components/VideoGlobe";
import VideoIntro from "../components/VideoIntro";
import AnimatedButton from "../components/AnimatedButton";
import "../styles/intro.css";

function Intro() {
    const [firstTextGone, setFirstTextGone] = useState(false);
    const [isIntroEnded, setIsIntroEnded] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleVideoEnd = () => {
        setTimeout(() => {
            setIsIntroEnded(true);
            setFirstTextGone(true);
            setShowButton(true);
        }, 1000);
    };

    return (
        <div className="intro">
            <div>
                {isIntroEnded ? (
                    <VideoGlobe />
                ) : (
                    <VideoIntro onEnd={handleVideoEnd} />
                )}
            </div>
            <div>
                <PositionedText x="50%" y="50%">
                    <DisappearingText duration={15000} onDisappear={() => setFirstTextGone(true)}>
                        <Typewriter>
                            <h1>
                                The Earth is on the brink of collapse. Climate change is accelerating, and time is running out...
                            </h1>
                        </Typewriter>
                    </DisappearingText>
                </PositionedText>

                {firstTextGone && (
                    <PositionedText x="50%" y="15%">
                        <Typewriter>
                            <h1>Unveil the Story of Our Changing Planet</h1>
                        </Typewriter>
                    </PositionedText>
                )}
            </div>
            {showButton && <AnimatedButton>DISCOVER</AnimatedButton>}
        </div>
    );
}

export default Intro;
