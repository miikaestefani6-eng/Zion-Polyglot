'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Lock, Mail, Mic, Sparkles, Volume2, Zap } from 'lucide-react';

const universes = [
  { name: 'Vale do Francês', language: 'Français', icon: '🥐', scene: 'Paris · Cultura · Conversação' },
  { name: 'Cúpula do Inglês', language: 'English', icon: '🗽', scene: 'New York · Cultura · Conversação' },
  { name: 'Santuário do Espanhol', language: 'Español', icon: '💃', scene: 'Madrid · Cultura · Conversação' },
  { name: 'Domínio do Japonês', language: '日本語', icon: '⛩️', scene: 'Tokyo · Cultura · Conversação' },
  { name: 'Reino do Mandarim', language: '中文', icon: '🐉', scene: 'Beijing · Cultura · Conversação' },
];

const rhythms = [
  { title: 'Casual', minutes: '5 min', detail: 'Uma pequena faísca por dia.' },
  { title: 'Explorador', minutes: '15 min', detail: 'O ritmo ideal para avançar.' },
  { title: 'Imersão', minutes: '30 min', detail: 'Para quem quer mergulhar fundo.' },
];

export default function ExpedicaoPage() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [universe, setUniverse] = useState(null);
  const [level, setLevel] = useState(null);
  const [rhythm, setRhythm] = useState(null);
  const [mission, setMission] = useState(false);
  const [answer, setAnswer] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [completed, setCompleted] = useState(false);
  const next = () => setStep((current) => current + 1);

  const talkToZion = async () => {
    const message = answer.trim();
    if (!message || loading) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/zion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, name: name.trim(), language: universe?.language, level, mission: 'Primeira conversa' }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Não foi possível falar com o Zion agora.');
      setReply(data.reply || 'Estou aqui. Vamos continuar nossa expedição?');
      setCompleted(true);
    } catch (err) {
      setError(err.message || 'Não foi possível falar com o Zion agora.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A0F] text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,.16),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,.07),transparent_28%)]" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-6 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xl bg-black/10">
          <a href="/" className="flex items-center gap-3"><span className="relative h-10 w-10 rounded-full border border-amber-300/60 grid place-items-center text-amber-200"><Compass size={21}/><span className="absolute text-[8px] font-bold">Z</span></span><span className="font-serif text-xl">ZION <span className="font-serif text-sm font-light tracking-[.08em] text-amber-100/70">Polyglot</span></span></a>
          <div className="text-[10px] uppercase tracking-[.3em] text-white/40">Nova expedição</div>
        </header>
        <div className="flex-1 flex items-center justify-center px-5 py-12"><div className="w-full max-w-5xl">
          {!mission && <div className="mb-10 flex items-center gap-2">{[0,1,2,3,4,5].map((item)=><div key={item} className={`h-1 flex-1 rounded-full transition-all ${item<=step?'bg-amber-300':'bg-white/10'}`}/>)}</div>}
          <AnimatePresence mode="wait">
            {step===0&&!mission&&<motion.section key="portal" initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:1.03}} className="text-center"><div className="mx-auto mb-8 h-24 w-24 rounded-full border border-amber-300/40 bg-amber-200/5 grid place-items-center"><Sparkles className="text-amber-200" size={34}/></div><p className="text-[10px] uppercase tracking-[.38em] text-amber-200/70 mb-5">Portal de entrada</p><h1 className="font-serif text-5xl md:text-7xl font-light">Sua expedição<br/>começa agora.</h1><p className="mx-auto mt-6 max-w-xl text-white/60 font-light">Crie seu Passaporte Zion e deixe o seu progresso acompanhar você por todos os Universos.</p><button onClick={next} className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 px-8 py-4 text-xs font-semibold uppercase tracking-[.22em]">Criar meu Passaporte <ArrowRight size={16}/></button></motion.section>}
            {step===1&&!mission&&<motion.section key="passport" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} className="mx-auto max-w-2xl"><p className="text-[10px] uppercase tracking-[.38em] text-amber-200/70 mb-4">Seu Passaporte</p><h2 className="font-serif text-4xl md:text-5xl font-light">Vamos registrar sua jornada.</h2><p className="mt-4 text-white/55">Poucos dados. Um passaporte para tudo o que você conquistar.</p><div className="mt-8 space-y-4"><input aria-label="Nome" value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" className="w-full rounded-xl border border-white/10 bg-white/[.04] px-5 py-4 outline-none"/><div className="relative"><Mail className="absolute left-4 top-4 text-white/30" size={18}/><input aria-label="E-mail" placeholder="Seu e-mail" type="email" className="w-full rounded-xl border border-white/10 bg-white/[.04] pl-12 pr-5 py-4 outline-none"/></div><div className="relative"><Lock className="absolute left-4 top-4 text-white/30" size={18}/><input aria-label="Senha" placeholder="Crie uma senha" type="password" className="w-full rounded-xl border border-white/10 bg-white/[.04] pl-12 pr-5 py-4 outline-none"/></div></div><button onClick={next} className="mt-7 w-full rounded-xl bg-white text-black py-4 text-xs font-semibold uppercase tracking-[.22em]">Continuar</button></motion.section>}
            {step===2&&!mission&&<motion.section key="universe" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}}><p className="text-center text-[10px] uppercase tracking-[.38em] text-amber-200/70 mb-4">Escolha seu primeiro Universo</p><h2 className="text-center font-serif text-4xl md:text-5xl font-light">Para onde vamos primeiro?</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{universes.map(item=><button key={item.name} onClick={()=>setUniverse(item)} className={`group text-left rounded-2xl border p-5 transition ${universe?.name===item.name?'border-amber-300/70 bg-amber-200/[.08]':'border-white/10 bg-white/[.03]'}`}><div className="text-4xl mb-8">{item.icon}</div><div className="font-serif text-2xl">{item.name}</div><div className="mt-1 text-xs uppercase tracking-[.15em] text-white/40">{item.language}</div><div className="mt-5 text-xs text-white/55">{item.scene}</div></button>)}</div><button disabled={!universe} onClick={next} className="mx-auto mt-8 flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[.22em] text-black disabled:opacity-30">Entrar neste Universo <ArrowRight size={16}/></button></motion.section>}
            {step===3&&!mission&&<motion.section key="level" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} className="mx-auto max-w-3xl text-center"><div className="text-5xl mb-7">👾</div><p className="text-[10px] uppercase tracking-[.38em] text-amber-200/70 mb-4">Sintonização</p><h2 className="font-serif text-4xl md:text-5xl font-light">Já explorou este território antes?</h2><p className="mt-5 text-white/55">Quero começar entendendo onde você está para não desperdiçar nenhum passo.</p><div className="mt-9 grid gap-4 md:grid-cols-2"><button onClick={()=>{setLevel('iniciante');next()}} className="rounded-2xl border border-white/10 bg-white/[.03] p-7 text-left"><div className="text-2xl">🌱</div><div className="mt-5 font-serif text-2xl">Primeiros passos</div><div className="mt-2 text-sm text-white/45">Começamos do zero e construímos sua confiança.</div></button><button onClick={()=>{setLevel('teste');next()}} className="rounded-2xl border border-white/10 bg-white/[.03] p-7 text-left"><div className="text-2xl">🧭</div><div className="mt-5 font-serif text-2xl">Já conheço o terreno</div><div className="mt-2 text-sm text-white/45">Faça uma sintonia rápida de aproximadamente 2 minutos.</div></button></div></motion.section>}
            {step===4&&!mission&&<motion.section key="rhythm" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} className="mx-auto max-w-3xl text-center"><p className="text-[10px] uppercase tracking-[.38em] text-amber-200/70 mb-4">Defina seu ritmo</p><h2 className="font-serif text-4xl md:text-5xl font-light">Quanto tempo cabe na sua expedição?</h2><p className="mt-5 text-white/55">Não importa quanto tempo você tem. O importante é continuar avançando.</p><div className="mt-9 grid gap-4 md:grid-cols-3">{rhythms.map(item=><button key={item.title} onClick={()=>setRhythm(item)} className={`rounded-2xl border p-7 text-left ${rhythm?.title===item.title?'border-amber-300 bg-amber-200/[.07]':'border-white/10 bg-white/[.03]'}`}><div className="text-3xl font-serif">{item.minutes}</div><div className="mt-3 font-semibold">{item.title}</div><div className="mt-2 text-sm text-white/45">{item.detail}</div></button>)}</div><button disabled={!rhythm} onClick={next} className="mx-auto mt-8 flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[.22em] text-black disabled:opacity-30">Definir meu ritmo <ArrowRight size={16}/></button></motion.section>}
            {step===5&&!mission&&<motion.section key="map" initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}} className="text-center"><div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[.035] p-8 md:p-12"><p className="text-[10px] uppercase tracking-[.38em] text-amber-200/70">Expedição iniciada</p><h2 className="mt-4 font-serif text-5xl md:text-6xl font-light">Bem-vinda ao<br/>{universe?.name}.</h2><div className="mt-9 text-left max-w-md mx-auto"><div className="text-[10px] uppercase tracking-[.3em] text-white/35">Expedição 01</div><div className="mt-2 font-serif text-3xl">Primeiros passos</div><p className="mt-2 text-sm text-white/45">Seu primeiro contato com {universe?.language||'o idioma'}.</p></div><button onClick={()=>setMission(true)} className="mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 px-8 py-4 text-xs font-semibold uppercase tracking-[.22em]">Começar expedição <ArrowRight size={16}/></button></div><p className="mt-7 font-serif text-2xl">“Então… vamos?”</p><p className="mt-2 text-xs uppercase tracking-[.28em] text-white/30">— Zion</p></motion.section>}
            {mission&&!completed&&<motion.section key="mission" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} className="mx-auto max-w-4xl"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] items-center"><div className="text-center lg:text-left"><div className="mx-auto lg:mx-0 h-44 w-44 rounded-full border border-amber-300/30 bg-gradient-to-br from-amber-200/10 to-purple-500/10 grid place-items-center"><span className="text-7xl">👾</span></div><p className="mt-6 text-[10px] uppercase tracking-[.38em] text-amber-200/70">Zion · seu guia</p></div><div><div className="rounded-3xl border border-white/10 bg-white/[.035] p-7 md:p-9"><div className="flex items-center gap-2 text-amber-200/70 text-[10px] uppercase tracking-[.28em]"><Volume2 size={14}/> Primeira conversa</div><h2 className="mt-5 font-serif text-4xl md:text-5xl font-light">Oi. Eu sou o Zion.</h2><p className="mt-5 text-lg text-white/70 font-light">Vamos descobrir até onde você consegue chegar?</p><button className="mt-7 rounded-full border border-white/10 p-3" aria-label="Ouvir Zion"><Volume2 size={18}/></button></div><div className="mt-5 rounded-2xl border border-purple-300/20 bg-purple-500/[.06] p-5"><p className="text-xs uppercase tracking-[.25em] text-purple-200/70">Sua vez</p><p className="mt-2 text-white/65">Responda em {universe?.language||'no idioma'} como preferir. Você pode falar ou escrever.</p><div className="mt-4 flex gap-3"><button className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple-600/80" aria-label="Falar com Zion"><Mic size={19}/></button><input value={answer} onChange={e=>setAnswer(e.target.value)} onKeyDown={e=>e.key==='Enter'&&talkToZion()} placeholder="Escreva sua resposta..." disabled={loading} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 outline-none disabled:opacity-60"/><button onClick={talkToZion} disabled={!answer.trim()||loading} className="rounded-xl bg-white px-5 text-black disabled:opacity-30"><ArrowRight size={18}/></button></div>{loading&&<p className="mt-3 text-xs text-amber-200/70 animate-pulse">Zion está ouvindo…</p>}{error&&<p className="mt-3 text-xs text-red-300/80">{error}</p>}</div></div></div></motion.section>}
            {completed&&mission&&<motion.section key="complete" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} className="mx-auto max-w-3xl text-center"><div className="mx-auto h-24 w-24 rounded-full border border-amber-300/50 bg-amber-200/10 grid place-items-center"><Zap className="text-amber-200" size={38}/></div><p className="mt-7 text-[10px] uppercase tracking-[.4em] text-amber-200/70">Primeiro passo concluído</p><h2 className="mt-4 font-serif text-5xl md:text-6xl font-light">Você começou.</h2>{reply&&<div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-purple-300/20 bg-purple-500/[.06] p-6 text-left"><p className="text-[10px] uppercase tracking-[.28em] text-purple-200/70">Zion respondeu</p><p className="mt-3 text-lg leading-relaxed text-white/80 font-light">{reply}</p></div>}<p className="mt-5 text-white/60">O Zion já registrou sua primeira interação na expedição.</p><div className="mx-auto mt-8 flex max-w-sm justify-center gap-3"><div className="rounded-2xl border border-amber-300/20 bg-amber-200/[.06] px-7 py-5"><div className="text-3xl font-serif">+10</div><div className="mt-1 text-[10px] uppercase tracking-[.25em] text-white/40">XP</div></div><div className="rounded-2xl border border-purple-300/20 bg-purple-500/[.06] px-7 py-5"><div className="text-3xl font-serif">+3</div><div className="mt-1 text-[10px] uppercase tracking-[.25em] text-white/40">ZAPS</div></div></div><button onClick={()=>{setCompleted(false);setMission(false);setReply('');setAnswer('');setStep(5)}} className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[.22em] text-black">Voltar ao mapa <ArrowRight size={16}/></button></motion.section>}
          </AnimatePresence>
        </div></div>
      </div>
    </main>
  );
}
