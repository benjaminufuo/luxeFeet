import React, { useState, useEffect } from "react";
import "./cssComponent/header.css";
import { IoMdSearch } from "react-icons/io";
import { Input } from "antd";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState("");
  const [activePage, setActivePage] = useState("Home");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "25% OFF (ALMOST) EVERYTHING! USE CODE: SUMMER SALE",
    "OUR BIGGEST SALE YET 50% OF ALL SUMMER SHOES",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
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
              onClick={() => {
                setActivePage("Home");
                navigate("/");
              }}
            >
              HOME
            </li>
            <li
              className={`pages ${activePage === "Women" ? "active" : ""}`}
              onClick={() => {
                setActivePage("Women");
                navigate("/home/womencollection");
              }}
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
                  <li onClick={() => navigate("/home/product")}>
                    Product Detaill
                  </li>
                  <li onClick={() => navigate("/home/shopingcart")}>
                    Shoping cart
                  </li>
                  <li onClick={() => navigate("home/checkout")}>Checkout</li>
                  <li>Order Complete</li>
                  <li onClick={() => navigate("login")}>Login</li>
                </ul>
              </div>
            )}
            <li
              className={`pages ${activePage === "Product" ? "active" : ""}`}
              onClick={() => {
                setActivePage("Product");
                navigate("/home/product");
              }}
            >
              PRODUT DETAILS
            </li>
          </ul>
          <div className="cart" onClick={() => navigate("/home/shopingcart")}>
            <LuShoppingCart />
            <span className="carttext">CART</span>
            <span>[0]</span>
          </div>
        </article>
      </section>
      <section className="headercontainer2">
        {slides.map((text, index) => (
          <span
            key={index}
            className={`slideshow ${
              index === currentSlide ? "active-slide" : ""
            }`}
          >
            {text}
          </span>
        ))}
      </section>
    </main>
  );
};

export default Header;
