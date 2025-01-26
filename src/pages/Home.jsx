import React from 'react'
import './Home.css'
import Category1 from '../assets/category-1.png'
import Category2 from '../assets/category-2.png'
import Category3 from '../assets/category-3.png'
import Category4 from '../assets/category-4.png'
import Category5 from '../assets/category-5.png'
import Category6 from '../assets/category-6.png'

const Home = () => {
  return (
    <div className='home-container'>
      <h3>Shop By Category</h3>
      <div className="home-categories">
        <div className="category">
          <img src={Category1} alt="" />
          <p>Flash Sale</p>
        </div>
        <div className="category">
          <img src={Category2} alt="" />
          <p>Clearance Sale</p>
        </div>
        <div className="category">
          <img src={Category3} alt="" />
          <p>New Arrivals</p>
        </div>
        <div className="category">
          <img src={Category4} alt="" />
          <p>Appliances</p>
        </div>
        <div className="category">
          <img src={Category5} alt="" />
          <p>Beauty Products</p>
        </div>
        <div className="category">
          <img src={Category6} alt="" />
          <p>Phone Deals</p>
        </div>
      </div>
    </div>
  )
}

export default Home
