'use client'

import { useState, useEffect } from 'react'
import Gravity, { MatterBody } from '@/components/fancy/physics/gravity'

/* ─── Miro design tokens (inline reference) ─────────────────
   white:          #ffffff   canvas
   near-black:     #1c1c1e   primary text
   blue:           #5b76fe   interactive / CTA
   blue-pressed:   #2a41b6   hover
   slate:          #555a6a   secondary text
   placeholder:    #a5a8b5   muted
   border:         #c7cad5   button/card borders
   ring:           #e0e2e8   ring shadow
   teal-pastel:    #c3faf5   section bg
   coral-pastel:   #ffc6c6   section bg
   rose-pastel:    #ffd8f4   section bg
   orange-pastel:  #ffe6cd   section bg
──────────────────────────────────────────────────────────── */

const navLinks = [
  { href: '#sobre',       label: 'Sobre' },
  { href: '#areas',       label: 'Áreas' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos',    label: 'Projetos' },
]

const areas = [
  { icon: '🎭', title: 'Produção Cultural & Eventos',   desc: 'Gestão end-to-end de eventos corporativos e culturais: briefing, cronograma, logística, fornecedores e execução. Da concepção à entrega.' },
  { icon: '📋', title: 'Gestão de Projetos',            desc: 'Planejamento estratégico, cronogramas, planilhas financeiras, KPIs e análise de pós-projeto. Método e rigor a serviço da criatividade.' },
  { icon: '🎪', title: 'Artes Cênicas',                 desc: 'Atriz com formação em teatro físico, máscara teatral e mímica. Experiência em teatro-educação, produção teatral e direção de produção.' },
  { icon: '🎓', title: 'Arte-Educação',                 desc: 'Criação e coordenação de programas educacionais para escolas públicas e espaços culturais. Teatro, corpo e território como linguagens pedagógicas.' },
  { icon: '✍️', title: 'Editais & Leis de Incentivo',  desc: 'Elaboração de projetos para editais públicos e privados, Leis de Incentivo à Cultura e ao Esporte — do argumento à captação.' },
  { icon: '🌱', title: 'Terceiro Setor',                desc: 'Gestão de projetos socioambientais com foco em juventude, raça, clima e território. Mobilização de recursos e planejamento institucional.' },
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
      { title: 'Coordenadora Educacional', period: 'jan 2014 – dez 2020 · 7 anos', bullets: ['Coordenação de projetos educacionais para instituições em São Gonçalo', 'Criação e concepção de Oficinas livres e Workshops para o projeto EAAC', 'Criação e mediação de oficinas para 5 edições do GIRA Circuito Itinerante de Performance'] },
      { title: 'Atriz', period: 'jan 2014 – dez 2020 · 7 anos', bullets: ['Dama In Vitro · O que eu não posso mais calar · Sala Cinza'] },
      { title: 'Produção Teatral', period: 'ago 2015 – dez 2018', bullets: ['Direção de Produção e Produção executiva de Dama in Vitro e Sala Cinza'] },
    ],
    tags: ['Gestão educacional', 'Artes cênicas', 'Direção de arte', 'Produção teatral'],
  },
  {
    logo: 'UN', company: 'Universidade Federal do Estado do Rio de Janeiro — UNIRIO', role: 'Pesquisa & Extensão',
    period: 'fev 2015 – dez 2018 · 3 anos 11 meses · Rio de Janeiro',
    multiRoles: [
      { title: 'Professora Pesquisadora — Programa Teatro em Comunidades', period: 'jan 2017 – dez 2018 · 2 anos · Estágio', bullets: ['Professora na Arena Dicró e Posto Américo Veloso, na Maré', 'Criação de oficinas teatrais bilíngues para a University of Michigan School of Music, Theatre & Dance'] },
      { title: 'Bolsista Pesquisadora — NEPAA', period: 'fev 2015 – dez 2016 · 1 ano 11 meses · Temporário', bullets: [] },
    ],
    tags: [],
  },
  {
    logo: 'SE', company: 'Sesc RJ', role: 'Atriz Profissional · Autônoma',
    period: 'jan 2010 – dez 2015 · 6 anos · Rio de Janeiro, Brasil',
    multiRoles: [
      { title: 'Artecorpo Teatro e Cia.',    period: 'jan 2011 – dez 2015', bullets: ['Teatro-educação em escolas públicas, praças e Teatro Municipal de Niterói'] },
      { title: 'Terraço Artes Integradas',   period: 'jan 2012 – mar 2014', bullets: ['Sesc Saúde Educativo: peças com temáticas de saúde e higiene pessoal'] },
      { title: 'Companhia Quarto de Teatro', period: 'jan 2010 – dez 2012', bullets: ['Teatro-educação em escolas públicas do Rio de Janeiro'] },
    ],
    tags: ['Teatro', 'Teatro-educação', 'Artes cênicas'],
  },
]

