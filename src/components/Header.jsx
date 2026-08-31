import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0D12]/80 backdrop-blur-md border-b border-purple-500/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo Integrada com Imagem + Marca */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Zion Logo" 
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform" 
          />
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              ZION
            </span>
            <span className="text-[10px] font-extrabold text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 tracking-widest">
              POLYGLOT
            </span>
          </div>
        </a>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          <a href="#ecossistema" className="hover:text-purple-400 transition-colors">Ecossistema</a>
          <a href="#passaporte" className="hover:text-purple-400 transition-colors">Passaporte</a>
        </nav>

        {/* CTA do Header */}
        <a 
          href="#passaporte" 
          className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-200 border border-purple-500/40 hover:border-purple-400 hover:text-white transition-all shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
        >
          ACESSAR PASSAPORTE
        </a>
      </div>
    </header>
  );
}