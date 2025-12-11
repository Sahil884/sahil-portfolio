export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center gap-12 reveal pt-28"
    >
      <div className="flex-1 space-y-6">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-400">
          Full‑Stack Developer
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sahil Tiwari
          </span>
          <span className="block text-xl md:text-2xl text-gray-300 mt-3">
            I build scalable full‑stack applications & real‑time collaborative
            tools.
          </span>
        </h1>

        <p className="text-gray-300 max-w-xl text-sm md:text-base">
          I specialize in React, Next.js, Node.js, Express, and real‑time
          systems. I love crafting fast, interactive UIs and backend systems
          that scale.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-linear-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold shadow-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-sm px-6 py-3 rounded-full text-gray-200 hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-6 pt-4">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/80 border border-darkbg"></div>
            <div className="w-8 h-8 rounded-full bg-secondary/80 border border-darkbg"></div>
            <div className="w-8 h-8 rounded-full bg-accent/80 border border-darkbg"></div>
          </div>
          <p className="text-xs text-gray-400 max-w-xs">
            Available for internships and junior roles. Open to remote and
            on-site collaboration.
          </p>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary via-secondary to-accent opacity-60 blur-xl"></div>

          <div className="relative w-full h-full rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between shadow-xl animate-float">
            <div>
              <p className="text-xs text-gray-400">Current Focus</p>
              <p className="text-sm font-semibold">Full‑Stack Engineering</p>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-2">Stack</p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  React
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  Next.js
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  Node.js
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  Express
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  MongoDB
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  Machine Learning
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  Computer Vision
                </span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  Git/GitHub
                </span>
              </div>
            </div>

            <p className="text-[10px] text-gray-500">
              Building real‑time, interactive, and scalable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