const projects = [
  { seed: 'soma-fashion', pastel: '#ffe6cd', tag: 'Eventos Corporativos · março 2023', title: 'Soma Fashion Experience', client: 'D+Live × Unlimited Ideas × Grupo SOMA', desc: 'Produção e coorealização do megaevento de moda do Grupo SOMA com 12 marcas, duas passarelas e show de Marisa Monte & Seu Jorge na Cidade das Artes.', stats: [{ v: '3.000', l: 'pessoas' }, { v: '15h', l: 'de evento' }, { v: '12', l: 'marcas' }] },
  { seed: 'copa-soma', pastel: '#ffc6c6', tag: 'Eventos Corporativos · novembro 2022', title: 'Copa Soma RJ', client: 'D+Live × Unlimited Ideas × Grupo SOMA', desc: 'Execução de toda parte estrutural, técnica e operacional da Black Friday do Grupo SOMA com ativações temáticas da Copa do Mundo no Rio e São Paulo.', stats: [{ v: '2', l: 'cidades' }, { v: '12', l: 'marcas' }] },
  { seed: 'teatro-mare', pastel: '#c3faf5', tag: 'Arte-Educação · 2017–2018', title: 'Programa Teatro em Comunidades', client: 'UNIRIO — Departamento de Ensino do Teatro', desc: 'Dois anos no Programa de Extensão da UNIRIO com atuação docente na Maré e criação de oficinas teatrais bilíngues para a University of Michigan.', stats: [{ v: '2 anos', l: 'de atuação' }, { v: 'Bilíngue', l: 'pt-BR / en-US' }] },
  { seed: '1001-historias', pastel: '#ffd8f4', tag: 'Arte-Educação · 2016', title: '1001 Histórias com Arte', client: 'Spiral Criativa × Instituto JCA × Viação 1001', desc: 'Educadora no projeto itinerante de artes, cultura e literatura para crianças de escolas públicas por 12 cidades do estado do Rio de Janeiro.', stats: [{ v: '9.000+', l: 'crianças' }, { v: '280', l: 'oficinas' }, { v: '100', l: 'escolas' }] },
]

const skills: { label: string; featured?: boolean }[] = [
  { label: 'Produção executiva',       featured: true },
  { label: 'Gestão de projetos',       featured: true },
  { label: 'Planejamento estratégico', featured: true },
  { label: 'Liderança de equipe',      featured: true },
  { label: 'Artes cênicas',            featured: true },
  { label: 'Produção de eventos',      featured: true },
  { label: 'Gestão educacional' }, { label: 'Direção de arte' },
  { label: 'Gestão de pessoas' },  { label: 'Análise de roteiros' },
  { label: 'Decupagem' },          { label: 'Atendimento ao cliente' },
  { label: 'Teatro' },             { label: 'Negociação' },
  { label: 'Eventos corporativos' },{ label: 'Comunicação' },
  { label: 'Liderança' },          { label: 'Trabalho em equipe' },
  { label: 'Pesquisa' },           { label: 'Mídias sociais' },
  { label: 'Produção televisiva' },{ label: 'Escrita criativa' },
  { label: 'Produção teatral' },   { label: 'Coordenação educativa' },
  { label: 'Inglês intermediário' },{ label: 'Microsoft Office' },
  { label: 'Fotografia' },         { label: 'Iniciativas comunitárias' },
]

