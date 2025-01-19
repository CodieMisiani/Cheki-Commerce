import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Gina.png'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav>
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    {/* Replace with your logo image */}
                    <img src={Logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <ul className='nav-links'>
                {/* <li>
                    <Link to="/">Home</Link>
                </li> */}
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar
