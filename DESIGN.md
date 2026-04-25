# Design System — Nicolle Longobardi

> Combinação customizada: Framer (estrutura tipográfica, impacto de display) + Airbnb (cor quente, foco no humano, fundo claro).
> Criado para uma profissional que atua nas artes cênicas, educação e produção cultural — rigorosa e sensível ao mesmo tempo.

---

## 1. Tema Visual & Atmosfera

O site da Nicolle é uma página de marca pessoal que equilibra **impacto tipográfico** e **calor humano**. O fundo é branco puro — um canvas limpo que deixa o conteúdo respirar, ao contrário do void escuro do Framer original. A assinatura tipográfica vem do GT Walsheim com letter-spacing negativo nos títulos: comprimido, cinético, autorizado — mas servido sobre luz, não sobre escuridão.

O coral-terracota (`#e8573c`) é o único acento de cor, usado com parcimônia: CTAs, ênfase de hover, marcadores de seção. Tudo o mais é escala de cinza disciplinada, com `#222222` carregando os textos principais. A fotografia (quando presente) respira em proporção 4:3 com cantos suavemente arredondados — sem texto sobreposto, sem gradiente, sem scraim.

O resultado é uma profissional que parece moderna e intencionalmente construída: a força tipográfica do Framer sinaliza que ela conhece o peso das palavras; a paleta quente e o canvas claro do Airbnb sinalizam que ela trabalha com pessoas.

**Características-chave:**
- Canvas branco (`#ffffff`) — não escuro. Luz como identidade.
- GT Walsheim com negative tracking moderado (-2px a -4px) nos display titles — impacto sem agressividade
- Coral-terracota (`#e8573c`) como único acento — quente, artístico, preciso
- Botões com pill shape (radius 40px–100px) — suaves, contemporâneos
- Fotografia 4:3 com 14px–20px radius — o trabalho como evidência
- Inter como fonte de corpo com peso mínimo 500 — nunca 400, sempre confiante
- Espaçamento generoso entre seções (80px–120px) — respiro dramático, narrativa em blocos

---

## 2. Paleta de Cores & Papéis

### Primária
- **Canvas White** (`#ffffff`): Fundo de página. Toda seção começa aqui.
- **Coral Terracota** (`#e8573c`): Acento primário — CTAs, hover, marcadores ativos, links de ênfase.
- **Ink Black** (`#222222`): Cor de texto principal. Headings, body, labels, preços. ~90% de todo texto.

### Secundária & Acento
- **Deep Coral** (`#c94028`): Variante pressionada/hover do coral — botão ativo, estado pressed.
- **Coral Glow** (`rgba(232, 87, 60, 0.10)`): Halo sutil atrás de elementos interativos, ring de foco.

### Superfície & Fundo
- **Soft Cloud** (`#f7f7f7`): Superfície de seção alternada — rodapé, blocos de citação, cards de timeline.
- **Canvas White** (`#ffffff`): Fundo padrão de cards, booking panel, containers.

### Neutros & Texto
- **Ink Black** (`#222222`): Texto primário — headings, corpo, labels de botão.
- **Ash Gray** (`#6a6a6a`): Texto secundário — subtítulos, metadados, datas de experiência.
- **Stone Gray** (`#c1c1c1`): Divisores terciários, placeholders de avatar.
- **Hairline Gray** (`#dddddd`): Bordas 1px — separadores de card, linhas de seção.

### Semântica
- **Error Red** (`#c13515`): Validação de formulário.
- **Info Blue** (`#428bff`): Links de e-mail e links informativos.

### Sistema de Gradiente
O único gradiente do sistema é o coral sweep usado no hover de CTAs principais:
```
linear-gradient(135deg, #e8573c 0%, #c94028 100%)
```
Nunca como fundo de superfície — apenas em pill fills e momentos de CTA de destaque.

---

## 3. Tipografia

### Famílias

