"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="backdrop-blur-lg bg-black/30 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center shadow-glow">
              <span className="text-xs font-bold">ST</span>
            </div>
            <span className="text-sm tracking-widest uppercase text-gray-300">
              Sahil Tiwari
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex text-xs font-semibold bg-linear-to-r from-primary to-secondary text-white px-4 py-2 rounded-full shadow-glow"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
