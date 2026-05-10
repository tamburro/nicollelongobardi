
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>LONGOBARDI PRODUZ</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <div className="reviews">
                    <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      <strong>Produção de Eventos</strong><br />
                      Gestão de Projetos<br />
                      Produção Audiovisual<br />
                      Projetos para Editais
                    </p>
                    <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', opacity: 0.75 }}>
                      📍 Rio de Janeiro, RJ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img src="https://picsum.photos/seed/longobardi-hero/600/750" alt="Longobardi Produz" />
              </div>
            </div>

            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>
                  Das artes ao entretenimento. Produtora cultural com formação em Artes Cênicas, experiência em eventos corporativos, produção audiovisual e projetos para leis de incentivo à cultura.
                </p>
                <a className="theme-btn" href="#contact">Entre em contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
