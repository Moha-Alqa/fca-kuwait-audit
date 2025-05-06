
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">Contact Us</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Get in touch with Financial Center for Auditing. Our team is ready to assist 
            you with any inquiries and provide the support you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6 md:col-span-1">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Phone</h3>
                  <p className="text-gray-700 text-sm">00965 97718883</p>
                  <p className="text-gray-700 text-sm">00965 98089540</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Email</h3>
                  <p className="text-gray-700 text-sm">info@fcaoffice.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Address</h3>
                  <p className="text-gray-700 text-sm">
                    Qibla - Block 14 - Abu Bakr Al Sidiq Street <br />
                    2nd Floor - Bldg. A1 - Flr 2 - Off. 203 <br />
                    Kuwait
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
