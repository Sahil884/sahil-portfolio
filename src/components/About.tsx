export default function About() {
  return (
    <section
      id="about"
      className="reveal flex flex-col md:flex-row gap-10 items-start"
    >
      {/* LEFT SIDE — Title */}
      <div className="md:w-1/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
        <p className="text-sm text-gray-400">
          A little context on who I am and how I think.
        </p>
      </div>

      {/* RIGHT SIDE — Content */}
      <div className="md:flex-1 space-y-4">
        <p className="text-gray-200 text-sm md:text-base">
          I’m a full‑stack developer with strong experience in JavaScript,
          TypeScript, and modern web technologies. I enjoy building real‑time
          collaborative tools, interactive UIs, and backend systems that scale.
        </p>

        <p className="text-gray-300 text-sm md:text-base">
          My approach blends clean architecture, thoughtful UX, and a deep
          curiosity for how systems behave under real‑world conditions. I learn
          fast, experiment often, and love turning ideas into polished,
          production‑ready experiences.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs text-gray-400">Project Experience</p>
            <p className="text-lg font-semibold">1+ years</p>
            <p className="text-xs text-gray-500">
              Hands‑on project experience.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs text-gray-400">Focus</p>
            <p className="text-lg font-semibold">Full‑Stack Development</p>
            <p className="text-xs text-gray-500">Frontend + Backend systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
