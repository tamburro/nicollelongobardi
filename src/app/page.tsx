'use client'

import { useState, useEffect } from 'react'
import Gravity, { MatterBody } from '@/components/fancy/physics/gravity'

/* ─── Paleta ─────────────────────────────────────────────── */
// canvas:   #f4dfd0  cream — fundo de página
// cloud:    #ede0d4  cream escuro — seções alternadas
// white:    #ffffff  superfície de cards
// teal:     #0abfc7  accent decorativo (eyebrows, bullets, stats, pills)
// tealDeep: #089aa2  hover do teal
// coral:    #e84e28  CTAs e ação
// coralDp:  #c43d1c  hover do coral
// ink:      #222222  texto principal
// ash:      #6a6a6a  texto secundário
// stone:    #b5a090  texto terciário
// hairline: #d4c4b5  bordas
// footer:   #0a2a30  dark teal

/* ─── Data ───────────────────────────────────────────────── */
const navLinks = [
  { href: '#sobre',       label: 'Sobre' },
  { href: '#areas',       label: 'Áreas' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos',    label: 'Projetos' },
]

const areas = [
  { icon: '🎭', title: 'Produção Cultural & Eventos',    desc: 'Gestão end-to-end de eventos corporativos e culturais: briefing, cronograma, logística, fornecedores e execução. Da concepção à entrega.' },
  { icon: '📋', title: 'Gestão de Projetos',             desc: 'Planejamento estratégico, cronogramas, planilhas financeiras, KPIs e análise de pós-projeto. Método e rigor a serviço da criatividade.' },
  { icon: '🎪', title: 'Artes Cênicas',                  desc: 'Atriz com formação em teatro físico, máscara teatral e mímica. Experiência em teatro-educação, produção teatral e direção de produção.' },
  { icon: '🎓', title: 'Arte-Educação',                  desc: 'Criação e coordenação de programas educacionais para escolas públicas e espaços culturais. Teatro, corpo e território como linguagens pedagógicas.' },
  { icon: '✍️', title: 'Editais & Leis de Incentivo',   desc: 'Elaboração de projetos para editais públicos e privados, Leis de Incentivo à Cultura e ao Esporte — do argumento à captação.' },
  { icon: '🌱', title: 'Terceiro Setor',                 desc: 'Gestão de projetos socioambientais com foco em juventude, raça, clima e território. Mobilização de recursos e planejamento institucional.' },
]

type MultiRole = { title: string; period: string; bullets: string[] }
type Experience = { logo: string; company: string; role: string; period: string; bullets?: string[]; tags: string[]; multiRoles?: MultiRole[] }

const experiences: Experience[] = [
  {
    logo: 'EM', company: 'Embratel', role: 'Gestão de Eventos · Temporário',
    period: 'set 2023 – dez 2024 · 1 ano 4 meses · Rio de Janeiro · Híbrido',
    bullets: [
      'Gestão de projetos com briefings, cronogramas, planilhas financeiras, logística e tempos & movimentos',
      'Acompanhamento e gestão de cronograma de entregas',
      'Garantia de orçamentos, prazos, qualidade e KPIs junto ao time',
      'Acompanhamento da execução end-to-end com interação entre as áreas',
      'Análise de pós-projeto: relatório de fechamento, oportunidades de melhoria e entregas',
    ],
    tags: ['Eventos corporativos', 'Gestão de projetos', 'KPIs', 'Gestão de pessoas'],
  },
  {
    logo: 'D+', company: 'D+Live', role: 'Produção de Eventos · Tempo integral',
    period: 'set 2022 – fev 2024 · 1 ano 6 meses · Rio de Janeiro · No local',
    bullets: [
      'Atendimento ao cliente, captação e realização de briefings',
      'Confecção de relatórios de desempenho e indicadores',
      'Cotações, negociações e alinhamento de prazos com fornecedores, visando redução de custos',
      'Realização de cronogramas e checklists de planejamento e execução',
      'Análise, execução e entrega do escopo geral de eventos e projetos',
    ],
    tags: ['Grupo Soma', 'Hering', 'Animale', 'Planejamento estratégico', 'Negociação'],
  },
  {
    logo: 'AI', company: 'Instituto Ayíka', role: 'Gestão de Projetos · Tempo integral',
    period: 'ago 2021 – ago 2022 · 1 ano 1 mês',
    bullets: [
      'Gestão de projetos educativos ambientais com foco em juventude, raça, clima, gênero e território',
      'Planejamento institucional, estratégico, monitoramento e mobilização de recursos no terceiro setor',
      'Pesquisa, elaboração e execução de projetos culturais e educacionais para editais públicos e privados',
    ],
    tags: ['Terceiro setor', 'Planejamento estratégico', 'Editais', 'Criação de projetos'],
  },
  {
    logo: 'MR', company: 'MultiRio — Municipal Multimidia Company', role: 'Estagiária de Produção',
    period: 'ago 2019 – jan 2021 · 1 ano 6 meses',
    bullets: [
      'Roteiro e decupagem de projetos educacionais',
      'Produção e gestão de gravações externas e de estúdio',
      'Produção executiva e planejamento estratégico',
    ],
    tags: ['Análise de roteiros', 'Decupagem', 'Produção executiva', 'Produção televisiva'],
  },
  {
    logo: 'CM', company: 'Coletivo Mundé', role: 'Múltiplos cargos · Autônoma',
    period: 'jan 2014 – dez 2020 · 7 anos · Brasil',
    multiRoles: [
      { title: 'Coordenadora Educacional', period: 'jan 2014 – dez 2020 · 7 anos', bullets: ['Coordenação de projetos educacionais para instituições de ensino em São Gonçalo', 'Criação e concepção de Oficinas livres e Workshops para o projeto EAAC', 'Criação e mediação de oficinas de arte para 5 edições do GIRA Circuito Itinerante de Performance'] },
      { title: 'Atriz', period: 'jan 2014 – dez 2020 · 7 anos', bullets: ['Dama In Vitro · O que eu não posso mais calar · Sala Cinza'] },
      { title: 'Produção Teatral', period: 'ago 2015 – dez 2018', bullets: ['Direção de Produção e Produção executiva de Dama in Vitro e Sala Cinza'] },
    ],
    tags: ['Gestão educacional', 'Artes cênicas', 'Direção de arte', 'Produção teatral'],
  },
  {
    logo: 'UN', company: 'Universidade Federal do Estado do Rio de Janeiro — UNIRIO', role: 'Pesquisa & Extensão',
    period: 'fev 2015 – dez 2018 · 3 anos 11 meses · Rio de Janeiro',
    multiRoles: [
      { title: 'Professora Pesquisadora — Programa Teatro em Comunidades', period: 'jan 2017 – dez 2018 · 2 anos · Estágio', bullets: ['Professora de turmas de adolescentes e intergeracionais na Arena Dicró e Posto Américo Veloso, na Maré', 'Criação de oficinas teatrais bilíngues para a University of Michigan School of Music, Theatre & Dance'] },
      { title: 'Bolsista Pesquisadora — NEPAA', period: 'fev 2015 – dez 2016 · 1 ano 11 meses · Temporário', bullets: [] },
    ],
    tags: [],
  },
  {
    logo: 'SE', company: 'Sesc RJ', role: 'Atriz Profissional · Autônoma',
    period: 'jan 2010 – dez 2015 · 6 anos · Rio de Janeiro, Brasil',
    multiRoles: [
      { title: 'Artecorpo Teatro e Cia.',   period: 'jan 2011 – dez 2015', bullets: ['Teatro-educação em escolas públicas, praças e Teatro Municipal de Niterói'] },
      { title: 'Terraço Artes Integradas',  period: 'jan 2012 – mar 2014', bullets: ['Sesc Saúde Educativo: peças com temáticas de saúde e higiene pessoal'] },
      { title: 'Companhia Quarto de Teatro',period: 'jan 2010 – dez 2012', bullets: ['Teatro-educação em escolas públicas do Rio de Janeiro'] },
    ],
    tags: ['Teatro', 'Teatro-educação', 'Artes cênicas'],
  },
]

const projects = [
  { seed: 'soma-fashion', tag: 'Eventos Corporativos · março 2023', title: 'Soma Fashion Experience', client: 'D+Live × Unlimited Ideas × Grupo SOMA', desc: 'Produção e coorealização do megaevento de moda do Grupo SOMA com 12 marcas, duas passarelas e show de Marisa Monte & Seu Jorge na Cidade das Artes.', stats: [{ v: '3.000', l: 'pessoas' }, { v: '15h', l: 'de evento' }, { v: '12', l: 'marcas' }] },
  { seed: 'copa-soma', tag: 'Eventos Corporativos · novembro 2022', title: 'Copa Soma RJ', client: 'D+Live × Unlimited Ideas × Grupo SOMA', desc: 'Execução de toda parte estrutural, técnica e operacional da Black Friday do Grupo SOMA com ativações temáticas da Copa do Mundo no Rio e São Paulo.', stats: [{ v: '2', l: 'cidades' }, { v: '12', l: 'marcas' }] },
  { seed: 'teatro-mare', tag: 'Arte-Educação · 2017–2018', title: 'Programa Teatro em Comunidades', client: 'UNIRIO — Departamento de Ensino do Teatro', desc: 'Dois anos no Programa de Extensão da UNIRIO com atuação docente na Maré e criação de oficinas teatrais bilíngues para a University of Michigan.', stats: [{ v: '2 anos', l: 'de atuação' }, { v: 'Bilíngue', l: 'pt-BR / en-US' }] },
  { seed: '1001-historias', tag: 'Arte-Educação · 2016', title: '1001 Histórias com Arte', client: 'Spiral Criativa × Instituto JCA × Viação 1001', desc: 'Educadora no projeto itinerante de artes, cultura e literatura para crianças de escolas públicas por 12 cidades do estado do Rio de Janeiro.', stats: [{ v: '9.000+', l: 'crianças' }, { v: '280', l: 'oficinas' }, { v: '100', l: 'escolas' }] },
]

const skills: { label: string; featured?: boolean }[] = [
  { label: 'Produção executiva',       featured: true },
  { label: 'Gestão de projetos',       featured: true },
  { label: 'Planejamento estratégico', featured: true },
  { label: 'Liderança de equipe',      featured: true },
  { label: 'Artes cênicas',            featured: true },
  { label: 'Produção de eventos',      featured: true },
  { label: 'Gestão educacional' },
  { label: 'Direção de arte' },
  { label: 'Gestão de pessoas' },
  { label: 'Análise de roteiros' },
  { label: 'Decupagem' },
  { label: 'Atendimento ao cliente' },
  { label: 'Teatro' },
  { label: 'Negociação' },
  { label: 'Eventos corporativos' },
  { label: 'Comunicação' },
  { label: 'Liderança' },
  { label: 'Trabalho em equipe' },
  { label: 'Pesquisa' },
  { label: 'Mídias sociais' },
  { label: 'Produção televisiva' },
  { label: 'Escrita criativa' },
  { label: 'Produção teatral' },
  { label: 'Coordenação educativa' },
  { label: 'Iniciativas comunitárias' },
  { label: 'Inglês intermediário' },
  { label: 'Microsoft Office' },
  { label: 'Fotografia' },
]

function skillPos(i: number): { x: string; y: string } {
  const cols   = 6
  const col    = i % cols
  const row    = Math.floor(i / cols)
  const xBase  = 8 + (col / (cols - 1)) * 84
  const jitter = Math.sin(i * 6.1 + 1.3) * 6
  return {
    x: `${Math.min(92, Math.max(8, xBase + jitter)).toFixed(1)}%`,
    y: `${Math.min(55, 4 + row * 15).toFixed(1)}%`,
  }
}

/* ─── Sub-components ─────────────────────────────────────── */
function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#0abfc7] mb-3">
      <span className="block w-5 h-0.5 rounded bg-[#0abfc7]" />
      {children}
    </p>
  )
}

