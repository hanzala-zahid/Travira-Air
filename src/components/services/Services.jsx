import React from 'react';
import './Services.css';
import services_img from '../../assets/Services/services-img.png';
import logo1 from '../../assets/Services/logo1.svg';
import logo2 from '../../assets/Services/logo2.svg';
import logo3 from '../../assets/Services/logo3.svg';
import logo4 from '../../assets/Services/logo4.svg';


const Services = () => {
  return (
    <div className='services-section'>
      <div className="container">
          <p className='first-para'><span>Companies </span>that have used out services</p>
          <div className="logos">
              <img className="logo1" src={logo1} />
              <img className="logo2" src={logo2} />
              <img className="logo3" src={logo3} />
              <img className="logo4" src={logo4} />
          </div>
          <div className="services-bottom">
          <div className="services-left">
              <img src={services_img} />
          </div>
          <div className="services-right">
              <h1>Our <span>Services</span></h1>
              <p>Travira Air is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.</p>
              <div className="services-links">
                  <a href="#">SCHEDULED &amp; SPOT CHARTER</a>
                  <a href="#">AIRCRAFT MRO</a>
                  <a href="#">LONGTERM CONTRACT</a>
                  <a href="#">ONSHORE</a>
                  <a href="#">MEDICAL EVACUATION FLIGHT</a>
                  <a href="#">OFFSHORE</a>
                  <a href="#">AIRCRAFT MANAGEMENT</a>
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Services
