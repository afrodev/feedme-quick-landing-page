import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#ffe352]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="rounded-full bg-[#ffe352] p-2 mr-2">
                <Utensils className="h-6 w-6 text-[#bb5300]" />
              </div>
              <span className="text-xl font-bold text-[#bb5300]">FeedMe</span>
            </div>
            <p className="text-sm text-[#bb5300]/70 mt-2 md:max-w-xs">
              Reduser matsvinn og opplev nye smaksopplevelser med vår AI-drevne matplanlegger.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#bb5300] mb-3">Kontakt</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:hei@feedme.no" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    hei@feedme.no
                  </a>
                </li>
                <li className="text-[#bb5300]/70">Oslo, Norge</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-[#bb5300] mb-3">Selskap</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    Om oss
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    Jobb hos oss
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    Presse
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-[#bb5300] mb-3">Juridisk</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    Personvern
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    Vilkår
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#ffe352]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#bb5300]/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} FeedMe. Alle rettigheter reservert.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-[#bb5300]/70 hover:text-[#bb5300]">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Utensils = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
    </svg>
  );
};