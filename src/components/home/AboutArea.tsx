
import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Anos de Experiência',
    count: 10,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Projetos Realizados',
    count: 50,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Editais Desenvolvidos',
    count: 15,
    cls: "plus",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">Sobre mim</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>
                  Sou Nicolle Longobardi, produtora cultural com formação em Artes Cênicas pela UNIRIO. 
                  Educadora por vocação, atriz por paixão e produtora por vontade de realização. 
                  Possuo experiência em Gestão de Projetos, Planejamento Estratégico, Produção de Eventos, 
                  Produção Audiovisual, Produção Teatral, Gestão de Projetos e Direção Criativa no 3º setor. 
                  Atualmente, dedico-me à elaboração e concepção de projetos para Editais públicos e 
                  Leis de Incentivo à Cultura e ao Esporte.
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
