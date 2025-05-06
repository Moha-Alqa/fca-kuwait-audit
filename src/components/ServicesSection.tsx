
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Financial Statement Audits",
      description: "Comprehensive examination of financial statements to ensure accuracy and compliance with accounting standards.",
      items: [
        "In-depth analysis of financial records",
        "Compliance with IFRS and local accounting standards",
        "Identification of potential financial risks",
        "Detailed audit reports with recommendations"
      ]
    },
    {
      title: "Internal Audits",
      description: "Evaluation of internal controls and processes to improve operational efficiency and mitigate risk.",
      items: [
        "Assessment of internal control systems",
        "Identification of process inefficiencies",
        "Recommendations for operational improvements",
        "Risk management strategies"
      ]
    },
    {
      title: "Compliance Audits",
      description: "Verification of adherence to laws, regulations, and internal policies to prevent legal issues.",
      items: [
        "Review of regulatory compliance",
        "Policy and procedure assessment",
        "Compliance risk evaluation",
        "Remediation planning and support"
      ]
    },
    {
      title: "Risk Assessment & Management",
      description: "Identification and analysis of potential risks to develop effective mitigation strategies.",
      items: [
        "Comprehensive risk assessments",
        "Risk prioritization frameworks",
        "Mitigation strategy development",
        "Ongoing risk monitoring systems"
      ]
    },
    {
      title: "Due Diligence",
      description: "Thorough investigation of financial records and operations before major business decisions.",
      items: [
        "Detailed financial analysis",
        "Operations and process review",
        "Identification of potential liabilities",
        "Investment risk assessment"
      ]
    },
    {
      title: "Specialized Audits",
      description: "Customized audit solutions for specific industries or unique business requirements.",
      items: [
        "Industry-specific compliance checks",
        "Special purpose financial statements",
        "IT systems and security audits",
        "Fraud investigation and prevention"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">Our Services</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            At Financial Center for Auditing, we offer a comprehensive range of audit and assurance services 
            tailored to meet the specific needs of each client.
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
                      <Check className="h-5 w-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
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
