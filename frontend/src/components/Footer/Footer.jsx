import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer= () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <p>Event Management System Created By Rohini Kalshetti</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get in touch</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@event.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2025 event.com - All Right Reserved.
      </p>      
    </div>
  )
}

export default Footer
