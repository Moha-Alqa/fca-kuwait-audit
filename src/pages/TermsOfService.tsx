import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#0A5F6E] mb-8 text-center">
            {t("terms.title")}
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.intro.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.intro.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.services.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.services.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.engagement.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                {t("terms.engagement.content")}
              </p>
              <ul className="list-disc list-inside text-[#475569] space-y-2 rtl:list-none rtl:mr-4">
                <li>{t("terms.engagement.item1")}</li>
                <li>{t("terms.engagement.item2")}</li>
                <li>{t("terms.engagement.item3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.client.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                {t("terms.client.content")}
              </p>
              <ul className="list-disc list-inside text-[#475569] space-y-2 rtl:list-none rtl:mr-4">
                <li>{t("terms.client.item1")}</li>
                <li>{t("terms.client.item2")}</li>
                <li>{t("terms.client.item3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.fees.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.fees.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.confidentiality.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.confidentiality.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.liability.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.liability.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.termination.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.termination.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("terms.governing.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("terms.governing.content")}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
