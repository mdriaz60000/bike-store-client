import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../shared/Containeer/Containeer";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All-Bike", href: "/allBikes" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Offer", href: "/offer" },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <div className="bg-primary text-primary-foreground sticky top-0 z-10 shadow-md">
      <Container>
        <div className="flex justify-between items-center py-3">
          {/* Left: Site Name */}
          <nav className="hidden md:block">
            <p className="text-secondary-foreground font-semibold">
              Online Ecommerce Store
            </p>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Middle: Navigation Links */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-secondary-foreground hover:underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Auth Buttons */}
          {user ? (
            <nav>
              <Button
                onClick={handleLogout}
                className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Logout
              </Button>
            </nav>
          ) : (
            <nav className="flex gap-3">
              <Link to="/register">
                <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  SignUp
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  SignIn
                </Button>
              </Link>
            </nav>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden space-y-2 pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary-foreground hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar2;
