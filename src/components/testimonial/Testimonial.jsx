import React from 'react';
import './Testimonial.css';
import profile1 from '../../assets/Testimonials/profile-img1.png'
import profile2 from '../../assets/Testimonials/profile-img2.png'
import {RiStarSFill} from 'react-icons/ri'

const Testimonial = () => {
  return (
  <div className="testimonial-section">
      <div className="container">
          <div className="upper-section">
              <h1>
                  This is what client<br/>say about us
              </h1>
              </div>
              <div className="testimonials">
                    <div className="testimonial">
                        <div className="img">
                        <img src={profile1} />
                            <div className="name">

                        <h2>Huzaifa Afraz</h2>
                        <h6>Rawalpindi</h6>
                            </div>
                        </div>
                        <p>Thank you Travira air I'm very happy, my work goes smoothly</p>
                        <div className="star">
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        </div>

                    </div>
                    <div className="testimonial">
                    <div className="img">
                        <img src={profile2} />
                            <div className="name">

                        <h2>Bilal Taj</h2>
                        <h6>Islamabad</h6>
                            </div>
                        </div>
                        
                        <p>Thank you, I was helped by being there travira air The flight is very comfortable and safe.</p>
                        <div className="star">
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        </div>

                    </div>
              </div>
             
       
      </div>
  </div>
  )
}

export default Testimonial
