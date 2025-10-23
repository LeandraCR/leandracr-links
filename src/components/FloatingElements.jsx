// src/components/FloatingElements.jsx
import React from 'react';
// *** MUDANÇA: Voltamos a importar os ícones de programação ***
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, 
  FaJsSquare, FaGitAlt, FaPython, FaJava 
} from 'react-icons/fa';

/**
 * Componente de ÍCONES Flutuantes (Corrigido)
 */
const FloatingElements = () => {
  // *** MUDANÇA: Voltamos a usar o array de ícones ***
  const icons = [
    <FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />, 
    <FaJsSquare />, <FaGitAlt />, <FaPython />, <FaJava />
  ];
  const elements = [];

  for (let i = 0; i < 12; i++) {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 15}s`,
      animationDelay: `${Math.random() * 20}s`,
      // *** MUDANÇA: Voltamos a usar fontSize para o tamanho ***
      fontSize: `${Math.random() * 12 + 12}px`
    };
    const icon = icons[i % icons.length];

    elements.push(
      // *** MUDANÇA: Voltamos a usar <span> em vez de <img> ***
      <span
        key={i}
        className="absolute text-leandraLight opacity-50 font-mono animate-floatUp"
        style={style}
      >
        {icon}
      </span>
    );
  }

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {elements}
    </div>
  );
};

export default FloatingElements;