function skillPos(i: number): { x: string; y: string } {
  const cols  = 6
  const col   = i % cols
  const row   = Math.floor(i / cols)
  const x     = 8 + (col / (cols - 1)) * 84 + Math.sin(i * 6.1 + 1.3) * 5
  return { x: `${Math.min(92, Math.max(8, x)).toFixed(1)}%`, y: `${Math.min(55, 4 + row * 15).toFixed(1)}%` }
}

/* ─── Sub-components ─────────────────────────────────────── */
function Label({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 font-display text-[10.5px] font-medium uppercase tracking-widest text-[#5b76fe] mb-3">
      {children}
    </p>
  )
}

function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[40px] md:text-[48px] font-medium leading-[1.15] tracking-[-1.44px] text-[#1c1c1e] mb-10 ${className}`}>
      {children}
    </h2>
  )
}

function Tag({ children }: { children: string }) {
  return (
    <span className="text-[13px] font-medium text-[#555a6a] bg-white border border-[#c7cad5] px-3 py-1 rounded-lg transition-colors hover:border-[#5b76fe] hover:text-[#5b76fe] cursor-default select-none" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
      {children}
    </span>
  )
}

function ExpCard({ exp }: { exp: Experience }) {
  return (
    <div className="bg-white border border-[#c7cad5] rounded-2xl p-7 transition-shadow hover:shadow-[0_4px_24px_rgba(91,118,254,0.10)]" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-[#f0f2ff] border border-[#c7cad5] flex items-center justify-center shrink-0 font-display text-[12px] font-semibold text-[#5b76fe]">
          {exp.logo}
        </div>
        <div>
          <p className="font-display text-[16px] font-semibold text-[#1c1c1e] mb-0.5">{exp.company}</p>
          <p className="text-[14px] font-medium text-[#555a6a] mb-0.5">{exp.role}</p>
          <p className="text-[13px] text-[#a5a8b5]">{exp.period}</p>
        </div>
      </div>
      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="flex flex-col gap-2">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-[15px] text-[#1c1c1e] leading-[1.5] pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#5b76fe]">
              {b}
            </li>
          ))}
        </ul>
      )}
      {exp.multiRoles && (
        <div className="flex flex-col gap-5">
          {exp.multiRoles.map((r, i) => (
            <div key={i} className="border-l-2 border-[#e0e2e8] pl-4">
              <p className="text-[14px] font-semibold text-[#1c1c1e] mb-1">{r.title}</p>
              <p className="text-[13px] text-[#a5a8b5] mb-2">{r.period}</p>
              {r.bullets.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="text-[15px] text-[#1c1c1e] leading-[1.5] pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#5b76fe]">
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
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#e0e2e8]">
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
      <nav className="fixed inset-x-0 top-0 z-50 h-[64px] bg-white/90 backdrop-blur-md" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
        <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
          <a href="#hero" className="font-display text-[17px] font-semibold text-[#1c1c1e] no-underline tracking-[-0.3px]">
            Nicolle Longobardi
          </a>
          <ul className="hidden md:flex items-center gap-6 list-none">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-[15px] font-medium text-[#555a6a] no-underline hover:text-[#1c1c1e] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="hidden md:inline-flex items-center text-[15px] font-medium text-white bg-[#5b76fe] rounded-lg px-5 py-2 no-underline hover:bg-[#2a41b6] transition-colors">
            Contato
          </a>
          <button onClick={() => setMenuOpen(o => !o)} className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none" aria-label="Menu">
            <span className="block w-[22px] h-0.5 bg-[#1c1c1e] rounded" />
            <span className="block w-[22px] h-0.5 bg-[#1c1c1e] rounded" />
            <span className="block w-[22px] h-0.5 bg-[#1c1c1e] rounded" />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="fixed inset-0 bg-black/20 z-[150]" onClick={() => setMenuOpen(false)} />}
      <div className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[200] flex flex-col gap-6 px-8 pt-[80px] pb-8 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ boxShadow: '-4px 0 24px rgba(0,0,0,0.08)' }}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-[#1c1c1e] no-underline">{l.label}</a>
        ))}
        <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-2 flex justify-center text-[15px] font-medium text-white bg-[#5b76fe] rounded-lg px-5 py-3 no-underline">Contato</a>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center pt-[110px] pb-20 px-8 bg-white">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <p className="font-display text-[10.5px] font-medium uppercase tracking-widest text-[#5b76fe] mb-5">
              Produtora Cultural &amp; Artista Docente
            </p>
            <h1 className="font-display font-medium leading-[1.15] tracking-[-1.68px] text-[#1c1c1e] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 56px)' }}>
              Nicolle<br />Longobardi
            </h1>
            <p className="text-[18px] text-[#555a6a] leading-[1.45] mb-4 max-w-[480px]">
              Gestão de projetos, produção de eventos e arte-educação com raízes nas artes cênicas e no Rio de Janeiro.
            </p>
            <p className="text-[14px] text-[#a5a8b5] mb-10">Rio de Janeiro, Brasil</p>
            <div className="flex gap-3 flex-wrap">
              <a href="#contato" className="inline-flex items-center gap-2 text-[15px] font-medium text-white bg-[#5b76fe] rounded-lg px-6 py-3 no-underline hover:bg-[#2a41b6] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                Fale comigo
              </a>
              <a href="#experiencia" className="inline-flex items-center text-[15px] font-medium text-[#1c1c1e] bg-white border border-[#c7cad5] rounded-lg px-6 py-3 no-underline hover:border-[#5b76fe] hover:text-[#5b76fe] transition-colors">
                Ver experiência
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://picsum.photos/seed/nicolle-hero/480/640" alt="Nicolle Longobardi" className="w-full rounded-2xl object-cover hidden lg:block" style={{ aspectRatio: '3/4' }} loading="eager" />
        </div>
      </section>

      {/* ── SOBRE — teal pastel ───────────────────────────── */}
      <section id="sobre" className="py-24 px-8" style={{ background: '#c3faf5' }}>
        <div className="max-w-[1200px] mx-auto">
          <Label>Sobre</Label>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              <SectionTitle>Das artes ao<br />entretenimento</SectionTitle>
              <div className="flex flex-col gap-5">
                <p className="text-[18px] text-[#1c1c1e] leading-[1.45]">
                  Com formação em <strong className="font-semibold">Artes Cênicas</strong>, sou educadora por vocação, atriz por paixão e produtora por vontade de realização. Minha trajetória atravessa o palco, a sala de aula e os bastidores dos grandes eventos culturais do Rio de Janeiro.
                </p>
                <p className="text-[18px] text-[#1c1c1e] leading-[1.45]">
                  Experiências em <strong className="font-semibold">Gestão de Projetos</strong>, Planejamento Estratégico e Produção de Eventos — de eventos com 3.000 pessoas a programas educacionais que alcançaram mais de 25.000 crianças em escolas públicas de todo o estado.
                </p>
                <p className="text-[18px] text-[#1c1c1e] leading-[1.45]">
                  Atualmente elaboro projetos para <strong className="font-semibold">Editais Públicos e Leis de Incentivo à Cultura e ao Esporte</strong>.
                </p>
              </div>
              <a href="#contato" className="mt-8 inline-flex items-center text-[15px] font-medium text-white bg-[#5b76fe] rounded-lg px-6 py-3 no-underline hover:bg-[#2a41b6] transition-colors">
                Vamos conversar
              </a>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/nicolle-portrait/600/750" alt="Nicolle Longobardi" className="w-full rounded-2xl object-cover" style={{ aspectRatio: '4/5' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── ÁREAS ────────────────────────────────────────── */}
      <section id="areas" className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <Label>Áreas de Atuação</Label>
          <SectionTitle>O que eu faço</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map(a => (
              <div key={a.title} className="bg-white border border-[#c7cad5] rounded-2xl p-7 transition-shadow hover:shadow-[0_4px_24px_rgba(91,118,254,0.10)] hover:border-[#5b76fe]" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
                <span className="block text-[28px] mb-4">{a.icon}</span>
                <h3 className="font-display text-[18px] font-semibold text-[#1c1c1e] mb-2 leading-snug">{a.title}</h3>
                <p className="text-[14px] text-[#555a6a] leading-[1.55]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIÊNCIA ──────────────────────────────────── */}
      <section id="experiencia" className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <Label>Trajetória</Label>
          <SectionTitle>Experiência</SectionTitle>
          <div className="flex flex-col gap-4">
            {experiences.map(exp => <ExpCard key={exp.company} exp={exp} />)}
          </div>
        </div>
      </section>

      {/* ── PROJETOS — cards com pastel individual ────────── */}
      <section id="projetos" className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <Label>Portfólio</Label>
          <SectionTitle>Projetos em destaque</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map(p => (
              <div key={p.title} className="rounded-2xl overflow-hidden border border-[#c7cad5] transition-shadow hover:shadow-[0_8px_32px_rgba(91,118,254,0.12)]" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${p.seed}/800/600`} alt={p.title} className="w-full object-cover" style={{ aspectRatio: '4/3' }} loading="lazy" />
                <div className="p-6" style={{ background: p.pastel }}>
                  <p className="font-display text-[10.5px] font-medium uppercase tracking-widest text-[#5b76fe] mb-2">{p.tag}</p>
                  <h3 className="font-display text-[22px] font-semibold text-[#1c1c1e] mb-1 leading-tight tracking-[-0.44px]">{p.title}</h3>
                  <p className="text-[13px] text-[#555a6a] mb-3 font-medium">{p.client}</p>
                  <p className="text-[15px] text-[#1c1c1e] leading-[1.5]">{p.desc}</p>
                  {p.stats.length > 0 && (
                    <div className="flex gap-5 mt-5 pt-5 border-t border-black/10">
                      {p.stats.map((s, i) => (
                        <div key={i}>
                          <p className="font-display text-[22px] font-semibold text-[#5b76fe] tracking-[-0.44px] leading-none">{s.v}</p>
                          <p className="text-[12px] text-[#555a6a] mt-1">{s.l}</p>
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

      {/* ── COMPETÊNCIAS — rose pastel + física ──────────── */}
      <section id="competencias" className="pt-24 pb-0 overflow-hidden" style={{ background: '#ffd8f4' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <Label>Competências</Label>
          <SectionTitle className="mb-2">Habilidades</SectionTitle>
          <p className="text-[14px] text-[#555a6a] mb-4">Arraste e interaja com as habilidades.</p>
        </div>
        <Gravity gravity={{ x: 0, y: 1.2 }} style={{ height: 280, width: '100%', maxWidth: 900, margin: '0 auto' }}>
          {skills.map((s, i) => {
            const pos = skillPos(i)
            return (
              <MatterBody key={s.label} x={pos.x} y={pos.y} matterBodyOptions={{ friction: 0.4, restitution: 0.3, frictionAir: 0.011 }}>
                <div className={`px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap border cursor-grab active:cursor-grabbing select-none transition-colors ${
                  s.featured
                    ? 'bg-[#5b76fe] text-white border-[#2a41b6]'
                    : 'bg-white text-[#1c1c1e] border-[#c7cad5] hover:border-[#5b76fe] hover:text-[#5b76fe]'
                }`} style={s.featured ? {} : { boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
                  {s.label}
                </div>
              </MatterBody>
            )
          })}
        </Gravity>
      </section>

      {/* ── VOLUNTARIADO & FORMAÇÃO ───────────────────────── */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-[24px] font-semibold text-[#1c1c1e] tracking-[-0.5px] mb-6">Voluntariado</h2>
            <div className="bg-white border border-[#c7cad5] rounded-2xl p-6 hover:border-[#5b76fe] transition-colors" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
              <p className="font-display text-[15px] font-semibold text-[#1c1c1e] mb-1">Arte Educadora</p>
              <p className="text-[14px] text-[#555a6a] leading-relaxed">
                Colégio Estadual Vila Guarani · jan 2018 – dez 2019 · 2 anos<br />
                Professora Voluntária do Programa Mais Educação
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-[24px] font-semibold text-[#1c1c1e] tracking-[-0.5px] mb-6">Formação &amp; Cursos</h2>
            <div className="flex flex-col gap-3">
              {[
                { title: 'Artes Cênicas',               sub: 'Universidade Federal do Estado do Rio de Janeiro — UNIRIO' },
                { title: 'Fazer a Ponte no Brasil',      sub: 'Abordagem pedagógica da Escola da Ponte e do Projeto Âncora' },
                { title: 'Mímica Total e Teatro Físico', sub: 'Estúdio Luis Louis' },
                { title: 'Máscara Teatral',              sub: 'Treinamento do ator — Grupo Moitará' },
                { title: 'Inglês — Fluente',             sub: 'CCAA · Completo' },
              ].map(c => (
                <div key={c.title} className="bg-white border border-[#c7cad5] rounded-xl p-5 hover:border-[#5b76fe] transition-colors" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px' }}>
                  <p className="font-display text-[15px] font-semibold text-[#1c1c1e] mb-1">{c.title}</p>
                  <p className="text-[14px] text-[#555a6a]">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO — orange pastel ───────────────────────── */}
      <section id="contato" className="py-24 px-8" style={{ background: '#ffe6cd' }}>
        <div className="max-w-[560px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#c7cad5] px-10 sm:px-14 py-14 text-center" style={{ boxShadow: 'rgb(224,226,232) 0 0 0 1px, 0 8px 32px rgba(0,0,0,0.08)' }}>
            <h2 className="font-display text-[48px] font-medium leading-[1.15] tracking-[-1.44px] text-[#1c1c1e] mb-3">
              Vamos<br />conversar?
            </h2>
            <p className="text-[18px] text-[#555a6a] mb-9 leading-[1.45]">
              Aberta a projetos, colaborações, editais e novas oportunidades.
            </p>
            <div className="flex flex-col gap-3.5 mb-9">
              {[
                { icon: 'phone', href: 'tel:+5521968639967',             label: '(21) 96863-9967' },
                { icon: 'mail',  href: 'mailto:longobardiproduz@gmail.com',  label: 'longobardiproduz@gmail.com' },
                { icon: 'mail',  href: 'mailto:nicollelongobardi@gmail.com', label: 'nicollelongobardi@gmail.com' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-center gap-2.5 text-[16px] text-[#1c1c1e]">
                  {c.icon === 'phone'
                    ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5b76fe" strokeWidth="2" className="shrink-0"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5b76fe" strokeWidth="2" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  }
                  <a href={c.href} className="text-[#5b76fe] font-semibold no-underline hover:underline">{c.label}</a>
                </div>
              ))}
            </div>
            <hr className="border-[#e0e2e8] mb-9" />
            <a href="mailto:longobardiproduz@gmail.com" className="flex w-full items-center justify-center gap-2 text-[15px] font-medium text-white bg-[#5b76fe] rounded-lg py-3.5 no-underline hover:bg-[#2a41b6] transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Enviar mensagem
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-[#1c1c1e] py-10 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-[17px] font-semibold text-white tracking-[-0.3px]">Nicolle Longobardi</span>
          <div className="flex gap-5">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-[13px] text-[#555a6a] no-underline hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
          <span className="text-[13px] text-[#555a6a]">© 2025 · Rio de Janeiro, Brasil</span>
        </div>
      </footer>
    </>
  )
}
