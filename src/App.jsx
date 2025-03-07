import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import First from "./routes/First";
import Home from "./pages/home/Home";
import WomenCollection from "./pages/collection/WomenCollection";
import Product from "./pages/product/Product";
import Details from "./pages/details/Details";
import ShopingCart from "./pages/shopping/ShopingCart";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "home",
      element: <First />,
      children: [
        { path: "womencollection", element: <WomenCollection /> },
        { path: "product", element: <Product /> },
        { path: "details", element: <Details /> },
        { path: "shopingcart", element: <ShopingCart /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
  ]);
  return (
    <div className="main">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
