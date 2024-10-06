import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

import '../styles/Carbon.css';

import PositionedBox from '../components/PositionedBox';
import Impact from './Impact';
import CO2FossilFuel from '../components/Maps/CO2FossilFuel'; // Importa o novo componente
import SlideIn from '../components/SlideIn';

import img1 from '../assets/images/carbon/introduçao.jpg';
import img2 from '../assets/images/carbon/carvao.jpg';
import img3 from '../assets/images/carbon/combustivelfossil.jpg';
import img4 from '../assets/images/carbon/desmatamento.jpg';
import img5 from '../assets/images/carbon/processoindustrial.jpg';
import img6 from '../assets/images/carbon/vulcan.jpg';
import img7 from '../assets/images/carbon/leao.jpg';
import img8 from '../assets/images/carbon/decomposiçao.jpg';
import img9 from '../assets/images/carbon/vulcao.jpg';
import img10 from '../assets/images/carbon/oceano.jpg';

export default function PageCarbon({ CO2, setCO2, CH4, setCH4 }) {
  const navigate = useNavigate(); // Cria a instância de navegação

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      if (currentSection < sectionRefs.length - 1) {
        const nextSection = currentSection + 1;
        setCurrentSection(nextSection);
        sectionRefs[nextSection].current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (currentSection > 0) {
        const prevSection = currentSection - 1;
        setCurrentSection(prevSection);
        sectionRefs[prevSection].current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll, { passive: false });

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [])

  return (
    <div className="carbon-container" onWheel={handleScroll}>
      <div ref={sectionRefs[0]} className="section section1">
        <img src={img1} alt="Carbon Image" className="full-section-image" />
        <div className="text-carbon">
          <PositionedBox position={"top-left"}>
            <h1>CO2,</h1>
            <p>Let's dive into the world of carbon dioxide (CO₂), the most significant driver of the greenhouse effect</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[1]} className="section section2">
        <div className="text-carbon">
          <img src={img2} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Anthropogenic Causes</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p>Anthropogenic causes refer to human activities that result in CO₂ emissions and are mainly responsible for the increase in concentrations of this gas in the atmosphere. Main sources include:</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[2]} className="section section3">
        <div className="text-carbon">
          <img src={img3} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Burning of Fossil Fuels</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Burning of Fossil Fuels:</a> The combustion of coal, oil, and natural gas for electricity production, transport, and heating is responsible for a significant portion of global emissions.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[3]} className="section section4">
        <div className="text-carbon">
          <img src={img4} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Deforestation and Forest Degradation</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Deforestation and Forest Degradation:</a> Removing trees for agriculture, urbanization, or logging releases carbon stored in plants and soil. Furthermore, the loss of forests reduces the planet's ability to absorb CO₂.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[4]} className="section section5">
        <div className="text-carbon">
          <img src={img5} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Industrial Processes</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Industrial Processes:</a> The manufacturing of cement, steel, and chemical products emit CO₂ both through the burning of fossil fuels and through chemical reactions that occur during production.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[5]} className="section section6">
        <CO2FossilFuel />
      </div>

      <div ref={sectionRefs[6]} className="section section7">
        <div className="text-carbon">
          <img src={img6} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Natural Causes</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p>The natural causes of CO₂ emissions are processes that occur in the natural carbon cycle, including:</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[7]} className="section section8">
        <div className="text-carbon">
          <img src={img7} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Respiration of Organisms</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Respiration of Organisms:</a> All living organisms respire, releasing CO₂ as a byproduct. This process is a natural part of the carbon cycle, but on a global scale, its emissions are much smaller compared to anthropogenic ones.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[8]} className="section section9">
        <div className="text-carbon">
          <img src={img8} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Decomposition</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Decomposition:</a> The decomposition of organic matter by microorganisms also releases CO₂, contributing to emissions.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[9]} className="section section10">
        <div className="text-carbon">
          <img src={img9} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Volcanic Activities</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Volcanic Activities:</a> Volcanic eruptions release a considerable amount of CO₂ into the atmosphere. Although they are relatively rare events, their emissions can temporarily impact CO₂ concentrations.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[10]} className="section section11">
        <div className="text-carbon">
          <img src={img10} alt="Carbon Image" className="full-section-image" />
          <PositionedBox position={"top-left"}>
            <h2>Oceans</h2>
          </PositionedBox>
          <PositionedBox position={"bottom-right"}>
            <p><a className="bold-a">Oceans:</a> The oceans absorb CO₂ from the atmosphere, but they also release some of this carbon back due to natural processes such as marine respiration and gas exchange at the surface.</p>
          </PositionedBox>
        </div>
      </div>

      <div ref={sectionRefs[11]} className="section section12">
        <Impact>
          <>
            <h2 className="impact-title">Global Temperature Increase:</h2>
            <p className="impact-text">The rise in average global temperatures causes an imbalance in climate systems, impacting the health of the planet.</p>
          </>
          <>
            <h2 className="impact-title">Glacier Melting and Sea Level Rise:</h2>
            <p className="impact-text">Global warming leads to the melting of polar ice caps and glaciers, resulting in sea level rise, which threatens coastal communities.</p>
          </>
          <>
            <h2 className="impact-title">Social Inequality:</h2>
            <p className="impact-text">The impacts of climate change disproportionately affect vulnerable populations, exacerbating poverty and food insecurity in disadvantaged communities.</p>
          </>
          <>
            <h2 className="impact-title">Extreme Weather Events:</h2>
            <p className="impact-text">The frequency and intensity of extreme weather events, such as hurricanes, droughts, and floods, increase, causing damage to ecosystems and infrastructure.</p>
          </>
        </Impact>
      </div>

      <div ref={sectionRefs[12]} className="section section13">
        <div className="text-carbon">
          <PositionedBox position={"center"}>
            <h1>Congratulations! You finished learning about CO2!</h1>
            <button onClick={() => {
              navigate('/selection');
            }}>CONTINUE</button>
          </PositionedBox>
        </div>
      </div>
    </div >
  );
}