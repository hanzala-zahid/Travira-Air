import React from 'react';
import './Fleet.css';
import fleet_img1 from '../../assets/Fleet/fleet-img1.png';
import fleet_img2 from '../../assets/Fleet/fleet-img2.png';
import  fleet_img3 from '../../assets/Fleet/fleet-img3.png';

const Fleet = () => {
  return (
    <div className='fleet-section'>
        <div className="container">
            <h1>Fleet</h1>
            <p>Travira Air is totally committed to supporting our clients by providing safe and raliable solutions for their air charter needs.</p>
            <div className="fleet-images">
                <div className="fleet-img">
                    <img src={fleet_img1} />
                    <h2>CESSNA 208 CARAVAN</h2>
                </div>
                <div className="fleet-img">
                    <img src={fleet_img2} />
                    <h2>BEECHCRAFT B1900D</h2>
                </div>
                <div className="fleet-img">
                    <img src={fleet_img1} />
                    <h2>N604 NVRKSOE</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Fleet
