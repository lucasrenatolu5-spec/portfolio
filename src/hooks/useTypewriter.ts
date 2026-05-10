/* =====================================================
   HOOK: useTypewriter
   Simula o efeito de digitação de texto em loop.
   ===================================================== */

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];        // Lista de palavras/frases para alternar
  typingSpeed?: number;   // Velocidade de digitação (ms por caractere)
  deletingSpeed?: number; // Velocidade de apagamento
  pauseDuration?: number; // Pausa antes de apagar (ms)
}

interface UseTypewriterReturn {
  displayText: string;
  isDeleting: boolean;
}

/**
 * Hook que alterna entre palavras com efeito de digitação.
 * Retorna o texto atual e se está no modo de apagamento.
 */
export function useTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    // Se está pausado, aguarda antes de começar a apagar
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(pauseTimer);
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Remove o último caractere
        setDisplayText(prev => prev.slice(0, -1));

        // Quando apagou tudo, passa para a próxima palavra
        if (displayText.length === 1) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        // Adiciona o próximo caractere
        setDisplayText(currentWord.slice(0, displayText.length + 1));

        // Quando completou a palavra, pausa antes de apagar
        if (displayText.length === currentWord.length - 1) {
          setIsPaused(true);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isDeleting };
}
