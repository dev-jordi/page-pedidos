<div align="center">
<h1>📦 Page Pedidos - Sistema de Pedidos Bitcom</h1>
<p>Plataforma moderna de pedidos para Bitcom com IA integrada</p>
</div>

## 🚀 Sobre

**Page Pedidos** é uma aplicação web moderna construída com React + Vite que oferece uma experiência intuitiva para gerenciamento de pedidos. Integrada com a API Gemini do Google para análise inteligente e sugestões em tempo real.

## ✨ Funcionalidades

- 🎯 Interface responsiva e moderna (Tailwind CSS)
- 🤖 Integração com Google Gemini AI
- 📱 Layout mobile-first
- ⚡ Build rápido com Vite
- 🎨 Componentes bem estruturados
- 🔗 Integração WhatsApp
- 📊 Simulador interativo

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 + TypeScript
- **Build:** Vite 6
- **Estilo:** Tailwind CSS + Motion animations
- **IA:** Google Gemini API
- **UI Components:** Lucide React
- **Servidor:** Express.js
- **Package Manager:** npm

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Chave API do Google Gemini (gratuita)

## 🎯 Quick Start

### 1. Clonar e Instalar

\`\`\`bash
git clone https://github.com/dev-jordi/page-pedidos.git
cd page-pedidos
npm install
\`\`\`

### 2. Configurar Variáveis de Ambiente

Crie um arquivo \`.env.local\` na raiz do projeto:

\`\`\`env
VITE_GEMINI_API_KEY=sua_chave_api_aqui
\`\`\`

Obtenha sua chave gratuita em: https://makersuite.google.com/app/apikey

### 3. Executar Localmente

\`\`\`bash
npm run dev
\`\`\`

A aplicação estará disponível em \`http://localhost:3000\`

## 📦 Scripts Disponíveis

\`\`\`bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # Verifica tipos com TypeScript
npm run clean    # Remove arquivos gerados
\`\`\`

## 🌐 Deploy

### Vercel (Recomendado)

1. Push o código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Add New" → "Project"
4. Selecione este repositório
5. Configure as variáveis de ambiente
6. Clique em "Deploy"

**Build Settings:**
- Build Command: \`npm run build\`
- Output Directory: \`dist\`

### Variáveis de Ambiente no Vercel

No dashboard do Vercel, adicione:
- \`VITE_GEMINI_API_KEY\`: Sua chave da API do Google Gemini

## 📁 Estrutura do Projeto

\`\`\`
src/
├── components/      # Componentes React
├── data/           # Dados mockados
├── assets/         # Imagens e mídia
├── types.ts        # Definições TypeScript
├── App.tsx         # Componente principal
├── main.tsx        # Ponto de entrada
└── index.css       # Estilos globais
\`\`\`

## 🔐 Segurança

- As chaves de API devem estar apenas em variáveis de ambiente
- Nunca commitar \`.env.local\`
- Use \`.env.example\` como template

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/dev-jordi/page-pedidos/issues)

---

**Desenvolvido com ❤️ por Dev Jordi**