| Papel | Família | Fallbacks |
|-------|---------|-----------|
| Display / Headings | `GT Walsheim Medium` | `Plus Jakarta Sans`, `DM Sans`, `system-ui` |
| Body / UI | `Inter Variable` | `-apple-system`, `system-ui`, `Roboto`, `sans-serif` |

> Se GT Walsheim não estiver disponível, **Plus Jakarta Sans** é o substituto mais próximo (Google Fonts, gratuito) — mesmas proporções geométricas e peso médio semelhante.

### Hierarquia

| Papel | Família | Tamanho | Peso | Line Height | Letter Spacing | Notas |
|-------|---------|---------|------|-------------|----------------|-------|
| Display Hero | GT Walsheim Medium | 96px | 500 | 0.90 | -4px | Nome da Nicolle no hero — comprimido, kinético |
| Section Display | GT Walsheim Medium | 72px | 500 | 0.95 | -3px | Títulos de seções principais |
| Section Heading | GT Walsheim Medium | 48px | 500 | 1.05 | -2px | Sub-seções, headings de experiência |
| Feature Heading | GT Walsheim Medium | 32px | 500 | 1.15 | -1px | Cards de projeto, títulos de cargo |
| Card Title | Inter Variable | 22px | 700 | 1.25 | -0.5px | Empresa/instituição nos cards de experiência |
| Subtitle | Inter Variable | 18px | 600 | 1.25 | -0.2px | Taglines, cargo + período |
| Body Large | Inter Variable | 18px | 500 | 1.55 | 0 | Parágrafo principal do "Sobre" |
| Body | Inter Variable | 16px | 500 | 1.60 | 0 | Corpo dos bullets de experiência, descrições |
| Caption | Inter Variable | 14px | 500 | 1.43 | 0 | Metadados, localização, duração |
| Caption Bold | Inter Variable | 14px | 600 | 1.43 | 0 | Ênfase em datas, competências destacadas |
| Label / Button | Inter Variable | 16px | 500 | 1.25 | 0 | Labels de botão, links de nav |
| Micro | Inter Variable | 12px | 400 | 1.33 | 0 | Footnotes, disclaimer de formulário |

### Princípios
- **Compressão como personalidade**: GT Walsheim com tracking negativo nos displays — palavras com energia, não agressividade. Moderado em relação ao Framer original (-4px, não -5.5px).
- **500 é o novo 400**: O peso de corpo é 500, nunca 400. Cada linha de texto transmite segurança.
- **Tracking negativo apenas em display**: Body e captions mantêm tracking 0 para legibilidade.
- **Line-height generosa no corpo**: 1.55–1.60 para longos parágrafos descritivos (educação, experiências).
- **Família única no corpo**: Inter resolve tudo abaixo de 28px — sem mistura de famílias no conteúdo.

---

## 4. Componentes

### Botões

**CTA Primário** ("Fale comigo", "Ver portfólio", "Baixar currículo")
- Background: Coral Terracota `#e8573c`
- Texto: Canvas White `#ffffff`, Inter 500, 16px
- Padding: 14px vertical, 28px horizontal
- Radius: 100px (pill completo)
- Hover: `linear-gradient(135deg, #e8573c, #c94028)` + `transform: translateY(-1px)`
- Active/pressed: `transform: scale(0.96)`
- Focus: `0 0 0 3px rgba(232, 87, 60, 0.25)`

**Botão Secundário** ("Ver mais", "LinkedIn", ações terciárias)
- Background: `#ffffff`
- Texto: Ink Black `#222222`, Inter 500, 14–16px
- Padding: 10px 20px
- Radius: 100px (pill) ou 8px (retangular)
- Borda: `1px solid #dddddd`
- Hover: borda muda para `#222222`

**Link Texto** (links inline no corpo)
- Cor: Ink Black `#222222` com underline 1px Coral Terracota
- Hover: Coral Terracota `#e8573c`

### Cards & Containers

