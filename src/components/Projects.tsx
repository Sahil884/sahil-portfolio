import ProjectCard from "./ProjectCard";
import { FaTasks, FaHandPaper, FaUsers, FaRobot } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="pt-20 space-y-10">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ✅ Taskly */}
        <ProjectCard
          title="Taskly – Full‑Stack Task Manager"
          description="A full‑stack task management app with authentication, CRUD operations, and real‑time UI updates. Built for productivity with a clean, responsive interface."
          tech={["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"]}
          icon={FaTasks}
          link="https://taskly-task-manager-icrv.vercel.app/"
          github="https://github.com/Sahil884/Taskly---TaskManager-"
        />

        {/* ✅ Hand Gesture Mouse Controller */}
        <ProjectCard
          title="Hand Gesture Mouse Controller"
          description="A computer vision project enabling mouse control using hand gestures. Uses Mediapipe for hand tracking and PyAutoGUI for system-level interactions."
          tech={["Python", "Mediapipe", "OpenCV", "PyAutoGUI"]}
          icon={FaHandPaper}
          github="https://github.com/Sahil884/Virtual_Mouse_openCV"
        />

        {/* ✅ Real-Time Collaborative Code Editor */}
        <ProjectCard
          title="Real‑Time Collaborative Code Editor"
          description="A Monaco-based real-time editor with multi-file support, typing indicators, chat, and synchronized file selection using Socket.IO."
          tech={["Monaco", "Socket.IO", "Express", "Node.js", "JavaScript"]}
          icon={FaUsers}
          link="https://real-time-codeeditor-mkbt.onrender.com"
          github="https://github.com/Sahil884/real-time-codeEditor"
        />

        {/* ✅ Automated Machine Learning Web App */}
        <ProjectCard
          title="Automated Machine Learning Web App"
          description="A Streamlit-based app that automates EDA, model training, and model selection using PyCaret. Supports regression and classification with downloadable models."
          tech={["Python", "Streamlit", "PyCaret", "Pandas Profiling"]}
          icon={FaRobot}
          link="https://auto-machine-learning-web-app-dtc859novczeypqycr4tfa.streamlit.app/"
          github="https://github.com/Sahil884/Auto-Machine-Learning-Web-App"
        />
      </div>
    </section>
  );
}
