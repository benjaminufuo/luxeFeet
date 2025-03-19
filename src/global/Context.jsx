import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const UserContext = createContext();
export const useConstomHook = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failed to parse user data", error);
        localStorage.removeItem("user");
      }
    }

    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failed to parse user data", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const saveUser = (userDetails) => {
    if (userDetails && typeof userDetails === "object") {
      localStorage.setItem("user", JSON.stringify(userDetails));
      setUser(userDetails);
    } else {
      console.error("Invalid user details", userDetails);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, saveUser, logoutUser, cart, addToCart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
