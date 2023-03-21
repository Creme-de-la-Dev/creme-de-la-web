// React
import React from 'react';

// Images
import GamesBG from "../../assets/GamesBG.png";

function Games () {
    return (
        <div className="app h-screen">
            <div className='bg-gradient-to-tl from-purple-900 to-green-700 h-full w-full relative'>
                <img src={GamesBG} className="w-full h-full object-cover absolute mix-blend-overlay" />
            </div>
        </div>
    )
}

export default Games;