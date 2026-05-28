import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layers, Brain, Database, Shield, Cpu, ChevronRight } from "lucide-react";
import { resumeData } from "../data";

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Group icons matching the project types
  const projectIcons = [Shield, Cpu, Layers];
  const projectGradients = [
    "from-blue-500/20 via-indigo-500/5 to-transparent",
    "from-emerald-500/20 via-teal-500/5 to-transparent",
    "from-purple-500/20 via-indigo-500/5 to-transparent"
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Background radial gradient glow */}
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Chapter header */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center space-x-2 border border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20 px-3 py-1 rounded-full mb-3">
          <Database className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-blue-300 font-bold uppercase">
            PORTFOLIO_SYSTEMS_BUILT
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Architectured Projects
        </h2>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
          Industrial-grade applications combining machine learning models, decentralized networks, and hyper-scalable frontend layouts.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((proj, idx) => {
          const IconComp = projectIcons[idx] || Layers;
          const gradientClass = projectGradients[idx] || "from-blue-500/10 to-transparent";

          return (
            <motion.div
              id={`project-card-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-7 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-850 backdrop-blur-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left cursor-default self-stretch"
            >
              {/* Top ambient color spot active on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`}
              />

              <div className="space-y-5">
                {/* Visual Accent Title */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-white rounded-2xl border border-slate-200/40 dark:border-slate-800 shadow-md">
                    <IconComp className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-wider">
                    {proj.date}
                  </span>
                </div>

                {/* Info titles */}
                <div>
                  <h3 className="text-xl font-bold font-sans tracking-tight text-slate-900 dark:text-white leading-snug">
                    {proj.title}
                  </h3>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {proj.stack.map((item, tagIdx) => (
                      <span
                        id={`project-${idx}-tag-${tagIdx}`}
                        key={tagIdx}
                        className="px-2 py-0.5 rounded-md bg-blue-500/5 dark:bg-blue-950/40 border border-blue-500/10 text-slate-500 dark:text-blue-300 text-[10px] font-mono font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subheading list bullets */}
                <ul className="space-y-3.5 pt-2">
                  {proj.bullets.map((bullet, bltIdx) => {
                    // Extract highlighting headers preceding ':'
                    const parts = bullet.split(":");
                    const hasPrefix = parts.length > 1;
                    const prefix = hasPrefix ? parts[0] + ":" : "";
                    const bodyText = hasPrefix ? parts.slice(1).join(":") : bullet;

                    return (
                      <li
                        id={`project-${idx}-bullet-${bltIdx}`}
                        key={bltIdx}
                        className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-start space-x-2 text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-55 bg-emerald-500 shrink-0 mt-2" />
                        <span>
                          {hasPrefix && (
                            <strong className="text-slate-900 dark:text-slate-200 font-semibold font-sans block mr-1 text-[13px]">
                              {prefix}
                            </strong>
                          )}
                          <span className="text-slate-500 dark:text-slate-400 text-xs">
                            {bodyText}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Action indicators */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <span className="flex items-center gap-1">
                  SYSTEM CORE ACTIVE
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-55 bg-emerald-500 animate-ping" />
                </span>
                
                <div className="flex items-center gap-1.5 group-hover:text-blue-400">
                  <span>EXPAND INFRA</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
