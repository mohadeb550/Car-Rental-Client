import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../pages/Home";
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
import AdminOverview from "../components/Dashboard/pages/AdminOverview";
import UserProtected from "./UserProtected";
import AdminProtected from "./AdminProtected";
import LoginProtected from "./LoginProtected";


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
                element: <LoginProtected> <Booking/> </LoginProtected>
                    
                    
            },
            {
                path: '/cars',
                element: <Cars/>
            },
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

        // for admin
        {path: "manage-cars", element: <AdminProtected> <ManageCars/></AdminProtected> },
        {path: "manage-bookings", element: <AdminProtected> <ManageBooking/></AdminProtected> },
        {path: "manage-return-cars", element: <AdminProtected> <ManageReturnCars/></AdminProtected> },
        {path: "manage-users", element: <AdminProtected> <ManageUsers/></AdminProtected> },
        {path: "admin-overview", element: <AdminProtected> <AdminOverview/></AdminProtected> },

// for user 
        {path: "my-bookings", element: <UserProtected>  <MyBooking/></UserProtected> },
        {path: "user-overview", element: <UserProtected>  <UserOverview/> </UserProtected>},
    ]},
])