import React, { useState, useRef, useEffect } from "react";
import "./cssComponent/header.css";
import { IoMdSearch } from "react-icons/io";
import { Input } from "antd";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const [dropDown, setDropDown] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePage, setActivePage] = useState("Home");
  const [slideInterval, setSlideInterval] = useState("");
  const slides = [
    "25% OFF (ALMOST) EVERYTHING! USE CODE: SUMMER SALE",
    "OUR BIGGEST SALE YET 50% OF ALL SUMMER SHOES",
  ];

  useEffect(() => {
    slideInterval.current = setSlideInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval.current);
  }, [slides.length]);

  return (
    <main className="headermain">
      <section className="headercontainer1">
        <article className="logoandsearchdiv">
          <div className="logo">
            <span className="logotext">Luxefeet</span>
          </div>
          <div className="search">
            <Input
              className="headerinput"
              placeholder="Search"
              suffix={
                <IoMdSearch
                  className="searchicon"
                  style={{ outline: "none" }}
                />
              }
            />
          </div>
        </article>
        <article className="navbar">
          <ul className="pagesroute">
            <li
              className={`pages ${activePage === "Home" ? "active" : ""}`}
              onClick={() => setActivePage("Home")}
            >
              HOME
            </li>
            <li
              className={`pages ${activePage === "Women" ? "active" : ""}`}
              onClick={() => setActivePage("Women")}
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
            >
              WOMEN
            </li>
            {dropDown && (
              <div
                className="dropdownshow"
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                <div className="triangle"></div>
                <ul>
                  <li>Produc Detaill</li>
                  <li>Shoping cart</li>
                  <li>Checkout</li>
                  <li>Order Complete</li>
                  <li>Wish list</li>
                </ul>
              </div>
            )}
            <li
              className={`pages ${activePage === "Details" ? "active" : ""}`}
              onClick={() => setActivePage("Details")}
            >
              DETAILS
            </li>
            <li
              className={`pages ${activePage === "Product" ? "active" : ""}`}
              onClick={() => setActivePage("Product")}
            >
              PRODUT
            </li>
          </ul>
          <div className="cart">
            <LuShoppingCart />
            <span>CART</span>
            <span>[0]</span>
          </div>
        </article>
      </section>
      <section className="headercontainer2">
        <span className="slideshow">{slides[currentSlide]}</span>
      </section>
    </main>
  );
};

export default Header;
