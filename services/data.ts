import type { 
    VariableDictionary, 
    Relation, 
    Category, 
    NarrativeDataPoint, 
    AsymmetricDataPoint, 
    FunnelDataPoint,
    PowerCentralityMatrix,
    PowerCentralityActor,
    ForceGraph,
    ForceGraphDefinitions,
    EconomicParadoxData,
    AlternativesDataPoint,
    QuadrantDataPoint,
    RadarData,
    GapAnalysisDataPoint,
    EngineComponentDataPoint,
    ComparativeTableRow,
    ActorNetwork
} from '../types';
import { 
    LegalIcon, 
    FinancialIcon, 
    KnowledgeIcon, 
    DiscursiveIcon, 
    HumanIcon, 
    EcologicalIcon 
} from '../components/Icons';

// --- MAIN DICTIONARY & RELATION DATA ---
export const variableDictionary: VariableDictionary = {
    "Ethical Framing (Utilitarian)": {
        description: "The moral argument that prioritizes the quantifiable benefit (housing for 5,145 families) for the greatest number, justifying the conversion of protected land.",
        source: "CMO Public Presentation: 'Housing for All' Strategic Mandate (2024).",
        category: "engine"
    },
    "Financial Instrument Alignment (PRR Funds)": {
        description: "The mobilization of Portugal's Recovery and Resilience Plan (PRR) funds. These funds impose speed constraints and prioritize new construction over rehabilitation, creating a powerful financial lock-in.",
        source: "Resolução do Conselho de Ministros n.º 119/2020 (PRR Component 2: Housing).",
        category: "engine"
    },
    "Land Use Transformation (New Build)": {
        description: "The core technical and political solution: converting protected Reserva Agrícola Nacional (RAN) land into construction sites for new social housing developments.",
        source: "Oeiras Municipal Master Plan (PDM) Revision Process, Proposal A, 2025.",
        category: "engine"
    },
    "Developmental Path Dependency (PER Myth)": {
        description: "The historical reliance on large-scale public housing projects (like the past PER program) which institutionalizes 'New Build' as the only politically acceptable solution for the housing crisis.",
        source: "Analysis of the Programa Especial de Realojamento (PER), IHRU Historical Data, 2023.",
        category: "engine"
    },
    "Epistemological Dominance (Technocratic Knowledge)": {
        description: "The CMO's self-validated, closed knowledge system (urban planning, high finance) that systematically neutralizes or dismisses external critique (like ecological science) as 'noise' or 'political posturing.'",
        source: "MIRS Analysis: 'The Black-Boxing of Urban Governance,' 2025.",
        category: "engine"
    },
    "Legal Framework Malleability (New 2025 Law)": {
        description: "The strategic use of recent, expedited housing/urban legislative changes (e.g., Simplex Urbanístico) to simplify, accelerate, or legally bypass existing protective land statutes.",
        source: "Decreto-Lei n.º 10/2024 (Simplex Urbanístico) and subsequent municipal adaptations.",
        category: "engine"
    },
    "'Indispensável Public Utility' Declaration": {
        description: "The legal tool used by the CMO to formally declare the housing project an 'indispensable public utility,' which automatically overrides the protected RAN land status.",
        source: "Official Gazette (Diário da República), Declaration n.º XZ-2025.",
        category: "engine"
    },
    "Proponent Network Cohesion (CMO Autonomy)": {
        description: "The high political, financial, and institutional autonomy of the Oeiras Municipal Council (CMO), reinforcing its ability to unilaterally implement large-scale, controversial policy.",
        source: "CMO Annual Budget & Governance Report, 2024.",
        category: "engine"
    },
    "Discursive Exclusion ('Butterflies vs. People')": {
        description: "The rhetorical tactic used by proponents to frame the controversy as a false, zero-sum dichotomy between ecological preservation and legitimate human social needs.",
        source: "Public Speech Transcript (CMO President), May 2025.",
        category: "engine"
    },
    "Social_Housing_Waitlist_Count (5,145 families)": {
        description: "The quantified number of families requiring social housing, serving as the central moral and statistical justification for the Engine's actions.",
        source: "Oeiras Municipal Social Housing Needs Assessment, 2024.",
        category: "engine"
    },
    "Economic Model Pressure (Oeiras Valley Paradox)": {
        description: "The pressure from Oeiras's high-tech, high-GDP economic model, which drives up property values and worsens affordability, ironically increasing the need for social housing.",
        source: "Economia do Mar (Oeiras) Sector Analysis, 2024, linked to median price increases.",
        category: "engine"
    },
    "Multi-Level Political Alignment (Gov't, EU, PS/PSD)": {
        description: "The institutional alignment between the municipal, national (Government/PRR), and EU political actors, which removes external accountability for the CMO.",
        source: "Analysis of Public Statements by PS and PSD party leaders regarding the PRR.",
        category: "engine"
    },
    "Private Developers (Teixeira Duarte)": {
        description: "The key economic actor (often the construction partner) whose interests are enrolled and served by the 'New Build' solution and its financial incentives.",
        source: "CMO Contract Award for Housing Development (Public Record), 2025.",
        category: "engine"
    },
    "Urban Planning Models": {
        description: "The conceptual and technical models (e.g., density, zoning) used by the municipality to justify the new urban footprint.",
        source: "Oeiras PDM Planning Theory & Implementation Guide, 2022.",
        category: "engine"
    },
    "PDM_Classification": {
        description: "The specific land-use classification within the Municipal Master Plan (PDM) that dictates allowed activity in a given zone.",
        source: "PDM Official Zone Maps and Regulatory Texts, Oeiras.",
        category: "engine"
    },
    "Oeiras_GDP_per_capita": {
        description: "A proxy indicator for the high economic output of the municipality, fueling the pressure on land use and affordability.",
        source: "INE Data: GDP per capita by Municipality (latest release).",
        category: "engine"
    },
    "Corporate_Tax_Revenue_EUR": {
        description: "The high municipal revenue from corporate taxes, which reinforces the CMO's financial autonomy and economic focus.",
        source: "CMO Annual Financial Report, Tax Revenue Section, 2024.",
        category: "engine"
    },
    "Municipal_Budget_Total_EUR": {
        description: "The overall size of the municipal budget, which underpins the financial strength and institutional stability of the Proponent Network.",
        source: "CMO Official Budget Approval Document, 2025.",
        category: "engine"
    },
    "Median_Housing_Price_Sale_per_m2": {
        description: "The key economic data point reflecting the extreme cost of housing in Oeiras, directly linked to the housing crisis.",
        source: "Confidencial Imobiliário / INE Data, Q4 2024.",
        category: "engine"
    },
    "Housing_Affordability_Index": {
        description: "A composite metric showing the percentage of income required to purchase or rent median-priced housing, demonstrating the severity of the crisis.",
        source: "Bank of Portugal/INE Housing Affordability Metric, 2024.",
        category: "engine"
    },
    "Modular/Prefab Construction": {
        description: "The specific rapid construction technology adopted to meet the high-speed and efficiency demands imposed by PRR funding deadlines.",
        source: "CMO Procurement Dossier: Public Tender for Housing Construction, Q3 2025.",
        category: "engine"
    },
    "3D Modeling / BIM (New Build)": {
        description: "Advanced Building Information Modeling (BIM) tools used by the CMO and developers for design, spatial planning, and visualization, reinforcing technocratic control over the process.",
        source: "Report on Digitalization in Public Works, Oeiras Tech Office, 2024.",
        category: "engine"
    },
    "Building Energy Performance (EPBD)": {
        description: "The European Directive standard for energy efficiency used by the CMO as a technical defense for the environmental performance of the *new* buildings.",
        source: "EU Energy Performance of Buildings Directive (EPBD) Recast.",
        category: "engine"
    },
    "Soil Sealing (Impermeabilização)": {
        description: "The measurable, negative environmental outcome of new construction, where natural soil is covered by impermeable surfaces (concrete, asphalt), reducing ecological function.",
        source: "European Environment Agency (EEA) Soil Sealing Indicator Methodology.",
        category: "engine"
    },
    "Ethical Framing (Deontological)": {
        description: "The moral argument centered on a non-negotiable duty to protect a vital public good (the land and its services) regardless of other social needs ('a duty to protect').",
        source: "Oeiras Environmental NGO Coalition Charter, 2025.",
        category: "guardian"
    },
    "Ecological Science (Connectivity Score)": {
        description: "The key scientific metric (often GIS-derived) used by opponents to quantify the land's ecological value based on its role in linking habitats and providing systemic services.",
        source: "Portuguese Agency for the Environment (APA) Biodiversity & Connectivity Report, 2024.",
        category: "guardian"
    },
    "Opponent Network Mobilization (Petitions)": {
        description: "The collective action, public organization, and high volume of registered dissent (e.g., petitions, protests) by opponents to exert political pressure.",
        source: "Public Petition Records (E-Petition Platform) and Association Registration Data, 2025.",
        category: "guardian"
    },
    "Alternative Solution (Rehabilitation)": {
        description: "The counter-proposal advocating for renovating and bringing existing vacant housing units back to the market instead of building on protected land.",
        source: "Technical Proposal: Rehabilitation vs. New Build, Oeiras Architects' Collective, 2025.",
        category: "guardian"
    },
    "Vacant_Residential_Units_Count (8,294)": {
        description: "The quantified number of empty private housing units, used by the Guardian Coalition to demonstrate the technical and economic viability of the rehabilitation alternative.",
        source: "INE Census Data (2021) / Oeiras Housing Stock Analysis.",
        category: "guardian"
    },
    "Financial Instrument (IFRRU Funds)": {
        description: "The marginalized funding mechanism (IFRRU) that explicitly supports urban rehabilitation but is outmatched by the power and mandates of the PRR funds.",
        source: "IFRRU Operational Guide, Banco Português de Fomento, 2023.",
        category: "guardian"
    },
    "Public Legitimacy (Opponent)": {
        description: "The opponents' claim to represent the genuine public interest (ecology, democratic process) against the CMO's technocratic approach.",
        source: "Media coverage analysis, focus on resident testimonials (Public Survey, 2025).",
        category: "guardian"
    },
    "RAN_Status (Protected Land)": {
        description: "The legal designation (Reserva Agrícola Nacional) of the contested land, which is nullified by the 'Indispensável Public Utility' declaration.",
        source: "National Institute for Conservation and Forests (ICNF) RAN Designation Map (Oeiras).",
        category: "guardian"
    },
    "Soil_Classification": {
        description: "Specific soil data used by ecological science to classify the contested land's quality and function (e.g., high-quality agricultural or highly permeable soil).",
        source: "Portuguese Ministry of Agriculture Soil Classification Database.",
        category: "guardian"
    },
    "Hydrological_Function": {
        description: "The role of the land in managing water, including aquifer recharge, surface runoff control, and flood risk mitigation.",
        source: "APA National Water Resource Plan (PNRH) / Oeiras Sub-Basin Analysis.",
        category: "guardian"
    },
    "Aquifer_Recharge_Potential": {
        description: "The land's capacity to replenish underground water reserves, a critical service lost due to soil sealing.",
        source: "Geological Survey of Portugal (LNEG) Hydrogeological Map.",
        category: "guardian"
    },
    "Flood_Risk_Zone": {
        description: "The legal classification of the land relative to flood hazard, where building increases risk downstream.",
        source: "SNB-Sistema Nacional de Informação sobre o Risco (SNIR) Flood Maps.",
        category: "guardian"
    },
    "Biodiversity_Index": {
        description: "A metric quantifying the variety and health of plant and animal life on the contested land.",
        source: "Biological Inventory Report, Oeiras Ecology Lab, 2024.",
        category: "guardian"
    },
    "Carbon_Sequestration_Potential": {
        description: "The land's ability to absorb and store atmospheric carbon, a key climate-related ecosystem service.",
        source: "FAO/European Space Agency (ESA) Soil Organic Carbon (SOC) Estimates.",
        category: "guardian"
    },
    "Vacancy_Rate": {
        description: "The percentage of unoccupied housing units in the municipality, a direct measurement of the supply-side issue.",
        source: "INE Data: Housing Stock and Vacancy Rates (2021 Census).",
        category: "guardian"
    },
    "Ecosystem Services (RAN)": {
        description: "The collective, non-monetary benefits the protected land provides, serving as the empirical foundation for the Deontological ethical frame.",
        source: "UN-FAO / European Commission Report on Ecosystem Services in Urban Peripheries.",
        category: "guardian"
    },
    "Urban Heat Island (UHI) Mitigation": {
        description: "The specific climate service provided by green spaces, which reduces ambient urban temperatures—a benefit lost by development.",
        source: "IPCC/WHO Guidance on Urban Green Space and Public Health, 2024.",
        category: "guardian"
    },
    "Geospatial Analysis (GIS)": {
        description: "The core scientific tool used by opponents to map, quantify, and visualize ecological data, land status, and connectivity scores (e.g., using QGIS or ArcGIS).",
        source: "ArcGIS / QGIS Technical Manual, Geospatial Lab Protocols, 2025.",
        category: "guardian"
    },
    "Satellite/Remote Sensing Data": {
        description: "The objective data (e.g., thermal, NDVI, land cover) used as input for GIS analysis to provide scientific grounding for ecological claims.",
        source: "Copernicus Land Monitoring Service Data Access Protocol.",
        category: "guardian"
    },
    "Energy Efficiency (Rehabilitation)": {
        description: "The technological outcome of rehabilitation, which can be optimized to achieve superior energy performance, thus reducing long-term operational costs and carbon footprint.",
        source: "EU Energy Performance of Buildings Directive (EPBD) Recast & Implementation Guide.",
        category: "guardian"
    },
    "Building Information Modeling (BIM) for Rehab": {
        description: "BIM tools specifically used to survey, plan, and optimize the rehabilitation process, demonstrating its technical feasibility and resource management advantages.",
        source: "International BIM Standards for Existing Buildings (ISO 19650-3).",
        category: "guardian"
    },
    "CDP 0: Common Ground (Failure)": {
        description: "Failure to establish shared facts or values due to irreconcilable ethical and epistemological frameworks (the conflict between Utilitarian and Deontological frames).",
        source: "JUSTRAs Core Design Principle 0: Common Ground (Shi et al., 2020).",
        category: "justras"
    },
    "CDP 1: Purpose & Boundaries (Failure)": {
        description: "Failure to define inclusive goals, evidenced by the Engine's use of Discursive Exclusion ('Butterflies vs. People') to exclude ecological integrity from the policy purpose.",
        source: "JUSTRAs Core Design Principle 1: Purpose & Boundaries (Shi et al., 2020).",
        category: "justras"
    },
    "CDP 2: Just Distribution (Failure)": {
        description: "Failure to distribute burdens and benefits fairly. The Engine benefits economically while imposing ecological costs (Soil Sealing, UHI loss) on the public commons.",
        source: "JUSTRAs Core Design Principle 2: Just Distribution (Shi et al., 2020).",
        category: "justras"
    },
    "CDP 3: Inclusive Decision-Making (Failure)": {
        description: "Failure to include all legitimate stakeholders. Caused by the CMO's high Autonomy, which 'black-boxes' the decision process and excludes opponent knowledge.",
        source: "JUSTRAs Core Design Principle 3: Inclusive Decision-Making (Shi et al., 2020).",
        category: "justras"
    },
    "CDPs 4&5: Monitoring & Feedback (Failure)": {
        description: "Combined failure to monitor long-term impacts and incorporate feedback (4) and adapt the system (5). Caused by the Financial Lock-in of the PRR funds and Path Dependency.",
        source: "JUSTRAs Core Design Principles 4 & 5: Monitoring & Adaptation (Shi et al., 2020).",
        category: "justras"
    },
    "CDP 6: Conflict Management (Failure)": {
        description: "Failure to manage conflict productively. The Engine uses legal tools ('Indispensável Public Utility') not to manage, but to terminate and enforce conflict resolution.",
        source: "JUSTRAs Core Design Principle 6: Conflict Management (Shi et al., 2020).",
        category: "justras"
    },
    "CDP 7: Autonomy (Failure)": {
        description: "Failure to ensure symmetrical agency. The CMO has high autonomy, while the Opponent Network (low autonomy) is systematically marginalized from decision-making.",
        source: "JUSTRAs Core Design Principle 7: Autonomy (Shi et al., 2020).",
        category: "justras"
    },
    "CDP 8: External Relations (Failure)": {
        description: "Failure to ensure the system is externally accountable. Caused by Multi-Level Political Alignment and the economic capture by Private Developers, which shields the CMO.",
        source: "JUSTRAs Core Design Principle 8: External Relations (Shi et al., 2020).",
        category: "justras"
    }
};

