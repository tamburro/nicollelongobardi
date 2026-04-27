
import React from 'react'
import menu_data from './menu_data'
import Link from 'next/link'

export default function NavMenu() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      let smoother: any;
      if (typeof window !== 'undefined') {
        smoother = (window as any).ScrollSmoother?.get() || (window as any).ScrollSmoother;
        if (!smoother && (window as any).ScrollSmoother) {
           smoother = (window as any).ScrollSmoother;
        }
      }
      
      // We can also try to scroll natively using hash target
      const element = document.querySelector(target);
      if (smoother && smoother.scrollTo) {
        smoother.scrollTo(target, true, "top top");
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
