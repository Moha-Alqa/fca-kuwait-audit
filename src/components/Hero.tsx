
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('https://t4.ftcdn.net/jpg/06/21/24/03/360_F_621240399_5hM5KCFFTRAZ2qB0U9tApz2SuGfEPEfZ.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          Your Trusted Partner in Financial Excellence
        </h1>
        <p className="mt-6 text-xl max-w-prose text-gray-200">
          Financial Center for Auditing delivers comprehensive audit and assurance services 
          with the highest standards of integrity and professionalism in Kuwait and beyond.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
            Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
