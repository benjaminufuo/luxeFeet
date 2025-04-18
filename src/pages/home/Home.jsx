import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../../src/components/Footer";
import "./home.css";
import { useConstomHook } from "../../global/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);
  const { addToCart, products, setProductId } = useConstomHook();

const navigate = useNavigate()
  const slides = [
    {
      image: "https://preview.colorlib.com/theme/footwear/images/men.jpg",
      text1: "NEW",
      text2: "ARRIVAL",
      text3: "UP TO 30% OFF",
      text4: "New stylish shoe for men",
      buttontext: "SHOP COLLECTION",
    },
    {
      image: "https://preview.colorlib.com/theme/footwear/images/img_bg_1.jpg",
      text1: "MEN'S",
      text2: "SHOE",
      text3: "COLLECTION",
      text4: "New trending shoes",
      buttontext: "SHOP COLLECTION",
    },
    {
      image: "https://preview.colorlib.com/theme/footwear/images/img_bg_2.jpg",
      text1: "HUGE",
      text2: "SALE",
      text3: "50% OFF",
      text4: "Big sale sandals",
      buttontext: "SHOP COLLECTION",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 7000);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const previousSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
    }, 1000);
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 1000);
  };

  const homefootwearone = [
    {
      image: "https://preview.colorlib.com/theme/footwear/images/img_bg_3.jpg",
      text: "Shop Men's Collection",
    },
    {
      image: "https://preview.colorlib.com/theme/footwear/images/item-10.jpg",
      text: "Shop Women's Collection",
    },
  ];

  const patners = [
    { image: "https://preview.colorlib.com/theme/footwear/images/brand-1.jpg" },
    { image: "https://preview.colorlib.com/theme/footwear/images/brand-2.jpg" },
    { image: "https://preview.colorlib.com/theme/footwear/images/brand-3.jpg" },
    { image: "https://preview.colorlib.com/theme/footwear/images/brand-5.jpg" },
  ];


  return (
    <main className="homemain">
      <Header />
      <section className="heromain">
        <article
          className={`heroslideshow ${fade ? "fade" : ""}`}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="content" key={slides[currentSlide].image}>
            <h1 className="text1">{slides[currentSlide].text1}</h1>
            <span className="text2">{slides[currentSlide].text2}</span>
            <span className="text3">{slides[currentSlide].text3}</span>
            <p className="text4">{slides[currentSlide].text4}</p>
            <button className="btn">{slides[currentSlide].buttontext}</button>
          </div>
        </article>
      </section>
      <div className="navigate">
        <div className="position">
          <p>1.1</p>
          <p>2.2</p>
          <p>3.3</p>
        </div>
        <div className="list">
          <ul>
            <li className="prev" onClick={() => previousSlide()}>
              Previous
            </li>
            <li className="next" onClick={() => nextSlide()}>
              Next
            </li>
          </ul>
        </div>
      </div>
      <div className="secondsectionheader">
        <h2>designed products that I wanted myself.</h2>
      </div>
      <div className="firstproduct">
        {homefootwearone.map((item, index) => (
          <div className="footwearone" key={index}>
            <img src={item.image} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="bestseller">
        <h2>Best Sellers</h2>
      </div>
      <div className="productdisplay">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="homeproductdisplay" key={product._id}>
              <article className="article" onClick={() =>  {setProductId(product._id), navigate("/home/product")}}>
                <img src={product.image.imageUrl} alt={product.description} />
                <button
                  className="addToCart"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </article>
              <span>{product.description}</span>
              <span className="span">{product.category}</span>
              <span>₦{product.price}</span>
            </div>
          ))
        ) : (
          <p>Loading products....</p>
        )}
      </div>
      <div className="shopproductdiv">
        <button className="shopproduct">Shop all products</button>
      </div>

      <div>
        <h2 className="trusted">Trusted Partners</h2>
      </div>
      <div className="trustedlogodiv">
        {patners.map((partner, index) => (
          <div className="trustedpatners" key={partner}>
            <img src={partner.image} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
