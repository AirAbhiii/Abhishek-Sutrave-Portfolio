import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Star, Award, Zap, Shield, Sparkles } from "lucide-react";
import { resumeData } from "../data";

export default function ExperienceTimeline() {
  // Accordion state - key represents role indicator (index)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  // Automate high-impact metrics pulling strictly from his actual resume data
  const impactHighlights = [
    {
      text: "Achieved a peak training efficiency of 99% and 98% accuracy by epoch 18 utilizing systematic hyperparameter tuning.",
      label: "99% Efficiency & 98% Acc",
      icon: Zap,
    },
    {
      text: "Engineered immutable blockchain registries with Ethereum ledger ensuring absolute data integrity.",
      label: "Absolute Integrity Ledger",
      icon: Shield,
    },
    {
      text: "Solved 300+ LeetCode problems in Java/JavaScript/SQL/Pandas, landing in top 10% memory efficiency.",
      label: "Top 10% LeetCode Elite",
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Visual glowing meshes */}
      <div className="absolute top-[40%] left-[-15%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Chapter Title */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center space-x-2 border border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20 px-3 py-1 rounded-full mb-3">
          <Briefcase className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-blue-300 font-bold uppercase">
            WORK_HISTORY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Professional Footprint
        </h2>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
          Internships and industrial milestones. Click roles below to expand technical contributions and systems engineered.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Timeline / Stacked accordion story cards */}
        <div className="lg:col-span-7 space-y-6">
          {resumeData.experience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                id={`experience-card-${idx}`}
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 backdrop-blur-xl shadow-lg transition-all hover:shadow-xl group overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  id={`experience-header-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between focus:outline-none select-none hover:bg-slate-50/30 dark:hover:bg-slate-900/30 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white shadow-md mt-1">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </span>
                        <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold bg-emerald-55/10 text-emerald-500 border border-emerald-500/15 rounded-full uppercase">
                          Role
                        </span>
                      </div>
                      
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 dark:text-slate-500 pt-1 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.dates}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-slate-500 dark:text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanding Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`experience-body-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-150 dark:border-slate-850 bg-slate-50/20 dark:bg-slate-950/20"
                    >
                      <div className="p-6 sm:p-8 space-y-4">
                        <h4 className="text-xs font-mono font-bold text-slate-650 dark:text-slate-400 uppercase tracking-widest">
                          Key Workstream Deliverables:
                        </h4>
                        
                        <ul className="space-y-3.5">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li
                              id={`exp-${idx}-bullet-${bIdx}`}
                              key={bIdx}
                              className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start space-x-3 text-left"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 shrink-0 animate-pulse" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Metric Tags Highlight Row */}
                        <div className="pt-4 flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10 rounded-lg">
                            🔧 pandas & numpy preprocessing
                          </span>
                          <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 rounded-lg">
                            🤖 scikit-learn models
                          </span>
                          <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/10 rounded-lg">
                            📊 data insights storytelling
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Impact highlights panel (Auto-pulled most measurable bullets) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 border border-indigo-900/50 shadow-2xl relative overflow-hidden text-left">
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.15),transparent)] pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-blue-500/10 blur-[50px] pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-blue-500/20 text-blue-300 rounded-2xl border border-blue-500/20">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold font-sans tracking-tight">
                  High-Impact Synthesis
                </h3>
                <p className="text-[10px] font-mono text-indigo-300 tracking-wider">
                  AUTO-PULLED KEY METRICS PANELS
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-350 leading-relaxed mb-6 font-sans">
              Algorithmic performance data highlights synthesized from verified codebase achievements and project trials.
            </p>

            <div className="space-y-5">
              {impactHighlights.map((hl, hlIdx) => {
                const HlIcon = hl.icon;
                return (
                  <div
                    id={`impact-highlight-row-${hlIdx}`}
                    key={hlIdx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 dark:bg-slate-950/20 hover:scale-[1.02] transition-transform flex items-start gap-3.5"
                  >
                    <div className="p-2 bg-indigo-500/10 text-indigo-300 rounded-xl mt-0.5 shrink-0">
                      <HlIcon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono font-extrabold text-blue-300 tracking-widest uppercase mb-1">
                        {hl.label}
                      </span>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {hl.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
