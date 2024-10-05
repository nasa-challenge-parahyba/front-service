import { React, useEffect, useRef, useState } from 'react';
import videoGlobe from '../assets/videos/video-globe.mp4';
import '../styles/Video.css';

function VideoGlobe() {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const disablePictureInPicture = () => {
            if (videoElement) {
                videoElement.disablePictureInPicture = true;
                videoElement.setAttribute('controlsList', 'nodownload');
            }
        };

        disablePictureInPicture();

        // Adiciona um atraso antes de fazer a div aparecer
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Tempo em milissegundos (ajuste conforme necessário)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`video-container video-container-globe ${isVisible ? 'fade-in' : ''}`}>
            <video
                className="video-element"
                ref={videoRef}
                autoPlay
                muted
                loop
                controls={false}
            >
                <source src={videoGlobe} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
}

export default VideoGlobe;
