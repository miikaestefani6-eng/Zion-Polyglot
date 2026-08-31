export default function WhatsappWidget() {
  const whatsappUrl = "https://wa.me/SEUNUMERO?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Passaporte%20Zion%20Polyglot.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/90 border border-emerald-500/40 p-2.5 pr-5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all group"
    >
      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
        💬
      </div>
      <div className="text-left">
        <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Fale com o Zion</p>
        <p className="text-xs font-semibold text-white group-hover:text-emerald-300">Dúvidas sobre a expedição?</p>
      </div>
    </a>
  );
}