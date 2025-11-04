import React from 'react';
import { Star, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Pixel Runner',
    desc: 'Endless runner with parallax worlds and crunchy jump effects.',
    tags: ['React', 'Canvas', 'Audio API'],
    link: '#',
  },
  {
    title: 'Quest Log',
    desc: 'Gamified task manager with streaks, levels, and loot drops.',
    tags: ['TypeScript', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Retro UI Kit',
    desc: 'Component library with pixel borders, arcade buttons, and CRT blur.',
    tags: ['Design', 'Storybook', 'Theming'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-16 px-6 py-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-md bg-emerald-500/15 p-2 text-emerald-400">
          <Star size={18} />
        </div>
        <h2 className="font-['Press_Start_2P',_Inter,_sans-serif] text-xl md:text-2xl">Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 ring-emerald-400/30 transition hover:-translate-y-1 hover:shadow-emerald-500/10 focus:outline-none focus:ring-4"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-['Press_Start_2P',_Inter,_sans-serif] text-sm text-white">
                {p.title}
              </h3>
              <span className="rounded-md bg-emerald-500/15 p-2 text-emerald-400 opacity-0 transition group-hover:opacity-100">
                <Rocket size={16} />
              </span>
            </div>
            <p className="mt-3 text-sm text-white/80">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded bg-black/30 px-2 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
