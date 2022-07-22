import React from 'react'
import logo from '../../assets/Navbar/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
   
      <div className="footer-section">
        <div className="container">
            
        <img src={logo} alt="logo" />
        <div className="class">
            <h2>Company</h2>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="class">
            <h2>Service</h2>
            <ul>
                <li><a href="#">Scheduled &amp; Spot Charter</a></li>
                <li><a href="#">Medical Evacuation Flight</a></li>
                <li><a href="#">Aircraft Management</a></li>
            </ul>

        </div>
        <div className="class">
            <h2>Office</h2>
            <ul>
                <li><a href="#">commerical@travira-air.com</a></li>
                <li><a href="#">Graha Paramita 3rd Floor</a></li>
                <li><a href="#">Islamabad, Pakistan</a></li>
            </ul>

        </div>
        </div>
      </div>
   
  )
}

export default Footer
