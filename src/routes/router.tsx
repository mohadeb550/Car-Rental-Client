import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import ManageCars from "../components/Dashboard/pages/ManageCars";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import Booking from "../pages/Booking";
import ManageBooking from "../components/Dashboard/pages/ManageBooking";
import MyBooking from "../components/Dashboard/pages/MyBookings";
import AboutUs from "../pages/AboutUs";
import ManageReturnCars from "../components/Dashboard/pages/ManageReturnCars";
import ManageUsers from "../components/Dashboard/pages/ManageUsers";
import UserOverview from "../components/Dashboard/pages/UserOverview";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage />,
      },
    {
        path : '/',
        element : <Root/> ,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cars/:carId',
                element: <CarDetails/>
            },
            {
                path: '/booking/:carId',
                element: <Booking/>
            },
            {
                path: '/cars',
                element: <Cars/>
            },
            // {
            //     path: '/checkout',
            //     element: <Checkout/>
            // },
            {
                path: '/order-successful',
                element: <OrderSuccessPage/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
            // authentication 
            {
                path : '/sign-up',
                element : <SignUp/> ,
            },
            {
                path : '/login',
                element : <Login/> ,
            },
        ]
    },
    // dashboard 

    {path: "/dashboard", element:  <Dashboard/>, children: [

        {path: "manage-cars", element: <ManageCars/> },
        {path: "manage-bookings", element: <ManageBooking/> },
        {path: "my-bookings", element: <MyBooking/> },
        {path: "manage-return-cars", element: <ManageReturnCars/> },
        {path: "manage-users", element: <ManageUsers/> },
        {path: "user-overview", element: <UserOverview/> },
    ]},
])