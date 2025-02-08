import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Cheki</h1>
      </header>
      
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Cheki is Kenya's leading online marketplace for buying and selling vehicles. Our platform connects buyers and sellers in a convenient, efficient, and secure environment. Whether you’re looking for your next car, bike, or truck, we provide a wide range of options to help you make the best choice.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make vehicle shopping an easy and enjoyable experience by offering a vast selection of vehicles at competitive prices, backed by reliable customer support and secure transactions. We strive to bring the best deals to our customers through technology and innovation.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and work hard to ensure they have a seamless buying experience.</li>
          <li><strong>Integrity:</strong> We operate with transparency, honesty, and fairness in all our transactions.</li>
          <li><strong>Innovation:</strong> We continuously enhance our platform to provide the best tools and features for our customers.</li>
          <li><strong>Security:</strong> We are committed to keeping our users’ data and transactions safe and secure.</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
