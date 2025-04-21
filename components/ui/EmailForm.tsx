"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface EmailFormProps {
  onSubmitSuccess: () => void;
}

export const EmailForm = ({ onSubmitSuccess }: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Vennligst skriv inn e-postadressen din");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Vennligst skriv inn en gyldig e-postadresse");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Noe gikk galt ved registrering');
      }

      onSubmitSuccess();
      setEmail("");
    } catch (err) {
      setError("Noe gikk galt. Vennligst prøv igjen senere.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            placeholder="Din e-postadresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#ffe352] transition-all ${
              error ? "border-red-500" : "border-[#bb5300]/20"
            }`}
            disabled={isLoading}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1 absolute">{error}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#bb5300] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-[#bb5300]/90 transition-all transform hover:translate-x-1 shadow-md hover:shadow-lg disabled:opacity-70"
        >
          {isLoading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <>
              <span>Meld meg på</span>
              <ArrowRight size={18} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};