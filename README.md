# 🚀 Portfolio — Lucas Renato

Portfólio profissional desenvolvido com **React + TypeScript + CSS Modules**.

## 🎨 Sobre o projeto

- Design escuro com paleta azul profundo (confiança + responsabilidade)
- Animações suaves com CSS e IntersectionObserver
- Efeito typewriter no Hero
- Canvas de partículas interativas
- 5 seções: Início, Sobre, Serviços, Projetos e Contato
- Totalmente responsivo (mobile-first)
- Botão flutuante de WhatsApp
- Preview real dos projetos via iframe

## 🛠️ Tecnologias

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vite](https://vitejs.dev/)

## 📦 Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador
# http://localhost:5173
```

## 🏗️ Build para produção

```bash
npm run build
```

Os arquivos gerados estarão na pasta `/dist`.

## 📁 Estrutura do projeto

```
src/
├── assets/
│   └── images/          # Fotos do Lucas
├── components/
│   ├── Navbar/          # Navegação fixa com detecção de scroll
│   ├── Hero/            # Seção inicial com partículas e typewriter
│   ├── About/           # Sobre + habilidades técnicas
│   ├── Services/        # Serviços divididos em dois grupos
│   ├── Projects/        # Projetos com iframe de preview
│   ├── Contact/         # Formulário + links de contato
│   └── Footer/          # Rodapé
├── hooks/
│   ├── useScrollAnimation.ts  # Animação ao entrar no viewport
│   └── useTypewriter.ts       # Efeito de digitação
├── styles/
│   └── globals.css      # Variáveis CSS e reset
├── types/
│   └── index.ts         # Tipos TypeScript globais
├── utils/
│   └── data.ts          # Dados centralizados do portfólio
├── App.tsx
└── main.tsx
```

## 🌐 Deploy

O projeto pode ser hospedado gratuitamente na [Vercel](https://vercel.com):

1. Faça upload do projeto no GitHub
2. Conecte o repositório na Vercel
3. Configure o framework como **Vite**
4. Clique em Deploy

## 👨‍💻 Desenvolvido para

**Lucas Renato** — Desenvolvedor Front-End  
📱 WhatsApp: +55 81 98972-8514  
📸 Instagram: [@lcs1ilva](https://instagram.com/lcs1ilva)  
💻 GitHub: [lucasrenatolu5-spec](https://github.com/lucasrenatolu5-spec)
