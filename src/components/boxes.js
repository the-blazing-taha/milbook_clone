import React from 'react'
import './boxes.css'
export default function Boxes() {
  return (
    <div className="contact-boxes-container">
        <div className="contact-box">
          <div className="box-title">Information</div>
          <div className="box-content">
              <p>info@aizynq.com</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="box-title">Support</div>
          <div className="box-content">
              <p>support@aizynq.com</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="box-title">Manager</div>
          <div className="box-content">
            <p>hamza@aizynq.com</p>
          </div>
        </div>
      </div>
  )
}
