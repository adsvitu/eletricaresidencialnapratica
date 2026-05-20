# Elétrica Residencial do Zero à Prática — Landing Page

> Plano completo de criação. Revisar e aprovar antes da execução.

---

## 🎨 Design Commitment: INDUSTRIAL TECH PRECISION

| Decisão | Escolha | Justificativa |
|---------|---------|---------------|
| **Estilo** | Industrial Técnico | Remete a obra limpa, quadro de comando, formação profissional |
| **Geometria** | Sharp edges (2px radius) | Transmite precisão técnica. Nada de "rounded-xl" genérico |
| **Tipografia** | Outfit (headlines) + DM Sans (body) | Geométrica e condensada nos títulos, legível no corpo |
| **Modo** | Dark mode (fundo escuro) | Contraste alto, premium, foco no conteúdo |
| **Layout** | Vertical Narrative — sem split-screen | Fluxo de leitura contínuo mobile-first, sem hero dividido |
| **Animações** | Scroll-triggered reveals + hover spring | Página viva, mas sem exagero |

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg-primary` | `#0a0f1e` | Fundo principal (azul petróleo escuro) |
| `--bg-secondary` | `#111827` | Cards e seções alternadas |
| `--bg-card` | `#1a2233` | Cards internos |
| `--accent` | `#f5a623` | CTAs, destaques, ícones (amarelo/âmbar elétrico) |
| `--accent-hover` | `#ffb940` | Hover dos CTAs |
| `--text-primary` | `#ffffff` | Texto principal |
| `--text-secondary` | `#94a3b8` | Texto de apoio (cinza claro) |
| `--success` | `#22c55e` | Checks, confirmações |
| `--danger` | `#ef4444` | "Antes" / problemas |
| `--border` | `#1e293b` | Bordas sutis |

> [!IMPORTANT]
> Sem purple/violet. Sem mesh gradients. Sem glassmorphism. Sem bento grid.

### Tipografia

```
Headlines:  font-family: 'Outfit', sans-serif; font-weight: 700-800
Body:       font-family: 'DM Sans', sans-serif; font-weight: 400-500
Escala:     Hero H1: clamp(2.5rem, 6vw, 4.5rem)
            H2 seções: clamp(1.75rem, 4vw, 2.75rem)
            Body: 1rem (16px) / line-height: 1.6
```

---

## 📐 Arquitetura CSS — Design Tokens

Arquivo único `style.css` com:

### 1. Reset + Custom Properties
- CSS Reset moderno (box-sizing, margin 0)
- Todas as variáveis de cor, tipografia, espaçamento em `:root`
- `@media (prefers-reduced-motion: reduce)` global

### 2. Base Styles
- Body: bg-primary, text-primary, font DM Sans
- Links, listas, botões base
- Container: `max-width: 1120px; margin: 0 auto; padding: 0 1.5rem`

### 3. Componentes
- `.btn-primary` — Amarelo elétrico, sharp, 48px altura, font-weight 700
- `.btn-secondary` — Outline branco, mesma geometria
- `.section` — Padding vertical `clamp(4rem, 8vw, 7rem)`
- `.card` — bg-card, border 1px border-color, 2px radius
- `.badge` — Pequeno label com fundo accent
- `.faq-item` — Accordion nativo com `<details><summary>`

### 4. Utilities
- `.text-accent` / `.text-secondary`
- `.grid-2` / `.grid-3` — responsive com auto-fit
- `.sr-only` — acessibilidade

### 5. Animações
- `@keyframes fadeInUp` — translateY(30px) → 0, opacity 0 → 1
- `.reveal` — classe aplicada via IntersectionObserver
- Hover nos CTAs: `transform: translateY(-2px); box-shadow: 0 8px 25px rgba(245,166,35,0.3)`

---

## 🏗️ Estrutura HTML — 12 Blocos

### Bloco 1: HERO (Full-width, imagem de fundo)

