
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">Our Leadership</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the experienced professionals leading Financial Center for Auditing, 
            bringing decades of expertise to serve our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Managing Partner */}
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-1">Mrs. Laila Alqahtani</h3>
              <p className="text-amber-600 font-medium mb-4">Managing Partner</p>
              <p className="text-gray-700 text-sm mb-4">
                With over 40 years of industry experience, Mrs. Alqahtani brings unparalleled expertise 
                to Financial Center for Auditing, ensuring the highest level of service and professionalism 
                for our clients.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Career Highlights:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Two years at the General Authority for Industry</li>
                  <li>• 22-year tenure in the petrochemical industry</li>
                  <li>• 12 years as a judicial guard at the Supreme Court</li>
                  <li>• Certified accounting auditor since 2002</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Audit & Assurance Partner */}
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-1">Ahmed Yahia</h3>
              <p className="text-amber-600 font-medium mb-4">Audit & Assurance Partner</p>
              <p className="text-gray-700 text-sm mb-4">
                Ahmed Yahia brings 15 years of experience from RSM Kuwait, where he acquired invaluable 
                knowledge and skills in the field of auditing. With a passion for delivering excellence, 
                he is committed to upholding the highest standards of quality and integrity.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Expertise:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Financial statement audits</li>
                  <li>• Risk assessment and management</li>
                  <li>• Compliance and regulatory auditing</li>
                  <li>• Industry-specific auditing solutions</li>
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