export const nodeCategories: Record<string, Category> = Object.entries(variableDictionary).reduce((acc, [name, data]) => {
    acc[name] = data.category;
    return acc;
}, {} as Record<string, Category>);

export const allData: Relation[] = [
    ["Ethical Framing (Utilitarian)", "Financial Instrument Alignment (PRR Funds)", "Justifies Deployment Of"],
    ["Social_Housing_Waitlist_Count (5,145 families)", "Ethical Framing (Utilitarian)", "Provides Moral Justification For"],
    ["Ethical Framing (Utilitarian)", "Proponent Network Cohesion (CMO Autonomy)", "Provides Political Mandate For"],
    ["Financial Instrument Alignment (PRR Funds)", "Land Use Transformation (New Build)", "Enrolls / Creates 'Lock-In' For"],
    ["Financial Instrument Alignment (PRR Funds)", "Alternative Solution (Rehabilitation)", "Systematically Marginalizes"],
    ["Land Use Transformation (New Build)", "Developmental Path Dependency (PER Myth)", "Is Rooted In / Reinforced By"],
    ["Developmental Path Dependency (PER Myth)", "Proponent Network Cohesion (CMO Autonomy)", "Ensures Institutional Stability"],
    ["Epistemological Dominance (Technocratic Knowledge)", "Legal Framework Malleability (New 2025 Law)", "Enables"],
    ["Social_Housing_Waitlist_Count (5,145 families)", "Epistemological Dominance (Technocratic Knowledge)", "Is Key Justification Data For"],
    ["Legal Framework Malleability (New 2025 Law)", "'Indispensável Public Utility' Declaration", "Provides Legal Weapon"],
    ["Proponent Network Cohesion (CMO Autonomy)", "Epistemological Dominance (Technocratic Knowledge)", "Validates / Grants Authority To"],
    ["Epistemological Dominance (Technocratic Knowledge)", "Ecological Science (Connectivity Score)", "Neutralizes / Dismisses as 'Noise'"],
    ["Proponent Network Cohesion (CMO Autonomy)", "Discursive Exclusion ('Butterflies vs. People')", "Employs Tactic"],
    ["Discursive Exclusion ('Butterflies vs. People')", "Ecological Science (Connectivity Score)", "De-legitimizes"],
    ["Ecological Science (Connectivity Score)", "Ethical Framing (Deontological)", "Justifies"],
    ["Ethical Framing (Deontological)", "Opponent Network Mobilization (Petitions)", "Drives"],
    ["Opponent Network Mobilization (Petitions)", "Alternative Solution (Rehabilitation)", "Promotes"],
    ["Vacant_Residential_Units_Count (8,294)", "Alternative Solution (Rehabilitation)", "Provides Evidence For"],
    ["Alternative Solution (Rehabilitation)", "Financial Instrument (IFRRU Funds)", "Is Supported By"],
    ["Ethical Framing (Utilitarian)", "Ethical Framing (Deontological)", "Clashes With (Ontological Rupture)"],
    ["Epistemological Dominance (Technocratic Knowledge)", "Ecological Science (Connectivity Score)", "Clashes With (Mismatch in Literacies)"],
    ["Land Use Transformation (New Build)", "Alternative Solution (Rehabilitation)", "Clashes With"],
    ["Financial Instrument Alignment (PRR Funds)", "Financial Instrument (IFRRU Funds)", "Marginalizes"],
    ["'Indispensável Public Utility' Declaration", "RAN_Status (Protected Land)", "Nullifies / Overrides"],
    ["Discursive Exclusion ('Butterflies vs. People')", "Public Legitimacy (Opponent)", "Challenges / Attempts to De-legitimize"],
    ["Ethical Framing (Utilitarian)", "CDP 0: Common Ground (Failure)", "Causes (Ontological Rupture)"],
    ["Ethical Framing (Deontological)", "CDP 0: Common Ground (Failure)", "Causes (Ontological Rupture)"],
    ["Epistemological Dominance (Technocratic Knowledge)", "CDP 0: Common Ground (Failure)", "Causes (Ontological Rupture)"],
    ["Discursive Exclusion ('Butterflies vs. People')", "CDP 1: Purpose & Boundaries (Failure)", "Causes (False Dichotomy)"],
    ["Social_Housing_Waitlist_Count (5,145 families)", "CDP 1: Purpose & Boundaries (Failure)", "Used as 'Boundary Subject'"],
    ["Economic Model Pressure (Oeiras Valley Paradox)", "CDP 2: Just Distribution (Failure)", "Causes ('Tale of Two Cities')"],
    ["RAN_Status (Protected Land)", "CDP 2: Just Distribution (Failure)", "Enrolled as Subsidy"],
    ["Discursive Exclusion ('Butterflies vs. People')", "CDP 3: Inclusive Decision-Making (Failure)", "Causes (Prevents Inclusion)"],
    ["Proponent Network Cohesion (CMO Autonomy)", "CDP 3: Inclusive Decision-Making (Failure)", "Causes ('Black-Boxing')"],
    ["Financial Instrument Alignment (PRR Funds)", "CDPs 4&5: Monitoring & Feedback (Failure)", "Causes (Financial Lock-In)"],
    ["Developmental Path Dependency (PER Myth)", "CDPs 4&5: Monitoring & Feedback (Failure)", "Causes (Path Dependency)"],
    ["Legal Framework Malleability (New 2025 Law)", "CDP 6: Conflict Management (Failure)", "Causes (Conflict Termination)"],
    ["'Indispensável Public Utility' Declaration", "CDP 6: Conflict Management (Failure)", "Is Tool For Termination"],
    ["Proponent Network Cohesion (CMO Autonomy)", "CDP 7: Autonomy (Failure)", "Causes (Asymmetric Autonomy)"],
    ["Opponent Network Mobilization (Petitions)", "CDP 7: Autonomy (Failure)", "Represents (Low Autonomy)"],
    ["Multi-Level Political Alignment (Gov't, EU, PS/PSD)", "CDP 8: External Relations (Failure)", "Causes (Multi-Level Capture)"],
    ["Private Developers (Teixeira Duarte)", "CDP 8: External Relations (Failure)", "Causes (Economic Capture)"],
    ["Epistemological Dominance (Technocratic Knowledge)", "Urban Planning Models", "Is Composed Of"],
    ["Epistemological Dominance (Technocratic Knowledge)", "PDM_Classification", "Uses"],
    ["Corporate_Tax_Revenue_EUR", "Economic Model Pressure (Oeiras Valley Paradox)", "Causes"],
    ["Oeiras_GDP_per_capita", "Economic Model Pressure (Oeiras Valley Paradox)", "Causes"],
    ["Municipal_Budget_Total_EUR", "Proponent Network Cohesion (CMO Autonomy)", "Reinforces"],
    ["Economic Model Pressure (Oeiras Valley Paradox)", "Median_Housing_Price_Sale_per_m2", "Drives Up"],
    ["Median_Housing_Price_Sale_per_m2", "Housing_Affordability_Index", "Worsens"],
    ["Median_Housing_Price_Sale_per_m2", "Social_Housing_Waitlist_Count (5,145 families)", "Increases"],
    ["Land Use Transformation (New Build)", "Economic Model Pressure (Oeiras Valley Paradox)", "Reinforces (Perverse Loop)"],
    ["Ecological Science (Connectivity Score)", "Soil_Classification", "Is Composed Of"],
    ["Ecological Science (Connectivity Score)", "Hydrological_Function", "Is Composed Of"],
    ["Ecological Science (Connectivity Score)", "Biodiversity_Index", "Is Composed Of"],
    ["Ecological Science (Connectivity Score)", "Carbon_Sequestration_Potential", "Is Composed Of"],
    ["Hydrological_Function", "Aquifer_Recharge_Potential", "Includes"],
    ["Hydrological_Function", "Flood_Risk_Zone", "Includes"],
    ["Vacant_Residential_Units_Count (8,294)", "Vacancy_Rate", "Is Measured By"],
    ["Land Use Transformation (New Build)", "Modular/Prefab Construction", "Uses"],
    ["Modular/Prefab Construction", "Financial Instrument Alignment (PRR Funds)", "Enabled By (Speed)"],
    ["Epistemological Dominance (Technocratic Knowledge)", "3D Modeling / BIM (New Build)", "Uses"],
    ["3D Modeling / BIM (New Build)", "Urban Planning Models", "Informs"],
    ["Epistemological Dominance (Technocratic Knowledge)", "Building Energy Performance (EPBD)", "Uses as Standard"],
    ["Land Use Transformation (New Build)", "Soil Sealing (Impermeabilização)", "Increases"],
    ["Ecological Science (Connectivity Score)", "Ecosystem Services (RAN)", "Measures"],
    ["Ecosystem Services (RAN)", "Hydrological_Function", "Includes"],
    ["Ecosystem Services (RAN)", "Carbon_Sequestration_Potential", "Includes"],
    ["Ecosystem Services (RAN)", "Urban Heat Island (UHI) Mitigation", "Includes"],
    ["Land Use Transformation (New Build)", "Urban Heat Island (UHI) Mitigation", "Degrades"],
    ["Ecological Science (Connectivity Score)", "Geospatial Analysis (GIS)", "Uses Tool"],
    ["Geospatial Analysis (GIS)", "Satellite/Remote Sensing Data", "Uses Data"],
    ["Geospatial Analysis (GIS)", "RAN_Status (Protected Land)", "Maps"],
    ["Alternative Solution (Rehabilitation)", "Energy Efficiency (Rehabilitation)", "Enables"],
    ["Energy Efficiency (Rehabilitation)", "Financial Instrument (IFRRU Funds)", "Funded By"],
    ["Alternative Solution (Rehabilitation)", "Building Information Modeling (BIM) for Rehab", "Uses"]
];