```
<section id="hero">
  Imagem hero.png como background com overlay escuro (gradient)
  
  <h1>Elétrica residencial não se aprende no chute.</h1>
  
  <p>Aprenda elétrica residencial do zero à prática em uma formação 
  presencial para começar na área ou profissionalizar seus serviços 
  com mais técnica, segurança e confiança.</p>
  
  Badges inline:
  [⚡ 7 dias presenciais] [📍 Vila Velha/ES] [💳 Até 12x]
  
  Info cards:
  - 08 a 14 de junho
  - Itaparica — Vila Velha/ES  
  - R$800
  
  <a href="#investimento" class="btn-primary">Quero garantir minha vaga</a>
</section>
```

**Decisão visual:** Hero com imagem fullscreen + overlay gradient escuro (de baixo para cima), headline massiva centralizada, bullets como badges horizontais. Sem split-screen.

---

### Bloco 2: DOR

```
<section id="problema">
  <h2>O problema não é falta de vídeo na internet. É falta de sequência.</h2>
  
  <p>Hoje tem conteúdo de elétrica em todo lugar. Mas aprender por pedaços 
  pode deixar você inseguro, pulando etapas importantes e cometendo erros 
  que colocam o serviço, o cliente e você em risco.</p>
  
  Lista com ícone ✗ vermelho:
  - Você vê uma dica aqui, outra ali, mas não sabe a ordem certa.
  - Faz pequenos serviços, mas ainda sente insegurança.
  - Tem medo de errar cabo, disjuntor, tomada ou aterramento.
  - Sabe que elétrica dá dinheiro, mas falta base prática para começar.
  - Quer cobrar melhor, mas ainda não passa segurança suficiente.
  
  <p class="highlight">Nesta formação, você aprende com orientação presencial, 
  prática e uma sequência clara do que precisa dominar primeiro.</p>
</section>
```

**Layout:** Fundo bg-secondary. Lista com ícones vermelhos (✗) à esquerda. Texto de fechamento com borda lateral accent.

---

### Bloco 3: PARA QUEM É

```
<section id="para-quem">
  <h2>Essa formação é para você que:</h2>
  
  Grid 2 colunas (mobile: 1 coluna) com cards:
  - ⚡ Quer começar a trabalhar com elétrica residencial.
  - 🔧 Já faz pequenos serviços, mas sente falta de técnica.
  - 💼 Quer aprender uma profissão prática e com demanda constante.
  - 📚 Quer parar de depender de vídeo solto e tentativa e erro.
  - 🔌 Quer entender circuitos, tomadas, interruptores, cabos, disjuntores e aterramento.
  - 🛡️ Quer executar serviços com mais segurança e confiança.
  - 💰 Quer ter base para cobrar melhor e passar mais profissionalismo.
</section>
```

**Layout:** Cards em grid 2-col com ícone accent + texto. Fundo bg-primary.

---

### Bloco 4: TRANSFORMAÇÃO (Antes vs Depois)

```
<section id="transformacao">
  <h2>Você entra com dúvida. Sai com direção.</h2>
  
  <p>Ao invés de estudar elétrica de forma solta, você vai seguir uma 
  sequência prática: entender os fundamentos, conhecer os componentes, 
  montar circuitos, interpretar situações residenciais e aprender os 
  cuidados essenciais para executar serviços com mais segurança.</p>
  
  Dois blocos lado a lado (mobile: stacked):
  
  ANTES (borda vermelha):          DEPOIS (borda verde):
  ✗ Aprende por vídeo solto        ✓ Entende a lógica dos circuitos
  ✗ Faz no improviso               ✓ Conhece os principais componentes
  ✗ Tem insegurança para executar  ✓ Aprende com prática presencial
  ✗ Não sabe explicar o serviço    ✓ Usa a NBR 5410 como referência
  ✗ Tem dificuldade para cobrar    ✓ Passa mais segurança para trabalhar
</section>
```

**Layout:** Dois cards com borda-top (vermelho e verde), lado a lado em desktop, empilhados em mobile. Fundo bg-secondary.

---

### Bloco 5: NBR 5410 / AUTORIDADE TÉCNICA

