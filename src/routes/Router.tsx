import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import BikeDetails from "../pages/BikeDetails/BikeDetails";
import RegisterForm from "../components/shared/Register/Register";
import LoginForm from "../components/shared/Login/Login";
import Admin from "../pages/Dashboard/Admin/Admin";
import CreateBike from "../pages/Dashboard/CreateBike";
import AllUsers from "../pages/Dashboard/AllUsers";
import ProtectedRoute from "../components/layout/ProtectRoutes";
import Order from "../pages/Dashboard/AllOrder";
import AllBikes from "../pages/allBikes/AllBikes";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/About/About";
import BlogPage from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetils";
import OfferCard from "../pages/Offers/OfferCard";
import SearchResultsPage from "@/components/layout/SearchResultsPage";
import Message from "@/pages/Dashboard/Admin/Message";
import Overview from "@/pages/Dashboard/Overview/Overview";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : "/",
                element : <App/>
            },
            {
                path : "/allBikes",
                element : <AllBikes/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/about",
                element : <AboutUs/>
            },
            {
                path : "/offer",
                element : <OfferCard/>
            },
            {
                path : "/blog",
                element : <BlogPage/>
            },
            {
                path : "/search",
                element : <SearchResultsPage/>
            },
            {
                path : "blog/:id",
                element : <BlogDetails/>
            },
            {
                path : "/register",
                element : <RegisterForm />
            },
            {
                path : "/login",
                element : <LoginForm />
            },
            {
                path : "/details/:id",
                element :  <BikeDetails/>,
                
            },
            {
                path : "/dashboard",
                element : <ProtectedRoute> <Admin /> </ProtectedRoute> ,
                children : [
                    {
                        path : "/dashboard/create-bike",
                        element : <ProtectedRoute><CreateBike /></ProtectedRoute> 
                    },
                    {
                        path : "/dashboard/allUsers",
                        element : <AllUsers />
                    },
                    {
                        path : "/dashboard/overview",
                        element : <Overview />
                    },
                    {
                        path : "/dashboard/allOrder",
                        element: <Order></Order>
                    },
                    {
                        path : "/dashboard/message",
                        element: <Message/>
                    }
                ]
            },
           
        ]
    },
 
]) 

export default Router;
