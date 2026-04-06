import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Trainer from '@/components/Trainer';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Benefits />
      <Trainer />
      <Testimonials />
      <CTA />
    </main>
  );
}

<a href="https://wa.me/5493436211655" target="_blank" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg">
  WhatsApp
</a>;
