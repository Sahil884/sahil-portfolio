import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-16 space-y-32">
      <section id="home" className="reveal">
        <Hero />
      </section>
      <section id="about" className="reveal">
        <About />
      </section>
      <section id="skills" className="reveal">
        <Skills />
      </section>
      <section id="projects" className="reveal">
        <Projects />
      </section>
      <section id="contact" className="reveal">
        <Contact />
      </section>
    </main>
  );
}
