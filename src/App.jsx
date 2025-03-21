import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./routes/First";
import Home from "./pages/home/Home";
import WomenCollection from "./pages/collection/WomenCollection";
import Product from "./pages/product/Product";
import ShopingCart from "./pages/shopping/ShopingCart";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import UserProvider from "./global/Context";
import Private from "./routes/Private";
import Profile from "./pages/profile/Profile";
import Forgetpassword from "./pages/forgetPassword/Forgetpassword";
import Resetpassword from "./pages/resetPassword/Resetpassword";

const App = () => {
  const routes = createBrowserRouter([
    {
      element: <First />,
      children: [
        { path: "home/womencollection", element: <WomenCollection /> },
        { path: "home/product", element: <Product /> },
        { path: "home/shopingcart", element: <ShopingCart /> },
      ],
    },
    {
      element: <Private />,
      children: [
        { path: "home/checkout", element: <Checkout /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "forgetpassword", element: <Forgetpassword /> },
    { path: "resetpassword/:token", element: <Resetpassword /> },
    { path: "*", element: <Home /> },
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
