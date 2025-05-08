
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Contact Hero Section */}
        <section className="relative bg-blue-900 text-white">
          <div className="absolute inset-0 bg-[url('https://t4.ftcdn.net/jpg/06/21/24/03/360_F_621240399_5hM5KCFFTRAZ2qB0U9tApz2SuGfEPEfZ.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative container mx-auto px-4 py-16 sm:px-6">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              {t("contact.title")}
            </h1>
            <p className="mt-4 text-lg max-w-prose text-gray-200">
              {t("contact.description")}
            </p>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8 md:col-span-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("footer.contactInfo")}</h2>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900 mb-1">{t("contact.phone")}</h3>
                      <p className="text-gray-700 ltr-numbers">00965 97718883</p>
                      <p className="text-gray-700 ltr-numbers">00965 98089540</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900 mb-1">{t("contact.email")}</h3>
                      <p className="text-gray-700 ltr-text">info@fcaoffice.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900 mb-1">{t("contact.address")}</h3>
                      <p className="text-gray-700">
                        Qibla - Block 14 - Abu Bakr Al Sidiq Street <br />
                        2nd Floor - Bldg. A1 - Flr 2 - Off. 203 <br />
                        Kuwait
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8">
                  <h3 className="font-medium text-blue-900 mb-3">Office Hours</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Sunday - Thursday:</span> 9:00 AM - 5:00 PM</li>
                    <li><span className="font-medium">Friday - Saturday:</span> Closed</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("contact.sendMessage")}</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            {t("contact.fullName")} *
                          </label>
                          <Input
                            id="name"
                            placeholder={t("contact.yourName")}
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            {t("contact.emailAddress")} *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("contact.yourEmail")}
                            className="w-full"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            {t("contact.phone")}
                          </label>
                          <Input
                            id="phone"
                            placeholder="Your phone number"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            placeholder="Your company"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("contact.subject")} *
                        </label>
                        <Input
                          id="subject"
                          placeholder={t("contact.howCanWeHelp")}
                          className="w-full"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("contact.message")} *
                        </label>
                        <Textarea
                          id="message"
                          placeholder={t("contact.yourMessage")}
                          className="w-full min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6">
                        {t("contact.send")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
