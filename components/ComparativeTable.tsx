import React from 'react';
import type { ComparativeTableRow } from '../types';

interface ComparativeTableProps {
    data: ComparativeTableRow[];
}

export const ComparativeTable: React.FC<ComparativeTableProps> = ({ data }) => {
    return (
        <div className="bg-[#3a404a] p-6 rounded-lg shadow-xl lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-300">The "Two-Network" Comparative Table</h3>
            <p className="text-sm text-gray-400 mb-6 text-center">Illustrates the "Foundational Rupture" and incommensurable realities between the two networks.</p>
            <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="p-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider w-1/4">Variable</th>
                                <th className="p-4 text-left text-sm font-bold text-white uppercase tracking-wider w-3/8 bg-[#E54F6D]">"Oeiras Engine" (Proponent)</th>
                                <th className="p-4 text-left text-sm font-bold text-white uppercase tracking-wider w-3/8 bg-[#48ACF0]">"Guardian Coalition" (Opponent)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {data.map((row, index) => (
                                <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                                    <td className="p-4 font-semibold text-gray-200">{row.variable}</td>
                                    <td className="p-4 text-red-200 bg-red-900 bg-opacity-20 border-l-4 border-[#E54F6D]">{row.engine}</td>
                                    <td className="p-4 text-blue-200 bg-blue-900 bg-opacity-20 border-l-4 border-[#48ACF0]">{row.guardian}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};