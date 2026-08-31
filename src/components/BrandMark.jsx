import { Compass } from 'lucide-react';

export default function BrandMark({ compact = false }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-2' : 'gap-3'}`} aria-label="Zion Polyglot">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/60 bg-black/30 text-amber-200 shadow-[0_0_24px_rgba(245,158,11,0.2)]">
        <Compass className="h-6 w-6" strokeWidth={1.5} />
        <span className="absolute text-[9px] font-semibold tracking-wider text-amber-100">Z</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-xl font-medium tracking-[0.04em] text-white">ZION</span>
        <span className="font-serif text-sm font-light tracking-[0.08em] text-amber-100/80">Polyglot</span>
      </div>
    </div>
  );
}
