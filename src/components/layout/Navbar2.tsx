import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../shared/Containeer/Containeer";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // Icon from lucide-react

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

  return (
    <div className="bg-primary sticky top-0 z-10">
      <Container>
        <div className="flex justify-between items-center py-3">
          {/* Left: Site Name */}
          <nav className="text-secondary hidden md:block">
            <p>Online Ecommerce Store</p>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Middle: Navigation Links */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-secondary hover:text-secondary hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Auth Buttons */}
          <nav className="flex gap-3 text-primary">
            <Link to="/register">
            <Button className="bg-secondary text-primary hover:bg-primary-foreground hover:text-primary">SignUp</Button>
            </Link>
            <Link to="/login">
            <Button className="bg-secondary text-primary hover:bg-primary-foreground hover:text-primary ">SignIn</Button>
            </Link>
            
          </nav>
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
                  className="text-secondary hover:text-secondary"
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
