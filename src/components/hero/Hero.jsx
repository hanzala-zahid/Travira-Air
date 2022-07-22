import React from 'react'
import './Hero.css';
import hero_img from '../../assets/Hero Section/hero img.png';

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="left-hero-col">
                <h1 className='hero-heading'>
                    <span>World class </span>charter and maintenance flights
                </h1>
                <p className='hero-para'>
                    Our goal is simply to offer the highest standards of professionalism and service as measured by out safety record, dispatch reliability and customer satisfaction.
                </p>
                <button className='primary-btn'>Booking Now</button>
            </div>
            
                <img className="hero-img" src={hero_img} />
          
        </div>
      
    </div>
  )
}

export default Hero
