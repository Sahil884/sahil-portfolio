"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;

      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return null;
}
