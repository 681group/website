import Image from "next/image";
import Navbar from "../navbar";

const projects = [
   {
    id: 18,
    title: "New Track Lighting in Luxury Apartment (London Borough of Tower Hamlets)",
    image: "/DOMESTIC_ELECTRICIANS_681_GROUP18.jpg", 
    date: "06/01/2026"
  },
  {
    id: 17,
    title: "New BMS Systems (Epping Primary School)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP17.jpg", 
    date: "19/12/2025"
  },
  {
    id: 16,
    title: "Full Electrical Refit (Corus Hotel Hyde Park, London)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP16.jpg",
    date: "01/12/2025"
  },
  {
    id: 15,
    title: "Full Office Refurbishment (The Mille, London)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP15.jpg", 
    date: "26/10/2025"
  },
   {
    id: 14,
    title: "Electrical Second & Final Fix in New Building (Heathrow House)",
    image: "/DOMESTIC_ELECTRICIANS_681_GROUP14.jpg", 
    date: "10/10/2025"
  },
  {
    id: 13,
    title: "Plant Room Installation (Brook House, Acton Town)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP13.jpg",
    date: "02/08/2025"
  },
  {
    id: 12,
    title: "Warner Music Studio, New Roof Top Lighting, (High Street Kensington)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP12.jpg",
    date: "20/07/2025"
  },
  {
    id: 11,
    title: "New City College, New ASHP Installation (Epping)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP11.jpg", 
    date: "04/04/2025"
  },
  {
    id: 10,
    title: "New Main DB & Full Electrical Rewiring (UAL Greencoat Campus)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP10.jpg",
    date: "13/10/2024"
  },
  {
    id: 9,
    title: "Kensington Olympia Project, Containment Work (Kensington, London)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP09.jpg",
    date: "20/08/2024"
  },
   {
    id: 8,
    title: "New Full LED Light Upgrading, Price Work (London College of Communication)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP08.jpg",
    date: "01/07/2024" 
  },
  {
    id: 7,
    title: "Finlay, New Office Lighting (London, Victoria)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP07.jpg",
    date: "20/11/2023"
  },
  {
    id: 6,
    title: "New LED Lighting (UAL Wimbledon Campus)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP06.jpg",
    date: "19/01/2024"
  },
    {
    id: 5,
    title: "Ongoing Maintenance Work Greenwich Yacht Club (North Greenwich)",
    image: "/MAINTENANCE_ELECTRICIANS_681_GROUP05.jpg", 
    date: "Since 2024"
  },
  {
    id: 4,
    title: "iFly, New Plant Room & Electrical Installation (O2 Arena, North Greenwich)",
    image: "/INDUSTRIAL_ELECTRICIANS_681_GROUP04.jpg",
    date: "20/11/2023"
  },
  {
    id: 3,
    title: "First Commercial Bank, Full Electrical Rewiring (City Of London)",
    image: "/COMMERCIAL_ELECTRICIANS_681_GROUP01.jpg",
    date: "20/11/2022"
  },
   {
     id: 2,
     title: "Remedial Works, Reactive Callouts (Tesco & Foxtons)",
    image: "/CALLOUTs_ELECTRICIANS_681_GROUP02.jpg", 
    date: "Since 2021"
  },
  {
    id: 1,
    title: "Test & Inspection, EICRs (Landlord Safety Reports)",
    image: "/EICR_Landlord_Safety_Reports_681_GROUP03.jpg",
    date: "Since 2018"
  }
];

export default function Portfolio() {
  return (
    <div className="hero">
      <div className="content-wrapper w-container">
        
        <Navbar />
        
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
                  fill={true}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div style={{ padding: "16px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#f1f0ebff", margin: 0, textAlign: "center" }}>{project.title}</h3>
              </div>
              <div className="date">{project.date}</div>
            </div>
          ))}
        </div>
       </div>
      </div>
     </div>
  );
}