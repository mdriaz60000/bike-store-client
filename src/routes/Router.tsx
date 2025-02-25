import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import BikeDetails from "../pages/BikeDetails/BikeDetails";
import RegisterForm from "../components/shared/Register/Register";
import LoginForm from "../components/shared/Login/Login";



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
                path : "/register",
                element : <RegisterForm />
            },
            {
                path : "/login",
                element : <LoginForm />
            },
            {
                path : "/details/:id",
                element : <BikeDetails/>,
                loader:()=>fetch('bike.json')
            }
        ]
    }
]) 

export default Router;
