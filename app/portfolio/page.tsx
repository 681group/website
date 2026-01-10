"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
   {
    id: 18,
    title: "New Track Lighting in Luxury Apartment (London Borough of Tower Hamlets 06/01/2026)",
    image: "/DOMESTIC_ELECTRICIANS_681_GROUP18.jpg", 
  },
  {
    id: 17,
    title: "New BMS Systems (Epping Primary School, 19/12/2025)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP17.jpg", 
  },
  {
    id: 16,
    title: "Full Electrical Refit (Corus Hotel, Hyde Park, London, 01/12/2025)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP16.jpg",
  },
  {
    id: 15,
    title: "Full Office Refurbishment (The Mille, London, 26/10/2025)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP15.jpg",
  },
   {
    id: 14,
    title: "Electrical Second & Final Fix in New Building (Heathrow House, 10/10/2025)",
    image: "/DOMESTIC_ELECTRICIANS_681_GROUP14.jpg", 
  },
  {
    id: 13,
    title: "Plant Room Installation (Brook House, Acton Town, 02/08/2025)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP13.jpg",
  },
  {
    id: 12,
    title: "Warner Music Studio, New Roof Top Lighting, (High Street Kensington, 20/07/2025)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP12.jpg",
  },
  {
    id: 11,
    title: "New City College, New ASHP Installation (Epping, 04/04/2025)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP11.jpg", 
  },
  {
    id: 10,
    title: "New Main DB & Full Electrical Rewiring (UAL Greencoat Campus, 13/10/2024)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP10.jpg",
  },
  {
    id: 9,
    title: "Kensington Olympia Project, Containment Work (London, 20/08/2024)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP09.jpg",
  },
   {
    id: 8,
    title: "New Full LED Light Upgrading, Price Work (London College of Communication, 01/07/2024)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP08.jpg", 
  },
  {
    id: 7,
    title: "Finlay, New Office Lighting (London, Victoria, 03/04/2024)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP07.jpg",
  },
  {
    id: 6,
    title: "New LED Lighting (UAL Wimbledon Campus, 19/01/2024)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP06.jpg",
  },
    {
    id: 5,
    title: "Ongoing Maintenance Work Greenwich Yacht Club (Since 2024)",
    image: "/MAINTENANCE_ELECTRICIANS_681_GROUP05.jpg", 
  },
  {
    id: 4,
    title: "iFly, New Plant Room & Electrical Installation (O2 Arena, 20/11/2023)",
    image: "/INDUSTRIAL_ELECTRICIANS_681_GROUP04.jpg",
  },
  {
    id: 3,
    title: "First Commercial Bank, Full Electrical Rewiring (City Of London, 20/11/2022)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP01.jpg",
  },
   {
     id: 2,
    title: "Test & Inspection, EICRs (Landlord Safety Reports)",
    image: "/EICR_Landlord_Safety_Reports_681_GROUP03.jpg",
    
  },
  {
    id: 1,
    title: "Remedial Works, Reactive Callouts (Tesco & Foxtons)",
    image: "/CALLOUTs_ELECTRICIANS_681_GROUP02.jpg", 
  }
];

export default function Portfolio() {
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
        
        <div className="section">
          <div><h2 style={{ fontSize: "1.7rem", marginBottom: "1.5rem", textAlign: "center", color: "#bdbdbd"}}>Recent Projects & Partners</h2></div>
        <div className="dyn-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))", gap: "20px", width: "100%" }}>
          {projects.map((project) => (
            <div key={project.id} style={{ 
              backgroundColor: "#837957", 
              borderRadius: "16px", 
              overflow: "hidden", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ position: "relative", width: "100%", height: "240px", backgroundColor: "#f0f0f0" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div style={{ padding: "16px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#f1f0ebff", margin: 0, textAlign: "center" }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
       </div>
      </div>
     </div>
  );
}