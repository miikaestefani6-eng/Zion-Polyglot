const universes = [
  { emoji: '🥐', name: 'Vale do Francês', meta: 'Français · Cultura & conversação' },
  { emoji: '🗽', name: 'Cúpula do Inglês', meta: 'English · Comunicação global' },
  { emoji: '💃', name: 'Santuário do Espanhol', meta: 'Español · Vida cotidiana' },
  { emoji: '龍', name: 'Arquipélago do Mandarim', meta: '中文 · Novos horizontes' },
  { emoji: '⛩️', name: 'Domínio do Japonês', meta: '日本語 · Cultura & contexto' },
];

export default function Universes() {
  return (
    <section id="universos" className="py-28 px-6 bg-[#0A0D12] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(124,58,237,0.12),transparent_48%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400">O mapa dos reinos</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight">Um mundo inteiro para explorar.</h2>
          <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed">Cada Universo combina idioma, cultura e situações reais para transformar conhecimento em experiência.</p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory [scrollbar-width:none]">
          {universes.map((item) => (
            <article key={item.name} className="min-w-[260px] md:min-w-[300px] snap-start rounded-3xl border border-purple-400/20 bg-slate-950/70 p-7 backdrop-blur-md hover:-translate-y-1 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl mb-10">{item.emoji}</div>
              <div className="h-24 rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-amber-400/5 border border-white/5 mb-6 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.28em] text-purple-200/70">ZION UNIVERSE</span>
              </div>
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <p className="text-sm text-slate-500 mt-2">{item.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
