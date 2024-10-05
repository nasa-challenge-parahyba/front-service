import React from 'react';

const PositionedBox = ({ children, position }) => {
    const style = {
        position: 'absolute',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '15px',
        width: '500px',
        wordWrap: 'break-word',
        fontSize: '24px',
    };

    switch (position) {
        case 'top-left':
            style.top = '50px';
            style.left = '50px';
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
            style.bottom = '50px';
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
