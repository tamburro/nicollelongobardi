
import React from 'react'
import menu_data from './menu_data'
import Link from 'next/link'

import { gsap } from "gsap";

export default function NavMenu() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element && typeof window !== 'undefined') {
        gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 0 }, ease: "power2.inOut" });
      }
    }
  }

  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && "has-dropdown"}`}>
            {item.link.startsWith('#') ? (
              <a href={item.link} onClick={(e) => handleScroll(e, item.link)}>{item.title}</a>
            ) : (
              <Link href={item.link}>{item.title}</Link>
            )}
            {item.has_dropdown &&
              <ul className="sub-menu">
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
            }
          </li>
        ))} 
      </ul>
    </>
  )
}
