import React from 'react'
import "./womenCollection.css"
import ProductGrid from './ProductGrid ';
import CategoryCard from './CategoryCard';

const WomenCollection = () => {
  return <div>
       <div className="container">
      
      <div className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          HOME
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">WOMEN</span>
      </div>
      <div className="hero-container">
        <div className="hero-banner">
          <img
      src="https://preview.colorlib.com/theme/footwear/images/item-14.jpg"
      alt=""
      className="hero-image"
    />

    <div className="category-title">
      <h1>WOMEN'S</h1>
    </div>
  </div>

  <div className="category-nav">
    <p className="nav-link">
      NEW ARRIVALS
    </p>
    <p className="nav-link">
      BEST SELLERS
    </p>
    <p className="nav-link">
      EXTENDED WIDTHS
    </p>
    <p className="nav-link">
            SALE
          </p>
        </div>
      </div>


      <CategoryCard />
      <ProductGrid/>
      </div>
    
  </div>;
};

export default WomenCollection;
