"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Login() {
  const [isHovered, setIsHovered] = useState(false);
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


        <div style={{ maxWidth: "400px", margin: "90px auto", padding: "40px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontSize: "1.7rem", marginBottom: "1.5rem", textAlign: "center", color: "#837957" }}>Company Login</h2>
          
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              width: "100%", 
              padding: "12px", 
              backgroundColor: isHovered ? "#ffffff" : "#837957", 
              border: "1.6px solid #837957", 
              borderRadius: "8px", 
              cursor: "pointer", 
              fontSize: "1rem", 
              color: isHovered ? "#837957" : "#fff",
              transition: "all 0.2s"
            }}
          >
            <svg style={{ width: "24px", height: "26px", marginRight: "12px" }} viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>

            <div style={{ display: "flex", alignItems: "center", margin: "16px", paddingTop: "24px" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#a8a599ff", marginRight: "10px"}}></div>
            <div style={{ alignItems: "center"}}><p>&copy;{(new Date().getFullYear())}, 681 Group Ltd.</p></div>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#a8a599ff", marginLeft: "10px"}}></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}