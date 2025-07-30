import React from 'react';
import './footer.css';

function Footer() {

  return (
    <footer  className="footer">
            <div >
                <img src="https://www.milbook.pl/wp-content/uploads/2021/08/divider2-scaled.jpg" alt="not found"/>
            </div>
              <br/ >
      <div className="footer-content">
        <div className="footer-section about">
          <h5>MILBOOK Tablets & Notebooks</h5>
          <br />
          <p style={{margin:0,fontSize:"18px",fontFamily: "Arial, sans-serif"}}>Distribution and service:</p>
          <p style={{margin:0,fontSize:"18px",fontFamily: "Arial, sans-serif"}}>AP-FLYER Sp. z o. o.</p>
          <p style={{margin:0,fontSize:"18px",fontFamily: "Arial, sans-serif"}}>Żegańska 2d St.</p>
          <p style={{margin:0,fontSize:"18px",fontFamily: "Arial, sans-serif"}}>04-713 Warsaw, Poland</p>
        </div>

        <div className="footer-section links">
          <h4>Contact</h4>
          <ul>
            <li><a href="/about">E-mail: info@milbook.pl</a></li>
            <li><a href="/services">Tel.: +48 22 613 04 87</a></li>
            <li><a href="/contact">Fax: +48 22 613 06 12</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>For Clients</h4>
          <div className="social-links">
           <li><a  href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li> 
           <li><a href="/wheretobuy" target="_blank" rel="noopener noreferrer">Where to buy</a></li> 
            <li><a href="/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          </div>
        </div>
      </div>
      <br/ >
    </footer>
  );
}

export default Footer;