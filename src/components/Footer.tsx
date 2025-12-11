export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Sahil Tiwari</p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/Sahil884"
            target="_blank"
            className="hover:text-primary transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sahil-tiwari884"
            target="_blank"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>

          {/* ✅ Default mail app */}
          <a
            href="mailto:work.sahiltiwari@gmail.com"
            className="hover:text-primary transition"
          >
            Email
          </a>

          {/* ✅ Gmail fallback */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=work.sahiltiwari@gmail.com"
            target="_blank"
            className="text-gray-500 hover:text-primary transition text-xs"
          >
            Gmail
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
