import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, FileText, Briefcase, GraduationCap, Award, BrainCircuit, Layers } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
  openInteractiveResume: () => void;
}

export default function Navbar({
  darkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection,
  openInteractiveResume,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Overview", icon: Layers },
    { id: "skills", label: "Skills & Core", icon: BrainCircuit },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Award },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/75 dark:bg-slate-950/75 bg-white/75 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              AS
            </div>
            <div>
              <span className="block text-sm font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 font-sans">
                Abhishek Sutrave
              </span>
              <span className="block text-[9px] font-mono text-slate-500 dark:text-blue-400 font-bold uppercase tracking-widest leading-none">
                DevOps & AI Architect 
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 focus:outline-none ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-900/40"
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Interactive Resume Page CTA */}
            <button
              id="cta-resume-navbar"
              onClick={openInteractiveResume}
              className="px-4 py-2 text-xs font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 rounded-xl flex items-center gap-2 shadow-md hover:shadow-emerald-500/20 active:scale-95 transition-all focus:outline-none"
            >
              <FileText className="w-3.5 h-3.5" />
              Interactive PDF
            </button>

            {/* Dark Mode Switcher */}
            <button
              id="theme-toggler-navbar"
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-800" />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Interactive PDF */}
            <button
              id="mobile-resume-pdf-btn"
              onClick={openInteractiveResume}
              className="p-2.5 rounded-xl text-white bg-gradient-to-tr from-blue-600 to-emerald-500 shadow-md"
              aria-label="Interactive PDF Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            {/* Dark Toggle */}
            <button
              id="mobile-theme-toggle"
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Burger */}
            <button
              id="mobile-menu-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-35 bg-white dark:bg-slate-950 border-b border-slate-250 dark:border-slate-850 lg:hidden shadow-xl"
          >
            <nav className="p-6 flex flex-col space-y-3">
              {navItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <button
                    id={`mobile-nav-link-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToSection(item.id);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wider flex items-center gap-3 ${
                      activeSection === item.id
                        ? "text-blue-500 bg-blue-50/75 dark:bg-blue-950/50"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    <IconComp className="w-4 h-4 text-blue-400" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