// --- DATA FOR ADDITIONAL CHARTS ---

export const narrativeData: NarrativeDataPoint[] = [
    { event: 'Initial Report', proponent: 0.3, opponent: 0.1, rhetoric: 0.0 },
    { event: 'Project Announcement', proponent: 0.4, opponent: 0.15, rhetoric: 0.05 },
    { event: 'Petition Launched', proponent: 0.35, opponent: 0.3, rhetoric: 0.05 },
    { event: 'Public Consultation', proponent: 0.5, opponent: 0.2, rhetoric: 0.1 },
    { event: 'Indispensable Public\nUtility Declaration', proponent: 0.6, opponent: 0.1, rhetoric: 0.2 },
    { event: 'Final Vote', proponent: 0.55, opponent: 0.15, rhetoric: 0.1 }
];

export const asymmetricData: AsymmetricDataPoint[] = [
    { label: 'Moral Justification (Waitlist)', value: 5145, color: '#E54F6D' },
    { label: 'Civic Mobilization (Petition)', value: 2812, color: '#48ACF0' }
];

export const funnelData: FunnelDataPoint[] = [
    { stage: 'Justification Pool', value: 5145, color: '#48ACF0' },
    { stage: 'Formal Input', value: 200, color: 'rgba(72, 172, 240, 0.6)' },
    { stage: 'Media Agency', value: 25, color: 'rgba(72, 172, 240, 0.3)' }
];

