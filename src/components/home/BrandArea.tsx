"use client"
import React, { useEffect } from 'react'

const brands = [
  'Grupo Soma', 'Farm', 'Hering', 'Havaianas', 'OAB', 'Petrobras',
  'Transfero', 'Keinemusik', 'Embratel', 'D+Live', 'Unlimited Ideas',
  'Instituto Ayíka', 'MultiRio', 'LIESA', 'Cantão', 'Animale', 'Maria Filó',
]

const brandStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '8px 24px',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 4,
  fontSize: '0.9rem',
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  opacity: 0.7,
}

export default function BrandArea() {
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll('.scroller')
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true')
        const scrollerInner = scroller.querySelector('.scroller__inner')
        if (!scrollerInner) return
        const scrollerContent = Array.from(scrollerInner.children)
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement
          duplicatedItem.setAttribute('aria-hidden', 'true')
          scrollerInner.appendChild(duplicatedItem)
        })
      })
    }
  }, [])

  return (
    <>
      <div id="brands" className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Marcas & Clientes</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    {brands.map((brand, i) => (
                      <span key={i} style={brandStyle}>{brand}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
