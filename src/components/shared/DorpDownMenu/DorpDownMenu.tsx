import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Logout, useCurrentUser } from "../../../redux/features/auth/authSlice";
import { LayoutDashboardIcon } from "lucide-react";


interface TUser {
  role?: string;
  name?: string;
 
}

const DorpDownMenu = () => {

  const user : TUser | null = useAppSelector(useCurrentUser)
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(Logout())

  }
    return (
  <>

        <DropdownMenu>
        <DropdownMenuTrigger >

          <LayoutDashboardIcon></LayoutDashboardIcon>
          
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/login">Login</Link>
          </DropdownMenuItem>
          {
            user?.role === "admin" ?(
            <DropdownMenuItem>
            <Link to="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
            ) : (
              <div className=" hidden"></div>
            )
          }
          {
            user?.role === "user" ?(
            <DropdownMenuItem>
            {user?.name}
          </DropdownMenuItem>
            ) : (
              <div className=" hidden"></div>
            )
          }
             <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
         
        </DropdownMenuContent>
      </DropdownMenu>
  </>
    );
};

export default DorpDownMenu;