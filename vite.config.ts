import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite com suporte a React
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Padrão de nomenclatura para CSS Modules: ComponentName_classe__hash
      localsConvention: 'camelCase',
    },
  },
})
