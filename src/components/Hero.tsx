import { motion } from "motion/react";
import { ArrowDown, FileText, Database, Shield, Zap, Terminal, Globe, ChevronRight } from "lucide-react";
import { resumeData } from "../data";

interface HeroProps {
  scrollToSection: (id: string) => void;
  openInteractiveResume: () => void;
}

export default function Hero({ scrollToSection, openInteractiveResume }: HeroProps) {
  // Define Top 3 measurable highlights strictly from his resume
  const topImpacts = [
    {
      title: "Blockchain Decentralization",
      description: "Solidity ledger registries with absolute data integrity and transparent audit trails.",
      icon: Shield,
      color: "from-blue-500 to-indigo-500",
      metric: "BLOCKCHAIN"
    },
    {
      title: "AI Medical Classification",
      description: "Designed multi-layer CNN with 98% accuracy classifying MRI digital scans.",
      icon: Zap,
      color: "from-emerald-500 to-teal-500",
      metric: "98% ACCURACY"
    },
    {
      title: "Algorithm Mastery",
      description: "Solved 300+ LeetCode problems, ranking in the top 10% for runtime and memory efficiency.",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      metric: "TOP 10%"
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Dynamic Cyber Grid Overlay in Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Label Indicator */}
          <motion.div
            id="hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 border border-blue-500/25 dark:border-blue-400/20 bg-blue-50/50 dark:bg-blue-950/20 px-3 py-1.5 rounded-full w-fit self-start shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-blue-300 font-bold uppercase">
              ACTIVE_ENV // DEVOPS & AI DEV
            </span>
          </motion.div>

          {/* Headline Title */}
          <div className="space-y-2">
            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-sans font-extrabold tracking-tight"
            >
              <span className="block text-slate-900 dark:text-white leading-tight">
                Hi, I'm
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 leading-tight">
                {resumeData.basics.name}
              </span>
            </motion.h1>

            <motion.h2
              id="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl sm:text-2xl font-mono text-slate-600 dark:text-slate-350 tracking-tight flex items-center gap-2"
            >
              <Terminal className="text-emerald-500 w-5 h-5" />
              <span>{resumeData.basics.title}</span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            id="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-xl leading-relaxed"
          >
            {resumeData.basics.summary}
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            id="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button
              id="btn-view-experience"
              onClick={() => scrollToSection("experience")}
              className="px-6 py-3.5 text-xs font-bold tracking-wider text-white bg-slate-900 rounded-2xl flex items-center justify-center gap-2 group hover:bg-black active:scale-[0.98] transition-all dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 shadow-md font-sans"
            >
              View Experience
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              id="btn-download-resume"
              onClick={openInteractiveResume}
              className="px-6 py-3.5 text-xs font-bold tracking-wider text-slate-700 border border-slate-200 hover:border-slate-300 dark:text-slate-300 dark:border-slate-800 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/40 rounded-2xl flex items-center justify-center gap-2 backdrop-blur-sm active:scale-[0.98] transition-all font-sans"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Terminal mockup / Cyber glass display */}
        <motion.div
          id="hero-system-terminal"
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-12 xl:col-span-5"
        >
          {/* High-tech System Core card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/80 backdrop-blur-xl p-6 relative">
            
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/60 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 animate-spin-slow" />
                abhishek@sutrave:~
              </span>
            </div>

            {/* Simulated Shell */}
            <div className="font-mono text-xs text-left text-slate-600 dark:text-slate-350 space-y-3.5 h-[230px] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <span className="text-emerald-500">guest@sutrave:~$</span> ./show-credentials.sh
              </div>
              
              <div className="text-[10px] text-slate-400 dark:text-slate-500 border-l border-emerald-500/30 pl-3">
                [SYSTEM DETECTED: NAVI MUMBAI, INDIA]
                <br />[CONTACT: <span className="underline select-all text-slate-500 dark:text-slate-400">{resumeData.basics.email}</span>]
                <br />[PHONE: <span className="select-all text-slate-500 dark:text-slate-400">{resumeData.basics.phone}</span>]
              </div>

              <div>
                <span className="text-emerald-500">guest@sutrave:~$</span> ./list-skills.sh --active
              </div>

              <div className="flex flex-wrap gap-1.5 pl-3">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 text-[10px] uppercase font-bold border border-blue-500/15">DevOps</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] uppercase font-bold border border-emerald-500/15">Solidity</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] uppercase font-bold border border-purple-500/15">TensorFlow</span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-500 text-[10px] uppercase font-bold border border-indigo-500/15">Flask</span>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 text-[10px] uppercase font-bold border border-amber-500/15">React/MERN</span>
              </div>

              <div>
                <span className="text-emerald-500">guest@sutrave:~$</span> ./cur-focus.py
              </div>

              <div className="pl-3 text-[10px] font-semibold text-slate-500 dark:text-slate-300">
                &gt;&gt;&gt; Expanding DevOps, Containerization, <span className="text-blue-400">AWS Cloud Architecture</span> & Kubernetes deployment automation.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top 3 Impact Strip above the fold */}
      <div className="max-w-7xl mx-auto w-full mt-16 relative z-10">
        <motion.div
          id="hero-impact-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-slate-200 bg-white/40 dark:border-slate-800 dark:bg-slate-950/40 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden"
        >
          {/* Title tag label */}
          <div className="text-[10px] font-mono tracking-[0.3em] text-blue-500 dark:text-blue-400 font-bold uppercase mb-6 text-center select-none">
            ⚡ HIGHEST MEASURED PORTFOLIO IMPACT ⚡
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topImpacts.map((imp, idx) => {
              const IconComp = imp.icon;
              return (
                <div
                  id={`impact-card-${idx}`}
                  key={idx}
                  className="flex flex-col space-y-2 p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-150 dark:border-slate-800/80 group hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all text-left relative overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${imp.color} text-white shadow-sm`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-extrabold text-blue-500 dark:text-blue-400 tracking-wider bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-full uppercase border border-blue-500/10">
                      {imp.metric}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white pt-1">
                    {imp.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {imp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Tiny downward jump assist element */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block select-none pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1 opacity-50 text-[10px] tracking-widest font-mono text-slate-400"
        >
          <span>EXPLORE MODULES</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
