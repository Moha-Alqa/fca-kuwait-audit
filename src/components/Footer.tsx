
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Center for Auditing</h3>
            <p className="text-gray-300 text-sm pr-10">
              Your trusted partner in audit and assurance services, providing comprehensive 
              and reliable auditing solutions to clients in Kuwait and beyond.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white text-sm">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white text-sm">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Phone: 00965 97718883 / 00965 98089540</li>
              <li>Email: info@fcaoffice.com</li>
              <li>Address: Qibla - Block 14 - Abu Bakr Al Sidiq Street, 2nd Floor</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Financial Center for Auditing. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
