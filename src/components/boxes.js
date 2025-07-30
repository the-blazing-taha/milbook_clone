import React from 'react'
import './boxes.css'
export default function Boxes() {
  return (
    <div className="contact-boxes-container">
        <div className="contact-box">
          <div className="box-title">AP-FLYER Sp. z o.o.</div>
          <div className="box-content">
            <p>Żegańska 2D St.</p>
            <p>04-713 Warsaw, Poland</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="box-title">Phone / Fax</div>
          <div className="box-content">
            <p>Tel.: +48 22 613 04 87</p>
            <p>Fax: +48 22 613 06 12</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="box-title">E-mail</div>
          <div className="box-content">
            <p>info@milbook.pl</p>
          </div>
        </div>
      </div>
  )
}
