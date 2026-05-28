import { motion } from "motion/react";
import { Award, CheckCircle, Trophy, BookOpen, Star, Sparkles } from "lucide-react";
import { resumeData } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Background radial gradient glow */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Achievements (Trophy cards) */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 border border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20 px-3 py-1 rounded-full mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-blue-300 font-bold uppercase">
                HONORS_AND_AWARDS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
              Key Achievements
            </h2>
            <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-2">
              Verified metric milestones reached in algorithmic computing and national engineering contests.
            </p>
          </div>

          <div className="space-y-6">
            {resumeData.achievements.map((ach, idx) => (
              <motion.div
                id={`achievement-card-${idx}`}
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group relative rounded-3xl p-6 bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-850 backdrop-blur-xl hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300 flex items-start gap-4 text-left shadow-lg"
              >
                <div className="p-3 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 text-amber-500 group-hover:scale-110 transition-transform rounded-2xl border border-amber-55 bg-amber-500/5 shadow-inner">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-sm font-bold font-mono tracking-wider text-slate-500 dark:text-amber-400 uppercase">
                    Milestone {idx === 0 ? "01 // Competitive" : "02 // Innovation"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-350 leading-relaxed font-sans">
                    {ach}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: Certifications (Clean verified list) */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 border border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20 px-3 py-1 rounded-full mb-3">
              <Award className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-blue-300 font-bold uppercase">
                ACCREDITATIONS_LIST
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Certifications
            </h2>
            <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-2">
              Verified virtual simulations and internship curricula successfully audited as technical preparation.
            </p>
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-850 backdrop-blur-xl shadow-xl space-y-6 text-left">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                id={`cert-card-${idx}`}
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex items-start gap-3.5 group pb-4 border-b border-slate-100 last:border-0 last:pb-0 dark:border-slate-850"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 text-blue-500 rounded-xl group-hover:scale-105 transition-transform border border-blue-500/10">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {cert}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Verified Curricula // Industry Standard
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
