'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import PassaporteCard from '@/components/PassaporteCard';
import WhatsappWidget from '@/components/WhatsappWidget';

export default function Home() {
  return (
    <main className="bg-[#0A0D12] min-h-screen text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />
      <Hero />
      <Ecosystem />
      <PassaporteCard />
      
      {/* Footer Minimalista */}
      <footer className="py-12 bg-[#07090D] border-t border-purple-500/10 text-center text-xs text-slate-500">
        <p>© 2026 Zion Polyglot. Todos os direitos reservados.</p>
        <p className="mt-2">Sua jornada de aprendizado sem fronteiras.</p>
      </footer>

      {/* Camada de Engajamento/Suporte */}
      <WhatsappWidget />
    </main>
  );
}