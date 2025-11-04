import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and gradient tint overlay (doesn't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs tracking-wider backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Retro Mario Vibes
        </span>
        <h1 className="mt-6 font-['Press_Start_2P',_Inter,_sans-serif] text-3xl leading-tight drop-shadow md:text-5xl">
          Hi, I’m Player One
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/90 md:text-base">
          Frontend adventurer and pixel-art enthusiast. I build playful, performant web experiences inspired by classic games.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:translate-y-[-2px] hover:bg-emerald-400"
          >
            Start Quest
          </a>
          <a
            href="#about"
            className="rounded-lg bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