**Card de Experiência** (timeline de carreira)
- Background: `#ffffff`
- Radius: 14px
- Borda: `1px solid #dddddd`
- Shadow: `rgba(0, 0, 0, 0.04) 0 2px 8px 0` — elevação sutil
- Padding: 24px
- Estrutura: Logo/ícone da empresa (32px) → Nome da empresa (Inter 700, 16px, Ink Black) → Cargo (Inter 600, 14px, Ash Gray) → Período + localização (Inter 500, 14px, Ash Gray) → Bullets de atividade (Inter 500, 15px, Ink Black)
- Hover: shadow aumenta para `rgba(0, 0, 0, 0.08) 0 4px 16px 0` + borda passa para `#c1c1c1`

**Card de Projeto / Portfólio**
- Background: `#f7f7f7` (Soft Cloud)
- Radius: 20px
- Borda: nenhuma — separação vem do fundo
- Padding: 32px
- Imagem (quando presente): 4:3, full-bleed, 14px radius no topo
- Título: GT Walsheim 32px, Ink Black
- Descrição: Inter 500, 16px, Ash Gray

**Painel de Contato** (seção CTA final)
- Background: `#ffffff`
- Radius: 20px
- Borda: `1px solid #dddddd`
- Shadow: `rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0` — três camadas sutis (assinatura Airbnb)
- Padding: 40px
- Conteúdo: headline GT Walsheim 48px → subtítulo Inter 18px Ash Gray → linha de e-mail + telefone → botão CTA coral

### Inputs & Formulários

**Campo de Texto** (formulário de contato)
- Background: `#ffffff`
- Borda: `1px solid #dddddd`
- Radius: 8px
- Padding: 14px 16px
- Fonte: Inter 500, 16px
- Placeholder: Ash Gray `#6a6a6a`
- Focus: borda passa para Ink Black `#222222` + `0 0 0 3px rgba(232, 87, 60, 0.15)` coral ring
- Erro: borda `#c13515`, texto auxiliar em Error Red

### Navegação

**Desktop**
- Altura: 72px
- Background: `#ffffff` com `border-bottom: 1px solid #dddddd`
- Esquerda: nome "Nicolle Longobardi" em GT Walsheim 20px, Ink Black
- Direita: links de nav (Inter 500, 15px, `#222222`) + botão CTA coral pill
- Sticky: fixo no topo ao rolar

**Mobile**
- Logo/nome em GT Walsheim comprimido
- Hamburger menu → drawer lateral
- CTA coral ocupa largura total no final do drawer

### Tratamento de Imagem
- **Proporção padrão**: 4:3 (trabalhos, projetos, eventos)
- **Radius**: 14px em grids, 20px em destaques de portfólio, `50%` em avatar
- **Regra**: nunca sobrepor texto em foto — legendas sempre abaixo
- **Sem gradiente scrims**: o branco do canvas separa foto do texto
- **Avatar da Nicolle**: circular 50%, 80px–120px dependendo do contexto

### Insígnia de Competência (tags de habilidades)
- Background: Soft Cloud `#f7f7f7`
- Texto: Ink Black `#222222`, Inter 600, 12px
- Padding: 4px 10px
- Radius: 100px (pill)
- Hover: background vira `rgba(232, 87, 60, 0.10)`, texto vira Coral `#e8573c`

---

## 5. Layout

### Sistema de Espaçamento
- **Unidade base**: 8px
- **Escala**: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120px
- **Padding entre seções**: 80px–120px desktop, 48px–64px mobile
- **Padding interno de cards**: 24px grandes, 16px pequenos
- **Gap entre cards de experiência**: 16px
- **Gap entre linhas de metadata**: 4px–8px (denso, como Airbnb)

### Grid & Container
- **Largura máxima**: 1200px, centralizado
- **Layout hero**: coluna única, centralizado
- **Seção "Sobre"**: 2 colunas — texto 60% + foto/visual 40%
- **Timeline de experiência**: coluna única com cards empilhados (ou 2 colunas em desktop para evitar altura excessiva)
- **Portfólio/projetos**: grid 2–3 colunas no desktop, 1 no mobile

### Filosofia de Espaço em Branco
O fundo branco faz o espaço respirar como pausa narrativa — não como vazio. Entre seções, 80px–120px criam blocos dramáticos. Dentro dos cards, 24px de padding interno com 4px–8px entre linhas de metadata traduzem densidade informativa sem aglomeração.

