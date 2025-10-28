import React from 'react';

export const AsymmetricalMap: React.FC = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-300">The Asymmetrical Map of Justice</h3>
            <p className="text-sm text-gray-400 mb-4 text-center">Mapping the transfer of economic benefit (Coast) vs. socio-ecological cost (Inland).</p>

            <div className="relative w-full h-64 rounded-lg shadow-inner overflow-hidden" style={{
                background: 'linear-gradient(to right, #003366 50%, #964B00 50%)'
            }}>
                {/* Jagged Line Divider */}
                <div
                    className="absolute top-0 left-1/2 w-1.5 h-full bg-gray-900"
                    style={{
                        clipPath: 'polygon(0 0, 100% 5%, 0 10%, 100% 15%, 0 20%, 100% 25%, 0 30%, 100% 35%, 0 40%, 100% 45%, 0 50%, 100% 55%, 0 60%, 100% 65%, 0 70%, 100% 75%, 0 80%, 100% 85%, 0 90%, 100% 95%, 0 100%)'
                    }}
                ></div>

                {/* Coastal Area */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 p-2 rounded-lg text-white font-bold text-center">
                    <span className="text-4xl">€</span>
                    <p className="text-sm mt-1">Affluence</p>
                </div>

                {/* Inland Area */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 p-2 rounded-lg text-white font-bold text-center">
                    <span className="text-3xl">Burden</span>
                    <p className="text-xs mt-1">Flood Risk</p>
                </div>

                {/* Sacrifice Zone */}
                <span 
                    className="absolute top-[70%] left-[75%] text-5xl font-black transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                    style={{
                        color: 'rgba(0, 255, 0, 0.8)',
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.6), 0 0 20px rgba(0, 255, 0, 0.4)',
                        animation: 'pulse 1.5s infinite alternate',
                    }}
                >
                    X
                </span>
            </div>
            <style>{`
                @keyframes pulse {
                    from { opacity: 0.8; }
                    to { opacity: 1; text-shadow: 0 0 15px rgba(0, 255, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.5); }
                }
            `}</style>
        </div>
    );
};
