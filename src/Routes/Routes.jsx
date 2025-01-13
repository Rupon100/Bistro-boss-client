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
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../Layout/Dashboard/AddItems/AddItems";
import AdminRoute from './AdminRoute';
import ManageItems from "../Layout/Dashboard/ManageItems/ManageItems";
import UpdateItem from './../Layout/Dashboard/update/UpdateItem';
import Payment from "../Layout/Dashboard/Payment/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory/PaymentHistory";


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
      element: <Privateroute><Dashboared></Dashboared></Privateroute>,
      children: [
        // normal users route
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // admin only routes
        {
          path: 'additems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);