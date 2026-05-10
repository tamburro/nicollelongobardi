"use client"
import Link from "next/link";
import UseSticky from "@/hooks/UseSticky";
import NavMenu from "./NavMenu"; 
import { useState } from "react";
import Sidebar from "@/components/common/Sidebar";

export default function HeaderOne() {

  const { sticky } = UseSticky()
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`main-header ${sticky ? 'fixed-header' : ''}`}>
        <div className="header-upper">
          <div className="container">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-lg-3 col-6">
                  <div className="logo">
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.25rem', letterSpacing: '0.04em', lineHeight: 1 }}>
                        LONGOBARDI<br />
                        <span style={{ color: '#C8F23C' }}>PRODUZ</span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 col-6">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="side-menu-icon d-lg-none text-end">
                    <a style={{ cursor: "pointer" }} onClick={() => setOpen(!open)} className="info-toggle-btn f-right sidebar-toggle-btn"><i className="fal fa-bars"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  )
}
