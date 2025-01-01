import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Home/Menu";
import Order from "../pages/OrderFood/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Privateroute from "./Privateroute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboared from "../Layout/Dashboard/Dashboared";
import Cart from "../pages/Dashboard/Cart";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/secret',
          element: <Privateroute><Secret></Secret></Privateroute>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboared></Dashboared>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);