export const powerCentralityMatrix: PowerCentralityMatrix = [
    [0, 5, 0, 0, 1], // CMO
    [8, 0, 1, 1, 0], // Financial Engine (PRR)
    [0, 0, 0, 3, 0], // Evoluir Oeiras
    [0, 0, 3, 0, 0], // Ecological NGOs
    [1, 0, 0, 0, 0]  // Housing Applicants
];

export const powerCentralityActors: PowerCentralityActor[] = [
    { name: "CMO (Proponent)", color: '#E54F6D'},
    { name: "Financial Engine (PRR)", color: 'rgba(229, 79, 109, 0.7)'},
    { name: "Evoluir Oeiras", color: '#48ACF0'},
    { name: "Ecological NGOs", color: 'rgba(72, 172, 240, 0.7)'},
    { name: "Housing Applicants", color: '#6C4675'},
];

export const forceGraphDefinitions: ForceGraphDefinitions = {
    "N1": { title: "CMO (Proponent)", type: "Actor", network: "Proponent", color: "#E54F6D", description: "The Core Municipal Actor driving the 'New Build' housing agenda." },
    "N2": { title: "Civic Groups (Opponent)", type: "Actor", network: "Opponent", color: "#48ACF0", description: "A loose coalition of environmentalists, residents, and NGOs." },
    "N3": { title: "Utilitarian Ethic", type: "Ethic", network: "Proponent", color: "#E54F6D", description: "Justifies action based on 'the greatest good for the greatest number'." },
    "N4": { title: "Deontological Ethic", type: "Ethic", network: "Opponent", color: "#48ACF0", description: "Justifies action based on a moral duty to protect the land." },
    "N5": { title: "Technocratic Knowledge", type: "Knowledge", network: "Proponent", color: "#E54F6D", description: "Internal, quantitative data used to create urgency." },
    "N6": { title: "Ecological Science", type: "Knowledge", network: "Opponent", color: "#48ACF0", description: "External, systemic knowledge framing the issue as a systemic fracture." },
    "N7": { title: "5,145 Families Waitlist", type: "Justification", network: "Proponent", color: "#E54F6D", description: "The primary, quantifiable social benefit." },
    "N8": { title: "RAN Law/Moral Rule", type: "Justification", network: "Opponent", color: "#48ACF0", description: "The legal framework viewed as a non-negotiable moral rule." },
    "N9": { title: "LAND (RAN)", type: "Boundary Object", network: "Contested", color: "#6C4675", description: "The central contested object, leading to the stalemate." },
    "N10": { title: '"Empty/Tradable Resource"', type: "Definition", network: "Proponent", color: "#E54F6D", description: "The Proponent's definition of the land as under-utilized." },
    "N11": { title: '"Full/Vital Ecosystem"', type: "Definition", network: "Opponent", color: "#48ACF0", description: "The Opponent's definition of the land as a non-negotiable ecosystem." },
    "N12": { title: "PROGRESS: Linear Growth", type: "Progress Definition", network: "Proponent", color: "#E54F6D", description: "Progress measured by material development." },
    "N13": { title: "PROGRESS: Resilience", type: "Progress Definition", network: "Opponent", color: "#48ACF0", description: "Progress measured by systemic ecological resilience." },
    "N14": { title: "Ontological Rupture", type: "Conflict Result", network: "Conflict", color: "#E54F6D", description: "The final result: actors cannot agree on the meaning of the central object." }
};

