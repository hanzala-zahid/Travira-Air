import React from 'react';
import './Safety.css';
import safety_img from '../../assets/Safety/safety-img.png';

const Safety = () => {
  return (
    
      <div className="safety-section">
          <div className="container">
          <div className="safety-left">
              <h1>Safety</h1>
              <p>It is a matter of pride for Travira Air that we have one of the best air charter safety records in the region.</p>
              <div className="safety-links">
                  <a href="#">MANAGEMENT COMMITMENT</a>
                  <a href="#">GLOBAL OUTLOOK</a>
                  <a href="#">IT-BASED TRACKING AND MONITORING</a>
                  <a href="#">PILOTS AND CREW</a>
                  <a href="#">INDEPENDENT VERIFICATION</a>
                  <a href="#">MEDICAL FACILITIES</a>
                  <a href="#">AIRCRAFT FLEET</a>
                  <a href="#">BEHIND THE SCENES</a>
              </div>
          </div>
          <div className="safety-img">
              <img src={safety_img} />
          </div>
          </div>
    </div>
  )
}

export default Safety
