import React from 'react';
import { Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-16 px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-600/10 p-8 text-center">
        <h2 className="font-['Press_Start_2P',_Inter,_sans-serif] text-xl md:text-2xl">
          Let’s Team Up
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
          Got a fun idea or a challenging quest? I’m available for collaborations, freelance work, and full-time roles.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            <Mail size={18} /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/60">
        Built with love, snacks, and lots of playtesting.
      </p>
    </section>
  );
}
