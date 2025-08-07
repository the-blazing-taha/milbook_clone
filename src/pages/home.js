import React from "react";
import Carousel1 from "../components/carousel";
import RuggedTabletsSection from "../components/ruggedtables";
import ApplicationRange from "../components/applicationrange";
import "./home.css";

export default function Home() {
  const images_array = [
    {
      alt: "1st Slide",
      cap1: "Innovation That Powers Tomorrow",
      cap2: "At AizynQ , our mission is to ensure our customers are always ahead of the curve. We bring innovation to the world’s toughest challenges through customized and affordable embedded solutions. As an innovative company, we prioritize independence, stability, and long-term partnerships.",
    },
    {
      alt: "2nd Slide",
      cap1: "AizynQ Mission",
      cap2: "To drive technological advancements that make life easier, more connected, and sustainable.",
    },
  ];

  const app_ranges = [
    {
      name: "Power Mantainance",
      src: "https://www.milbook.pl/wp-content/uploads/2025/02/power-maintenance.webp",
    },
    {
      name: "Vehicle Diagnostics",
      src: "https://www.milbook.pl/wp-content/uploads/2025/02/vehicle-diagnostic.webp",
    },
    {
      name: "Energy Industry",
      src: "https://www.milbook.pl/wp-content/uploads/2025/02/energy-industry.webp",
    },
    {
      name: "Industrial Manufacturing",
      src: "https://www.milbook.pl/wp-content/uploads/2025/02/industrial-manufactoring.webp",
    },
    {
      name: "Automobile Manufactoring",
      src: "https://www.milbook.pl/wp-content/uploads/2025/02/automobile-manufaktoring.webp",
    },
  ];

  return (
    
    

    <div style={{ backgroundColor: "#08101dff"}}>
      <Carousel1 images={images_array} />
      <div style={{ backgroundColor: "black", padding: "1px 0" }}>
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="animated-line"></div>
        </div>
      </div>
      <div style={{ backgroundColor: "#08101dff", padding: "3px 0" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        ></div>
      </div>
              <div style={{ backgroundColor: "#08101dff", padding: "1px 0",height: "4px" }}>
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="animated-line"></div>
        </div>
      </div>
      <div style={{ backgroundColor: "#08101dff", padding: "3px 0" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        ></div>
      </div>
      
      <RuggedTabletsSection />
      <ApplicationRange images={app_ranges} />
   </div>
   
  );
}
