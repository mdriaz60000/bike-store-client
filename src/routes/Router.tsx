import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import BikeDetails from "../pages/BikeDetails/BikeDetails";



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
                path : "/details",
                element : <BikeDetails/>
            }
        ]
    }
]) 

export default Router;
