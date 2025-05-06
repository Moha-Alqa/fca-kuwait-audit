
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">About Us</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Welcome to Financial Center for Auditing, your trusted partner in audit and assurance services. 
            Our firm is dedicated to providing comprehensive and reliable auditing solutions to clients in 
            Kuwait and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Commitment</h3>
            <p className="text-gray-700 mb-6">
              At Financial Center for Auditing, we're committed to delivering exceptional audit and assurance 
              services that help our clients navigate complex financial landscapes with confidence. With decades 
              of combined experience, our team provides insights that drive strategic decision-making and ensure 
              regulatory compliance.
            </p>
            <p className="text-gray-700">
              We believe in building lasting relationships with our clients, understanding their unique challenges, 
              and providing tailored solutions that add real value to their businesses. Our approach combines technical 
              expertise with industry knowledge, ensuring that we deliver results that exceed expectations.
            </p>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Professional audit team working" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full mb-5 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-center mb-2">Expertise</h4>
                <p className="text-gray-600 text-center">
                  Led by professionals with over 40 years of combined experience in various sectors, 
                  ensuring high-quality auditing services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 flex items-center justify-center rounded-full mb-5 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-center mb-2">Integrity</h4>
                <p className="text-gray-600 text-center">
                  We uphold the highest ethical standards and provide unbiased, transparent 
                  assessments for every client.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full mb-5 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-center mb-2">Personalized Approach</h4>
                <p className="text-gray-600 text-center">
                  We tailor our services to meet the specific needs of each client, delivering 
                  customized solutions that drive success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
