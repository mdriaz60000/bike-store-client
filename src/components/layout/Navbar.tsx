
// import { cn } from "@/lib/utils";
import {  Bike, ShoppingCart } from "lucide-react";

import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Bike className="w-6 h-6 text-blue-600" />
          <span>Store</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>

          <Button
            className="md:hidden"
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </Button>
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
    </header>
  );
}
