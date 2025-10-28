import React from 'react';

export const DiagramIntro: React.FC = () => {
    return (
        <section id="diagram" className="py-16 bg-[#2B303A]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[#F7F7FF] mb-4">The Central Conflict Map</h2>
                <p className="max-w-3xl mx-auto text-gray-400 mb-8">
                    The following diagram is the heart of this analysis. Each arc represents a key variable in the controversy. The chords connecting them illustrate the causal relationships. Use the filters to isolate the actor networks, and **click an arc or label** to lock the focus and inspect its connections. Click the background to deselect.
                </p>
            </div>
        </section>
    );
};