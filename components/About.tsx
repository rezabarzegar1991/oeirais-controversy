import React from 'react';

interface AboutProps {
    onClose: () => void;
    language: 'EN' | 'PT';
}

const TeamMember: React.FC<{ name: string; role: string; desc: string; }> = ({ name, role, desc }) => (
    <div>
        <h4 className="font-bold text-white">{name} <span className="text-gray-400 font-normal">- {role}</span></h4>
        <p className="text-sm text-gray-400 mt-1">{desc}</p>
    </div>
);

const contentEN = {
    title: "About the Project: Framework, Team & Ethics",
    frameTitle: "The Frame: Unfolding the Network",
    frameP1: "This document presents our initial diagnostic framework for the Oeiras controversy. This project is the culmination of coursework in Science and Technology Studies (STS) within the Master of Innovation and Research in Sustainability (MIRS) at ISEG-ULisboa. The goal is to use Controversy Mapping to embrace the complexity of this debate as a socio-technical accomplishment. We aim to reveal the underlying mindsets that lead each side to sincerely believe their solution is the necessary and ethical path, focusing on understanding complexity, not delivering a simple verdict.",
    frameP2: "The map is designed as a Boundary Object for use in a Hybrid Forum, serving as a starting point for gathering feedback from stakeholders and academic peers. Our analysis traces the 'co-production' of this conflict, showing how heterogeneous actors—technology, science, ethics, economics, and history—are actively enrolled to build competing networks.",
    frameP3: `The core finding is that the municipal project is supported by a tightly coupled "Oeiras Engine" built on a specific, self-reinforcing causal chain: Ethics justifies Economics, which enrolls Technology, which is rooted in History, and enabled by Law, which is validated by Science.`,
    methodologyTitle: "Methodology and Research Reflexivity (The Mappers)",
    methodologyP1: "To meet the standards of STS and controversy mapping (CM), we explicitly acknowledge the political role of the researcher. The map is not a neutral mirror; it is an instrument of power and analysis that transforms the controversy it observes.",
    teamTitle: "The Research Team (MIRS at ISEG-ULisboa)",
    teamP1: "This analysis is the result of collaborative research by a multidisciplinary team within the Master's in Innovation and Research for Sustainability, bringing perspectives from finance, economics, and social action.",
    team: [
        { name: "Juliana", role: "Finance and Sustainability Strategy", desc: "A finance and operations expert, she focuses on designing operational systems that bridge business performance with human wellbeing and sustainability strategy." },
        { name: "Daniel", role: "Stakeholder and Interview Lead", desc: "Bringing 5+ years of marketing and fundraising experience, his focus is on crafting strategic growth through stakeholder engagement for mission-driven initiatives." },
        { name: "Teresa", role: "Project Management and Economics", desc: "With strong experience in project management and economics, she leverages organizational structure for sustainability transition strategies." },
        { name: "Reza", role: "Research Design and Social Innovation", desc: "Bridging research design, innovation management, and social impact, he is driven to build new academic models for sustainable governance and inclusive innovation." },
        { name: "Philina", role: "Environment and Grassroots Action", desc: "An experienced outdoor instructor and management graduate, her perspective emphasizes the intersection of physical environment, community, and grassroots action." },
        { name: "Keya", role: "Entrepreneur and Business Strategist", desc: "An Entrepreneur and Business Strategist at PwP enterprise in Bengaluru. She combines a background in project work with recent academic success, holding a PGP in Data Science from IIIT Bangalore and an MBA, making her a technically-aware business leader." },
    ],
    ethicsTitle: "Ethical & Epistemological Mandate (STS)",
    ethicsP1: "The purpose of this project is to use Controversy Mapping to embrace the complexity of the debate as a socio-technical accomplishment. We aim to reveal the underlying mindsets that lead each side to sincerely believe their solution is the necessary and ethical path, focusing on understanding complexity, not delivering a simple verdict.",
    commitmentsTitle: "Core Commitments on Data and Participants",
    commitments: [
        { title: "Symmetry", text: "We give equal analytical weight to the rationales and evidence of both the Proponent (CMO) and the Opponent (Coalition)." },
        { title: "Informed Consent & Transparency", text: "For all primary data collection (e.g., the interview with Evoluir Oeiras), participants will sign a Consent Form. They will be explicitly informed of the project's academic purpose and the public nature of the final map." },
        { title: "Right to Withdraw & Confidentiality", text: "Participants retain the Right to Withdraw their consent or exclude specific statements at any time. Any insights derived from interviews will be attributed only with the participant's explicit, written permission, protecting their identity otherwise." },
        { title: "Reflexivity", text: "By mapping the legal and scientific frameworks, we aim to promote a more reflexive and inclusive compromise among stakeholders." },
    ]
};

