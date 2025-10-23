// src/App.js
import React, { useState } from 'react';

// *** MUDANÇA: Imports de ícones simplificados ***
// Só precisamos dos ícones do LinkButton
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';

// *** MUDANÇA: Importamos nossos 2 componentes ***
import TypingEffect from './components/TypingEffect';
import FloatingElements from './components/FloatingElements';


/**
 * Componente do Botão de Link (Não mudei nada aqui)
 */
const LinkButton = ({ icon: Icon, href, label, borderColorClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderClass = borderColorClass || 'hover:border-leandraPurple';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative overflow-hidden
        flex items-center justify-center p-4 m-2 rounded-xl text-leandraLight text-lg font-semibold
        font-mono
        bg-leandraGray bg-opacity-30 backdrop-filter backdrop-blur-sm
        border border-leandraGray border-opacity-50
        transition-colors transition-opacity transition-shadow duration-300 ease-in-out
        w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-lg
        shadow-lg hover:shadow-xl hover:bg-opacity-50
        ${borderClass}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className={`absolute top-0 w-full h-full block transform -skew-x-12 
                      bg-gradient-to-r from-transparent via-white opacity-0
                      ${isHovered ? 'animate-shine left-[-200%]' : ''}`}
      ></span>
      {Icon && <Icon className="mr-3 text-2xl" />}
      {label}
    </a>
  );
};

// *** MUDANÇA: O componente FloatingElements FOI REMOVIDO DAQUI ***


// Componente principal
function App() {
  const footerText = "CODE. BUILD. CREATE. por LeandraCR"; 

  return (
    <div className="min-h-screen bg-leandraDark relative overflow-hidden flex flex-col items-center justify-start md:justify-center p-4 font-sans text-leandraLight">
      
      {/* Fundo preto com detalhe de cor */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-leandraPurpleDark via-leandraPinkDark to-leandraOrangeDark animate-backgroundPan opacity-30"
        style={{ backgroundSize: '300% 300%' }}
      ></div>
      
      {/* Grid de partículas */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>

      {/* *** MUDANÇA: Agora o <FloatingElements /> é chamado pelo import *** */}
      <FloatingElements />

      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl">
        
        <header className="mb-10 text-center mt-10">
          
          <div
            className="relative w-40 h-auto mb-8 
                       inline-flex items-center justify-center" 
          >
            <img 
              src="/logo-leandracr-branca.png" 
              alt="LeandraCR Logo" 
              className="w-full h-auto" 
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider mt-4 mb-2 font-mono">
            Leandra Ramos
          </h1>
          <p className="text-xl md:text-2xl text-leandraLight opacity-80 font-mono">
            Desenvolvedora Web & UI/UX Designer
          </p>
        </header>

        <main className="flex flex-col items-center w-full max-w-2xl px-4 mb-10">
          <LinkButton
            icon={AiOutlineCode} 
            href="https://leandracr-site.vercel.app/" 
            label="Meu Portfólio"
            borderColorClass="hover:border-leandraPurple"
          />
          <LinkButton
            icon={FaWhatsapp}
            href="https://wa.me/5533998529357" 
            label="WhatsApp"
            borderColorClass="hover:border-leandraOrange"
          />
          <LinkButton
            icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/leandra-costa-ramos-501462233/" 
            label="LinkedIn"
            borderColorClass="hover:border-leandraPink"
          />
          <LinkButton
            icon={FaGithub}
            href="https://github.com/LeandraCR" 
            label="GitHub"
            borderColorClass="hover:border-leandraPurple"
          />
        </main>

        <footer className="mt-auto mb-6 text-leandraLight opacity-60 text-sm font-mono">
          <TypingEffect text={footerText} />
        </footer>
      </div>
    </div>
  );
}

export default App;