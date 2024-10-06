import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

import '../styles/Carbon.css'; // Certifique-se de que o CSS tenha estilos para ocupar a tela inteira

import PositionedBox from '../components/PositionedBox';
import Impact2 from './Impact2';
import GrayFilter from '../components/GrayFilter';

import img1 from '../assets/images/methane/ImgIntroduçao.jpg';
import img2 from '../assets/images/methane/PecuáriaeFerme.jpg';
import img3 from '../assets/images/methane/CausasNaturais.jpg';
import img4 from '../assets/images/methane/aterroSani.jpg';
import img5 from '../assets/images/methane/ProduçãoeTrans.jpg';
import img6 from '../assets/images/methane/pantano.jpg';
import img7 from '../assets/images/methane/Permafrost.jpg';
import img8 from '../assets/images/methane/Termitas.jpg';
import img9 from '../assets/images/methane/AlteraçõesnosPadrõesClimáticos.jpg';

function PageMethane({ CO2, setCO2, CH4, setCH4 }) {
    const navigate = useNavigate(); // Cria a instância de navegação

    const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Referências para cada seção
    const [currentSection, setCurrentSection] = useState(0); // Para controlar a seção atual

    const [isFilterVisible, setFilterVisible] = useState(true);

    const toggleFilter = () => {
        setFilterVisible(!isFilterVisible);
    };

    // Função para lidar com a rolagem
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

    return (
        <div className="carbon-container" onWheel={handleScroll}>
            {/* <GrayFilter isVisible={isFilterVisible} onClick={toggleFilter} /> */}
            <div ref={sectionRefs[0]} className="section section1">
                <img src={img1} alt="Carbon Image" className="full-section-image" />
                <div className="text-carbon">
                    <PositionedBox position={"top-left"}>
                        <h1>CH4 - Methane</h1>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p>Let's explore the world of methane (CH₄), a potent greenhouse gas that plays a critical role in climate change.</p>
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
                        <p>Anthropogenic causes refer to human activities that result in methane (CH₄) emissions and are mainly responsible for the increase in concentrations of this potent greenhouse gas in the atmosphere. The main sources include:</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[2]} className="section section3">
                <div className="text-carbon">
                    <img src={img3} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Anthropogenic Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Livestock and Enteric Fermentation:</a> The digestion process in ruminants, such as cows and sheep, generates large amounts of methane. Enteric fermentation in the stomachs of these animals releases CH₄, which is then emitted into the atmosphere.</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[3]} className="section section4">
                <div className="text-carbon">
                    <img src={img4} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Anthropogenic Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Solid Waste Management and Landfills:</a> The decomposition of organic waste in landfills generates methane as a byproduct. The lack of oxygen in landfills accelerates anaerobic decomposition, increasing emissions.</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[4]} className="section section5">
                <div className="text-carbon">
                    <img src={img5} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Anthropogenic Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Fossil Fuel Production and Transportation:</a> The extraction of oil and natural gas releases large amounts of methane, either through leaks or emissions during the transportation and storage process.</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[5]} className="section section6">
                <div className="text-carbon">
                    <img src={img9} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Natural Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p>In addition to anthropogenic causes, there are several natural sources of methane. However, human activities have drastically accelerated its release, contributing to the imbalance in the natural cycle of this gas:</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[6]} className="section section7">
                <div className="text-carbon">
                    <img src={img6} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Natural Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Swamps and Wetlands:</a> Wetlands are one of the main natural sources of methane, where anaerobic decomposition of organic matter generates the gas. This process occurs in oxygen-free environments, such as swamps, marshes, and other aquatic ecosystems.</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[7]} className="section section8">
                <div className="text-carbon">
                    <img src={img7} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Natural Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Permafrost and Ice Melting:</a> With global warming, permafrost (frozen soil) in the Arctic is beginning to thaw, releasing methane previously trapped in the soil.</p>
                    </PositionedBox>
                </div>
            </div>

            <div ref={sectionRefs[8]} className="section section9">
                <div className="text-carbon">
                    <img src={img8} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Natural Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Termites:</a> The digestion of cellulose by termites releases small amounts of methane. Although they are responsible for a smaller fraction of emissions, they are part of the natural carbon cycle.</p>
                    </PositionedBox>
                </div>
            </div>

            {/* <div ref={sectionRefs[9]} className="section section10">
                <div className="text-carbon">
                    <img src={img10} alt="Carbon Image" className="full-section-image" />
                    <PositionedBox position={"top-left"}>
                        <h2>Natural Causes</h2>
                    </PositionedBox>
                    <PositionedBox position={"bottom-right"}>
                        <p><a className="bold-a">Oceans:</a> The oceans absorb CO₂ from the atmosphere, but they also release some of this carbon back due to natural processes such as marine respiration and gas exchange at the surface.</p>
                    </PositionedBox>
                </div>
            </div> */}

            <div ref={sectionRefs[9]} className="section section10">
                <Impact2>
                    <>
                        <h2 className="impact2-title">Accelerated Warming:</h2>
                        <p className="impact-text">Although methane has a shorter lifespan in the atmosphere compared to CO₂, it significantly contributes to the greenhouse effect due to its high heat-trapping capacity.</p>
                    </>
                    <>
                        <h2 className="impact-title">Arctic Ice Melt:</h2>
                        <p className="impact-text">The increasing presence of methane contributes to Arctic ice melting, both through the release of CH₄ from permafrost and the impact of rising temperatures.</p>
                    </>
                    <>
                        <h2 className="impact-title">Changes in Climate Patterns:</h2>
                        <p className="impact-text"> Although methane has a shorter atmospheric lifespan compared to CO₂, it significantly contributes to the greenhouse effect due to its high heat-retention capacity.</p>
                    </>
                    <>
                        <h2 className="impact-title">Air Pollution:</h2>
                        <p className="impact-text">When methane reacts with other compounds in the atmosphere, it can form tropospheric ozone, a harmful pollutant that affects air quality and human health.</p>
                    </>
                </Impact2>
            </div>

            <div ref={sectionRefs[12]} className="section section13">
                <div className="text-carbon">
                    <PositionedBox position={"center"}>
                        <h1>You finished learning about CH4!</h1>
                        <button onClick={() => {
                            navigate('/selection'); // Redireciona para a página de seleção
                        }}>CONTINUE</button>
                    </PositionedBox>
                </div>
            </div>
        </div >
    );
}

export default PageMethane;