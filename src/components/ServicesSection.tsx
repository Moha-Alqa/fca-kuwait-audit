
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t("services.financial.title"),
      description: t("services.financial.description"),
      items: [
        t("services.financial.item1"),
        t("services.financial.item2"),
        t("services.financial.item3"),
        t("services.financial.item4")
      ]
    },
    {
      title: t("services.internal.title"),
      description: t("services.internal.description"),
      items: [
        t("services.internal.item1"),
        t("services.internal.item2"),
        t("services.internal.item3"),
        t("services.internal.item4")
      ]
    },
    {
      title: t("services.compliance.title"),
      description: t("services.compliance.description"),
      items: [
        t("services.compliance.item1"),
        t("services.compliance.item2"),
        t("services.compliance.item3"),
        t("services.compliance.item4")
      ]
    },
    {
      title: t("services.risk.title"),
      description: t("services.risk.description"),
      items: [
        t("services.risk.item1"),
        t("services.risk.item2"),
        t("services.risk.item3"),
        t("services.risk.item4")
      ]
    },
    {
      title: t("services.dueDiligence.title"),
      description: t("services.dueDiligence.description"),
      items: [
        t("services.dueDiligence.item1"),
        t("services.dueDiligence.item2"),
        t("services.dueDiligence.item3"),
        t("services.dueDiligence.item4")
      ]
    },
    {
      title: t("services.specialized.title"),
      description: t("services.specialized.description"),
      items: [
        t("services.specialized.item1"),
        t("services.specialized.item2"),
        t("services.specialized.item3"),
        t("services.specialized.item4")
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">{t("services.title")}</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 border-t-blue-900 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5 rtl:ml-2 rtl:mr-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
