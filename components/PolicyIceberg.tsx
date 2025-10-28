import React from 'react';

export const PolicyIceberg: React.FC = () => {
    return (
        <div className="bg-[#3a404a] p-6 rounded-lg shadow-xl lg:col-span-2">
            <h3 className="text-xl font-semibold text-center text-gray-300 mb-2">The Policy Iceberg: A Systems Failure</h3>
            <p className="text-sm text-center text-gray-400 mb-6">The visible policy is just the "tip," held in place by invisible structures and beliefs.</p>
            
            <div className="max-w-4xl mx-auto">
                {/* Iceberg Tip (Events) */}
                <div className="relative bg-[#F7F7FF] text-[#2B303A] rounded-t-xl shadow-2xl p-8 z-10">
                    <span className="absolute top-4 left-4 text-sm font-bold uppercase text-[#48ACF0]">Events: What is happening?</span>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">The Enrollment Chain</h3>
                            <p>The irresistible <span className="font-bold">€109M PRR Funds</span> enroll the <span className="font-bold">"New Build" Technology</span>.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">The Marginalized Alternative</h3>
                            <p>The "Rehab" Technology (IFRRU) is ignored as "too slow," despite high vacancy rates.</p>
                        </div>
                    </div>
                </div>

                {/* Waterline */}
                <div className="relative p-8 shadow-lg z-0" style={{ background: 'linear-gradient(to bottom, rgba(72, 172, 240, 0.5) 0%, #48ACF0 100%)' }}>
                    <span className="absolute top-4 left-4 text-sm font-bold uppercase text-blue-900">Patterns: What are the trends?</span>
                    <div className="mt-8 flex flex-col md:flex-row gap-6">
                        <div className="flex-1 bg-white/30 p-6 rounded-lg backdrop-blur-sm border border-blue-300">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Perverse Incentives</h3>
                            <p className="text-gray-800">The system rewards <span className="font-bold">volume and speed</span> over ecological sustainability or adaptation.</p>
                        </div>
                        <div className="flex-1 bg-white/30 p-6 rounded-lg backdrop-blur-sm border border-blue-300">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Feedback Failure</h3>
                            <p className="text-gray-800">Environmental signals (flood risk, high vacancies) are <span className="font-bold">systematically silenced</span>.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Structure */}
                <div className="relative bg-[#2B303A] text-white rounded-b-xl shadow-2xl p-8 z-0" style={{ background: 'linear-gradient(to bottom, #48ACF0 0%, #2B303A 100%)' }}>
                    <span className="absolute top-4 left-4 text-sm font-bold uppercase text-blue-100">Systemic Structures</span>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border-2 border-dashed border-blue-400">
                            <h3 className="text-xl font-bold text-blue-100 mb-2">Financial & Tech "Lock-In"</h3>
                            <p className="text-blue-200">The <span className="font-bold">PRR funding criteria</span> (deadlines, scale) create a structural bias for new construction.</p>
                        </div>
                        <div className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border-2 border-dashed border-blue-400">
                            <h3 className="text-xl font-bold text-cyan-100 mb-2">Historical "Path Dependency"</h3>
                            <p className="text-blue-200">The "New Build" model is rooted in the <span className="font-bold">PER "Foundational Myth,"</span> blocking new alternatives.</p>
                        </div>
                    </div>
                    {/* Mental Models */}
                    <div className="mt-12 pt-8 border-t border-blue-800">
                        <span className="block text-center text-sm font-bold uppercase text-blue-200">Mental Models</span>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
                            <span className="bg-blue-950 text-blue-200 py-2 px-4 rounded-full border border-blue-800 shadow-lg">"What worked before is still the best solution."</span>
                            <span className="bg-blue-950 text-blue-200 py-2 px-4 rounded-full border border-blue-800 shadow-lg">"Rehab is too complex and slow."</span>
                            <span className="bg-blue-950 text-blue-200 py-2 px-4 rounded-full border border-blue-800 shadow-lg">"Volume and speed are primary metrics of success."</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};