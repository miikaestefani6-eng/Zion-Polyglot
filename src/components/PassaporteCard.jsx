import { useState } from 'react';

export default function PassaporteCard() {
  const [isAnual, setIsAnual] = useState(true);

  return (
    <section id="passaporte" className="py-24 bg-[#0A0D12] px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          SEU PASSAPORTE DE EXPEDIÇÃO
        </h2>
        <p className="text-slate-400 mb-8">
          Um plano único. Acesso ilimitado a todo o ecossistema e ao Zion IA.
        </p>

        {/* Toggle Mensal/Anual */}
        <div className="inline-flex items-center gap-3 bg-slate-900/80 p-1.5 rounded-xl border border-purple-500/20 mb-12">
          <button
            onClick={() => setIsAnual(false)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${!isAnual ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
          >
            MENSAL
          </button>
          <button
            onClick={() => setIsAnual(true)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${isAnual ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
          >
            ANUAL <span className="bg-amber-400 text-black text-[10px] px-1.5 py-0.2 rounded font-black">ECONOMIZE 40%</span>
          </button>
        </div>

        {/* Card Principal */}
        <div className="relative bg-gradient-to-b from-purple-900/30 via-slate-900/80 to-slate-950 border-2 border-purple-500/50 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(147,51,234,0.25)] text-left max-w-2xl mx-auto">
          <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Acesso Total
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Passaporte Zion Polyglot</h3>
          <p className="text-sm text-slate-400 mb-6">Tudo o que você precisa para destravar sua fluência sem limites.</p>

          <div className="flex items-baseline gap-2 mb-8 border-b border-purple-500/20 pb-6">
            <span className="text-4xl md:text-5xl font-black text-white">
              {isAnual ? 'R$ 29,90' : 'R$ 49,90'}
            </span>
            <span className="text-slate-400 text-sm">/mês</span>
            {isAnual && <span className="text-xs text-purple-300 ml-2">(Cobrado anualmente)</span>}
          </div>

          <ul className="space-y-4 mb-8 text-sm text-slate-300">
            <li className="flex items-center gap-3">⚡ <span><b>Zion IA Ilimitado:</b> Conversação em áudio e texto 24/7</span></li>
            <li className="flex items-center gap-3">⚡ <span><b>Todos os Universos:</b> Inglês, Francês, Espanhol, Mandarim e mais</span></li>
            <li className="flex items-center gap-3">⚡ <span><b>Zaps Infinitos:</b> Estude no seu ritmo sem interrupções de bateria</span></li>
            <li className="flex items-center gap-3">⚡ <span><b>WhatsApp Ativo:</b> Pílulas diárias de treino e alertas de streak</span></li>
            <li className="flex items-center gap-3">⚡ <span><b>Modo Viagem (Offline):</b> Baixe suas jornadas para onde for</span></li>
          </ul>

          <button className="w-full py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl font-black text-white text-base shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all transform hover:scale-[1.02]">
            GARANTIR MEU PASSAPORTE
          </button>
        </div>
      </div>
    </section>
  );
}