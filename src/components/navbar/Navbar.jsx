import React,{ useState} from 'react';
import './Navbar.css';
import  logo from '../../assets/Navbar/logo.svg'
import { HiMenu } from 'react-icons/hi'
import {MdOutlineCancel} from 'react-icons/md'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
    <div className="container">
      <img src={logo} alt="logo" />
     
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Safety</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <MdOutlineCancel className="icon" />
        ) : (
          <HiMenu className="icon" />
        )}
      </div>
      <button className='secondary-btn'>Contact Us</button>
    </div>
  </div>
    
  
  

  )}
export default Navbar
