export default function MobileExperience() {
  return (
    <section id="metodo" className="py-28 px-6 bg-[#0A0D12] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="absolute w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full" />
          <div className="relative w-[250px] rounded-[2.6rem] border border-purple-300/30 bg-slate-950 p-2 shadow-[0_0_70px_rgba(124,58,237,0.25)] rotate-[-3deg]">
            <div className="rounded-[2.1rem] overflow-hidden bg-[#10151d] border border-white/5 min-h-[480px] flex flex-col">
              <div className="px-5 pt-7 pb-4 flex justify-between text-[9px] uppercase tracking-widest text-slate-500"><span>Expedição 07</span><span>⚡ 340</span></div>
              <div className="mx-5 h-1 bg-slate-800 rounded-full"><div className="h-full w-[72%] bg-purple-500 rounded-full" /></div>
              <div className="flex-1 flex flex-col items-center justify-center px-5 text-center"><div className="w-24 h-24 rounded-full border border-purple-400/20 bg-purple-500/10 flex items-center justify-center text-4xl mb-7">👾</div><p className="text-[10px] uppercase tracking-widest text-purple-300 mb-3">Zion IA</p><p className="text-white text-sm font-semibold leading-relaxed">Comment dit-on “eu gostaria de um café”?</p><div className="mt-8 w-20 h-20 rounded-full border border-purple-400/30 flex items-center justify-center text-2xl">🎙️</div><p className="text-[9px] text-slate-500 mt-3">Toque para responder</p></div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2"><span className="text-xs uppercase tracking-[0.3em] text-amber-400">A experiência no celular</span><h2 className="text-4xl md:text-6xl font-black text-white mt-4">Uma expedição que cabe na sua rotina.</h2><p className="text-slate-400 mt-6 leading-relaxed">Aulas curtas, interação por voz e feedback imediato. O Zion transforma poucos minutos em prática real.</p><div className="mt-8 space-y-4">{['Análise de áudio instantânea','Medidor de Zaps em tempo real','Reações dinâmicas do Zion'].map((item,i)=><div key={item} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/50 p-4"><span className="text-lg">{['🎙️','⚡','👾'][i]}</span><span className="text-sm font-semibold text-slate-200">{item}</span></div>)}</div></div>
      </div>
    </section>
  );
}
