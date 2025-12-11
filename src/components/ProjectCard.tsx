import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: IconType; // type from react-icons
  link?: string; // optional
  github?: string; // optional
}

export default function ProjectCard({
  title,
  description,
  tech,
  icon: Icon,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div
      className="
  rounded-3xl bg-black/30 border border-white/10 backdrop-blur-md 
  p-6 flex flex-col gap-4 transition-all duration-300
  hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1
"
    >
      {/* Icon */}
      <div className="text-4xl text-primary mb-2">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        {link && (
          <a
            href={link}
            target="_blank"
            className="px-4 py-2 text-sm rounded-xl bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 transition"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="px-4 py-2 text-sm rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-primary transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
