import React, { useState, useEffect } from "react";
import PositionedText from "../components/PositionedText";
import IntroBox from "../components/IntroBox";
import DisappearingText from "../components/DisappearingText";
import Typewriter from "../components/Typewriter";
import VideoGlobe from "../components/VideoGlobe";
import VideoIntro from "../components/VideoIntro";
import AnimatedButton from "../components/AnimatedButton";
import "../styles/intro.css";
import { useNavigate } from 'react-router-dom';

function Intro() {
    const [firstTextGone, setFirstTextGone] = useState(false);
    const [secondTextGone, setSecondTextGone] = useState(false);
    const [isIntroEnded, setIsIntroEnded] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const [activeBox, setActiveBox] = useState(0);

    const navigate = useNavigate();

    const goToCarbonPage = () => {
        navigate('/selection');
    };

    const handleVideoEnd = () => {
        setTimeout(() => {
            setIsIntroEnded(true);
            setFirstTextGone(true);
            setShowButton(true);
        }, 1000);
    };

    const nextActiveBox = () => {
        setActiveBox((prev) => prev + 1);
    };

    return (
        <div className="intro">
            {/*GRAY BAR*/}
            {/* <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '200px',
                backgroundColor: 'rgba(128, 128, 128, 0.3)',
                zIndex: '1', // Usar um valor negativo
            }} /> */}



            <div>
                {isIntroEnded ? (
                    <VideoGlobe />
                ) : (
                    <VideoIntro onEnd={handleVideoEnd} />
                )}
            </div>
            <div>
                <PositionedText x="50%" y="50%">
                    <DisappearingText duration={7500} onDisappear={() => setFirstTextGone(true)}>
                        <Typewriter>
                            <h1>
                                The Earth is on the brink of collapse...
                            </h1>
                        </Typewriter>
                    </DisappearingText>
                </PositionedText>

                {firstTextGone && !secondTextGone && <PositionedText x="50%" y="50%">
                    <DisappearingText duration={7500} onDisappear={() => setSecondTextGone(true)}>
                        <Typewriter>
                            <h1>
                                Climate change is accelerating, and time is running out...
                            </h1>
                        </Typewriter>
                    </DisappearingText>
                </PositionedText>}

                {secondTextGone && activeBox === 0 && (
                    <PositionedText x="50%" y="15%">
                        <Typewriter>
                            <h1>Unveil the Story of Our Changing Planet</h1>
                        </Typewriter>
                    </PositionedText>
                )}

                {showButton && activeBox === 0 && <AnimatedButton onClick={nextActiveBox}>DISCOVER</AnimatedButton>}

                {activeBox === 1 && (
                    <IntroBox position={"top-left"} backgroundColor="rgb(0, 0, 0)">
                        <Typewriter textSpeed={20}>
                            <p>
                                With every turn of the Earth, the reality of climate change becomes harder to ignore. Excessive greenhouse gas emissions are overwhelming our atmosphere, warming the planet, and disrupting ecosystems.
                            </p>
                            {typeof nextActiveBox === 'function' && <NextButton onClick={nextActiveBox} />}
                        </Typewriter>
                    </IntroBox>
                )}

                {activeBox === 2 && <IntroBox position={"top-left"}>
                    <Typewriter textSpeed={20}>
                        <p>
                            It’s time to tell the true story of climate change.
                        </p>
                        {typeof nextActiveBox === 'function' && <NextButton onClick={nextActiveBox} />}
                    </Typewriter>
                </IntroBox>}

                {activeBox === 3 && <IntroBox position={"top-left"}>
                    <Typewriter textSpeed={20}>
                        <p>
                            Extreme events like more intense storms, devastating wildfires, and prolonged droughts are becoming part of our daily lives.
                        </p>
                        {typeof nextActiveBox === 'function' && <NextButton onClick={nextActiveBox} />}
                    </Typewriter>
                </IntroBox>}

                {activeBox === 4 && <IntroBox position={"top-left"}>
                    <Typewriter textSpeed={20}>
                        <p>
                            As we delve deeper into the climate crisis, we invite you to explore the key players behind the greenhouse effect: CO₂ (carbon dioxide) and CH₄ (methane).
                        </p>
                        {typeof nextActiveBox === 'function' && <NextButton onClick={goToCarbonPage} />}
                    </Typewriter>
                </IntroBox>}
            </div>
        </div>
    );
}

export default Intro;

const NextButton = ({ onClick }) => {
    const [hovered, setHovered] = useState(false);

    const styles = {
        button: {
            backgroundColor: 'transparent',
            border: '2px solid white',
            borderRadius: '50%',
            padding: '8px 10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s ease',
            ...(hovered && {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor de fundo ao passar o mouse
                transform: 'scale(1.1)', // Leve aumento ao passar o mouse
            }),
        },
        arrow: {
            color: 'white',
            fontSize: '18px',
        },
    };

    return (
        <button
            style={styles.button}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span style={styles.arrow}>&#9654;</span>
        </button>
    );
};