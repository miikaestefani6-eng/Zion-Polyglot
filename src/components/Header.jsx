import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0D12]/75 backdrop-blur-xl border-b border-white/10 px-5 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3 group shrink-0" aria-label="Zion Polyglot">
          <div className="relative w-11 h-11 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/logo.png"
              alt=""
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-[0.06em] text-white">Zion</span>
            <span className="text-[10px] md:text-xs font-light tracking-[0.22em] text-slate-400 uppercase">Polyglot</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm text-slate-300 font-light">
          <a href="#jornadas" className="hover:text-white transition-colors">Jornadas</a>
          <a href="#metodo" className="hover:text-white transition-colors">Método</a>
          <a href="#comunidade" className="hover:text-white transition-colors">Comunidade</a>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Pesquisar" className="text-slate-300 hover:text-white transition-colors p-2">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button aria-label="Perfil do usuário" className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:border-purple-300/60 hover:text-white transition-all">
            <span className="text-xs font-medium">M</span>
          </button>
        </div>
      </div>
    </header>
  );
}
