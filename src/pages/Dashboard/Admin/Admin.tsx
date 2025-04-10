import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { Navigate } from 'react-router-dom';


const Admin = () => {

   
    const user = useAppSelector(useCurrentUser)
  
    if (user?.role !== "admin") {
        return <Navigate to="/login" replace={true} />  ;
    }
    return (
        <div className=" flex gap-2 p-4 border ">
            <section className="  w-64 min-h-screen border rounded-2xl text-center py-4 ">
                
                <p><Link to="/dashboard/allUsers"> All user</Link></p>
                <p> <Link to="/dashboard/create-bike"> Create bike</Link></p>
                <p> <Link to="/dashboard/create-bike"> All Orders</Link></p>
                <p> <Link to="/dashboard/create-bike">User Message </Link></p>
                
               
            </section>
            <section className=" flex-1 border rounded-2xl ">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Admin;