
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t("services.financial.title"),
      icon: FileText,
      description: t("services.financial.description"),
      features: [
        t("services.financial.item1"),
        "Review for compliance with IFRS and local accounting standards",
        "Assessment of internal controls and financial reporting processes",
        "Identification and reporting of material misstatements",
        "Detailed audit reports with actionable recommendations"
      ]
    },
    {
      title: t("services.internal.title"),
      icon: Shield,
      description: t("services.internal.description"),
      features: [
        t("services.internal.item1"),
        "Identification of process inefficiencies and bottlenecks",
        "Evaluation of compliance with internal policies and procedures",
        "Risk-based approach to identify critical control weaknesses",
        "Development of practical recommendations for improvement"
      ]
    },
    {
      title: t("services.compliance.title"),
      icon: FileText,
      description: t("services.compliance.description"),
      features: [
        t("services.compliance.item1"),
        "Gap analysis between current practices and regulatory requirements",
        "Assessment of compliance risk across the organization",
        "Documentation review and compliance testing",
        "Remediation planning and implementation support"
      ]
    },
    {
      title: t("services.risk.title"),
      icon: Shield,
      description: t("services.risk.description"),
      features: [
        t("services.risk.item1"),
        "Development of risk management frameworks",
        "Implementation of risk mitigation strategies",
        "Establishment of ongoing risk monitoring systems",
        "Risk reporting and governance structures"
      ]
    },
    {
      title: t("services.dueDiligence.title"),
      icon: FileText,
      description: t("services.dueDiligence.description"),
      features: [
        t("services.dueDiligence.item1"),
        "Identification of potential liabilities and risks",
        "Assessment of internal controls and compliance",
        "Evaluation of financial projections and assumptions",
        "Detailed due diligence reports for informed decision-making"
      ]
    },
    {
      title: t("services.specialized.title"),
      icon: Users,
      description: t("services.specialized.description"),
      features: [
        t("services.specialized.item1"),
        "Specialized audit procedures for regulated sectors",
        "In-depth knowledge of industry standards and best practices",
        "Customized audit approaches for different business models",
        "Sector-specific reporting and recommendations"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative bg-[#0A5F6E] text-white">
          <div className="absolute inset-0 bg-[url('https://t4.ftcdn.net/jpg/06/21/24/03/360_F_621240399_5hM5KCFFTRAZ2qB0U9tApz2SuGfEPEfZ.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative container mx-auto px-4 py-16 sm:px-6">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              {t("services.title")}
            </h1>
            <p className="mt-4 text-lg max-w-prose text-gray-200">
              {t("services.description")}
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A5F6E] mb-6 text-center">How We Can Help Your Business</h2>
              <p className="text-lg text-[#475569] mb-8">
                At Financial Center for Auditing, we understand that every business faces unique challenges. 
                Our team of experienced professionals delivers customized audit and assurance services 
                that provide the insights and confidence you need to make informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-[#0A5F6E]">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 rtl:flex-row-reverse rtl:text-right">
                      <div className="bg-[#E6F3F5] p-3 rounded-full mr-4 rtl:ml-4 rtl:mr-0">
                        <service.icon className="h-6 w-6 text-[#0A5F6E]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0A5F6E]">{service.title}</h3>
                    </div>
                    <p className="text-[#475569] mb-6">{service.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-medium text-[#0A5F6E] mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start rtl:flex-row-reverse">
                            <Check className="h-5 w-5 text-[#10B981] mr-2 rtl:ml-2 rtl:mr-0 shrink-0 mt-0.5" />
                            <span className="text-[#475569]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="bg-[#D4AF37] hover:bg-[#B8962F] text-white px-6 py-3" onClick={() => window.location.href = '/#contact'}>
                {t("navbar.contact")}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
