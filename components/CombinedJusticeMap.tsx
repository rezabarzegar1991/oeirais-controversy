import React from 'react';

const BenefitBlock: React.FC<{ height: string; text: string }> = ({ height, text }) => (
    <div
        className="shadow-xl rounded-t-md border-b-8 border-gray-600 flex justify-center items-end text-white p-1"
        style={{
            height,
            width: '4rem',
            backgroundColor: '#6C4675', // New Purple
        }}
    >
        <span className="text-xs font-bold">{text}</span>
    </div>
);

const CostBlock: React.FC<{ height: string; text: string }> = ({ height, text }) => (
    <div
        className="shadow-lg rounded-md opacity-90 flex justify-center items-end p-1 text-white"
        style={{
            height,
            width: '3.5rem',
            backgroundColor: '#E54F6D', // New Red
            border: '2px solid rgba(255,255,255,0.3)',
        }}
    >
        <span className="text-xs font-bold">{text}</span>
    </div>
);


export const CombinedJusticeMap: React.FC = () => {
    return (
        <div className="bg-[#3a404a] p-6 rounded-lg shadow-xl lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-300">Mapping Injustice: Spatial & Structural Views</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side: Asymmetrical Map */}
                <div>
                     <h4 className="text-lg font-semibold mb-2 text-center text-gray-400">The Asymmetrical Map of Justice</h4>
                     <p className="text-sm text-gray-500 mb-4 text-center">Mapping the transfer of economic benefit vs. socio-ecological cost.</p>
                     <div className="relative w-full h-64 rounded-lg shadow-inner overflow-hidden" style={{ background: 'linear-gradient(to right, #48ACF0 50%, #E54F6D 50%)' }}>
                         <div className="absolute top-0 left-1/2 w-1.5 h-full bg-[#2B303A]" style={{ clipPath: 'polygon(0 0, 100% 5%, 0 10%, 100% 15%, 0 20%, 100% 25%, 0 30%, 100% 35%, 0 40%, 100% 45%, 0 50%, 100% 55%, 0 60%, 100% 65%, 0 70%, 100% 75%, 0 80%, 100% 85%, 0 90%, 100% 95%, 0 100%)' }}></div>
                         <div className="absolute top-1/2 left-8 transform -translate-y-1/2 p-2 rounded-lg text-white font-bold text-center">
                             <span className="text-4xl">€</span>
                             <p className="text-sm mt-1">Affluence</p>
                         </div>
                         <div className="absolute top-1/2 right-8 transform -translate-y-1/2 p-2 rounded-lg text-white font-bold text-center">
                             <span className="text-3xl">Burden</span>
                             <p className="text-xs mt-1">Flood Risk</p>
                         </div>
                         <span className="absolute top-[70%] left-[75%] text-5xl font-black transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ color: 'rgba(0, 255, 0, 0.8)', textShadow: '0 0 10px rgba(0, 255, 0, 0.6), 0 0 20px rgba(0, 255, 0, 0.4)', animation: 'pulse 1.5s infinite alternate' }}>X</span>
                     </div>
                </div>
                 {/* Right Side: Trade-off Scale */}
                 <div>
                      <h4 className="text-lg font-semibold mb-2 text-center text-gray-400">The Trade-Off Scale</h4>
                      <p className="text-sm text-gray-500 mb-4 text-center">The structural devaluation of social/ecological costs.</p>
                     <div className="p-4 rounded-lg bg-[#2B303A] flex justify-center border-b-4 border-gray-600 h-64">
                         <div className="w-1/2 flex flex-col items-center justify-end">
                             <h3 className="text-md font-semibold mb-2 text-gray-300">Economic Benefit</h3>
                             <div className="flex items-end space-x-2">
                                  <BenefitBlock height="8rem" text="Tax" />
                                  <BenefitBlock height="10rem" text="Budget" />
                             </div>
                             <p className="text-xs mt-2 font-mono text-gray-400">Structural Power</p>
                         </div>
                         <div className="w-8 flex justify-center items-end">
                             <div className="h-16 w-1 bg-gray-500"></div>
                         </div>
                         <div className="w-1/2 flex flex-col items-center justify-end">
                             <h3 className="text-md font-semibold mb-2 text-[#E54F6D]">Social/Ecological Cost</h3>
                             <div className="flex items-end space-x-2">
                                 <CostBlock height="3rem" text="RAN" />
                                 <CostBlock height="5rem" text="Waitlist" />
                             </div>
                             <p className="text-xs mt-2 font-mono text-[#E54F6D]">Fragmented System</p>
                         </div>
                     </div>
                 </div>
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