import React from 'react';

const IntroBox = ({
    children,
    position,
    color = 'white',
    fontSize = '35px',
    borderRadius = '15px'
}) => {
    const style = {
        position: 'absolute',
        color: color,
        fontFamily: 'Roboto',
        padding: '5px',
        borderRadius: borderRadius,
        width: '500px',
        wordWrap: 'break-word',
        fontSize: fontSize,
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
            style.transform = 'translate(-50%, -50%)';
            break;
        default:
            break;
    }

    return <div style={style}>{children}</div>;
};

export default IntroBox;