### Escala de Border Radius
| Radius | Uso |
|--------|-----|
| 4px | Tags inline, chip mínimo |
| 8px | Inputs, botões retangulares, dropdowns |
| 14px | Cards de experiência, imagens em grid |
| 20px | Cards de projeto, booking/contact panel |
| 32px | Containers grandes |
| 100px | Botões pill, badges de competência, avatar |
| 50% | Avatar, ícones circulares |

---

## 6. Profundidade & Elevação

| Nível | Tratamento | Uso |
|-------|-----------|-----|
| 0 (Flat) | Sem sombra | Cards de experiência no estado padrão, seções de texto |
| 1 (Subtle) | `rgba(0,0,0,0.04) 0 2px 8px 0` | Cards em hover, separação leve |
| 2 (Floating) | `rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0` | Contact panel, modal, dropdown — três camadas Airbnb |
| Focus Ring | `0 0 0 3px rgba(232,87,60,0.25)` | Botões focados, inputs ativos |
| Coral Glow | `rgba(232,87,60,0.10)` | Halo sutil em elementos interativos sobre fundo branco |

**Filosofia**: Airbnb stacked shadows — três camadas em opacidades diferentes criam elevação premium sem peso. O coral glow substitui o blue glow do Framer original, trazendo calor ao invés de frieza tecnológica.

---

## 7. Do's e Don'ts

### Do
- Usar Canvas White `#ffffff` como fundo — nunca escuro, nunca cinza
- Aplicar GT Walsheim Medium weight 500 com tracking negativo nos displays (-2px a -4px)
- Reservar Coral Terracota `#e8573c` para CTAs e ênfases — nunca decorativo
- Usar Ink Black `#222222` (não `#000000`) para todo o texto
- Manter peso Inter mínimo 500 — nunca 400 abaixo de 20px
- Fotografia 4:3 com 14px–20px radius, sem texto sobreposto
- Pill shape (100px radius) nos botões CTAs primários
- Três camadas de shadow para o painel de contato — elevação premium mas leve
- Espaçamento generoso entre seções (80px+) — respiro narrativo
- Tags de competência em pill com coral hover

### Don't
- Não usar dark mode — a identidade da Nicolle é luz, não void
- Não introduzir segunda cor de acento além do coral
- Não usar GT Walsheim em peso bold (700) — medium 500 é a voz da marca
- Não sobrepor texto em fotografias — captions sempre abaixo
- Não usar tracking positivo em headings — tudo comprimido
- Não adicionar sombras pesadas em cards no estado padrão — elevação 0 como base
- Não usar letter-spacing acima de 0 em textos abaixo de 20px
- Não misturar famílias tipográficas além do par GT Walsheim + Inter
- Não usar gradiente como fundo de seção — apenas em pill de CTA
- Não truncar bullets de experiência — o detalhe profissional é um diferencial

---

## 8. Comportamento Responsivo

### Breakpoints
| Nome | Largura | Mudanças principais |
|------|---------|---------------------|
| Mobile | <768px | Coluna única, hero 48px, nav hamburger, cards full-width |
| Tablet | 768px–1023px | 2 colunas para timeline, hero 64px, nav parcialmente visível |
| Desktop | 1024px–1199px | Layout completo, hero 80px, sidebar de contato |
| Wide | ≥1200px | Max 1200px centralizado, hero 96px, grid 3 colunas no portfólio |

### Estratégia de Colapso
- **Nav**: horizontal → hamburger drawer no mobile
- **Hero**: 96px → 72px → 48px, tracking negativo reduz proporcionalmente
- **Timeline**: single column no mobile, 1 card por linha; 2 colunas no desktop
- **Sobre**: 2 colunas (texto + foto) → stacked no mobile (foto primeiro, texto abaixo)
- **Portfólio**: 3 colunas → 2 → 1
- **Botões**: pill largura fixa no desktop, `width: 100%` no mobile

