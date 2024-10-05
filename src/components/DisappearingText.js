import React, { useState, useEffect } from 'react';
import '../styles/DisappearingText.css';

export default function DisappearingText({ children, duration, onDisappear }) {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
        }, duration - 1000);

        const removeTimer = setTimeout(() => {
            setVisible(false);
            if (onDisappear) {
                onDisappear();
            }
        }, duration);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, [duration, onDisappear]);

    if (!visible) return null;

    return (
        <div className={`disappearing-text ${fadeOut ? 'hidden' : ''}`}>
            {children}
        </div>
    );
}