export const forceGraphData: ForceGraph = {
    "nodes": [
        {"id": "N1", "label": "CMO", "color": "#E54F6D", "size": 15 * 0.4},
        {"id": "N2", "label": "Civic Groups", "color": "#48ACF0", "size": 15 * 0.4},
        {"id": "N3", "label": "Utilitarian", "color": "#E54F6D", "size": 12 * 0.4},
        {"id": "N4", "label": "Deontological", "color": "#48ACF0", "size": 12 * 0.4},
        {"id": "N5", "label": "Technocratic", "color": "#E54F6D", "size": 14 * 0.4},
        {"id": "N6", "label": "Ecological Science", "color": "#48ACF0", "size": 14 * 0.4},
        {"id": "N7", "label": "5,145 Waitlist", "color": "#E54F6D", "size": 12 * 0.4},
        {"id": "N8", "label": "RAN Law", "color": "#48ACF0", "size": 12 * 0.4},
        {"id": "N9", "label": "LAND (RAN)", "color": "#6C4675", "size": 25 * 0.4},
        {"id": "N10", "label": "Empty Resource", "color": "#E54F6D", "size": 12 * 0.4},
        {"id": "N11", "label": "Full Ecosystem", "color": "#48ACF0", "size": 12 * 0.4},
        {"id": "N12", "label": "PROGRESS: Growth", "color": "#E54F6D", "size": 10 * 0.4},
        {"id": "N13", "label": "PROGRESS: Resilience", "color": "#48ACF0", "size": 10 * 0.4},
        {"id": "N14", "label": "Rupture", "color": "#E54F6D", "size": 20 * 0.4}
    ],
    "links": [
        {"source": "N1", "target": "N3", "rel_type": "Operates On", "weight": 5},
        {"source": "N2", "target": "N4", "rel_type": "Operates On", "weight": 5},
        {"source": "N3", "target": "N5", "rel_type": "Supports", "weight": 4},
        {"source": "N4", "target": "N6", "rel_type": "Supports", "weight": 4},
        {"source": "N5", "target": "N7", "rel_type": "Generates", "weight": 4},
        {"source": "N6", "target": "N8", "rel_type": "Mobilizes", "weight": 3},
        {"source": "N7", "target": "N10", "rel_type": "Frames", "weight": 3},
        {"source": "N8", "target": "N11", "rel_type": "Frames", "weight": 3},
        {"source": "N10", "target": "N9", "rel_type": "Defines", "weight": 5},
        {"source": "N11", "target": "N9", "rel_type": "Defines", "weight": 5},
        {"source": "N9", "target": "N14", "rel_type": "Leads To", "weight": 5},
        {"source": "N14", "target": "N1", "rel_type": "Precludes", "weight": 4},
        {"source": "N14", "target": "N2", "rel_type": "Precludes", "weight": 4},
        {"source": "N5", "target": "N12", "rel_type": "Aligns With", "weight": 3},
        {"source": "N6", "target": "N13", "rel_type": "Aligns With", "weight": 3}
    ]
};