### Touch Targets
- Botões pill: mínimo 48px de altura — acima do WCAG 44px
- Links de nav: texto 15px com padding generoso para toque
- Cards de experiência: área clicável estende o padding interno

---

## 9. Estrutura de Seções Sugerida

| Seção | Componente | Tom |
|-------|-----------|-----|
| **Hero** | GT Walsheim 96px nome + Inter 18px tagline + botão coral | Impacto + clareza |
| **Sobre** | 2 colunas: texto longo Inter 18px + foto 4:3 circular | Narrativa pessoal |
| **Áreas de Atuação** | Grid 3 pills com ícone + label | Escaneável |
| **Experiência** | Cards empilhados com logo + bullets | Rigor profissional |
| **Projetos** | Grid de cards com imagem 4:3 + título + tag | Portfólio visual |
| **Contato** | Painel centralizado elevado com e-mail + telefone + CTA | Chamada à ação |

---

## 10. Guia para Agente de Código

### Referência Rápida de Cores
- Fundo: Canvas White (`#ffffff`)
- Texto principal: Ink Black (`#222222`)
- Texto secundário: Ash Gray (`#6a6a6a`)
- Acento / CTA: Coral Terracota (`#e8573c`)
- Hover do acento: Deep Coral (`#c94028`)
- Borda / divisor: Hairline Gray (`#dddddd`)
- Superfície alternada: Soft Cloud (`#f7f7f7`)
- Glow de foco: `rgba(232, 87, 60, 0.25)`

### Exemplos de Prompt por Componente

**Hero:**
> "Crie uma seção hero com fundo branco (#ffffff), nome 'Nicolle Longobardi' em GT Walsheim 96px weight 500, letter-spacing -4px, line-height 0.90, cor Ink Black (#222222). Abaixo, tagline em Inter 500 18px Ash Gray (#6a6a6a). Botão CTA 'Fale comigo' em coral (#e8573c), pill 100px radius, padding 14px 28px, texto branco Inter 500 16px."

**Card de Experiência:**
> "Crie um card de experiência com fundo branco, borda 1px Hairline Gray (#dddddd), 14px border-radius, 24px padding, shadow rgba(0,0,0,0.04) 0 2px 8px. Estrutura: nome da empresa Inter 700 16px Ink Black, cargo Inter 600 14px Ash Gray, período 14px 500 Ash Gray, bullets de atividade Inter 500 15px Ink Black com 4px gap entre linhas."

**Painel de Contato:**
> "Crie um painel de contato centralizado com fundo branco, 20px border-radius, borda 1px Hairline Gray, shadow em 3 camadas (rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0), padding 40px, max-width 560px. Conteúdo: heading GT Walsheim 48px Ink Black, subtítulo Inter 18px Ash Gray, e-mail clickável Info Blue (#428bff), botão coral pill."

**Tags de Competência:**
> "Crie pills de competência: fundo Soft Cloud (#f7f7f7), Inter 600 12px Ink Black, padding 4px 10px, 100px border-radius. Hover: fundo rgba(232,87,60,0.10), texto Coral (#e8573c)."

**Navegação:**
> "Crie nav sticky 72px, fundo branco, border-bottom 1px Hairline Gray (#dddddd). Esquerda: 'Nicolle Longobardi' GT Walsheim 20px weight 500 Ink Black. Direita: links Inter 500 15px Ink Black com hover underline coral, + botão pill coral 'Contato' com padding 10px 20px."

### Guia de Iteração
1. Verificar sempre se GT Walsheim tem tracking negativo nos displays — é a assinatura da marca.
2. Checar que o coral aparece APENAS em CTAs e interações — nunca decorativo.
3. Confirmar que Inter corpo está em peso 500 mínimo — nunca 400.
4. Garantir que fotografias têm radius 14px–20px e sem texto sobreposto.
5. Manter shadow do painel de contato em 3 camadas — uma sombra só parece genérica.
6. Se mais de um elemento coral aparecer por viewport, revisar — o acento deve ser escasso.
