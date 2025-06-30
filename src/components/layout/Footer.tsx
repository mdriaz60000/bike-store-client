import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "../shared/Containeer/Containeer";



export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12 mt-16">
      <Container>
        {/* Grid for Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              We are passionate about bikes and aim to provide the best products and services for all cycling enthusiasts.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Shop</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button  className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                <FaFacebook size={24} />
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                <FaTwitter size={24} />
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                <FaInstagram size={24} />
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bike Store. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}