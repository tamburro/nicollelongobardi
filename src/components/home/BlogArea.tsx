
import React from 'react'

export default function BlogArea() {
  return (
    <>
      <section id="stories" className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>Atividades</h2>
              </div>
            </div>
          </div>

          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="https://picsum.photos/seed/soma-fashion-bts/700/450" alt="Soma Fashion Experience" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Eventos</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Março de 2023</h3>
                <h2><a className="link-decoration" href="#">Soma Fashion Experience — "O Futuro nos move"</a></h2>
                <p>
                  Produção e coorealização do evento do Grupo SOMA que envolveu 12 marcas, duas passarelas, show da Marisa Monte e Seu Jorge, e 3.000 pessoas em 15 horas na Cidade das Artes — RJ.
                </p>
                <a className="theme-btn theme-btn-two" href="#">Ver mais <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>


          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="https://picsum.photos/seed/copa-soma-rj/700/450" alt="Copa Soma RJ" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Produção</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Novembro de 2022</h3>
                <h2><a className="link-decoration" href="#">Copa Soma RJ — Black Friday do Grupo SOMA</a></h2>
                <p>
                  Execução de toda parte estrutural, técnica e operacional do evento criado para a Black Friday do Grupo SOMA, com ações ligadas à Copa do Mundo nas cidades do Rio de Janeiro e São Paulo.
                </p>
                <a className="theme-btn theme-btn-two" href="#">Ver mais <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>


          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="https://picsum.photos/seed/horizontes-cultura/700/450" alt="Seminário Horizontes da Gestão Cultural" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Cultura</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Recentemente</h3>
                <h2><a className="link-decoration" href="#">Seminário Horizontes da Gestão Cultural</a></h2>
                <p>
                  Participação no Seminário Horizontes da Gestão Cultural — Arranjos institucionais para a gestão compartilhada de equipamentos públicos de cultura, com a presença da presidenta da Funarte, Maria Marighella.
                </p>
                <a className="theme-btn theme-btn-two" href="#">Ver mais <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