const contentPT = {
    title: "Sobre o Projeto: Enquadramento, Equipa e Ética",
    frameTitle: "O Enquadramento: Desdobrando a Rede",
    frameP1: "Este documento apresenta o nosso enquadramento de diagnóstico inicial para a controvérsia de Oeiras. Este projeto é a culminação do trabalho de curso em Estudos de Ciência e Tecnologia (ECT) no âmbito do Mestrado em Inovação e Investigação para a Sustentabilidade (MIRS) no ISEG-ULisboa. O objetivo é usar o Mapeamento de Controvérsias para abraçar a complexidade deste debate como uma realização sociotécnica. Pretendemos revelar as mentalidades subjacentes que levam cada lado a acreditar sinceramente que a sua solução é o caminho necessário e ético, focando-nos na compreensão da complexidade, em vez de entregar um veredito simples.",
    frameP2: "O mapa é concebido como um Objeto de Fronteira para uso num Fórum Híbrido, servindo como ponto de partida para recolher feedback de stakeholders e pares académicos. A nossa análise traça a 'coprodução' deste conflito, mostrando como atores heterogéneos — tecnologia, ciência, ética, economia e história — são ativamente recrutados para construir redes concorrentes.",
    frameP3: `A principal conclusão é que o projeto municipal é apoiado por um "Motor de Oeiras" fortemente acoplado, construído sobre uma cadeia causal específica e autorreforçada: a Ética justifica a Economia, que recruta a Tecnologia, que está enraizada na História, e é viabilizada pela Lei, que é validada pela Ciência.`,
    methodologyTitle: "Metodologia e Reflexividade da Investigação (Os Mapeadores)",
    methodologyP1: "Para cumprir os padrões de ECT e mapeamento de controvérsias (MC), reconhecemos explicitamente o papel político do investigador. O mapa não é um espelho neutro; é um instrumento de poder e análise que transforma a controvérsia que observa.",
    teamTitle: "Conheça a Equipa (MIRS no ISEG-ULisboa)",
    teamP1: "Esta análise é o resultado de uma investigação colaborativa de uma equipa multidisciplinar do Mestrado em Inovação e Investigação para a Sustentabilidade, que traz perspetivas de finanças, economia e ação social.",
    team: [
        { name: "Juliana", role: "Finanças e Estratégia de Sustentabilidade", desc: "Foca-se na conceção de sistemas operacionais que ligam o desempenho empresarial ao bem-estar humano e à estratégia de sustentabilidade." },
        { name: "Daniel", role: "Stakeholders e Liderança de Entrevistas", desc: "Foca-se em criar crescimento estratégico através do envolvimento das partes interessadas para iniciativas orientadas para a missão." },
        { name: "Teresa", role: "Gestão de Projeto e Economia", desc: "Com experiência em gestão de projetos e economia, alavanca a estrutura organizacional para estratégias de transição de sustentabilidade." },
        { name: "Reza", role: "Design de Investigação e Inovação Social", desc: "Liga o design de investigação, a gestão da inovação e o impacto social, impulsionado pela construção de novos modelos académicos para a governação sustentável." },
        { name: "Philina", role: "Meio Ambiente e Ação de Base (Grassroots)", desc: "A sua perspetiva enfatiza a intersecção entre o ambiente físico, a comunidade e a ação de base." },
        { name: "Keya", role: "Empreendedora e Estratega de Negócios", desc: "É Empreendedora e Estratega de Negócios na PwP enterprise em Bengaluru. Ela combina uma vasta experiência em projetos com sucesso académico recente, possuindo um PGP em Ciência de Dados do IIIT Bangalore e um MBA, o que a torna uma líder de negócios com conhecimentos técnicos." },
    ],
    ethicsTitle: "Mandato Ético e Epistemológico (ECT)",
    ethicsP1: "O propósito deste projeto é usar o Mapeamento de Controvérsias para abraçar a complexidade do debate como uma realização sociotécnica. O nosso objetivo é revelar as mentalidades subjacentes que levam cada lado a acreditar sinceramente que a sua solução é o caminho necessário e ético, focando-nos em compreender a complexidade, e não em emitir um veredito simples.",
    commitmentsTitle: "Compromissos Essenciais sobre Dados e Participantes",
    commitments: [
        { title: "Simetria", text: "Damos igual peso analítico às racionalidades e evidências tanto do Proponente (CMO) quanto do Oponente (Coligação)." },
        { title: "Consentimento Informado & Transparência", text: "Para toda a recolha de dados primários (por exemplo, a entrevista com o Evoluir Oeiras), os participantes assinarão um Formulário de Consentimento. Serão explicitamente informados do propósito académico do projeto e da natureza pública do mapa final." },
        { title: "Direito de Retirar & Confidencialidade", text: "Os participantes mantêm o Direito de Retirar o seu consentimento ou excluir declarações específicas a qualquer momento. Qualquer insight derivado de entrevistas será atribuído apenas com a permissão explícita por escrito do participante, protegendo a sua identidade caso contrário." },
        { title: "Reflexividade", text: "Ao mapear os quadros legais e científicos, pretendemos promover um compromisso mais reflexivo e inclusivo entre as partes interessadas." },
    ]
};

