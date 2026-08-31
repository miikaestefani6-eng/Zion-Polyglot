import { motion } from 'framer-motion';

const pilares = [
  { icon: '🧠', title: 'Aprendizado', desc: 'Metodologia ativa focada em retenção e prática diária.' },
  { icon: '🤖', title: 'Zion IA 24/7', desc: 'Conversação real por voz e texto sem julgamentos e com suporte de sotaque.' },
  { icon: '🌎', title: 'Cultura VIVA', desc: 'Gírias, expressões locais e imersão em cenários do mundo real.' },
  { icon: '🎮', title: 'Progressão & Zaps', desc: 'Gamificação que transforma a disciplina em um hábito gratificante.' },
  { icon: '🏰', title: 'Guilda & Whats', desc: 'Comunidade ativa e acompanhamento contínuo na sua rotina diária.' }
];

export default function Ecosystem() {
  return (
    <section id="ecossistema" className="py-24 bg-[#0D1117] relative px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          ⚡ Mais que um aplicativo
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-6">
          Você não precisa de mais um app. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            Você precisa de um ecossistema de prática real.
          </span>
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Unimos tecnologia generativa, inteligência emocional e gamificação em um ecossistema criado para você nunca mais abandonar um idioma na metade.
        </p>

        {/* Grid dos Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-900/60 border border-purple-500/20 rounded-2xl p-6 text-left backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all"
            >
              <div>
                <div className="text-3xl mb-4">{pilar.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{pilar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pilar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}