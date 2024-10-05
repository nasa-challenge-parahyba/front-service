import React from 'react';

const PositionedText = ({ children, x, y }) => {
    const style = {
        position: 'absolute',
        left: `${x}`,
        top: `${y}`,
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
    };

    return <div style={style}>{children}</div>;
};

export default PositionedText;
