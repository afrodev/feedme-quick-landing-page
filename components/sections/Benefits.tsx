import { CheckCircle2, Clock, CreditCard, Utensils } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#ffe352]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#bb5300] mb-4">
            Hvorfor bruke FeedMe?
          </h2>
          <p className="text-lg text-[#bb5300]/70 max-w-2xl mx-auto">
            Vår app gjør det enkelt å få mest mulig ut av maten du allerede har hjemme
          </p>
          <div className="w-20 h-1 bg-[#ffe352] mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <CreditCard className="h-10 w-10" />,
              title: "Spar penger",
              description: "Reduser matutgiftene dine ved å bruke det du allerede har kjøpt inn"
            },
            {
              icon: <Clock className="h-10 w-10" />,
              title: "Spar tid",
              description: "Mindre tid på planlegging og handletur, mer tid til det som betyr noe"
            },
            {
              icon: <CheckCircle2 className="h-10 w-10" />,
              title: "Reduser matsvinn",
              description: "Bidra til å redusere matsvinn med hver rett du lager med FeedMe"
            },
            {
              icon: <Utensils className="h-10 w-10" />,
              title: "Ny inspirasjon",
              description: "Opplev nye oppskrifter og måltider basert på dine preferanser"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-[#ffe352]/20 text-[#bb5300]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#bb5300] text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#bb5300]/80 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};