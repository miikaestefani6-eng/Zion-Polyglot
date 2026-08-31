const stats = [
  ['🎙️', 'Pronúncia', '82%'],
  ['🗣️', 'Conversação', '71%'],
  ['👂', 'Compreensão', '85%'],
  ['📚', 'Vocabulário', '64%'],
];

export default function Evolution() {
  return (
    <section id="jornadas" className="py-28 px-6 bg-[#0D1117] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400">A evolução do explorador</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4">Você não está apenas estudando. <span className="text-purple-400">Está evoluindo.</span></h2>
          <p className="text-slate-400 mt-6 max-w-xl leading-relaxed">Cada expedição gera progresso visível. XP, Zaps, conquistas e novos níveis transformam consistência em uma jornada que dá vontade de continuar.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider text-slate-300">
            <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2">Novato</span>
            <span className="text-purple-400">→</span><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2">Batedor</span>
            <span className="text-purple-400">→</span><span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2">Guia</span>
            <span className="text-purple-400">→</span><span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2">Mestre Poliglota</span>
          </div>
        </div>
        <div className="rounded-[2rem] border border-purple-400/20 bg-slate-950/80 p-7 shadow-[0_0_60px_rgba(124,58,237,0.12)]">
          <div className="flex items-center justify-between mb-7">
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Expedicionário</p><h3 className="text-2xl font-black text-white">Nível 12 · Batedor</h3></div>
            <div className="text-right"><p className="text-amber-400 font-black">2.840 XP</p><p className="text-xs text-slate-500">⚡ 340 Zaps</p></div>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-8"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-purple-600 to-amber-400" /></div>
          <div className="space-y-5">
            {stats.map(([icon, label, value]) => <div key={label}><div className="flex justify-between text-sm mb-2"><span className="text-slate-300">{icon} {label}</span><span className="text-purple-300">{value}</span></div><div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full rounded-full bg-purple-500/70" style={{width:value}} /></div></div>)}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex gap-3"><span className="text-xs px-3 py-2 rounded-xl bg-purple-500/10 text-purple-200">🔥 18 dias</span><span className="text-xs px-3 py-2 rounded-xl bg-amber-400/10 text-amber-200">🏆 12 conquistas</span></div>
        </div>
      </div>
    </section>
  );
}
