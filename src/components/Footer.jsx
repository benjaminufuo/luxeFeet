import React from 'react'
import "../components/cssComponent/footer.css"
const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ABOUT FOOTWEAR</h3>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
          <div className="social-icons">
            <a href="#" className="social-icon twitter">
              Twitter
            </a>
            <a href="#" className="social-icon facebook">
              Facebook
            </a>
            <a href="#" className="social-icon linkedin">
              LinkedIn
            </a>
            <a href="#" className="social-icon dribbble">
              Dribbble
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>CUSTOMER CARE</h3>
          <ul>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">RETURNS/EXCHANGE</a>
            </li>
            <li>
              <a href="#">GIFT VOUCHER</a>
            </li>
            <li>
              <a href="#">WISHLIST</a>
            </li>
            <li>
              <a href="#">SPECIAL</a>
            </li>
            <li>
              <a href="#">CUSTOMER SERVICES</a>
            </li>
            <li>
              <a href="#">SITE MAPS</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">DELIVERY INFORMATION</a>
            </li>
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
            <li>
              <a href="#">ORDER TRACKING</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>NEWS</h3>
          <ul>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">PRESS</a>
            </li>
            <li>
              <a href="#">EXHIBITIONS</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT INFORMATION</h3>
          <p className="address">291 SOUTH 21TH STREET,</p>
          <p className="address">SUITE 721 NEW YORK NY 10016</p>
          <p className="phone">+ 1235 2355 98</p>
          <p className="email">INFO@YOURSITE.COM</p>
          <p className="website">YOURSITE.COM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with ♥ by Colorlib Demo Images: Unsplash ,
          Pexels.com
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
