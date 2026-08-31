import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080B10] text-white pt-28 pb-10 px-5 overflow-hidden flex flex-col justify-between">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg-mystic.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,11,16,0.72),rgba(8,11,16,0.28)_45%,rgba(8,11,16,0.92))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(124,58,237,0.10),transparent_42%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center my-auto">
        <div className="max-w-4xl space-y-5">
          <span className="inline-flex items-center rounded-full border border-amber-300/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-amber-200/90 backdrop-blur-sm">
            A Revolução no Aprendizado de Idiomas
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-[0.015em] leading-[1.04] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            Sua jornada global começa onde o método tradicional termina.
          </h1>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-200/90 font-light leading-relaxed">
            Explore o mundo, conecte-se com culturas e domine novos idiomas com seu guia explorador poliglota.
          </p>
        </div>

        <div className="relative w-full max-w-7xl mt-3 md:mt-0 flex justify-center">
          <motion.img
            src="/watermarked_img_12262838082204909694-removebg-preview.png"
            alt="Zion, seu guia explorador poliglota"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-[112%] max-w-none md:w-[108%] lg:w-[106%] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.75)]"
          />
        </div>

        <a
          href="#passaporte"
          className="relative -mt-3 md:-mt-7 px-10 md:px-14 py-4 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 border border-purple-200/40 text-white font-semibold text-xs md:text-sm tracking-[0.24em] uppercase rounded-2xl shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_55px_rgba(168,85,247,0.8)] hover:border-purple-100 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          INICIAR EXPEDIÇÃO
        </a>
      </div>
    </section>
  );
}
