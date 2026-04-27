"use client"
import React, { useEffect } from 'react'

export default function BrandArea() {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Empresas com quem trabalhei</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    <img src="https://picsum.photos/seed/embratel-logo/160/60" alt="Embratel" style={{ borderRadius: 8 }} />
                    <img src="https://picsum.photos/seed/dlive-logo/160/60" alt="D+Live" style={{ borderRadius: 8 }} />
                    <img src="https://picsum.photos/seed/ayika-logo/160/60" alt="Instituto Ayíka" style={{ borderRadius: 8 }} />
                    <img src="https://picsum.photos/seed/multirio-logo/160/60" alt="MultiRio" style={{ borderRadius: 8 }} />
                    <img src="https://picsum.photos/seed/unirio-logo/160/60" alt="UNIRIO" style={{ borderRadius: 8 }} />
                    <img src="https://picsum.photos/seed/sesc-logo/160/60" alt="Sesc RJ" style={{ borderRadius: 8 }} />
                    <img src="https://picsum.photos/seed/munde-logo/160/60" alt="Coletivo Mundé" style={{ borderRadius: 8 }} />
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
