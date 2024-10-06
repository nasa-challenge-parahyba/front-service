import React, { useEffect, useState } from 'react';

const PositionedBox = ({
    children,
    position,
    backgroundColor = 'rgba(0, 0, 0, 0.5)',
    color = 'white',
    fontSize = '28px',
    padding = '10px 50px',
    borderRadius = '15px',
    delay = 300,
    direction = 'left',
    finalPosition = '0'
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

    const style = {
        position: 'absolute',
        backgroundColor: backgroundColor,
        color: color,
        fontFamily: 'Roboto',
        padding: padding,
        borderRadius: borderRadius,
        width: '400px',
        wordWrap: 'break-word',
        fontSize: fontSize,
        transform: `translateX(${translateX})`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
    };

    switch (position) {
        case 'top-left':
            style.top = '50px';
            style.left = '100px';
            break;
        case 'top-right':
            style.top = '50px';
            style.right = '50px';
            break;
        case 'bottom-left':
            style.bottom = '50px';
            style.left = '50px';
            break;
        case 'bottom-right':
            style.bottom = '100px';
            style.right = '50px';
            break;
        case 'center':
            style.top = '50%';
            style.left = '50%';
            style.transform = `${isVisible ? 'translate(-50%, -50%)' : `translate(${initialTranslate}, -50%)`}`;
            break;
        default:
            break;
    }

    return <div style={style}>{children}</div>;
};

export default PositionedBox;
