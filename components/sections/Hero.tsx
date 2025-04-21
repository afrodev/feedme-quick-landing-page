"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { EmailForm } from "../ui/EmailForm";

export const Hero = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-[#ffe352]/90 to-[#ffe352]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#bb5300] mb-6 leading-tight">
                Lei av å kaste mat (og penger)?
              </h1>
              <p className="text-xl md:text-2xl text-[#bb5300]/90 mb-8 max-w-xl">
                Snart lanseres appen som hjelper deg spare tid, penger og redusere matsvinn ved å bruke maten du allerede har.
              </p>
              
              <div className="mb-8">
                <ul className="space-y-3">
                  {[
                    "Spar penger på matbudsjettet",
                    "Reduser matsvinnet ditt",
                    "Få ny inspirasjon til middag"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-[#bb5300]/80">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#bb5300]/20 mr-3">
                        <Check size={14} className="text-[#bb5300]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-[#bb5300] mb-3">
                  {submitted 
                    ? "Takk for din interesse!" 
                    : "Få beskjed først når vi lanserer!"}
                </h3>
                <EmailForm onSubmitSuccess={() => setSubmitted(true)} />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl bg-white/80 backdrop-blur-sm shadow-2xl overflow-hidden transform md:rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="FeedMe App Preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#bb5300]/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">FeedMe</h3>
                    <p className="text-sm opacity-90">Smart oppskrifter basert på ditt kjøleskap</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-10 bg-[#ffe352] rounded-full p-4 shadow-lg transform rotate-12 hover:rotate-6 transition-all duration-300">
                <ArrowRight size={32} className="text-[#bb5300]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};