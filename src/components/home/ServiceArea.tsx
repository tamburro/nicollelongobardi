
import React from 'react'

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Serviços</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Produção de Eventos Corporativos</h4>
                <p>Gestão end-to-end: briefings, cronogramas, logística, orçamentos, KPIs e relatórios. Projetos para Grupo Soma, Farm, Hering, Havaianas, OAB e Petrobras.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Gestão de Projetos & Terceiro Setor</h4>
                <p>Planejamento estratégico, monitoramento e mobilização de recursos em empresas e no terceiro setor. Instituto Ayíka, Coletivo Mundé.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s" style={{ opacity: 0.85 }}>
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Produção Audiovisual & Controller</h4>
                <p>Controller em longas-metragens, produção e gestão de gravações externas e em estúdio, roteiro e decupagem. MultiRio, produções independentes.</p>
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Projetos para Editais & Leis de Incentivo</h4>
                <p>Elaboração, concepção e submissão de projetos culturais e esportivos para editais públicos, Lei Rouanet e demais leis de incentivo à cultura.</p>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}
