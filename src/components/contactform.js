import React from "react";
import "./contactform.css";

export default function ContactForm() {
  return (
    <section className="contact-form-section">

        <div className="contact-form-header">
            <p style={{fontWeight:"bold",color:"#024FA1"}}>Contact Us</p>
            <div>
                <h2>Let’s Get In Touch</h2>
            </div>
        </div>
   
    <div className="form-wrapper">
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <textarea placeholder="Message" rows="6"></textarea>
        <div className="btn-container">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
    </section>
  );
}
