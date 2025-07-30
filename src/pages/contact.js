import React from "react";
import Boxes from "../components/boxes";
import "./contact.css";
import Middleline from "../components/middleline";
import ContactForm from "../components/contactform";

export default function Contact() {
  return (
    <div className="contact-page">
     <Boxes/>
     <Middleline />
     <ContactForm />
    </div>
  );
}
