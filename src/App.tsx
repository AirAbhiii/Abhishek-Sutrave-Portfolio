import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsDashboard from "./components/SkillsDashboard";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsGrid from "./components/ProjectsGrid";
import Achievements from "./components/Achievements";
import InteractivePDF from "./components/InteractivePDF";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Dark mode default
  const [activeSection, setActiveSection] = useState("hero");
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // Sync theme status to root document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll Spy logic to active sections
  useEffect(() => {
    if (loading) return;

    const sections = ["hero", "skills", "experience", "education", "achievements"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleSplashComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-slate-800 bg-white transition-colors duration-500 dark:text-slate-205 dark:bg-slate-950 dark:text-slate-100">
      {/* Dynamic particles & connection lines */}
      <AnimatedBackground />

      <AnimatePresence>
        {loading ? (
          <Splash onComplete={handleSplashComplete} />
        ) : (
          <div id="full-portfolio-app" className="relative flex flex-col min-h-screen">
            {/* Nav Header */}
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              openInteractiveResume={() => setIsPdfOpen(true)}
            />

            {/* Main Sections */}
            <main className="flex-1 w-full flex flex-col">
              {/* Hero Spot Section */}
              <Hero
                scrollToSection={scrollToSection}
                openInteractiveResume={() => setIsPdfOpen(true)}
              />

              {/* Skills Area */}
              <SkillsDashboard />

              {/* Work Streams */}
              <ExperienceTimeline />

              {/* Architecture Section */}
              <ProjectsGrid />

              {/* Achievements Spot Section */}
              <Achievements />
              
              {/* Simulated section anchor for Education Scroll Spy destination */}
              <div id="education" className="w-0 h-0 pointer-events-none" />
            </main>

            {/* Footer decoration */}
            <footer className="py-12 border-t border-slate-150 bg-slate-50/50 dark:border-slate-850 dark:bg-slate-950/50 tracking-wider text-center text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© 2026 Abhishek Sutrave. All Rights Reserved.</p>
                <p>Designed for complete compliance with modern cybernetic standards.</p>
              </div>
            </footer>

            {/* Downloadable / Printable PDF Canvas Modal overlay */}
            <AnimatePresence>
              {isPdfOpen && (
                <InteractivePDF onClose={() => setIsPdfOpen(false)} />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