export const economicParadoxData: EconomicParadoxData = {
    years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    prices: [2000, 2400, 2800, 3200, 3800, 4500, 4800, 5200],
    waitlist: [500, 700, 1000, 1500, 2000, 2500, 3000, 3500],
};

export const alternativesData: AlternativesDataPoint[] = [
    { label: 'Waitlist', value: 5145, color: '#48ACF0', stack: 'stack1' },
    { label: 'Excess Vacancy', value: 3149, color: '#6C4675', stack: 'stack1' }
];

export const quadrantData: QuadrantDataPoint[] = [
    [90, 20, 30, 'São Julião (Policy Rupture)'],
    [80, 90, 80, 'RAN/REN (Ecological Constraint)'],
    [40, 50, 50, 'Mixed Use (Transition Zone)'],
    [20, 70, 60, 'Protected Greenbelt (Low Conflict)']
];

export const radarData: RadarData = {
    labels: [
        '1. Formal Mandate',
        '2. Internal Knowledge',
        '3. Financial Independence',
        '4. Proactive Capacity',
        '5. Resilience to Feedback'
    ],
    datasets: [
        {
            label: 'Chief Municipal Office (CMO)',
            data: [5, 4, 5, 5, 4],
            fill: true,
            backgroundColor: 'rgba(229, 79, 109, 0.4)',
            borderColor: '#E54F6D',
            pointBackgroundColor: '#E54F6D',
        },
        {
            label: 'Civic Groups',
            data: [1, 2, 0, 1, 1],
            fill: true,
            backgroundColor: 'rgba(72, 172, 240, 0.4)',
            borderColor: '#48ACF0',
            pointBackgroundColor: '#48ACF0',
        }
    ]
};

