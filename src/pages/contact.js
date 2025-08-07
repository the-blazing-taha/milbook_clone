import React from "react";
import Boxes from "../components/boxes";
import "./contact.css";
import Middleline from "../components/middleline";
import ContactForm from "../components/contactform";

export default function Contact() {
  return (
    <div className="contact-page">
      <div
      style={{textAlign: "center", fontFamily: "Arial, sans-serif"}}
        className="contact-header"
      >
        <strong className="contact-title" style={{ color:"white",fontSize: "30px" }}>
          MILBOOK Tablets & Notebooks
        </strong>
        <p>Distribution and service:</p>
      </div>

     <Boxes/>
     <Middleline />
     <ContactForm />
    </div>
  );
}
