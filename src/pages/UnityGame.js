import React from 'react';

const UnityGame = () => {
    return (
        <div>
            <iframe
                title="Unity Game"
                src={`${process.env.PUBLIC_URL}/game.html`}
                style={{ width: '100%', height: '100vh', border: 'none' }}
            />
        </div>
    );
};

export default UnityGame;
