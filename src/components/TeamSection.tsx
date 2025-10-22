
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">{t("team.title")}</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t("team.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Managing Partner */}
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-1">{t("team.partner1.name")}</h3>
              <p className="text-amber-600 font-medium mb-4">{t("team.partner1.position")}</p>
              <p className="text-gray-700 text-sm mb-4">
                {t("team.partner1.description")}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">{t("team.partner1.highlights")}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• {t("team.partner1.highlight1")}</li>
                  <li>• {t("team.partner1.highlight2")}</li>
                  <li>• {t("team.partner1.highlight3")}</li>
                  <li>• {t("team.partner1.highlight4")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Audit & Assurance Partner */}
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-1">{t("team.partner2.name")}</h3>
              <p className="text-amber-600 font-medium mb-4">{t("team.partner2.position")}</p>
              <p className="text-gray-700 text-sm mb-4">
                {t("team.partner2.description")}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">{t("team.partner2.expertise")}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• {t("team.partner2.expertise1")}</li>
                  <li>• {t("team.partner2.expertise2")}</li>
                  <li>• {t("team.partner2.expertise3")}</li>
                  <li>• {t("team.partner2.expertise4")}</li>
                  <li>• {t("team.partner2.expertise5")}</li>
                  <li>• {t("team.partner2.expertise6")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
