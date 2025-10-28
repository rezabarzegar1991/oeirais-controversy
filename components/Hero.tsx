import React from 'react';

interface HeroProps {
    onOpenAbout: () => void;
    language: 'EN' | 'PT';
    setLanguage: (lang: 'EN' | 'PT') => void;
}

const content = {
    EN: {
        title: "CAN WE BUILD SOCIAL HOUSING ON PROTECTED LAND TO SOLVE THE HOUSING CRISIS?",
        tagline: "An Initial Framework for Inquiry with Stakeholders & Academics",
        aboutButton: "About this Project / Team & Ethics »"
    },
    PT: {
        title: "PODEMOS CONSTRUIR HABITAÇÃO SOCIAL EM TERRAS PROTEGIDAS PARA RESOLVER A CRISE?",
        tagline: "Um Enquadramento Inicial para Inquérito com Stakeholders & Académicos",
        aboutButton: "Sobre o Projeto / Equipa & Ética »"
    }
};

export const Hero: React.FC<HeroProps> = ({ onOpenAbout, language, setLanguage }) => {
    const c = content[language];

    return (
        <section className="relative text-white py-20 px-4 text-center border-b-4 border-[#6C4675]">
            <div className="absolute top-4 right-4 flex items-center space-x-2 text-sm">
                <button
                    onClick={() => setLanguage('PT')}
                    className={`px-3 py-1 rounded-md transition ${language === 'PT' ? 'bg-[#6C4675] font-bold' : 'hover:bg-gray-700'}`}
                >
                    PT
                </button>
                <span className="text-gray-500">|</span>
                <button
                    onClick={() => setLanguage('EN')}
                    className={`px-3 py-1 rounded-md transition ${language === 'EN' ? 'bg-[#6C4675] font-bold' : 'hover:bg-gray-700'}`}
                >
                    EN
                </button>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight">
                {c.title}
            </h1>
            <p className="mt-4 text-lg text-gray-400">{c.tagline}</p>

            <div className="mt-8 flex justify-center space-x-4 text-xs font-semibold">
                <span className="bg-gray-700 px-3 py-1 rounded-full">#ImperativoEcológico</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">#NecessidadeSocial</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">#TerrenoRAN</span>
            </div>
            <button onClick={onOpenAbout} className="mt-10 text-lg bg-[#48ACF0] hover:bg-blue-500 transition text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                {c.aboutButton}
            </button>
        </section>
    );
};