export const About: React.FC<AboutProps> = ({ onClose, language }) => {
    const c = language === 'EN' ? contentEN : contentPT;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div 
                className="bg-[#3a404a] text-gray-300 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 border-t-4 border-[#6C4675]"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold">&times;</button>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">{c.title}</h2>
                
                <div className="space-y-8">
                    {/* Frame */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#48ACF0] mb-3">{c.frameTitle}</h3>
                        <div className="space-y-3 text-gray-400">
                          <p>{c.frameP1}</p>
                          <p>{c.frameP2}</p>
                          <p className="italic bg-gray-900 bg-opacity-50 p-4 rounded-md border-l-4 border-gray-600">{c.frameP3}</p>
                        </div>
                    </div>

                    {/* Methodology */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#48ACF0] mb-3">{c.methodologyTitle}</h3>
                        <p className="text-gray-400">{c.methodologyP1}</p>
                    </div>

                    {/* Team */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#48ACF0] mb-3">{c.teamTitle}</h3>
                        <p className="mb-6 text-gray-400">{c.teamP1}</p>
                        <div className="space-y-6">
                            {c.team.map(member => <TeamMember key={member.name} {...member} />)}
                        </div>
                    </div>

                     {/* Ethics */}
                     <div>
                        <h3 className="text-2xl font-semibold text-[#48ACF0] mb-3">{c.ethicsTitle}</h3>
                        <p className="text-gray-400">{c.ethicsP1}</p>
                    </div>

                    {/* Commitments */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#48ACF0] mb-3">{c.commitmentsTitle}</h3>
                        <ul className="space-y-3 list-disc list-inside text-gray-400">
                            {c.commitments.map(item => <li key={item.title}><strong className="text-white">{item.title}:</strong> {item.text}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};