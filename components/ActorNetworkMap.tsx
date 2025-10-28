import React from 'react';
import type { ActorNetwork } from '../types';

interface ActorNetworkMapProps {
    data: ActorNetwork[];
}

const ActorCard: React.FC<{ network: ActorNetwork }> = ({ network }) => (
    <div className={`bg-gray-800 shadow-2xl rounded-xl border-t-8 ${network.bgColorClass.replace('bg-', 'border-')} overflow-hidden`}>
        <h3 className={`text-2xl font-bold text-white ${network.bgColorClass} p-5 text-center`}>{network.title}</h3>
        <div className="p-6 space-y-5">
            {network.sections.map((section, index) => {
                const Icon = section.icon; // Capitalize for JSX rendering
                return (
                    <div key={index} className={index > 0 ? 'border-t border-gray-700 pt-5' : ''}>
                        <h4 className={`text-lg font-semibold ${network.colorClass} flex items-center space-x-2`}>
                            <Icon />
                            <span>{section.title}</span>
                        </h4>
                        <ul className="list-disc list-inside mt-2 text-gray-300 pl-2 space-y-1">
                            {section.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                );
            })}
        </div>
    </div>
);

export const ActorNetworkMap: React.FC<ActorNetworkMapProps> = ({ data }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-300">Actor-Network Map (Stakeholder Armies)</h3>
            <p className="text-sm text-gray-400 mb-8 text-center">Maps the "armies" on both sides, showing the human and non-human actors that give each network its power.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {data.map((network, index) => (
                    <ActorCard key={index} network={network} />
                ))}
            </div>
        </div>
    );
};
