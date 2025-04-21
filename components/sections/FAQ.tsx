"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Når lanseres FeedMe?",
      answer: "Vi planlegger lanseringen i tredje kvartal 2025. Registrer deg for ventelisten for å være blant de første som får tilgang!"
    },
    {
      question: "Hvordan fungerer FeedMe?",
      answer: "FeedMe bruker kunstig intelligens for å analysere ingrediensene du har tilgjengelig og foreslår oppskrifter du kan lage. Du kan også angi preferanser og allergier for mer personlige forslag."
    },
    {
      question: "Må jeg legge inn alle ingrediensene manuelt?",
      answer: "Nei, FeedMe lar deg skanne kvitteringer og importere handlelister. Du kan også ta bilde av kjøleskapet ditt, og vår AI vil hjelpe med å identifisere ingrediensene."
    },
    {
      question: "Er FeedMe gratis å bruke?",
      answer: "FeedMe vil tilby både en gratis basisversjon med begrenset funksjonalitet og en premium versjon med flere funksjoner. Nøyaktig prismodell vil bli annonsert nærmere lansering."
    },
    {
      question: "Hvordan hjelper FeedMe meg å spare penger?",
      answer: "Ved å bruke ingrediensene du allerede har, unngår du å kjøpe nye ingredienser eller bestille takeaway. Appens måltidsplanlegger hjelper deg også med å handle smartere."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#ffe352]/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#bb5300] mb-4">
            Ofte stilte spørsmål
          </h2>
          <div className="w-20 h-1 bg-[#ffe352] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-[#bb5300]">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 text-[#bb5300]">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-[#bb5300]/80">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};