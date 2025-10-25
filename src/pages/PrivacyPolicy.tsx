import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#0A5F6E] mb-8 text-center">
            {t("privacy.title")}
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.intro.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("privacy.intro.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.collection.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                {t("privacy.collection.content")}
              </p>
              <ul className="list-disc list-inside text-[#475569] space-y-2 rtl:list-none rtl:mr-4">
                <li>{t("privacy.collection.item1")}</li>
                <li>{t("privacy.collection.item2")}</li>
                <li>{t("privacy.collection.item3")}</li>
                <li>{t("privacy.collection.item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.usage.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                {t("privacy.usage.content")}
              </p>
              <ul className="list-disc list-inside text-[#475569] space-y-2 rtl:list-none rtl:mr-4">
                <li>{t("privacy.usage.item1")}</li>
                <li>{t("privacy.usage.item2")}</li>
                <li>{t("privacy.usage.item3")}</li>
                <li>{t("privacy.usage.item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.protection.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("privacy.protection.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.disclosure.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("privacy.disclosure.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.rights.title")}
              </h2>
              <ul className="list-disc list-inside text-[#475569] space-y-2 rtl:list-none rtl:mr-4">
                <li>{t("privacy.rights.item1")}</li>
                <li>{t("privacy.rights.item2")}</li>
                <li>{t("privacy.rights.item3")}</li>
                <li>{t("privacy.rights.item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A5F6E] mb-4">
                {t("privacy.contact.title")}
              </h2>
              <p className="text-[#475569] leading-relaxed">
                {t("privacy.contact.content")}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
