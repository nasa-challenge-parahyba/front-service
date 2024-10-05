import React, { useState, useEffect } from "react";
import Intro from "./pages/Intro";

function App() {
  const [firstTextGone, setFirstTextGone] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // INTRO VIDEO
  const [isIntroEnded, setIsIntroEnded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleVideoEnd = () => {
    setFadeIn(true);
    setTimeout(() => {
      setIsIntroEnded(true);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App" style={{ height: "100vh", position: "relative" }}>
      <Intro />
    </div>
  );
}

export default App;