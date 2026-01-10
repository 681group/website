"use client"
import Image from "next/image";
import Link from "next/link";
import HomePage from "./home-page";
import { useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hero">
      <div className="content-wrapper w-container">
        
        <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", position: "relative" }}>
          <Link href="/" className="navbar-brand">
            <Image
              className="logo"
              src="/681_Logo_Web.webp"
              alt="681 Group Logo"
              width={130}
              height={30}
              priority
            />
          </Link>
          
          <div className={`menu-button w-nav-button ${isOpen ? "w--open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className={`nav-menu ${isOpen ? "open" : ""}`}>
            <Link href="/portfolio" className="nav-link">PORTFOLIO</Link>
            <Link href="/about" className="nav-link">ABOUT US</Link>
            <Link href="https://chat.whatsapp.com/CO0wQTEsX7EJW5jdEXAqeo" className="nav-link">CONTACT US</Link>
            <Link href="/login" className="nav-link">LOG IN</Link>
          </div>
        </nav>
       <HomePage/>
      </div>
    </div>
  );
}
