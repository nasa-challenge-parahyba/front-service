import React from 'react';

const PositionedBox = ({
    children,
    position,
    backgroundColor = 'rgba(0, 0, 0, 0.5)',
    color = 'white',
    fontSize = '28px',
    padding = '10px 50px',
    borderRadius = '15px'
}) => {
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

export default PositionedBox;
