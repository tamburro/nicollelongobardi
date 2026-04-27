
"use client"
import React, { useState } from 'react'
import menu_data from './menu_data'
import Link from 'next/link'


import { gsap } from "gsap";

export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      
      const element = document.querySelector(target);
      if (element && typeof window !== 'undefined') {
        const smoother = (window as any).ScrollSmoother?.get();
        if (smoother) {
          const targetY = smoother.scrollTop() + element.getBoundingClientRect().top - 100;
          smoother.scrollTo(targetY, true);
        } else {
          const targetY = window.scrollY + element.getBoundingClientRect().top - 100;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
        
        // Close the mobile sidebar by clicking the close button
        const closeBtn = document.getElementById('sidebar__close-btn');
        if (closeBtn) {
          closeBtn.click();
        }
      }
    }
  }

  return (
    <>

      <div className="mean-bar"> 
        <nav className="mean-nav">
          <ul>
            {menu_data.map((item, i) => (
              <li key={i} className={`${item.has_dropdown && "has-dropdown"} ${navTitle === item.title ? "dropdown-opened" : ""}`}>
                {item.link.startsWith('#') ? (
                  <a href={item.link} onClick={(e) => handleScroll(e, item.link)} className="linkstyle">{item.title}</a>
                ) : (
                  <Link href={item.link} className="linkstyle">{item.title}</Link>
                )}
                {item.has_dropdown &&
                  <>
                    <ul className="sub-menu" style={{ display: navTitle === item.title ? "block" : "none" }}>
                      {item.sub_menus?.map((sub_menu, index) => (
                        <li key={index}>
                          {sub_menu.link.startsWith('#') ? (
                            <a href={sub_menu.link} onClick={(e) => handleScroll(e, sub_menu.link)}>{sub_menu.title}</a>
                          ) : (
                            <Link href={sub_menu.link}>{sub_menu.title}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                    <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`}
                      onClick={() => openMobileMenu(item.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}><i className="fal fa-plus"></i></a>
                  </>
                }
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </>
  )
}
