import React, { useState, useMemo } from 'react';
import type { Category } from './types';
import { allData, variableDictionary, nodeCategories, narrativeData, asymmetricData, funnelData, powerCentralityMatrix, powerCentralityActors, forceGraphData, forceGraphDefinitions, economicParadoxData, alternativesData, quadrantData, radarData, gapAnalysisData, engineComponentData, comparativeTableData, actorNetworkData } from './services/data';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { DiagramIntro } from './components/DiagramIntro';
import { Filters } from './components/Filters';
import { ChordDiagram } from './components/ChordDiagram';
import { VariableDetail } from './components/VariableDetail';
import { NarrativeChart } from './components/NarrativeChart';
import { AsymmetricBarChart } from './components/AsymmetricBarChart';
import { FunnelOfExclusion } from './components/FunnelOfExclusion';
import { ActorNetworkMap } from './components/ActorNetworkMap';
import { AlternativesChart } from './components/AlternativesChart';
import { CombinedJusticeMap } from './components/CombinedJusticeMap';
import { CausalLoopDiagram } from './components/CausalLoopDiagram';
import { ComparativeTable } from './components/ComparativeTable';
import { EconomicParadoxChart } from './components/EconomicParadoxChart';
import { EngineComponentsChart } from './components/EngineComponentsChart';
import { ForceDirectedGraph } from './components/ForceDirectedGraph';
import { GapAnalysisChart } from './components/GapAnalysisChart';
import { PolicyIceberg } from './components/PolicyIceberg';
import { PowerCentralityDiagram } from './components/PowerCentralityDiagram';
import { PowerRadarChart } from './components/PowerRadarChart';
import { QuadrantChart } from './components/QuadrantChart';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string, id?: string }> = ({ title, children, className, id }) => (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#F7F7FF] mb-4">{title}</h2>
            {children}
        </div>
    </section>
);

const ChartCard: React.FC<{ title: string; description: string; children: React.ReactNode; size?: 'full' | 'half' }> = ({ title, description, children, size = 'half' }) => (
    <div className={`bg-[#3a404a] p-6 rounded-lg shadow-xl ${size === 'full' ? 'lg:col-span-2' : ''}`}>
        <h3 className="text-xl font-semibold mb-2 text-center text-gray-300">{title}</h3>
        <p className="text-sm text-gray-400 mb-6 text-center">{description}</p>
        {children}
    </div>
);


const App: React.FC = () => {
    const [activeCategories, setActiveCategories] = useState<Category[]>(['engine', 'guardian', 'justras']);
    const [selectedVariable, setSelectedVariable] = useState<string | null>(null);
    const [isAboutOpen, setAboutOpen] = useState(false);
    const [language, setLanguage] = useState<'EN' | 'PT'>('PT');

    const handleFilterChange = (category: Category, isChecked: boolean) => {
        setActiveCategories(prev =>
            isChecked ? [...prev, category] : prev.filter(c => c !== category)
        );
    };

    const filteredData = useMemo(() => {
        if (activeCategories.length === 0) return [];
        if (activeCategories.length === 3) return allData;

        const activeNodes = new Set(
            Object.keys(variableDictionary).filter(key =>
                activeCategories.includes(variableDictionary[key].category)
            )
        );

        return allData.filter(relation =>
            activeNodes.has(relation[0]) && activeNodes.has(relation[1])
        );
    }, [activeCategories]);

    return (
        <div className="bg-[#2B303A] text-gray-300 min-h-screen font-sans">
            <Hero 
                onOpenAbout={() => setAboutOpen(true)}
                language={language}
                setLanguage={setLanguage}
            />
            {isAboutOpen && <About onClose={() => setAboutOpen(false)} language={language} />}
            
            <main>
                <DiagramIntro />

                <div className="container mx-auto px-4 pb-16">
                    <Filters activeCategories={activeCategories} onFilterChange={handleFilterChange} />
                    <div className="bg-[#3a404a] p-4 md:p-8 rounded-lg shadow-xl">
                        <ChordDiagram
                            data={filteredData}
                            variableDictionary={variableDictionary}
                            nodeCategories={nodeCategories}
                            onNodeSelect={setSelectedVariable}
                        />
                    </div>
                    <VariableDetail variableName={selectedVariable} variableDictionary={variableDictionary} />
                </div>

                <Section title="The JUSTRAs Diagnostic" className="bg-[#2B303A]" id="deep-dives">
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                        A series of visualizations diagnosing the policy failure through different analytical lenses, from narrative analysis to power dynamics.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ChartCard title="Narrative Trajectory" description="Tracks the rise of proponent vs. opponent narratives over key events.">
                            <NarrativeChart data={narrativeData} />
                        </ChartCard>
                        <ChartCard title="Asymmetric Mobilization" description="Compares the primary mobilization metrics for each side.">
                            <AsymmetricBarChart data={asymmetricData} />
                        </ChartCard>
                        <ChartCard title="Funnel of Exclusion" description="Shows how opponent voices are filtered out of the decision-making process.">
                            <FunnelOfExclusion data={funnelData} />
                        </ChartCard>
                        <ChartCard title="Power Centrality" description="A chord diagram showing influence flows between key actors.">
                            <PowerCentralityDiagram matrix={powerCentralityMatrix} actors={powerCentralityActors} />
                        </ChartCard>
                        <CausalLoopDiagram />
                        <ComparativeTable data={comparativeTableData} />
                    </div>
                </Section>
                
                <Section title="Deep Dive Visualizations" className="bg-[#3a404a]">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ChartCard title="The Ontological Rupture" description="A force-directed graph mapping the conceptual clash between actors." size="full">
                           <ForceDirectedGraph graph={forceGraphData} definitions={forceGraphDefinitions} />
                        </ChartCard>
                        <ChartCard title="The 'Oeiras Valley' Economic Paradox" description="Shows how economic growth paradoxically worsens the housing crisis.">
                            <EconomicParadoxChart data={economicParadoxData} />
                        </ChartCard>
                        <ChartCard title="The 'Rehabilitation' Alternative" description="Compares the scale of the housing waitlist to available vacant properties.">
                            <AlternativesChart data={alternativesData} />
                        </ChartCard>
                         <CombinedJusticeMap />
                         <PolicyIceberg />
                        <ChartCard title="Conflict Topography" description="Maps land parcels by conflict intensity and ecological value." size="full">
                            <QuadrantChart data={quadrantData} />
                        </ChartCard>
                        <ChartCard title="Asymmetric Actor Capabilities" description="A radar chart comparing the core capacities of the CMO vs. Civic Groups.">
                            <PowerRadarChart data={radarData} />
                        </ChartCard>
                        <ChartCard title="JUSTRAs Gap Analysis" description="Scores the policy process against an ideal 'just transition' framework.">
                            <GapAnalysisChart data={gapAnalysisData} />
                        </ChartCard>
                        <ChartCard title="The 'Engine' Components" description="A breakdown of the forces powering the proponent network.">
                            <EngineComponentsChart data={engineComponentData} />
                        </ChartCard>
                        <ActorNetworkMap data={actorNetworkData} />
                    </div>
                </Section>
            </main>
        </div>
    );
}

export default App;