export const gapAnalysisData: GapAnalysisDataPoint[] = [
    { label: 'Transparency', reality: 2, gap: 8 },
    { label: 'External Independence', reality: 1, gap: 9 },
    { label: 'Alignment with JUSTRAs', reality: 2, gap: 8 },
    { label: 'Focus on Public Good', reality: 3, gap: 7 },
    { label: 'Policy Consistency', reality: 9, gap: 1 }
];

export const engineComponentData: EngineComponentDataPoint[] = [
    { label: 'Economic Capture', value: 40, color: '#E54F6D'},
    { label: 'Political Alignment', value: 30, color: '#48ACF0'},
    { label: 'Legal Frameworks', value: 15, color: '#6C4675'},
    { label: 'Institutional Inertia', value: 15, color: 'rgba(108, 70, 117, 0.7)'}
];

export const comparativeTableData: ComparativeTableRow[] = [
    { variable: 'Foundational Reality', engine: 'The Land is a "Tradable_Resource" (empty, under-utilized).', guardian: 'The Land is a "Non-negotiable_Ecosystem" (full, systemic).' },
    { variable: 'Core Ethic', engine: 'Utilitarian / Consequentialist ("greatest good" for 5,145 families).', guardian: 'Deontological / Duty-Based ("moral rule" to protect a common good).' },
    { variable: 'Knowledge System', engine: '"Technocratic Knowledge" (Internal, quantitative, self-validating data).', guardian: '"Ecological Science" (External, systemic, peer-reviewed data).' },
    { variable: 'Narrative Frame', engine: '"Pragmatic Developer" (Framed as progress and social justice).', guardian: '"Guardian" (Framed as a "defensive, reactive" duty).' },
    { variable: 'Discursive Tactic', engine: '"False Dichotomy" (Creates a "Housing OR Environment" choice).', guardian: '"Reactive Deconstruction" (Forced to disprove the false choice).' },
    { variable: 'Key Justification', engine: 'The 5,145-family municipal waitlist (Internal data).', guardian: 'The 8,294 vacant homes (External data for an alternative).' }
];

