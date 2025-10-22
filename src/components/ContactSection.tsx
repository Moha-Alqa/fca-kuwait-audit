
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">{t("contact.title")}</h2>
          <div className="w-20 h-1 mx-auto bg-amber-600 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6 md:col-span-1">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4 rtl:space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">{t("contact.phone")}</h3>
                  <p className="text-gray-700 text-sm ltr-numbers">{t("contact.phone1")}</p>
                  <p className="text-gray-700 text-sm ltr-numbers">{t("contact.phone2")}</p>
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
                  <p className="text-gray-700 text-sm ltr-text">contact@fcauditing.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4 rtl:space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">{t("contact.address")}</h3>
                  <p className="text-gray-700 text-sm">
                    {t("contact.addressLine1")} <br />
                    {t("contact.addressLine2")} <br />
                    {t("contact.addressLine3")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">{t("contact.sendMessage")}</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("contact.fullName")}
                      </label>
                      <Input
                        id="name"
                        placeholder={t("contact.yourName")}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("contact.emailAddress")}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contact.yourEmail")}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.subject")}
                    </label>
                    <Input
                      id="subject"
                      placeholder={t("contact.howCanWeHelp")}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.yourMessage")}
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6">
                    {t("contact.send")}
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
