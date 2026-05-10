
import React from 'react'
import HeroArea from './HeroArea'
import BrandArea from './BrandArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import PortfolioArea from './PortfolioArea'
import TestimonoalArea from './TestimonoalArea'
import ContactArea from './ContactArea'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BrandArea />
            <AboutArea />
            <ServiceArea />
            <PortfolioArea />
            <TestimonoalArea />

            {/* ── Artes & Educação (seção compacta) ── */}
            <section id="arts" style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C8F23C' }}>
                      Educação &amp; Artes Cênicas
                    </h2>
                  </div>
                  <div className="col-lg-9">
                    <p style={{ opacity: 0.7, lineHeight: 1.8 }}>
                      Formação em Artes Cênicas pela UNIRIO. Atriz profissional (2010–2020), artista-docente, coordenadora pedagógica e criadora de programas educacionais.
                      7 anos no Coletivo Mundé · Sesc RJ · 1001 Histórias com Arte · Teatro em Comunidades (UNIRIO) · Professora Voluntária — Programa Mais Educação.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
