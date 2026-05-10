/* =====================================================
   HOOK: useScrollAnimation
   Observa elementos e adiciona classe 'visible' quando
   entram no viewport, ativando animações CSS.
   ===================================================== */

import { useEffect, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;   // % do elemento visível para disparar (0–1)
  rootMargin?: string;  // margem extra ao redor do viewport
  once?: boolean;       // animar apenas uma vez?
}

/**
 * Hook que retorna uma ref e aplica a classe 'visible'
 * quando o elemento entra na área visível da tela.
 */
export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): RefObject<T> {
  const {
    threshold = 0.15,
    rootMargin = '0px',
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Cria o observer que monitora a visibilidade do elemento
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');

          // Se 'once' for true, para de observar após a primeira animação
          if (once) observer.unobserve(element);
        } else if (!once) {
          element.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Cleanup: desconecta o observer ao desmontar o componente
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
