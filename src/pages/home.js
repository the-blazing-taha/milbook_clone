import React from "react";
import Carousel1 from "../components/carousel";
import RuggedTabletsSection from "../components/ruggedtables";
import ApplicationRange from "../components/applicationrange";
import Middleline from "../components/middleline";
import "./home.css";

export default function Home() {
  const images_array = [
    {
      alt: "1st Slide",
      cap1: "MILBOOK fully rugged tablets and notebooks",
      cap2: "Face extreme environments with strong adaptability, endurance and vitality. They are resistant to strong vibrations, extreme temperatures and wet or dusty weather conditions.",
    },
    {
      alt: "2nd Slide",
      cap1: "MILBOOK tablets and notebooks are reliable",
      cap2: "Warranty confirmed by certificates: MIL-STD-810H and MIL-STD-461G/461F and IP65/67. Their rugged construction and advanced protective features ensure reliability in any situation.",
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
    
    

    <div style={{ backgroundColor: "#08101dff",maxWidth: "100%"}}>
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
          <Middleline />
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
