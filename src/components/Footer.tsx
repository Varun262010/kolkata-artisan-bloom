import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Artisan Connect</h3>
                <p className="text-xs text-muted-foreground">Kolkata's Artists</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting local artisans with conscious consumers. Celebrating tradition, supporting sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">For Artists</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sell" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Seller Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <Link to="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: hello@artisanconnect.in<br />
              Based in Kolkata, West Bengal
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Artisan Connect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
