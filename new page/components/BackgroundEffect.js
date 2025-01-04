import React from 'react';

function BackgroundEffect() {
    return (
        <div data-name="background-effects-container">
            <div className="glowing-ring" data-name="background-effect"></div>
            <div 
                className="glowing-ring" 
                style={{transform: 'translate(-50%, -50%) rotate(90deg)'}} 
                data-name="background-effect-rotated"
            ></div>
        </div>
    );
}
