"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pt-6 pb-4  ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          max-w-6xl mx-auto px-6 
          grid md:grid-cols-4 gap-12 
          text-base text-gray-300 
          rounded-3xl bg-black/30 border border-white/10 
          p-12 backdrop-blur-md primary/50 shadow-lg shadow-primary/20
        "
      >
        {/* Column 1 — Sahil */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Sahil Tiwari
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Building collaborative tools with code, creativity, and a touch of
            storytelling.
          </p>
          <p className="text-gray-500 mt-3 text-sm">Thanks for stopping by!</p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-xs uppercase tracking-wide text-primary mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Get in Touch */}
        <div>
          <h3 className="text-xs uppercase tracking-wide text-secondary mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-400">Email:</span>
              <a
                href="mailto:work.sahiltiwari@gmail.com"
                className="ml-1 underline hover:text-primary"
              >
                work.sahiltiwari@gmail.com
              </a>
            </li>
            <li>
              <span className="text-gray-400">Location:</span> Narela, Delhi,
              India
            </li>
          </ul>
        </div>

        {/* Column 4 — Connect */}
        <div>
          <h3 className="text-xs uppercase tracking-wide text-accent mb-4">
            Connect
          </h3>
          <div className="flex gap-5 items-center text-2xl">
            <a
              href="https://github.com/Sahil884"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sahil-tiwari884"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:work.sahiltiwari@gmail.com"
              className="hover:text-primary transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
