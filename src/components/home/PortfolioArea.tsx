"use client"
import React, { useState } from 'react'

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: "https://picsum.photos/seed/soma-fashion/800/600",
    title: "Soma Fashion Experience",
    category: "Eventos",
  },
  {
    id: 2,
    col: "6",
    image: "https://picsum.photos/seed/copa-soma/800/600",
    title: "Copa Soma RJ",
    category: "Produção",
  },
  {
    id: 3,
    col: "4",
    image: "https://picsum.photos/seed/teatro-comunidades/800/600",
    title: "Teatro em Comunidades",
    category: "Educação",
  },
  {
    id: 4,
    col: "4",
    image: "https://picsum.photos/seed/ayika-instituto/800/600",
    title: "Instituto Ayíka",
    category: "3º Setor",
  },
  {
    id: 5,
    col: "4",
    image: "https://picsum.photos/seed/1001historias/800/600",
    title: "1001 Histórias com Arte",
    category: "Cultural",
  },
];

export default function PortfolioArea() {

  const [activeItem, setActiveItem] = useState<DataType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (item: DataType) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  return (
    <>

      <div className="projects-area" id="portfolio">
        <div className="custom-icon" style={{ maxWidth: '300px', margin: '0 auto 20px', display: 'flex', justifyContent: 'center' }}>
          <img src="assets/images/custom/work-scribble.svg" alt="custom" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOpen(item)} className="work-popup">
                  <div className="portfolio-box">
                    <img src={item.image} alt={item.title} style={{ height: "auto", width: "100%" }} />
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

      {/* Lightbox simples */}
      {isOpen && activeItem && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsOpen(false)}
        >
          <div style={{ maxWidth: '80vw', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            <img src={activeItem.image} alt={activeItem.title} style={{ maxWidth: '100%', borderRadius: 8 }} />
            <p style={{ color: '#fff', marginTop: 12, fontSize: '1.1rem' }}>
              <strong>{activeItem.title}</strong> — {activeItem.category}
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
