import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Benefits } from '@/components/sections/Benefits';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}