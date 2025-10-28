import React from 'react';
import type { VariableDictionary } from '../types';

interface VariableDetailProps {
    variableName: string | null;
    variableDictionary: VariableDictionary;
}

const categoryColors: Record<string, string> = {
    engine: '#E54F6D',
    guardian: '#48ACF0',
    justras: '#6C4675',
};

export const VariableDetail: React.FC<VariableDetailProps> = ({ variableName, variableDictionary }) => {
    const variableData = variableName ? variableDictionary[variableName] : null;

    const getCategoryText = (category: string | undefined) => {
        if (category === 'engine') return 'Part of The "Oeiras Engine"';
        if (category === 'guardian') return 'Part of The "Guardian Coalition"';
        if (category === 'justras') return 'Represents JUSTRAs Systemic Failures';
        return 'Select a node to see details.';
    };

    return (
        <div className="mt-8 p-6 bg-[#3a404a] rounded-lg shadow-xl text-gray-300 transition-all duration-300 ease-in-out border-t-4 border-[#6C4675]">
            <h2 className="text-2xl font-bold text-[#F7F7FF] mb-2">
                {variableName || 'Variable Details'}
            </h2>
            <p className="text-sm font-semibold mb-4" style={{ color: variableData ? categoryColors[variableData.category] : '#9ca3af' }}>
                {getCategoryText(variableData?.category)}
            </p>
            <p className="mb-4 text-gray-400">
                {variableData ? (
                    <>
                        <span className="text-[#F7F7FF] font-medium">Role in Controversy:</span> {variableData.description}
                    </>
                ) : 'Hover over any colored arc (node) in the diagram to view its full definition and source.'}
            </p>
            
            <div className={`mt-4 pt-4 border-t border-gray-700 ${!variableData ? 'hidden' : ''}`}>
                 <strong className="text-sm text-gray-400">Source / Citation:</strong>
                 <p className="text-xs text-gray-500 italic mt-1">{variableData?.source}</p>
            </div>
        </div>
    );
};