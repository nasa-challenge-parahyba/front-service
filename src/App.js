import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SelectionProvider } from './components/SelectionProvider';
import Intro from "./pages/Intro";
import PageCarbon from "./pages/PageCarbon";
import PageMethane from "./pages/PageMethane";
import Selection from "./pages/Selection";
import UnityGame from "./pages/UnityGame";

function App() {
  const [firstTextGone, setFirstTextGone] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SelectionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/co2" element={<PageCarbon />} />
          <Route path="/ch4" element={<PageMethane />} />
          <Route path="/game" element={<UnityGame />} />
        </Routes>
      </Router>
    </SelectionProvider>
  );
}

export default App;
