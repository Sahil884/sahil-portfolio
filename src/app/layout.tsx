import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Sahil Tiwari | Full‑Stack Developer",
  description:
    "Portfolio of Sahil Tiwari — Full‑Stack Developer specializing in React, Next.js, Node.js, and real‑time systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkbg text-white">
        <Navbar />
        <ScrollReveal />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-primary/30 rounded-full mix-blend-screen blur-3xl animate-blob top-10 -left-10"></div>
          <div className="absolute w-72 h-72 bg-secondary/30 rounded-full mix-blend-screen blur-3xl animate-blob top-40 right-0"></div>
          <div className="absolute w-72 h-72 bg-accent/30 rounded-full mix-blend-screen blur-3xl animate-blob bottom-10 left-1/3"></div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
