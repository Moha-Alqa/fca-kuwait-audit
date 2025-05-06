
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-navy-700">
              <span className="text-blue-900">Financial Center</span>{" "}
              <span className="text-amber-600">for Auditing</span>
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-900">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-900">
            About Us
          </a>
          <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-900">
            Services
          </a>
          <a href="#team" className="text-sm font-medium text-gray-700 hover:text-blue-900">
            Our Team
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-900">
            Contact
          </a>
          <Button className="bg-amber-600 hover:bg-amber-700">Get In Touch</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b shadow-lg">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#team"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Get In Touch</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
