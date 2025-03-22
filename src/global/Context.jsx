import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";

export const UserContext = createContext();
export const useConstomHook = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    const id = product._id;
    const goods = "quantity";
    if (cart.find((Item) => Item._id === id)) {
      cart.map((int) => {
        if (int._id === id) {
          int = { ...int, [goods]: int.quantity++ };
          return int;
        } else {
          return int;
        }
      });
    } else {
      setCart((prev) => [...prev, { ...product, [goods]: 1 }]);
    }
  };
  const deleteFromCart = (product) => {
    const id = product._id;
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item._id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };
  console.log("this is shoping cart", cart);
  const baseUrl = "https://ecommerce-project-m2bb.onrender.com/api/v1";

  const getAllProduct = async (setState) => {
    try {
      const response = await axios.get(`${baseUrl}/getAllProducts`);
      setState(response.data.data);
    } catch (error) {
      console.log("unable to get", error);
    }
  };

  useEffect(() => {
    // fetchProduct();
    getAllProduct(setProducts);
  }, []);
  console.log(products);

  return (
    <UserContext.Provider
      value={{
        user,
        cart,
        addToCart,
        loading,
        setLoading,
        getAllProduct,
        products,
        setProducts,
        deleteFromCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
