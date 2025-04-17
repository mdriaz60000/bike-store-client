import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { Navigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  PlusCircle,
  ShoppingCart,
  MessageSquare,
  LogOut,
  Menu
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui//sheet";

interface User {
  role?: string;
  name?: string;
  image?: string;
}

const Admin = () => {
  const user: User | null = useAppSelector(useCurrentUser);

  if (user?.role !== "admin") {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 border-r bg-muted/40">
        <div className="flex h-16 items-center px-4 border-b">
          <h1 className="text-xl font-semibold text-primary">Admin Dashboard</h1>
        </div>
        <div className="flex-1 p-4 space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </Link>
          <Link
            to="/dashboard/allUsers"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Users className="h-4 w-4" />
            All Users
          </Link>
          <Link
            to="/dashboard/create-bike"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <PlusCircle className="h-4 w-4" />
            Create Bike
          </Link>
          <Link
            to="/dashboard/allOrder"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ShoppingCart className="h-4 w-4" />
            All Orders
          </Link>
          <Link
            to="/dashboard/messages"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <MessageSquare className="h-4 w-4" />
            Messages
          </Link>
        </div>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden flex h-14 items-center gap-4 border-b bg-muted/40 px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0">
            <div className="flex h-14 items-center border-b px-4">
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex-1 p-2 space-y-1">
              <Link
                to="/dashboard"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <LayoutDashboard className="h-4 w-4" />
                Overview
              </Link>
              <Link
                to="/dashboard/allUsers"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Users className="h-4 w-4" />
                All Users
              </Link>
              <Link
                to="/dashboard/create-bike"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <PlusCircle className="h-4 w-4" />
                Create Bike
              </Link>
              <Link
                to="/dashboard/allOrder"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <ShoppingCart className="h-4 w-4" />
                All Orders
              </Link>
              <Link
                to="/dashboard/messages"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <MessageSquare className="h-4 w-4" />
                Messages
              </Link>
            </div>
            <div className="p-2 border-t">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback>
            {user?.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </header>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <div className="hidden lg:flex h-14 items-center gap-4 border-b bg-muted/40 px-4">
          <div className="ml-auto">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.image} alt={user?.name} />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;