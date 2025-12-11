export default function Skills() {
  return (
    <section id="skills" className="reveal space-y-10">
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="text-gray-400">
        Technologies I work with across development and data science.
      </p>

      <div className="grid md:grid-cols-3 gap-6 ">
        {/* Frontend */}
        <div
          className="rounded-2xl bg-black/50 border border-white/10 p-5 transition-all duration-300
    hover:bg-black/30 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Frontend
          </p>
          <h3 className="text-lg font-semibold mb-3">UI Development</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>React.js, Next.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Responsive UI/UX</li>
          </ul>
        </div>

        {/* Backend */}
        <div
          className="rounded-2xl bg-black/50 border border-white/10 p-5 transition-all duration-300
    hover:bg-black/30 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
            Backend
          </p>
          <h3 className="text-lg font-semibold mb-3">Server & APIs</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Node.js, Express</li>
            <li>REST APIs</li>
            <li>Authentication & Middleware</li>
            <li>Socket.IO (Real‑time)</li>
          </ul>
        </div>

        {/* Databases */}
        <div
          className="rounded-2xl bg-black/50 border border-white/10 p-5 transition-all duration-300
    hover:bg-black/30 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Databases
          </p>
          <h3 className="text-lg font-semibold mb-3">Storage</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        {/* Data Science */}
        <div
          className="rounded-2xl bg-black/50 border border-white/10 p-5 transition-all duration-300
    hover:bg-black/30 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Data Science
          </p>
          <h3 className="text-lg font-semibold mb-3">Analytics & Modeling</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Python, NumPy, Pandas</li>
            <li>Data Cleaning & EDA</li>
            <li>Feature Engineering</li>
            <li>Model Training & Evaluation</li>
          </ul>
        </div>

        {/* Machine Learning */}
        <div
          className="rounded-2xl bg-black/50 border border-white/10 p-5 transition-all duration-300
    hover:bg-black/30 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
            Machine Learning
          </p>
          <h3 className="text-lg font-semibold mb-3">ML Techniques</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Regression, Classification</li>
            <li>Clustering, Dimensionality Reduction</li>
            <li>Model Deployment</li>
            <li>Scikit‑Learn, TensorFlow</li>
          </ul>
        </div>

        {/* Computer Vision */}
        <div
          className="rounded-2xl bg-black/50 border border-white/10 p-5 transition-all duration-300
    hover:bg-black/30 hover:border-primary/40 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Computer Vision
          </p>
          <h3 className="text-lg font-semibold mb-3">Vision Systems</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>OpenCV</li>
            <li>Image Processing</li>
            <li>Object Detection</li>
            <li>Gesture Recognition</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
