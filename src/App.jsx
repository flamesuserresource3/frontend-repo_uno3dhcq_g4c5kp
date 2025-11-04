import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Home } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="rounded-md bg-emerald-500/15 p-1.5 text-emerald-400">
              <Home size={16} />
            </span>
            Player One
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Player One. All rights reserved.
      </footer>
    </div>
  );
}