```
<section id="nbr5410">
  <h2>Prática com base nos fundamentos da NBR 5410.</h2>
  
  <p>A formação apresenta os principais fundamentos usados em instalações 
  elétricas residenciais de baixa tensão, com referência aos conceitos 
  da ABNT NBR 5410.</p>
  
  Grid de itens com ícone check verde:
  - Previsão de cargas
  - Divisão de circuitos
  - Condutores
  - Tomadas e iluminação
  - Proteção
  - Disjuntores
  - Aterramento
  - Quadro de distribuição
  - Cores dos condutores
  - Segurança contra riscos elétricos
  
  Frase destaque:
  "Não é só ligar fio. É entender a lógica por trás de uma instalação segura."
</section>
```

**Layout:** Grid 2-col de itens com check. Frase de impacto em bloco destacado com borda accent. Fundo bg-primary.

---

### Bloco 6: O QUE VAI APRENDER

```
<section id="conteudo">
  <h2>O que você vai aprender na formação</h2>
  
  3 cards (mobile: stacked):
  
  Card 1 — ⚡ Fundamentos Elétricos:
  tensão, corrente, potência, resistência, 
  corrente contínua e alternada, cálculo de consumo.
  
  Card 2 — 🔌 Circuitos Residenciais:
  circuitos série/paralelo, tomadas 127V/220V, 
  interruptor simples/paralelo/intermediário, 
  campainha, sensor de presença, relé fotoelétrico.
  
  Card 3 — 🛡️ Instalação e Proteção:
  padrão de entrada, quadro de distribuição, disjuntores, 
  cabos e condutores, aterramento, cores dos condutores 
  conforme NBR 5410, previsão de cargas, quadro de carga, 
  riscos elétricos e segurança.
</section>
```

**Layout:** Grid 3-col (mobile: 1-col). Cards com header accent, lista com bullet sutil. Fundo bg-secondary.

---

### Bloco 7: MÉTODO C.I.R.C.U.I.T.O.

```
<section id="metodo">
  <h2>Método C.I.R.C.U.I.T.O.</h2>
  
  Timeline vertical com 8 passos:
  
  C — Conceitos essenciais
  I — Interpretação residencial
  R — Redes e circuitos
  C — Cabos e condutores
  U — Uso de proteções
  I — Instalações práticas
  T — Técnico-profissional
  O — Obra segura
  
  Cada passo: letra grande accent + título bold + descrição curta
</section>
```

**Layout:** Timeline vertical com linha lateral accent. Letras do acrônimo em tamanho display (2rem+) na cor accent. Fundo bg-primary.

---

### Bloco 8: CRONOGRAMA

```
<section id="cronograma">
  <h2>Quando e onde vai acontecer</h2>
  
  Card 1 — Semana (08 a 12/06):
  Segunda a sexta, das 18h30 às 22h
  
  Card 2 — Fim de semana (13 e 14/06):
  Sábado e domingo, das 08h às 17h
  
  Card destaque:
  📍 Policlínica RA
  Av. Saturnino Rangel Mauro, 103B — Itaparica, Vila Velha/ES
  
  Badge: "Aulas noturnas durante a semana + prática intensiva no fim de semana."
</section>
```

**Layout:** 2 cards lado a lado + card fullwidth abaixo para o local. Fundo bg-secondary.

---

### Bloco 9: PREÇO / OFERTA

```
<section id="investimento">
  <h2>Investimento na formação</h2>
  
  Card principal com borda accent:
  R$800
  Pix ou cartão em até 12x
  
  "Uma formação presencial intensiva para quem quer construir uma base 
  prática em elétrica residencial e trabalhar com mais técnica, segurança 
  e confiança."
  
  <a class="btn-primary">Quero garantir minha vaga</a>
  <small>Vagas limitadas para melhor acompanhamento nas aulas práticas.</small>
</section>
```

**Layout:** Card centralizado com preço grande (3rem+), CTA grande, microcopy sutil abaixo. Fundo bg-primary.

---

### Bloco 10: SOBRE O PROFESSOR

