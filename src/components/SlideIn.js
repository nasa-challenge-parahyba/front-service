import React, { useEffect, useState } from 'react';

const SlideIn = ({
    children,
    direction = 'left',
    finalPosition = '0',
    delay = 300,
    position = 'top-left',
    fontSize = '20px',
    backgroundColor = 'rgba(0, 0, 0, 0.1)' // semitransparente por padrão
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    const initialTranslate = direction === 'left' ? '-100%' : '100%';
    const translateX = isVisible ? finalPosition : initialTranslate;

    const getPositionStyle = () => {
        switch (position) {
            case 'top-left':
                return { top: '0', left: '0' };
            case 'top-right':
                return { top: '0', right: '0' };
            case 'bottom-left':
                return { bottom: '0', left: '0' };
            case 'bottom-right':
                return { bottom: '0', right: '0' };
            default:
                return { top: '0', left: '0' }; // Default to top-left if no position is passed
        }
    };

    return (
        <div
            style={{
                position: 'absolute',
                ...getPositionStyle(),
                fontSize: fontSize,
                backgroundColor: backgroundColor, // Fundo semitransparente
                padding: '20px',
                borderRadius: '8px',
                transform: `translateX(${translateX})`,
                opacity: isVisible ? 1 : 0,
                transition: `transform 1s ease-in-out, opacity 1s ease-in-out`,
            }}
        >
            {children}
        </div>
    );
};

export default SlideIn;
