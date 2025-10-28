import React from 'react';

const BenefitBlock: React.FC<{ height: string; text: string }> = ({ height, text }) => (
    <div
        className="shadow-xl rounded-t-md border-b-8 border-gray-600 flex justify-center items-end text-white p-1"
        style={{
            height,
            width: '4rem',
            backgroundColor: '#A9A9A9',
            backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
            backgroundSize: '4px 4px',
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
            background: 'linear-gradient(to bottom, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
            border: '2px solid #E34A4A',
        }}
    >
        <span className="text-xs font-bold">{text}</span>
    </div>
);

export const TradeOffScale: React.FC = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-300">The Trade-Off Scale</h3>
            <p className="text-sm text-gray-400 mb-4 text-center">Unmasking the structural devaluation of social/ecological costs vs. economic benefits.</p>

            <div className="p-4 rounded-lg bg-gray-900 flex justify-center border-b-4 border-gray-600">
                {/* Left Side: Economic Benefit */}
                <div className="w-1/2 p-4 flex flex-col items-center justify-end h-72">
                    <h3 className="text-lg font-semibold mb-2 text-gray-300">Economic Benefit</h3>
                    <div className="flex items-end space-x-2">
                         <BenefitBlock height="12rem" text="Tax Revenue" />
                         <BenefitBlock height="14rem" text="CMO Budget" />
                    </div>
                    <p className="text-sm mt-2 font-mono text-gray-400">Structural Power</p>
                </div>

                {/* Fulcrum */}
                <div className="w-8 flex justify-center items-end h-72">
                    <div className="h-20 w-1 bg-gray-500"></div>
                </div>

                {/* Right Side: Social/Ecological Cost */}
                <div className="w-1/2 p-4 flex flex-col items-center justify-start h-72 pt-12">
                    <h3 className="text-lg font-semibold mb-2 text-red-400">Social/Ecological Cost</h3>
                    <div className="flex items-end space-x-2">
                        <CostBlock height="4rem" text="RAN Hectares" />
                        <CostBlock height="6rem" text="Waitlist" />
                    </div>
                    <p className="text-sm mt-2 font-mono text-red-500">Fragmented System</p>
                </div>
            </div>
        </div>
    );
};
