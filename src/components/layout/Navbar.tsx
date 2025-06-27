// import { cn } from "@/lib/utils";
import { Bike } from "lucide-react";

import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import DorpDownMenu from "../shared/DorpDownMenu/DorpDownMenu";
import { OrderCart } from "../shared/Dialog/Dalog";
import Container from "../shared/Containeer/Containeer";



const navLinks = [
  { name: "Home", href: "/" },
  { name: "All-Bike", href: "/allBikes" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Offer", href: "/offer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
         <header className="bg-white shadow-md sticky top-0 z-50">
          <Container>
      <div className=" flex items-center justify-between py-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Bike className="w-6 h-6 text-primary" />
          <span className=" text-primary">Bike Store</span>
        </div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="default" size="icon">
          <OrderCart></OrderCart>
            
            </Button>

          <Button
            className="md:hidden"
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </Button>
          
          <ModeToggle />
 
        <DorpDownMenu />
          
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}

       </Container>
    </header>
   
 
  );
}
