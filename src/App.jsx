import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./routes/First";
import Home from "./pages/home/Home";
import WomenCollection from "./pages/collection/WomenCollection";
import Product from "./pages/product/Product";
import Details from "./pages/details/Details";
import ShopingCart from "./pages/shopping/ShopingCart";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import UserProvider from "./global/Context";
import Private from "./routes/Private";

const App = () => { 
  const routes = createBrowserRouter([
    {
      element: <First />,
      children: [
        { path: "home/womencollection", element: <WomenCollection /> },
        { path: "home/product", element: <Product /> },
        { path: "home/details", element: <Details /> },
        { path: "home/shopingcart", element: <ShopingCart /> },
      ],
    },
    {
      element: <Private />,
      children: [{ path: "home/checkout", element: <Checkout /> }],
    },
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
  ]);
  return (
    <div className="main">
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </div>
  );
};

export default App;
