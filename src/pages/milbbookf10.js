import React from "react";
import "./milbookf10.css";
import { Row, Col } from "react-bootstrap";
import Middleline from "../components/middleline";

export default function Milbook() {
  const images = [
    {
      name: "Windows",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Windows.png",
    },
    {
      name: "IP65",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/IP65.png",
    },
    {
      name: "GNSS",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/GNSS.png",
    },
    {
      name: "Dual-battery",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Dual-battery.png",
    },
    {
      name: "Fingerprint",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Camera.png",
    },
    {
      name: "Field Service",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/NFC.png",
    },
    {
      name: "Logistics",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/5G.png",
    },
    {
      name: "Healthcare",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/5G.png",
    },
    {
      name: "Bluetooth",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/icon-Bluetooth.png",
    },
    {
      name: "Wifi",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Wi-Fi.png",
    },
  ];

  return (
    <section className="milbook-f10-section">
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #114491ff 0%, #212529 90%)",
        padding: "20px",
        textAlign: "start",
      }}
    >
      <h1 className="milbook-f10-title" style={{ fontSize: "26px" }}>
        Tablet <b>Milbook F10</b>, 10.1 inch Rugged Tablet
      </h1>
      <p className="milbook-f10-description">
        MILBOOK are durable and extremely efficient, portable, rugged computers
        designed for hard work in outdoor and industrial environment.
      </p>

      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 text-center">
          <img
            style={{ width: "70%", maxWidth: "600px" }}
            className="img-fluid"
            src="https://www.milbook.pl/wp-content/uploads/2025/01/notebook-milbook-R14.webp"
            alt="Rugged Notebook"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
            }}
          />

          <h2
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            RELIABILITY
          </h2>
          <div
            className="animated-line-leftlines"
            style={{
              width: "520px",
              height: "3px",
              backgroundColor: "#2f82ffff",
              marginBottom: "30px",
              marginTop: "10px",
            }}
          ></div>
          <ul>
            <li>
              <p>
                Choose 1 from 4 modules (2D scan engine, RJ45 Gigabit Ethernet,
                DB9 and USB 2.0)
              </p>
            </li>
            <li>
              <p>Support GPS, BDS and GLONASS</p>
            </li>
            <li>
              <p>
                Equipped with multiple accessories, like docking charger,
                hand-strap, vehicle mount, car charge, carry handle
              </p>
            </li>
          </ul>
        </div>

        <div
          className="col-md-4"
          style={{ margin: "0 auto", maxWidth: "1100px", marginTop: "30px" }}
        >
          <h2
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            PERFORMANCE
          </h2>
          <div
          className="animated-line-leftlines"
            style={{
              width: "520px",
              height: "3px",
              backgroundColor: "#2f82ffff",
              marginBottom: "30px",
              marginTop: "10px",
            }}
          ></div>
          <ul>
            <li>
              <p>Intel® Core™ Ultra 5 / Ultra 7 processors (Series 1)</p>
            </li>
            <li>
              <p>iGfx/dGfx (Intel Xe LPG Graphics)</p>
            </li>
            <li>
              <p>Support Windows 11 Pro</p>
            </li>
          </ul>

          <h2
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            COMMUNICATION
          </h2>
          <div
          className="animated-line-leftlines"
            style={{
              width: "520px",
              height: "3px",
              backgroundColor: "#2f82ffff",
              marginBottom: "30px",
              marginTop: "10px",
            }}
          ></div>
          <ul>
            <li>
              <p>High speed Wi-Fi 6</p>
            </li>
            <li>
              <p>Support M.2 interface 5G/4G selection</p>
            </li>
            <li>
              <p>Bluetooth BT5.1 (BLE) class 1 Function</p>
            </li>
          </ul>

          <h2
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            FEATURES
          </h2>
          <div
          className="animated-line-leftlines"
            style={{
              width: "520px",
              height: "3px",
              backgroundColor: "#2f82ffff",
              marginBottom: "30px",
              marginTop: "10px",
            }}
          ></div>
          <ul>
            <li>
              <p>With 15.6 inch FHD (1000 nits), optional touch screen</p>
            </li>
            <li>
              <p>
                Rich interfaces and extended function can meet various needs
              </p>
            </li>
            <li>
              <p>
                4850 mAh/56 Wh+1300 mAh/14.4 Wh dual battery, large battery
                support hot-swappable
              </p>
            </li>
          </ul>
          <button class="button">
            <span>Specification PDF </span>
          </button>
          <button class="button">
            <span>Get a Quote </span>
          </button>
        </div>
      </div>

      <Row className="justify-content-center">
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
            gap: "20px",
            justifyItems: "center", // center items within each column
            width: "60%",
            maxWidth: "1200px", // optional, for content width limit
            margin: "0 auto",
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ textAlign: "center", marginTop: "30px" }}>
              <img
                src={image.src}
                alt={image.name}
                style={{
                  width: "100%",
                  maxWidth: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h5
                style={{
                  padding: "20px 0 0",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {image.name}
              </h5>
            </div>
          ))}
        </div>
      </Row>
      
       <Middleline />
     
      <div
        style={{
          fontSize: "20px",
          color: "white",
          textAlign: "center",
          padding: "20px 10px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <span>Should you have further questions, please contact us at:</span>
        {/* <MDBIcon
                icon="envelope"
                style={{
                  color: "#0d6efd",
                  fontSize: "20px",
                }}
              /> */}
        <a
          href="mailto:info@milbook.pl"
          style={{
            color: "#0d6efd",
            textDecoration: "none",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          info@milbook.pl
        </a>
      </div>
    </div>
    
    </section>
  );
}
