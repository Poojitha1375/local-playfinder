
import { Link } from "react-router-dom";
import { Search, MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-semibold tracking-tight">SportSpotter</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/events" className="text-sm font-medium transition-colors hover:text-primary">
            Events
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search size={20} />
          </Button>
          <Button variant="outline" className="rounded-full">
            Sign In
          </Button>
          <Button className="rounded-full">Register</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden rounded-full p-2 transition-colors hover:bg-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
          <nav className="flex flex-col p-6 space-y-4">
            <Link to="/" className="py-2 text-base font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/events" className="py-2 text-base font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link to="/categories" className="py-2 text-base font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/about" className="py-2 text-base font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Button variant="outline" className="w-full justify-center">Sign In</Button>
              <Button className="w-full justify-center">Register</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
