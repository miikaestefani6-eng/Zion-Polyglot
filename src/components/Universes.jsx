const universes = [
  { name: 'Vale do Francês', meta: 'Français · Cultura & conversação', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85' },
  { name: 'Cúpula do Inglês', meta: 'English · Comunicação global', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=85' },
  { name: 'Santuário do Espanhol', meta: 'Español · Vida cotidiana', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85' },
  { name: 'Arquipélago do Mandarim', meta: '中文 · Novos horizontes', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Domínio do Japonês', meta: '日本語 · Cultura & contexto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85' },
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
            <article key={item.name} className="group relative min-w-[260px] md:min-w-[300px] h-[360px] snap-start rounded-3xl border border-purple-400/20 bg-slate-950/70 overflow-hidden hover:-translate-y-1 hover:border-purple-400/50 transition-all duration-300">
              <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-[9px] uppercase tracking-[0.28em] text-amber-300/80">Zion Universe</span>
                <h3 className="text-xl font-bold text-white mt-2">{item.name}</h3>
                <p className="text-sm text-slate-300/75 mt-2">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
