import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h3 className="home-headline">Elevate Your Style with the Latest in Men's Fashion</h3>
      <h4 className="home-subheadline">Discover premium styles, timeless classics, and the latest trends—all in one place.</h4>
      
      <div className="home-cta">
        <h3>Shop Now</h3>
        <div className="btn-shop">Explore Collection</div>
      </div>
      <div id='image-container'>

      <img
          src="https://cdn.pixabay.com/photo/2017/11/14/06/18/shirt-2947549_640.jpg" 
          alt="Fashion Model"
          style={{ width: "300px", borderRadius: "5px" }} />
      <img
          src="https://cdn.pixabay.com/photo/2023/05/10/05/56/groom-7983097_640.jpg" 
          alt="Fashion Model"
          style={{ width: "300px", borderRadius: "5px" }} />
      <img
          src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg" 
          alt="Fashion Model"
          style={{ width: "300px", borderRadius: "5px" }} />
          <br />
          </div>

      <h3 className="home-sections-title">Our Collections</h3>
      <div className="home-sections">
        <p className="home-section">New Arrivals – Fresh styles just for you!</p>
        <p className="home-section">Trending Now – The season’s must-have fashion.</p>
        <p className="home-section">Exclusive Deals – Limited-time offers on top brands.</p>
        <p className="home-section">Shop by Category – Shirts, Trousers, Jackets, Accessories & More!</p>
      </div>
    </div>
  );
};

export default Home;
