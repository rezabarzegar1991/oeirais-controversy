import React from 'react';

const LoopStep: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-gray-700 border-l-4 border-[#E54F6D] p-4 rounded-lg shadow-md w-full md:w-3/4">
        <h3 className="font-semibold text-[#E54F6D]">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

const ArrowDown: React.FC = () => (
    <svg className="w-6 h-6 my-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
);

export const CausalLoopDiagram: React.FC = () => {
    return (
        <div className="bg-[#3a404a] p-6 md:p-8 rounded-lg shadow-xl lg:col-span-2">
            <h3 className="text-xl font-semibold text-center text-gray-300 mb-2">The "Engine" Causal Loop Diagram</h3>
            <p className="text-sm text-gray-400 mb-8 text-center">Illustrates the dynamic, self-reinforcing process that leads to conflict termination.</p>

            <div className="flex flex-col items-center relative">
                <h4 className="text-2xl font-semibold text-[#E54F6D] text-center mb-6">The Reinforcing Loop (The Engine)</h4>
                <LoopStep title="CMO Political Autonomy" description="The starting point of power." />
                <ArrowDown />
                <LoopStep title="Deployment of Utilitarian Ethic" description="Frames the action as for the 'greatest good'." />
                <ArrowDown />
                <LoopStep title="Primacy of Technocratic Knowledge" description="Internal data (5,145 waitlist) is presented as objective truth." />
                <ArrowDown />
                <LoopStep title="Enables Legal Weapon" description="'Public Utility Declaration' is activated." />
                <ArrowDown />
                <div className="bg-yellow-900 bg-opacity-30 border-4 border-dashed border-yellow-500 p-4 rounded-lg shadow-lg w-full md:w-3/4 ring-4 ring-yellow-800 ring-opacity-50">
                    <h3 className="font-bold text-lg text-yellow-300 text-center">Terminates Conflict</h3>
                    <p className="text-yellow-400 text-center font-medium">Bypasses the "No Viable Alternative" step.</p>
                </div>
                <ArrowDown />
                <div className="bg-gray-700 border-2 border-[#E54F6D] p-4 rounded-lg shadow-md w-full md:w-3/4 text-center flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6 text-[#E54F6D]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662M19.5 12v3c0 1.232-.046 2.453-.138-3.662a4.006 4.006 0 0 1-3.7 3.7 48.678 48.678 0 0 1-7.324 0 4.006 4.006 0 0 1-3.7-3.7c-.092-1.21-.138 2.43-.138-3.662v-3m14.362 0c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662m14.362 0v3" />
                    </svg>
                    <h3 className="font-semibold text-[#E54F6D]">"Success" reinforces <span className="font-bold">CMO Political Autonomy</span></h3>
                </div>
            </div>
            
            <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-600">
                <h4 className="text-2xl font-semibold text-[#48ACF0] text-center mb-6">The Blocked Path (The Opposition)</h4>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="bg-gray-700 border-l-4 border-[#48ACF0] p-4 rounded-lg shadow-md w-full md:w-1/3">
                        <h3 className="font-semibold text-[#48ACF0]">"Guardian Coalition" Presents:</h3>
                        <ul className="list-disc list-inside text-sm text-gray-400 mt-1">
                            <li>Ecological Science</li>
                            <li>8,294 Vacant Homes (Alternative)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                         <svg className="w-10 h-10 text-red-500 hidden md:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 8.25 9.75m0 0H15m-6.75 0V17.25" />
                        </svg>
                        <svg className="w-10 h-10 text-red-500 rotate-90 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 8.25 9.75m0 0H15m-6.75 0V17.25" />
                        </svg>
                    </div>
                    <div className="bg-red-900 bg-opacity-30 border-2 border-red-500 p-4 rounded-lg shadow-lg w-full md:w-1/3 text-center">
                        <h3 className="font-bold text-lg text-red-300">BLOCKED</h3>
                        <p className="text-red-400">Rendered legally irrelevant by the "Public Utility Declaration".</p>
                    </div>
                </div>
            </div>
        </div>
    );
};