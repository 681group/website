"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
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

        <div className="section" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div><h2 style={{ fontSize: "1.7rem", marginBottom: "1.5rem", color: "#bdbdbd"}}>A Little About Us</h2></div>
        <div style={{ padding: "20px" }}><h5>MISSION: <br/>To be the building and maintenance contractor of choice in London for 
            commercial builders, home builders, property managers and homeowners. 
            Always delivering on time up to highest standards.</h5>
        </div>
        <div style={{ padding: "20px" }}>
          <h5>VISION: <br/>At 681 Group Ltd, we strive every day to be a benchmark in the building industry, 
              delivering always in time with the due quality as we have for more than 10 years. 
              We are committed to providing good work for a fair price. Our focus on sustained, 
              controlled growth as a company, will never come at the expense of the personal service our 
              customers have come to know and expect.
          </h5>
         </div>
        </div>
      </div>
     </div>
  );
}