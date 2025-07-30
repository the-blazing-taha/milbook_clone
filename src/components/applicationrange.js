import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";

export default function ApplicationRange({ images }) {
  return (
    <section
      className="application-range-section"
      style={{ backgroundColor: "#212529" }}
    >
      <Container>
        <Row className="g-3">
          {/* Section heading */}
          <Col xs={12}>
            <h2
              style={{
                color: "white",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              Application Range
            </h2>

            {/* Blue underline under heading */}
            <div
              style={{
                width: "520px",
                height: "3px",
                backgroundColor: "#114491ff",
                marginBottom: "30px",
                marginTop: "30px",
              }}
            ></div>
            
          </Col>

         
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  // padding: "10px",
                }}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  style={{
                    width: "100%",
                    maxWidth: "230px",
                    height: "230px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <h5
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {image.name}
                </h5>
              </div>
            </Col>
          ))}

          {/* Bottom blue line */}
          <Col xs={12}>
            <div
              style={{
                marginTop: "40px",
                height: "2px",
                backgroundColor: "#114491ff",
                maxWidth: "100%",
              }}
              className="animated-line"
            ></div>
          </Col>

          {/* Contact text + icon */}
          <Col xs={12}>
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
              <MDBIcon
                icon="envelope"
                style={{
                  color: "#0d6efd",
                  fontSize: "20px",
                }}
              />
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
