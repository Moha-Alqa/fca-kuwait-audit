
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-white">{t("navbar.financialCenter")}</span>{" "}
              <span className="text-amber-400">{t("navbar.forAuditing")}</span>
            </h3>
            <p className="text-gray-300 text-sm pr-10 rtl:pl-10 rtl:pr-0">
              {t("footer.description")}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white text-sm">{t("navbar.home")}</a></li>
              <li><a href="/#about" className="text-gray-300 hover:text-white text-sm">{t("navbar.aboutUs")}</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-white text-sm">{t("navbar.services")}</a></li>
              <li><a href="/#team" className="text-gray-300 hover:text-white text-sm">{t("navbar.ourTeam")}</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-white text-sm">{t("navbar.contact")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="ltr-numbers">{t("contact.phone1")}</span></li>
              <li><span className="ltr-numbers">{t("contact.phone2")}</span></li>
              <li className="ltr-text">contact@fcauditing.com</li>
              <li>{t("contact.addressLine1")}</li>
              <li>{t("contact.addressLine2")}</li>
              <li>{t("contact.addressLine3")}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {t("navbar.financialCenter")} {t("navbar.forAuditing")}. {t("footer.rights")}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 rtl:space-x-reverse">
              <li><a href="#" className="text-gray-400 hover:text-white">{t("footer.privacy")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t("footer.terms")}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
