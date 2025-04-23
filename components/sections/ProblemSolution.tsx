import { LightbulbIcon, LeafIcon, CookingPotIcon } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#bb5300] mb-4">
            Fra rester til retter - Enklere hverdag med FeedMe
          </h2>
          <div className="w-20 h-1 bg-[#ffe352] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg text-[#bb5300]/80 mb-6">
                Hvert år kastes enorme mengder mat helt unødvendig, spesielt i husholdninger. For studenter og unge familier med en travel hverdag, fører dårlig tid og mangel på planlegging ofte til at mat glemmes i kjøleskapet og ender som svinn.
              </p>
              <p className="text-lg text-[#bb5300]/80 mb-6">
                Derfor utvikler vi FeedMe! Vår smarte app bruker kunstig intelligens til å gi deg inspirerende og personlige oppskrifter basert på ingrediensene du allerede har hjemme. Si farvel til matsvinn og stressende middagsplanlegging – FeedMe gjør det enkelt å spare både tid, penger og miljøet.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<LightbulbIcon className="h-6 w-6 text-[#ffe352]" />}
                title="Smart AI"
                description="Vårt system lærer hva du liker og gir bedre forslag over tid"
              />
              <FeatureCard 
                icon={<LeafIcon className="h-6 w-6 text-[#ffe352]" />}
                title="Miljøvennlig"
                description="Sammen reduserer vi matsvinn og gjør en forskjell"
              />
              <FeatureCard 
                icon={<CookingPotIcon className="h-6 w-6 text-[#ffe352]" />}
                title="Nybegynnervennlig"
                description="Detaljerte instruksjoner gjør alle til kokkespirer"
              />
              <FeatureCard 
                icon={<LeafIcon className="h-6 w-6 text-[#ffe352]" />}
                title="Spare penger"
                description="Bruk det du allerede har kjøpt inn"
              />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-[#ffe352]/10 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh ingredients" 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl w-48 transform rotate-3 hover:rotate-0 transition-all">
              <div className="text-sm text-[#bb5300]/70 mb-1">FeedMe foreslår:</div>
              <div className="text-[#bb5300] font-medium">Pasta med rester av kylling, brokkoli og fløtesaus</div>
            </div>
            <div className="absolute -top-8 -left-4 bg-white p-4 rounded-xl shadow-2xl w-48 transform -rotate-3 hover:rotate-0 transition-all">
              <div className="text-sm text-[#bb5300]/70 mb-1">Ingredienser:</div>
              <div className="text-[#bb5300] font-medium">Kylling, brokkoli, fløte, pasta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-[#ffe352]/30 hover:border-[#ffe352] transition-all hover:shadow-lg transform hover:-translate-y-1">
      <div className="mb-3 p-2 bg-[#bb5300]/5 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#bb5300] mb-1">{title}</h3>
      <p className="text-[#bb5300]/70 text-sm">{description}</p>
    </div>
  );
};