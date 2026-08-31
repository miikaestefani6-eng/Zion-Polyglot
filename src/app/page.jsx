'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import PassaporteCard from '@/components/PassaporteCard';
import WhatsappWidget from '@/components/WhatsappWidget';

export default function Home() {
  return (
    <main className="bg-[#0A0D12] min-h-screen text-slate-100">
      <Header />
      <Hero />
      <Ecosystem />
      <PassaporteCard />
      <WhatsappWidget />
    </main>
  );
}
}