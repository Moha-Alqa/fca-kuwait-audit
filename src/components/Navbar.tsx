
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavLinkClick = () => {
    // Close mobile menu when a link is clicked
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Financial Center Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-navy-700">
              <span className="text-[#0A5F6E]">{t("navbar.financialCenter")}</span>{" "}
              <span className="text-[#D4AF37]">{t("navbar.forAuditing")}</span>
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-[#475569] hover:text-[#0A5F6E]">
            {t("navbar.home")}
          </Link>
          <a href="/#about" className="text-sm font-medium text-[#475569] hover:text-[#0A5F6E]">
            {t("navbar.aboutUs")}
          </a>
          <a href="/#services" className="text-sm font-medium text-[#475569] hover:text-[#0A5F6E]">
            {t("navbar.services")}
          </a>
          <a href="/#team" className="text-sm font-medium text-[#475569] hover:text-[#0A5F6E]">
            {t("navbar.ourTeam")}
          </a>
          <a href="/#contact" className="text-sm font-medium text-[#475569] hover:text-[#0A5F6E]">
            {t("navbar.contact")}
          </a>
          <LanguageSwitcher />
          <Button className="bg-[#D4AF37] hover:bg-[#B8962F]" asChild>
            <a href="/#contact">{t("navbar.getInTouch")}</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
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
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              {t("navbar.home")}
            </Link>
            <a
              href="/#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              {t("navbar.aboutUs")}
            </a>
            <a
              href="/#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              {t("navbar.services")}
            </a>
            <a
              href="/#team"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              {t("navbar.ourTeam")}
            </a>
            <a
              href="/#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              {t("navbar.contact")}
            </a>
            <div className="pt-2">
              <Button className="w-full bg-[#D4AF37] hover:bg-[#B8962F]" asChild>
                <a href="/#contact" onClick={handleNavLinkClick}>{t("navbar.getInTouch")}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
