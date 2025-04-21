"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { EmailForm } from "../ui/EmailForm";

export const CallToAction = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 px-4 bg-[#ffe352]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#bb5300] mb-6">
          {submitted 
            ? "Takk for din påmelding!" 
            : "Klar til å slutte å kaste mat?"}
        </h2>
        
        {submitted ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#bb5300] mb-2">Du er på ventelisten!</h3>
            <p className="text-[#bb5300]/80 mb-6">
              Vi gleder oss til å gi deg tilgang til FeedMe. 
              Vi sender deg en e-post når appen er klar til lansering.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center text-[#bb5300] hover:text-[#bb5300]/80"
              >
                <span>Meld på en venn også</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-xl text-[#bb5300]/80 mb-8 max-w-2xl mx-auto">
              Bli med på ventelisten vår i dag og bli blant de første som får teste FeedMe når vi lanserer!
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl max-w-lg mx-auto">
              <EmailForm onSubmitSuccess={() => setSubmitted(true)} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};