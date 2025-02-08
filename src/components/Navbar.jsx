import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Gina.png'
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";

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

            <ul className='nav-links sign-cart'>
                {/* <li>
                    <Link to="/">Home</Link>
                </li> */}
                <li className='sign'>
                    <Link to="/signup" className='signing'>Signup</Link>
                    <span>OR</span>
                    <Link to="/signin" className='signing'>Signin</Link>
                </li>
                <li className='cart'>
                    <Link to="/cart" className='cart-icon'>
                        <span className="cart-icon-size">
                        <TiShoppingCart />
                        <span className='count'>0</span>
                        </span>
                    </Link>
                </li>
  
            </ul>
        </div>
      </nav>
  )
}

export default Navbar
