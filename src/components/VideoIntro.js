import React, { useRef, useEffect } from 'react';
import videoIntro from '../assets/videos/video-intro.mp4';
import '../styles/Video.css';

function VideoIntro({ onEnd }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // Desativa o Picture-in-Picture
        const disablePictureInPicture = () => {
            if (videoElement) {
                videoElement.disablePictureInPicture = true;
                videoElement.setAttribute('controlsList', 'nodownload'); // Para ocultar o botão de download
            }
        };

        disablePictureInPicture();
    }, []);

    return (
        <div className="video-container">
            <video className="video-element"
                ref={videoRef}
                autoPlay
                muted
                onEnded={onEnd} // Chama a função onEnd quando o vídeo termina
                controls={false} // Adiciona isso para garantir que os controles não apareçam
            >
                <source src={videoIntro} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
}

export default VideoIntro;
