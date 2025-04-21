import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Larsen",
      role: "Student",
      text: "Som student på budsjett har FeedMe vært en livredder! Reduserte matutgiftene mine med nesten 20% første måned.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Johan Berg",
      role: "Travel småbarnsfar",
      text: "Etter lange dager på jobb er det fantastisk å få raske middagsforslag basert på det vi har i kjøleskapet.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Kari Nygård",
      role: "Miljøbevisst",
      text: "Elsker hvordan FeedMe hjelper meg å redusere matsvinn samtidig som jeg oppdager nye, spennende oppskrifter!",
      rating: 4,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#bb5300] mb-4">
            Hva våre testbrukere sier
          </h2>
          <div className="w-20 h-1 bg-[#ffe352] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#ffe352]/20 hover:border-[#ffe352]/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#bb5300]">{testimonial.name}</h4>
                  <p className="text-sm text-[#bb5300]/70">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#ffe352] fill-[#ffe352]"
                    />
                  ))}
                {Array(5 - testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gray-300"
                    />
                  ))}
              </div>
              <p className="italic text-[#bb5300]/80">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};