# Escopo do Projeto - Site Supremo Inova

## 📋 Visão Geral
Desenvolvimento de um site institucional moderno e responsivo para a agência Supremo Inova, focado em apresentar serviços, cases de sucesso e captar novos clientes através de uma experiência digital premium.

## 🛠️ Stack de Desenvolvimento

### Frontend
- **Framework**: ReactJS 18+ (com TypeScript)
- **Styling**: TailwindCSS 3.x
- **Deployment**: Vercel
- **Geração de Conteúdo**: IA TRAE para componentes e textos
- **Animações**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

### Ferramentas de Desenvolvimento
- **Build Tool**: Vite
- **Package Manager**: npm/yarn
- **Linting**: ESLint + Prettier
- **Version Control**: Git

## 📁 Estrutura de Diretórios

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Sidebar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Cases.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       └── ParallaxScroll.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Cases.tsx
│   ├── Partner.tsx
│   └── Contact.tsx
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useIntersectionObserver.ts
│   └── useMediaQuery.ts
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   └── seo.ts
├── assets/
│   ├── images/
│   ├── videos/
│   └── icons/
├── styles/
│   ├── globals.css
│   └── components.css
└── data/
    ├── services.ts
    ├── cases.ts
    └── team.ts
```

## 🗺️ Roadmap das Páginas

### 1. Home (Página Principal)
**Componentes:**
- Hero Section com animação de texto dinâmico
- Serviços em destaque (cards animados)
- Cases de sucesso (carrossel)
- Depoimentos de clientes
- CTA para contato
- Placeholder para animação IA: "Gerador de ideias criativas"

### 2. Sobre (About)
**Componentes:**
- História da agência
- Missão, visão e valores
- Equipe (cards com hover effects)
- Timeline da empresa
- Números e conquistas
- Placeholder para animação IA: "Visualizador de crescimento"

### 3. Cases de Sucesso
**Componentes:**
- Grid de cases com filtros
- Modal de detalhes do case
- Galeria de imagens/vídeos
- Métricas de resultado
- Depoimento do cliente
- Placeholder para animação IA: "Analisador de performance"

### 4. Serviços
**Componentes:**
- Lista de serviços com descrições
- Processo de trabalho (timeline)
- Pacotes e preços
- FAQ interativo
- Formulário de orçamento
- Placeholder para animação IA: "Calculadora de projetos"

### 5. Landing do Sócio
**Componentes:**
- Proposta de parceria
- Benefícios exclusivos
- Formulário de cadastro
- Documentos para download
- Área de login restrita
- Placeholder para animação IA: "Simulador de lucros"

### 6. Contato
**Componentes:**
- Formulário de contato
- Informações da empresa
- Mapa interativo
- Links para redes sociais
- Chat online (placeholder)
- Placeholder para animação IA: "Assistente virtual"

## 🎨 Diretrizes de Design

### Paleta de Cores
```css
/* Tema Escuro Minimalista */
--primary: #000000
--secondary: #1a1a1a
--accent: #3b82f6
--text-primary: #ffffff
--text-secondary: #a1a1aa
--border: #27272a
--background: #0a0a0a
```

### Tipografia
- **Primary Font**: Inter (400, 500, 600, 700)
- **Headings**: 700 weight
- **Body**: 400 weight
- **Captions**: 500 weight

### Layout Principles
- **Inspiração**: Linear.app design system
- **Grid**: 12 colunas responsivas
- **Spacing**: Sistema baseado em 8px
- **Border Radius**: 8px padrão, 12px para cards
- **Shadows**: Sutis, com blur baixo

### Componentes Base
- **Header**: Fixo no topo, backdrop blur
- **Footer**: Elegante, com links organizados
- **Cards**: Hover effects suaves
- **Buttons**: Estados bem definidos
- **Forms**: Validação em tempo real

### Animações
- **Duração**: 200-400ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Scroll Animations**: Fade in, slide up
- **Hover Effects**: Scale, opacity, color
- **Loading States**: Skeleton screens

### Responsividade
```css
/* Breakpoints */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🔍 SEO e Performance

### Meta Tags Essenciais
```html
<title>Supremo Inova - Agência Digital Premium</title>
<meta name="description" content="Transformamos ideias em experiências digitais extraordinárias. Desenvolvimento web, design e marketing digital de alta performance.">
<meta name="keywords" content="agência digital, desenvolvimento web, design, marketing digital">
<meta property="og:title" content="Supremo Inova - Agência Digital">
<meta property="og:description" content="Experiências digitais extraordinárias">
<meta property="og:image" content="/og-image.jpg">
```

### Estrutura de URLs
- `/` - Home
- `/sobre` - About
- `/servicos` - Services
- `/cases` - Cases de Sucesso
- `/parceiro` - Landing do Sócio
- `/contato` - Contact
- `/cases/[slug]` - Case específico

### Performance
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Images**: WebP format, lazy loading
- **Code Splitting**: Por rota
- **Bundle Size**: < 200KB inicial

## 📱 Organização de Conteúdo

### Hierarquia de Informações
1. **Proposta de valor** (Hero)
2. **Serviços principais** (Cards)
3. **Prova social** (Cases/Depoimentos)
4. **Sobre a empresa** (Credibilidade)
5. **Call-to-action** (Conversão)

### Copywriting Guidelines
- **Tom**: Profissional, confiante, inovador
- **Linguagem**: Clara e direta
- **CTAs**: Verbos de ação ("Transforme", "Descubra", "Inove")
- **Headlines**: Máximo 60 caracteres
- **Descriptions**: 120-160 caracteres

## 🎬 Integração de Mídia

### Vídeos nos Cases
```typescript
// Estrutura para vídeos
interface CaseVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  autoplay?: boolean;
}
```

### Formatos Suportados
- **Vídeos**: MP4, WebM
- **Imagens**: WebP, JPEG, PNG
- **Animações**: Lottie JSON, CSS animations

### Player de Vídeo
- Controles customizados
- Thumbnail preview
- Loading states
- Responsive design

## 🚀 Fases de Desenvolvimento

### Fase 1: Setup e Estrutura (Semana 1)
- Configuração do projeto
- Componentes base
- Layout principal

### Fase 2: Páginas Core (Semana 2-3)
- Home, Sobre, Serviços
- Sistema de navegação
- Responsividade

### Fase 3: Cases e Interações (Semana 4)
- Página de cases
- Formulários
- Animações

### Fase 4: Landing e Otimizações (Semana 5)
- Landing do sócio
- SEO implementation
- Performance optimization

### Fase 5: Deploy e Testes (Semana 6)
- Deploy na Vercel
- Testes cross-browser
- Ajustes finais

## 📋 Checklist de Entrega

- [ ] Todas as páginas responsivas
- [ ] SEO básico implementado
- [ ] Performance otimizada
- [ ] Formulários funcionais
- [ ] Animações suaves
- [ ] Cross-browser compatibility
- [ ] Documentação técnica
- [ ] Guia de manutenção

## 🔧 Configurações de Deploy

### Vercel Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### Environment Variables
```
VITE_API_URL=https://api.supremoinova.com
VITE_CONTACT_EMAIL=contato@supremoinova.com
VITE_ANALYTICS_ID=GA_TRACKING_ID
```

---

**Documento criado em**: $(date)
**Versão**: 1.0
**Responsável**: Equipe de Desenvolvimento Supremo Inova