import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Logo.css';
import logo from '../assets/images/logotext.png';

const Logo = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFadeIn(true);

        const timer = setTimeout(() => {
            navigate('/intro'); // Navega para a página de introdução após 3 segundos
        }, 3000); // Reduzido para 3 segundos

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className={`logo-container ${fadeIn ? 'fade-in' : ''}`}>
            <img src={logo} className="logo1" alt="Logo" />
        </div>
    );
};

export default Logo;
