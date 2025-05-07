
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Financial Statement Audits",
      icon: FileText,
      description: "Comprehensive examination of financial statements to ensure accuracy and compliance with accounting standards.",
      features: [
        "In-depth analysis of financial records and statements",
        "Review for compliance with IFRS and local accounting standards",
        "Assessment of internal controls and financial reporting processes",
        "Identification and reporting of material misstatements",
        "Detailed audit reports with actionable recommendations"
      ]
    },
    {
      title: "Internal Audits",
      icon: Shield,
      description: "Evaluation of internal controls and processes to improve operational efficiency and mitigate risk.",
      features: [
        "Thorough assessment of internal control systems",
        "Identification of process inefficiencies and bottlenecks",
        "Evaluation of compliance with internal policies and procedures",
        "Risk-based approach to identify critical control weaknesses",
        "Development of practical recommendations for improvement"
      ]
    },
    {
      title: "Compliance Audits",
      icon: FileText,
      description: "Verification of adherence to laws, regulations, and internal policies to prevent legal issues.",
      features: [
        "Comprehensive review of regulatory compliance",
        "Gap analysis between current practices and regulatory requirements",
        "Assessment of compliance risk across the organization",
        "Documentation review and compliance testing",
        "Remediation planning and implementation support"
      ]
    },
    {
      title: "Risk Assessment & Management",
      icon: Shield,
      description: "Identification and analysis of potential risks to develop effective mitigation strategies.",
      features: [
        "Enterprise-wide risk assessment and prioritization",
        "Development of risk management frameworks",
        "Implementation of risk mitigation strategies",
        "Establishment of ongoing risk monitoring systems",
        "Risk reporting and governance structures"
      ]
    },
    {
      title: "Due Diligence",
      icon: FileText,
      description: "Thorough investigation of financial records and operations before major business decisions.",
      features: [
        "Comprehensive financial and operational analysis",
        "Identification of potential liabilities and risks",
        "Assessment of internal controls and compliance",
        "Evaluation of financial projections and assumptions",
        "Detailed due diligence reports for informed decision-making"
      ]
    },
    {
      title: "Specialized Industry Audits",
      icon: Users,
      description: "Customized audit solutions for specific industries with unique regulatory requirements.",
      features: [
        "Industry-specific compliance evaluations",
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
        <section className="relative bg-blue-900 text-white">
          <div className="absolute inset-0 bg-[url('https://t4.ftcdn.net/jpg/06/21/24/03/360_F_621240399_5hM5KCFFTRAZ2qB0U9tApz2SuGfEPEfZ.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative container mx-auto px-4 py-16 sm:px-6">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Our Comprehensive Audit Services
            </h1>
            <p className="mt-4 text-lg max-w-prose text-gray-200">
              Financial Center for Auditing provides a wide range of audit and assurance services 
              designed to meet the unique needs of businesses in Kuwait and beyond.
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">How We Can Help Your Business</h2>
              <p className="text-lg text-gray-700 mb-8">
                At Financial Center for Auditing, we understand that every business faces unique challenges. 
                Our team of experienced professionals delivers customized audit and assurance services 
                that provide the insights and confidence you need to make informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-900">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <service.icon className="h-6 w-6 text-blue-900" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-medium text-blue-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3" onClick={() => window.location.href = '/#contact'}>
                Contact Us Today
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