function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[40px] md:text-[48px] font-medium leading-[1.05] tracking-[-2px] text-[#222222] mb-12 ${className}`}>
      {children}
    </h2>
  )
}

function Tag({ children }: { children: string }) {
  return (
    <span className="text-[13px] font-semibold text-[#222222] bg-[#f4dfd0] border border-[#d4c4b5] px-3.5 py-1.5 rounded-full transition-colors hover:bg-[rgba(10,191,199,0.12)] hover:text-[#0abfc7] hover:border-[rgba(10,191,199,0.3)] cursor-default select-none">
      {children}
    </span>
  )
}

function ExpCard({ exp }: { exp: Experience }) {
  return (
    <div className="bg-white border border-[#d4c4b5] rounded-2xl p-7 shadow-[rgba(0,0,0,0.04)_0_2px_8px_0] transition-[box-shadow,border-color] hover:shadow-[rgba(0,0,0,0.08)_0_4px_16px_0] hover:border-[#b5a090]">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-[10px] bg-[#ede0d4] border border-[#d4c4b5] flex items-center justify-center shrink-0 font-display text-[13px] font-bold text-[#6a6a6a]">
          {exp.logo}
        </div>
        <div>
          <p className="text-base font-bold text-[#222222] mb-0.5">{exp.company}</p>
          <p className="text-sm font-semibold text-[#6a6a6a] mb-0.5">{exp.role}</p>
          <p className="text-[13px] font-medium text-[#b5a090]">{exp.period}</p>
        </div>
      </div>
      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-[15px] font-medium text-[#222222] leading-[1.55] pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#0abfc7]">
              {b}
            </li>
          ))}
        </ul>
      )}
      {exp.multiRoles && (
        <div className="flex flex-col gap-5">
          {exp.multiRoles.map((r, i) => (
            <div key={i} className="border-l-2 border-[#d4c4b5] pl-4">
              <p className="text-[14px] font-semibold text-[#222222] mb-1">{r.title}</p>
              <p className="text-[13px] font-medium text-[#b5a090] mb-2">{r.period}</p>
              {r.bullets.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="text-[15px] font-medium text-[#222222] leading-[1.55] pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#0abfc7]">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
      {exp.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#d4c4b5]">
          {exp.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      )}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <>
      {/* ── NAV ──────────────────────────────────────────── */}
      <nav className="fixed inset-x-0 top-0 z-50 h-[72px] bg-[#f4dfd0]/90 backdrop-blur-md border-b border-[#d4c4b5]">
        <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
          <a href="#hero" className="font-display text-[18px] font-medium tracking-[-0.5px] text-[#222222] no-underline">
            Nicolle Longobardi
          </a>
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-[14px] font-medium text-[#222222] no-underline hover:text-[#0abfc7] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="hidden md:inline-flex items-center text-[14px] font-medium text-white bg-[#e84e28] rounded-full px-5 py-2.5 no-underline hover:bg-[#c43d1c] transition-colors">
            Contato
          </a>
          <button onClick={() => setMenuOpen(o => !o)} className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none" aria-label="Menu">
            <span className="block w-[22px] h-0.5 bg-[#222222] rounded" />
            <span className="block w-[22px] h-0.5 bg-[#222222] rounded" />
            <span className="block w-[22px] h-0.5 bg-[#222222] rounded" />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="fixed inset-0 bg-black/30 z-[150]" onClick={() => setMenuOpen(false)} />}
      <div className={`fixed top-0 right-0 bottom-0 w-[280px] bg-[#f4dfd0] border-l border-[#d4c4b5] z-[200] flex flex-col gap-7 px-8 pt-[88px] pb-8 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[#222222] no-underline">{l.label}</a>
        ))}
        <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-2 flex justify-center text-[15px] font-medium text-white bg-[#e84e28] rounded-full px-5 py-3 no-underline">Contato</a>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center pt-[120px] pb-20 px-8 bg-[#f4dfd0]">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#0abfc7] mb-5">
              <span className="block w-6 h-0.5 rounded bg-[#0abfc7]" />
              Produtora Cultural &amp; Artista Docente
            </p>
            <h1 className="font-display font-medium leading-[0.90] tracking-[-4px] text-[#222222] mb-7" style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}>
              Nicolle<br />Longobardi
            </h1>
            <p className="text-lg font-medium text-[#6a6a6a] leading-[1.55] mb-3 max-w-[480px]">
              Gestão de projetos, produção de eventos e arte-educação com raízes nas artes cênicas e no Rio de Janeiro.
            </p>
            <p className="flex items-center gap-1.5 text-sm font-medium text-[#b5a090] mb-11 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#0abfc7]">
              Rio de Janeiro, Brasil
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#contato" className="inline-flex items-center gap-2 text-base font-medium text-white bg-[#e84e28] rounded-full px-7 py-3.5 no-underline hover:bg-[#c43d1c] hover:-translate-y-px transition-all active:scale-95">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                Fale comigo
              </a>
              <a href="#experiencia" className="inline-flex items-center text-base font-medium text-[#222222] bg-transparent border border-[#d4c4b5] rounded-full px-7 py-3.5 no-underline hover:border-[#222222] hover:-translate-y-px transition-all">
                Ver experiência
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://picsum.photos/seed/nicolle-hero/480/640" alt="Nicolle Longobardi" className="w-full rounded-[20px] object-cover hidden lg:block" style={{ aspectRatio: '3/4' }} loading="eager" />
        </div>
      </section>

      {/* ── SOBRE ────────────────────────────────────────── */}
      <section id="sobre" className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow>Sobre</Eyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-start">
            <div>
              <SectionTitle>Das artes ao<br />entretenimento</SectionTitle>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-medium text-[#222222] leading-[1.60]">
                  Com formação em <strong className="text-[#0abfc7] font-semibold">Artes Cênicas</strong>, sou educadora por vocação, atriz por paixão e produtora por vontade de realização. Minha trajetória atravessa o palco, a sala de aula e os bastidores dos grandes eventos culturais do Rio de Janeiro.
                </p>
                <p className="text-lg font-medium text-[#222222] leading-[1.60]">
                  Tenho experiências em <strong className="text-[#0abfc7] font-semibold">Gestão de Projetos</strong>, Planejamento Estratégico e Produção de Eventos — de eventos com 3.000 pessoas a programas educacionais que alcançaram mais de 25.000 crianças em escolas públicas de todo o estado.
                </p>
                <p className="text-lg font-medium text-[#222222] leading-[1.60]">
                  Atualmente elaboro e concebo projetos para <strong className="text-[#0abfc7] font-semibold">Editais Públicos e Leis de Incentivo à Cultura e ao Esporte</strong>.
                </p>
              </div>
              <a href="#contato" className="mt-8 inline-flex items-center text-base font-medium text-white bg-[#e84e28] rounded-full px-7 py-3.5 no-underline hover:bg-[#c43d1c] transition-colors">
                Vamos conversar
              </a>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/nicolle-portrait/600/750" alt="Nicolle Longobardi" className="w-full rounded-[20px] object-cover" style={{ aspectRatio: '4/5' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── ÁREAS ────────────────────────────────────────── */}
      <section id="areas" className="py-24 px-8 bg-[#ede0d4]">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow>Áreas de Atuação</Eyebrow>
          <SectionTitle>O que eu faço</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map(a => (
              <div key={a.title} className="bg-white border border-[#d4c4b5] rounded-2xl p-8 transition-[box-shadow,border-color,transform] hover:shadow-[rgba(0,0,0,0.08)_0_4px_16px_0] hover:border-[#b5a090] hover:-translate-y-0.5 duration-200">
                <span className="block text-[28px] mb-4">{a.icon}</span>
                <h3 className="font-display text-[18px] font-medium tracking-[-0.5px] text-[#222222] mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm font-medium text-[#6a6a6a] leading-[1.55]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIÊNCIA ──────────────────────────────────── */}
      <section id="experiencia" className="py-24 px-8 bg-[#f4dfd0]">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow>Trajetória</Eyebrow>
          <SectionTitle>Experiência</SectionTitle>
          <div className="flex flex-col gap-4">
            {experiences.map(exp => <ExpCard key={exp.company} exp={exp} />)}
          </div>
        </div>
      </section>

      {/* ── PROJETOS ─────────────────────────────────────── */}
      <section id="projetos" className="py-24 px-8 bg-[#ede0d4]">
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow>Portfólio</Eyebrow>
          <SectionTitle>Projetos em destaque</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map(p => (
              <div key={p.title} className="bg-white rounded-[20px] overflow-hidden border border-[#d4c4b5] transition-[box-shadow,transform] hover:shadow-[rgba(0,0,0,0.08)_0_8px_24px_0] hover:-translate-y-1 duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${p.seed}/800/600`} alt={p.title} className="w-full object-cover" style={{ aspectRatio: '4/3' }} loading="lazy" />
                <div className="p-6">
                  <p className="text-[12px] font-semibold text-[#0abfc7] uppercase tracking-[0.06em] mb-2">{p.tag}</p>
                  <h3 className="font-display text-[22px] font-medium tracking-[-0.5px] text-[#222222] mb-1.5 leading-tight">{p.title}</h3>
                  <p className="text-[13px] font-medium text-[#6a6a6a] mb-3">{p.client}</p>
                  <p className="text-[15px] font-medium text-[#6a6a6a] leading-[1.55]">{p.desc}</p>
                  {p.stats.length > 0 && (
                    <div className="flex gap-5 mt-5 pt-5 border-t border-[#d4c4b5]">
                      {p.stats.map((s, i) => (
                        <div key={i}>
                          <p className="font-display text-[22px] font-medium text-[#0abfc7] tracking-[-0.5px] leading-none">{s.v}</p>
                          <p className="text-[12px] font-medium text-[#6a6a6a] mt-1">{s.l}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPETÊNCIAS — física interativa ─────────────── */}
      <section id="competencias" className="pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <Eyebrow>Competências</Eyebrow>
          <SectionTitle className="mb-2">Habilidades</SectionTitle>
          <p className="text-sm font-medium text-[#b5a090] mb-4">Arraste e interaja com as habilidades.</p>

          <Gravity gravity={{ x: 0, y: 1.2 }} style={{ height: 320, borderRadius: 16, background: '#fdf6f0', border: '1.5px solid #d4c4b5' }}>
            {skills.map((s, i) => {
              const pos = skillPos(i)
              return (
                <MatterBody key={s.label} x={pos.x} y={pos.y} matterBodyOptions={{ friction: 0.4, restitution: 0.3, frictionAir: 0.011 }}>
                  <div className={`px-4 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap border cursor-grab active:cursor-grabbing select-none transition-colors ${
                    s.featured
                      ? 'bg-[#0abfc7] text-white border-[#089aa2] hover:bg-[#089aa2]'
                      : 'bg-white text-[#222222] border-[#d4c4b5] hover:bg-[rgba(10,191,199,0.12)] hover:text-[#0abfc7] hover:border-[rgba(10,191,199,0.3)]'
                  }`}>
                    {s.label}
                  </div>
                </MatterBody>
              )
            })}
          </Gravity>
        </div>
      </section>

      {/* ── VOLUNTARIADO & FORMAÇÃO ───────────────────────── */}
      <section className="py-24 px-8 bg-[#ede0d4]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-[24px] font-medium tracking-[-0.5px] text-[#222222] mb-6">Voluntariado</h2>
            <div className="bg-white border border-[#d4c4b5] rounded-2xl p-6 hover:shadow-[rgba(0,0,0,0.04)_0_2px_8px_0] transition-shadow">
              <p className="text-[15px] font-bold text-[#222222] mb-1">Arte Educadora</p>
              <p className="text-sm font-medium text-[#6a6a6a] leading-relaxed">
                Colégio Estadual Vila Guarani · jan 2018 – dez 2019 · 2 anos<br />
                Professora Voluntária do Programa Mais Educação
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-[24px] font-medium tracking-[-0.5px] text-[#222222] mb-6">Formação &amp; Cursos</h2>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Artes Cênicas',                sub: 'Universidade Federal do Estado do Rio de Janeiro — UNIRIO' },
                { title: 'Fazer a Ponte no Brasil',       sub: 'Abordagem pedagógica da Escola da Ponte e do Projeto Âncora' },
                { title: 'Mímica Total e Teatro Físico',  sub: 'Estúdio Luis Louis' },
                { title: 'Máscara Teatral',               sub: 'Treinamento do ator — Grupo Moitará' },
                { title: 'Inglês — Fluente',              sub: 'CCAA · Completo' },
              ].map(c => (
                <div key={c.title} className="bg-white border border-[#d4c4b5] rounded-2xl p-5 hover:shadow-[rgba(0,0,0,0.04)_0_2px_8px_0] transition-shadow">
                  <p className="text-[15px] font-bold text-[#222222] mb-1">{c.title}</p>
                  <p className="text-sm font-medium text-[#6a6a6a]">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ──────────────────────────────────────── */}
      <section id="contato" className="py-24 px-8 bg-[#f4dfd0]">
        <div className="max-w-[640px] mx-auto">
          <div className="bg-white rounded-[20px] border border-[#d4c4b5] shadow-[rgba(0,0,0,0.02)_0_0_0_1px,rgba(0,0,0,0.04)_0_2px_6px_0,rgba(0,0,0,0.10)_0_4px_8px_0] px-10 sm:px-14 py-14 text-center">
            <h2 className="font-display text-[48px] font-medium tracking-[-2px] leading-[1.05] text-[#222222] mb-3">
              Vamos<br />conversar?
            </h2>
            <p className="text-lg font-medium text-[#6a6a6a] mb-9 leading-relaxed">
              Aberta a projetos, colaborações, editais e novas oportunidades.
            </p>
            <div className="flex flex-col gap-3.5 mb-9">
              {[
                { icon: 'phone', href: 'tel:+5521968639967',              label: '(21) 96863-9967' },
                { icon: 'mail',  href: 'mailto:longobardiproduz@gmail.com',   label: 'longobardiproduz@gmail.com' },
                { icon: 'mail',  href: 'mailto:nicollelongobardi@gmail.com',  label: 'nicollelongobardi@gmail.com' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-center gap-2.5 text-base font-medium text-[#222222]">
                  {c.icon === 'phone'
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0abfc7" strokeWidth="2" className="shrink-0"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0abfc7" strokeWidth="2" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  }
                  <a href={c.href} className="text-[#428bff] font-semibold no-underline hover:underline">{c.label}</a>
                </div>
              ))}
            </div>
            <hr className="border-[#d4c4b5] mb-9" />
            <a href="mailto:longobardiproduz@gmail.com" className="flex w-full items-center justify-center gap-2 text-base font-medium text-white bg-[#e84e28] rounded-full py-4 no-underline hover:bg-[#c43d1c] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Enviar mensagem
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-[#0a2a30] py-10 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-[18px] font-medium text-white tracking-[-0.5px]">Nicolle Longobardi</span>
          <div className="flex gap-5">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-[13px] font-medium text-[#7ab8be] no-underline hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
          <span className="text-[13px] font-medium text-[#7ab8be]">© 2025 · Rio de Janeiro, Brasil</span>
        </div>
      </footer>
    </>
  )
}
