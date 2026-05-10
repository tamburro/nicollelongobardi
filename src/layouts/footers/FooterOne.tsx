
import React from 'react'

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p>Tem um projeto em mente?</p>
                <h2 style={{ wordBreak: 'keep-all', hyphens: 'none', whiteSpace: 'normal' }}>
                  <a href="mailto:longobardiproduz@gmail.com" style={{ fontSize: 'clamp(1.8rem, 7vw, 6rem)', lineHeight: '1.15' }}>
                    vamos trabalhar juntos
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="copy-left-text">Longobardi Produz — Produção Cultural & Eventos</p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p className="copy-right-text"> © {new Date().getFullYear()} Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
