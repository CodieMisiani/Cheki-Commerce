import React from 'react'
import './Home.css'
import Prod1 from '../assets/prod1.jpg'
import Prod2 from '../assets/prod2.jpg'
import Prod3 from '../assets/prod3.jpg'
import Prod4 from '../assets/prod4.jpg'
import Prod5 from '../assets/prod5.jpg'
import Prod6 from '../assets/prod6.jpg'
import Prod7 from '../assets/prod7.jpg'
import Prod8 from '../assets/prod8.jpg'
import Prod9 from '../assets/prod9.jpg'
import Prod10 from '../assets/prod10.jpg'
import Prod11 from '../assets/prod11.jpg'
import Prod12 from '../assets/prod12.jpg'

import Category1 from '../assets/category-1.png'
import Category2 from '../assets/category-2.png'
import Category3 from '../assets/category-3.png'
import Category4 from '../assets/category-4.png'
import Category5 from '../assets/category-5.png'
import Category6 from '../assets/category-6.png'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h3>Top Deals</h3>
        <div className="home-categories product">
          <div className="category">
            <img src={Prod1} alt="" />
            <p className="product-name">SAMSUNG Curved Smart TV 55”</p>
            <p className="curr-price">Ksh 32,999</p>
            <p className="prev-price">Ksh 45,199</p>
          </div>
          <div className="category">
            <img src={Prod2} alt="" />
            <p className="product-name">UPSTREMAN 3.2 Cu.Ft Mini Fridge with Freezer Single Door</p>
            <p className="curr-price">Ksh 52,229</p>
            <p className="prev-price">Ksh 60,905</p>
          </div>
          <div className="category">
            <img src={Prod3} alt="" />
            <p className="product-name">iPhone 16 Pro</p>
            <p className="curr-price">Ksh 82, 599</p>
            <p className="prev-price">Ksh 100,905</p>
          </div>
          <div className="category">
            <img src={Prod4} alt="" />
            <p className="product-name">Stylish Cotton Hooded Sweatshirt</p>
            <p className="curr-price">Ksh 2,599</p>
            <p className="prev-price">Ksh 5,905</p>
          </div>
          <div className="category">
            <img src={Prod5} alt="" />
            <p className="product-name">15 Pcs Nonstick Stay Cool Handle Cookware</p>
            <p className="curr-price">Ksh 12,599</p>
            <p className="prev-price">Ksh 16,905</p>
          </div>
          <div className="category">
            <img src={Prod6} alt="" />
            <p className="product-name">Hisense 12KG Front Load Wash & Dry Washing Machine WD5S1245BB</p>
            <p className="curr-price">Ksh 86,995</p>
            <p className="prev-price">Ksh 91,905</p>
          </div>
          <div className="category">
            <img src={Prod7} alt="" />
            <p className="product-name">Samsung Galaxy S24 Ultra 5G</p>
            <p className="curr-price">Ksh 140,000</p>
            <p className="prev-price">Ksh 161,705</p>
          </div>
          <div className="category">
            <img src={Prod8} alt="" />
            <p className="product-name">Beats Studio3 Noise Cancelling Headphones</p>
            <p className="curr-price">Ksh 42,849</p>
            <p className="prev-price">Ksh 55,909</p>
          </div>
          <div className="category">
            <img src={Prod9} alt="" />
            <p className="product-name">Pioneer DJ 4-deck DJ Controller</p>
            <p className="curr-price">Ksh 283,595</p>
            <p className="prev-price">Ksh 291,905</p>
          </div>
          <div className="category">
            <img src={Prod10} alt="" />
            <p className="product-name">Hisense 40" Full HD Smart TV Series A4KAU</p>
            <p className="curr-price">Ksh 26,995</p>
            <p className="prev-price">Ksh 31,115</p>
          </div>
          <div className="category">
            <img src={Prod11} alt="" />
            <p className="product-name">Garnier Pure Active Intensive Charcoal 3 in 1 150ml</p>
            <p className="curr-price">Ksh 1,300</p>
            <p className="prev-price">Ksh 1,634</p>
          </div>
          <div className="category">
            <img src={Prod12} alt="" />
            <p className="product-name">Baby Boy Shoes Nike Air Force 1</p>
            <p className="curr-price">Ksh 1,800</p>
            <p className="prev-price">Ksh 2,400</p>
          </div>
        </div>
      </div>


      {/* shop by category */}
      <div className='home-container shop-by-category'>
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
    </>
  )
}

export default Home
