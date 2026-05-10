"use client"
import React, { useState } from 'react'

interface DataType {
  id: number
  col: string
  image: string
  title: string
  category: string
  year: string
  client: string
}

const portfolio_data: DataType[] = [
  { id: 1,  col: '6', image: 'https://picsum.photos/seed/blackfriday-soma-22/800/600', title: 'BlackFriday Soma 2022', category: 'Eventos Corporativos', year: '2022', client: 'Unlimited Ideas' },
  { id: 2,  col: '6', image: 'https://picsum.photos/seed/soma-friday-23/800/600', title: 'Festival Soma Friday 2023', category: 'Fashion', year: '2023', client: 'Unlimited Ideas' },
  { id: 3,  col: '4', image: 'https://picsum.photos/seed/soma-friday-24/800/600', title: 'Soma Friday 2024', category: 'Fashion', year: '2024', client: 'Unlimited Ideas' },
  { id: 4,  col: '4', image: 'https://picsum.photos/seed/soma-fashion-exp-23/800/600', title: 'Soma Fashion Experience 2023', category: 'Fashion', year: '2023', client: 'Unlimited Ideas' },
  { id: 5,  col: '4', image: 'https://picsum.photos/seed/joga-junto-farm/800/600', title: 'Joga Junto Farm 2023–2025', category: 'Eventos Corporativos', year: '2023–2025', client: 'Unlimited Ideas' },
  { id: 6,  col: '6', image: 'https://picsum.photos/seed/workshop-farm-23/800/600', title: 'Workshop Farm 2023', category: 'Eventos Corporativos', year: '2023', client: 'Unlimited Ideas' },
  { id: 7,  col: '6', image: 'https://picsum.photos/seed/oab-rj/800/600', title: 'OAB RJ', category: 'Institucional', year: '2023', client: 'D+Live' },
  { id: 8,  col: '4', image: 'https://picsum.photos/seed/carnasoma-25/800/600', title: 'CarnaSOMA 2025', category: 'Eventos Culturais', year: '2025', client: 'Unlimited Ideas' },
  { id: 9,  col: '4', image: 'https://picsum.photos/seed/carnasoma-26/800/600', title: 'CarnaSOMA 2026', category: 'Eventos Culturais', year: '2026', client: 'Unlimited Ideas' },
  { id: 10, col: '4', image: 'https://picsum.photos/seed/conf-interamericana/800/600', title: '59ª Conferência Interamericana + Petrobras', category: 'Institucional', year: '2023', client: 'D+Live' },
  { id: 11, col: '6', image: 'https://picsum.photos/seed/keinemusik-23/800/600', title: 'Keinemusik 2023', category: 'Eventos Culturais', year: '2023', client: 'Produção' },
  { id: 12, col: '6', image: 'https://picsum.photos/seed/transfero-web-summit/800/600', title: 'Transfero Web Summit 2023–2025', category: 'Tech', year: '2023–2025', client: 'D+Live' },
  { id: 13, col: '4', image: 'https://picsum.photos/seed/maratona-alegria/800/600', title: 'Maratona da Alegria 2025', category: 'Eventos Culturais', year: '2025', client: 'Produção' },
  { id: 14, col: '4', image: 'https://picsum.photos/seed/meeting-point-liesa/800/600', title: 'Meeting Point LIESA 2023–2025', category: 'Eventos Culturais', year: '2023–2025', client: 'Produção' },
  { id: 15, col: '4', image: 'https://picsum.photos/seed/cantao-showroom/800/600', title: 'Cantão Showroom 2025', category: 'Fashion', year: '2025', client: 'Produção' },
  { id: 16, col: '4', image: 'https://picsum.photos/seed/hering-blumenau-jan/800/600', title: 'Hering Showroom Blumenau Jan/2026', category: 'Fashion', year: '2026', client: 'Unlimited Ideas' },
  { id: 17, col: '4', image: 'https://picsum.photos/seed/hering-blumenau-mai/800/600', title: 'Hering Showroom Blumenau Mai/2026', category: 'Fashion', year: '2026', client: 'Unlimited Ideas' },
  { id: 18, col: '4', image: 'https://picsum.photos/seed/havaianas-vinijr/800/600', title: 'Havaianas + Vini Jr — Campanha & Desfile 2026', category: 'Fashion', year: '2026', client: 'Unlimited Ideas' },
]

const categories = ['Todos', 'Eventos Corporativos', 'Fashion', 'Institucional', 'Eventos Culturais', 'Tech']

export default function PortfolioArea() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [activeItem, setActiveItem] = useState<DataType | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const filtered = activeFilter === 'Todos' ? portfolio_data : portfolio_data.filter(i => i.category === activeFilter)

  const handleOpen = (item: DataType) => {
    setActiveItem(item)
    setIsOpen(true)
  }

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="container" style={{ marginBottom: '2rem' }}>
          <div className="row">
            <div className="col-lg-12">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    style={{
                      padding: '6px 16px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 4,
                      background: activeFilter === cat ? '#C8F23C' : 'transparent',
                      color: activeFilter === cat ? '#000' : 'inherit',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: activeFilter === cat ? 600 : 400,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {filtered.map((item, i) => (
              <div key={item.id} className={`col-md-6 col-xl-${item.col} portfolio-item`}>
                <a style={{ cursor: 'pointer' }} onClick={() => handleOpen(item)} className="work-popup">
                  <div className="portfolio-box">
                    <img src={item.image} alt={item.title} style={{ height: 'auto', width: '100%' }} />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && activeItem && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div style={{ maxWidth: '80vw', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            <img src={activeItem.image} alt={activeItem.title} style={{ maxWidth: '100%', borderRadius: 8 }} />
            <p style={{ color: '#fff', marginTop: 12, fontSize: '1.1rem' }}>
              <strong>{activeItem.title}</strong>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: 4 }}>
              {activeItem.client} · {activeItem.year}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              style={{ marginTop: 16, padding: '8px 24px', background: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