export const actorNetworkData: ActorNetwork[] = [
    {
        title: 'Central Node: "Oeiras Engine"',
        colorClass: 'text-red-300',
        bgColorClass: 'bg-[#E54F6D]',
        sections: [
            { title: 'Legal Actants', icon: LegalIcon, items: ['New 2025 Land Law', 'Public Utility Declaration (Despacho 3194/2025)'] },
            { title: 'Financial Actants', icon: FinancialIcon, items: ['PRR Funds (Recovery & Resilience Plan)'] },
            { title: 'Knowledge Actants', icon: KnowledgeIcon, items: ['The 5,145-Family Waitlist (Official Data)'] },
            { title: 'Discursive Actants', icon: DiscursiveIcon, items: ['"Housing Dignity" (Moral Claim)', '"False Dichotomy" (Tactic)'] },
            { title: 'Human Actants', icon: HumanIcon, items: ['CMO, Political Leadership, Developers'] },
        ],
    },
    {
        title: 'Central Node: "Guardian Coalition"',
        colorClass: 'text-blue-200',
        bgColorClass: 'bg-[#48ACF0]',
        sections: [
            { title: 'Legal Actants', icon: LegalIcon, items: ['The RAN (National Agricultural Reserve Law)'] },
            { title: 'Ecological Actants', icon: EcologicalIcon, items: ['The Aquifer, Local Biodiversity, Soil Science'] },
            { title: 'Knowledge Actants', icon: KnowledgeIcon, items: ['The 8,294 Vacant Homes (Counter-Data)', 'Scientific Studies (External, Peer-Reviewed)'] },
            { title: 'Discursive Actants', icon: DiscursiveIcon, items: ['"Deontological Ethic" (Moral Claim)', '"Systemic Collapse" (Warning)'] },
            { title: 'Human Actants', icon: HumanIcon, items: ["Citizens' Movements, External Scientists, Legal Experts"] },
        ],
    },
];