// src/components/TypingEffect.jsx
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, typingSpeed = 100, deletingSpeed = 50, delay = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  // A 'text' prop é uma string, então ela é estável
  const words = [text]; 

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Digitando
        if (charIndex < currentWord.length) {
          setCurrentText(prev => prev + currentWord.charAt(charIndex));
          setCharIndex(prev => prev + 1);
          timeout = setTimeout(handleTyping, typingSpeed);
        } else {
          // Terminou, espera para apagar
          timeout = setTimeout(() => setIsDeleting(true), delay * 2); 
        }
      } else {
        // Apagando
        if (charIndex > 0) {
          setCurrentText(prev => prev.substring(0, prev.length - 1));
          setCharIndex(prev => prev - 1);
          timeout = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Terminou de apagar, espera para digitar de novo
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
          timeout = setTimeout(handleTyping, delay / 2);
        }
      }
    };

    // Inicia a digitação
    timeout = setTimeout(handleTyping, charIndex === 0 ? delay / 2 : typingSpeed);

    // Limpa o timeout
    return () => clearTimeout(timeout);
    
    // *** AQUI ESTÁ A CORREÇÃO ***
    // Trocamos 'words' (que é um array, sempre "novo") por 'text' (que é a prop string, estável)
  }, [charIndex, isDeleting, wordIndex, typingSpeed, deletingSpeed, delay, text]);

  return (
    <span className="typing-effect">
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

export default TypingEffect;