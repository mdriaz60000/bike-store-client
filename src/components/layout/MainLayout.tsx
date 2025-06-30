import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import Navbar2 from "./Navbar2";



const MainLayout = () => {
    return (
        <div>
               <Navbar/> 
               <Navbar2></Navbar2>          
               <Outlet/>
               <Footer /> 

        </div>
    );
};

export default MainLayout;