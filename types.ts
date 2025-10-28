import type React from 'react';

export type Category = 'engine' | 'guardian' | 'justras';

export interface Variable {
    description: string;
    source: string;
    category: Category;
}

export type VariableDictionary = Record<string, Variable>;

export type Relation = [string, string, string]; // [source, target, relationship_text]

export interface TooltipState {
    visible: boolean;
    content: string;
    x: number;
    y: number;
}

export interface NarrativeDataPoint {
    event: string;
    proponent: number;
    opponent: number;
    rhetoric: number;
}

export interface AsymmetricDataPoint {
    label: string;
    value: number;
    color: string;
}

export interface FunnelDataPoint {
    stage: string;
    value: number;
    color: string;
}

// New types for additional charts
export interface PowerCentralityMatrix extends Array<Array<number>> {}
export interface PowerCentralityActor { name: string; color: string; }

export interface ForceGraphNode { id: string; label: string; color: string; size: number; x?: number; y?: number; }
export interface ForceGraphLink { source: string; target: string; rel_type: string; weight: number; }
export interface ForceGraph { nodes: ForceGraphNode[]; links: ForceGraphLink[]; }
export interface ForceGraphDefinition { title: string; type: string; network: string; color: string; description: string; }
export type ForceGraphDefinitions = Record<string, ForceGraphDefinition>;

export interface EconomicParadoxData {
    years: string[];
    prices: number[];
    waitlist: number[];
}

export interface AlternativesDataPoint {
    label: string;
    value: number;
    color: string;
    stack: string;
}

// [Conflict Intensity, Ontology Score, Ecological Score (Bubble Size), 'Parcel Name']
export type QuadrantDataPoint = [number, number, number, string];

export interface RadarData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        backgroundColor: string;
        borderColor: string;
        pointBackgroundColor: string;
    }[];
}

export interface GapAnalysisDataPoint {
    label: string;
    reality: number;
    gap: number;
}

export interface EngineComponentDataPoint {
    label: string;
    value: number;
    color: string;
}

export interface ComparativeTableRow {
    variable: string;
    engine: string;
    guardian: string;
}

export interface ActorNetwork {
    title: string;
    colorClass: string;
    bgColorClass: string;
    sections: {
        title: string;
        icon: React.FC;
        items: string[];
    }[];
}