```
<section id="professor">
  <h2>Quem vai conduzir a formação</h2>
  
  Card com espaço para foto (placeholder circle) + texto:
  
  "Weber NC Soluções Elétricas conduz a formação com foco em prática, 
  segurança e aplicação real no dia a dia da elétrica residencial."
  
  [Inserir aqui a experiência do professor, certificações, 
  atuação prática e diferenciais.]
</section>
```

**Layout:** Card com placeholder para foto à esquerda (mobile: acima), texto à direita. Fundo bg-secondary.

---

### Bloco 11: FAQ

```
<section id="faq">
  <h2>Perguntas frequentes</h2>
  
  8 items de <details><summary>:
  - Preciso ter experiência com elétrica?
  - O curso é presencial?
  - Vou aprender na prática?
  - O curso é baseado na NBR 5410?
  - Posso pagar no cartão?
  - Qual o valor?
  - Onde será?
  - O curso me habilita a assinar projetos elétricos?
</section>
```

**Layout:** Accordion nativo com `<details>`. Borda sutil, ícone + rotação no toggle. Fundo bg-primary.

---

### Bloco 12: CTA FINAL

```
<section id="cta-final">
  <h2>Pare de aprender elétrica no improviso.</h2>
  
  <p>Aprenda com sequência, prática presencial e base técnica para 
  começar na área ou profissionalizar seus serviços elétricos residenciais.</p>
  
  <a class="btn-primary">Quero garantir minha vaga</a>
</section>
```

**Layout:** Centralizado, fundo com gradient sutil de bg-secondary → bg-primary. CTA grande.

---

### Footer

```
<footer>
  Weber NC Soluções Elétricas © 2025
  WhatsApp link
</footer>
```

---

### Mobile: Botão Fixo

```
<div class="mobile-cta-bar">
  <a href="#investimento" class="btn-primary">Garantir minha vaga</a>
</div>
```

**Fixo no bottom, aparece apenas em telas ≤768px, com `position: fixed; bottom: 0`. Some ao scroll no hero (IntersectionObserver).**

---

## 🖥️ Estrutura de Arquivos

```
clients/eletricaresidencialnapratica/
├── index.html      ← Página completa (HTML semântico)
├── style.css       ← CSS único com design tokens + componentes
├── script.js       ← Scroll animations + FAQ + Mobile CTA
└── hero.png        ← Imagem hero (já copiada)
```

> Nenhum framework. HTML + CSS + JS vanilla. Máxima performance.

---

## 🔍 SEO & Meta Tags

```html
<title>Elétrica Residencial do Zero à Prática | Curso Presencial em Vila Velha/ES</title>
<meta name="description" content="Formação presencial de elétrica residencial em Vila Velha/ES para quem quer começar na área ou profissionalizar seus serviços com base nos fundamentos da NBR 5410.">
<meta property="og:title" content="Elétrica Residencial do Zero à Prática">
<meta property="og:description" content="Formação presencial intensiva. 7 dias. Vila Velha/ES. R$800.">
<meta property="og:image" content="hero.png">
<meta property="og:url" content="https://eletricaresidencialnapratica.netlify.app/">
```

Schema FAQ markup com `@type: FAQPage` para as 8 perguntas.

---

## ✅ Verificação

1. **Visual**: Abrir no browser, testar responsividade em 375px, 768px e 1440px
2. **Performance**: Sem frameworks, sem fontes locais bloqueantes (Google Fonts com `display=swap`)
3. **SEO**: Title, description, OG tags, FAQ schema
4. **Acessibilidade**: Contraste WCAG AA, semântica HTML5, `prefers-reduced-motion`
5. **Mobile**: CTA fixo funcional, hero legível, FAQ accordion funcional

---

## Open Questions

> [!IMPORTANT]
> **WhatsApp**: Qual o número do WhatsApp do Weber NC para o CTA secundário "Falar pelo WhatsApp"?

> [!IMPORTANT]
> **Link de pagamento**: O CTA "Quero garantir minha vaga" deve apontar para qual URL? (link de pagamento, formulário, WhatsApp?)

> [!NOTE]
> **Foto do professor**: Temos uma foto do Weber para usar? Caso contrário, fica o placeholder editável conforme o briefing.
