import React from 'react';
import type { Category } from '../types';

interface FilterProps {
    activeCategories: Category[];
    onFilterChange: (category: Category, isChecked: boolean) => void;
}

const filterOptions: { id: Category; label: string; textColor: string; ringColor:string; checkColor: string; }[] = [
    { id: 'engine', label: 'The "Oeiras Engine"', textColor: 'text-[#E54F6D]', ringColor: 'focus:ring-[#E54F6D]', checkColor: 'text-[#E54F6D]' },
    { id: 'guardian', label: 'The "Guardian Coalition"', textColor: 'text-[#48ACF0]', ringColor: 'focus:ring-[#48ACF0]', checkColor: 'text-[#48ACF0]' },
    { id: 'justras', label: 'JUSTRAs Failures', textColor: 'text-[#6C4675]', ringColor: 'focus:ring-[#6C4675]', checkColor: 'text-[#6C4675]' },
];

export const Filters: React.FC<FilterProps> = ({ activeCategories, onFilterChange }) => {
    return (
        <div className="mb-4 p-4 bg-[#3a404a] rounded-lg flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-semibold text-[#F7F7FF] mr-4">Filters:</span>
            {filterOptions.map(({ id, label, textColor, ringColor, checkColor }) => (
                <label key={id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="checkbox"
                        value={id}
                        className={`form-checkbox bg-gray-700 border-gray-600 rounded focus:ring-2 ${ringColor} ${checkColor}`}
                        checked={activeCategories.includes(id)}
                        onChange={(e) => onFilterChange(id, e.target.checked)}
                    />
                    <span className={textColor}>{label}</span>
                </label>
            ))}
        </div>
    );
};