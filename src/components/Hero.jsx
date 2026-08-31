import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0F141C] text-white pt-28 pb-12 px-6 overflow-hidden flex flex-col justify-between">
      
      {/* 1. Cenário de Fundo Místico/Bioluminescente */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: "url('/hero-bg-mystic.png')" }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* 2. Conteúdo Principal em Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        
        {/* Coluna da Esquerda: Cópia Serifada & Mockup Mobile */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif tracking-wider text-amber-200/95 leading-tight uppercase font-bold drop-shadow-md">
              Zion Polyglot: <br />
              <span className="text-slate-100">Sua jornada global começa aqui.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-md font-light leading-relaxed">
              Explore o mundo, conecte-se com culturas e domine novos idiomas com seu guia explorador poliglota.
            </p>
          </div>

          {/* Mockup do Celular no Canto Inferior Esquerdo */}
          <div className="hidden md:block pt-4">
            <div className="w-52 rounded-[30px] p-2 bg-slate-950/80 border border-amber-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <img 
                src="/mobile-preview.png" 
                alt="App Interface Preview" 
                className="rounded-[22px] w-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Composição das 3 Poses do Zion + CTA Prisma */}
        <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
          
          {/* Imagem do Grupo de Poses do Zion */}
          <div className="relative w-full max-w-2xl">
            <img 
              src="/zion-poses-group.png" 
              alt="Zion Explorador em Ação" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(147,51,234,0.35)]"
            />
          </div>

          {/* Botão Prisma Cristalino / Neon */}
          <div className="mt-4">
            <button className="relative px-12 py-4 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 border border-purple-300/40 text-white font-black text-xs md:text-sm tracking-[0.25em] uppercase rounded-2xl shadow-[0_0_35px_rgba(168,85,247,0.55)] hover:shadow-[0_0_50px_rgba(168,85,247,0.85)] hover:border-purple-200 transition-all duration-300 transform hover:scale-105 active:scale-95">
              INICIAR EXPEDIÇÃO
            </button>
          </div>

        </div>

      </div>

      {/* 3. Rodapé do Hero (Progress Tracking & Mobile Interações) */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] text-slate-400 tracking-[0.2em] uppercase pt-6 border-t border-white/10 relative z-10">
        <span>Progress tracking</span>
        
        {/* Indicador de Páginas/Carrossel */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <span className="w-2 h-1 bg-slate-700 rounded-full" />
          <span className="w-2 h-1 bg-slate-700 rounded-full" />
          <span className="w-2 h-1 bg-slate-700 rounded-full" />
        </div>

        <span>Mobile interações</span>
      </div>

    </section>
  );
}