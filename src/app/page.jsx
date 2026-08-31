'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Universes from '@/components/Universes';
import MobileExperience from '@/components/MobileExperience';
import Evolution from '@/components/Evolution';
import PassaporteCard from '@/components/PassaporteCard';
import WhatsAppSection from '@/components/WhatsAppSection';
import FinalCTA from '@/components/FinalCTA';
import WhatsappWidget from '@/components/WhatsappWidget';

export default function Home() {
  return (
    <main className="bg-[#0A0D12] min-h-screen text-slate-100 overflow-x-hidden">
      <Header />
      <Hero />
      <Ecosystem />
      <Universes />
      <MobileExperience />
      <Evolution />
      <PassaporteCard />
      <WhatsAppSection />
      <FinalCTA />
      <WhatsappWidget />
    </main>
  );
}
