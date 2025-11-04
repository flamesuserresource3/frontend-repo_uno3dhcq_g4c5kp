import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-16 px-6 py-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-md bg-emerald-500/15 p-2 text-emerald-400">
          <User size={18} />
        </div>
        <h2 className="font-['Press_Start_2P',_Inter,_sans-serif] text-xl md:text-2xl">About Me</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur">
          <p className="text-sm leading-relaxed text-white/90">
            I’m a front-end developer who loves bringing nostalgic vibes into modern web apps. Think pixel sprites, chunky buttons, juicy motion, and crisp performance.
            When I’m not coding, I’m exploring level design ideas, sketching UI concepts, or speedrunning CSS.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/80 md:grid-cols-3">
            <li className="rounded bg-white/5 px-3 py-2">React</li>
            <li className="rounded bg-white/5 px-3 py-2">TypeScript</li>
            <li className="rounded bg-white/5 px-3 py-2">Tailwind</li>
            <li className="rounded bg-white/5 px-3 py-2">Framer Motion</li>
            <li className="rounded bg-white/5 px-3 py-2">Three/Spline</li>
            <li className="rounded bg-white/5 px-3 py-2">Web Accessibility</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 p-6">
          <h3 className="mb-2 font-['Press_Start_2P',_Inter,_sans-serif] text-sm uppercase tracking-widest text-white/90">
            Philosophy
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
            Design should feel playful and approachable while staying practical. I like interfaces that invite curiosity and reward interaction — with microdetails that make people smile.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-lg bg-black/30 p-4">
              <div className="text-2xl font-bold text-white">60fps</div>
              <div className="mt-1 text-white/70">smooth</div>
            </div>
            <div className="rounded-lg bg-black/30 p-4">
              <div className="text-2xl font-bold text-white">A11y</div>
              <div className="mt-1 text-white/70">by default</div>
            </div>
            <div className="rounded-lg bg-black/30 p-4">
              <div className="text-2xl font-bold text-white">Fun</div>
              <div className="mt-1 text-white/70">always</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
