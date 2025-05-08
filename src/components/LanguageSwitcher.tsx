
import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative"
      title={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {language === "en" ? "Switch to Arabic" : "Switch to English"}
      </span>
      <span className="absolute -bottom-1 -right-1 text-xs font-bold">
        {language === "en" ? "AR" : "EN"}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
