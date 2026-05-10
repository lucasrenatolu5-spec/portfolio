/* =====================================================
   PONTO DE ENTRADA: main.tsx
   Inicializa o React e importa os estilos globais.
   ===================================================== */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';

// Obtém o elemento raiz do DOM
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Elemento #root não encontrado no DOM. Verifique o index.html.');
}

// Renderiza a aplicação no modo estrito do React
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
