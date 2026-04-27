'use client'
import { useEffect, useState } from "react";
import { ScrollSmoother } from "@/plugins";

interface StickyState {
  sticky: boolean;
}

const UseSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let smoother: any;

    const stickyHeader = (): void => {
      let scrollPos = window.scrollY;
      
      if (!smoother) {
        if (typeof window !== 'undefined' && (window as any).ScrollSmoother) {
          smoother = (window as any).ScrollSmoother.get();
        } else {
          smoother = ScrollSmoother.get();
        }
      }
      
      if (smoother) {
        scrollPos = smoother.scrollTop();
      } else {
        scrollPos = window.scrollY;
      }

      if (scrollPos > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", stickyHeader);
    
    // Fallback interval since GSAP smoother might prevent native scroll events in some configurations
    const updateInterval = setInterval(() => {
      stickyHeader();
    }, 100);

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
      clearInterval(updateInterval);
    };
  }, []);

  return {
    sticky,
  };
};

export default UseSticky;
