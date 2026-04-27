
import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2 style={{ lineHeight: '0.85', marginTop: '-30px', marginBottom: '20px' }}>Nicolle Longobardi</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <div className="reviews">
                    <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      <strong>Produção Cultural</strong><br />
                      Gestão de Projetos<br />
                      Artista-Docente<br />
                      Coordenação Educativa
                    </p>
                    <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', opacity: 0.75 }}>
                      📍 Rio de Janeiro, RJ — Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img src="https://picsum.photos/seed/nicolle/600/750" alt="Nicolle Longobardi" />
              </div>
            </div>

            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>
                  Das artes ao entretenimento. Com formação em Artes Cênicas, educadora por vocação, atriz por paixão e produtora por vontade de realização!
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
