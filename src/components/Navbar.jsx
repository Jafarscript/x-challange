import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navleft">
        <h1>get<span className='colored'>linked</span></h1>
      </div>
      <div className="navRight">
        <ul className='navlink'>
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <button className='register'>Register</button>
      </div>
    </div>
  )
}

export default Navbar