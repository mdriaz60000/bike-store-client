import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Logout, useCurrentUser } from "../../../redux/features/auth/authSlice";
import { Button } from "../../ui/button";



const DorpDownMenu = () => {

  const user = useAppSelector(useCurrentUser)
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(Logout())

  }
 
    return (
  <>
  
        <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
          <Button onClick={handleLogout} > <DropdownMenuItem>Logout</DropdownMenuItem></Button>
         
        </DropdownMenuContent>
      </DropdownMenu>
  </>
    );
};

export default DorpDownMenu;