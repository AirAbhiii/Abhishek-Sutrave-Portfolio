import { motion } from "motion/react";
import { Cpu, Terminal, Shield, Library, ListTodo, Wrench, Layers } from "lucide-react";
import { resumeData } from "../data";

export default function SkillsDashboard() {
  const categories = [
    {
      title: "Core Languages",
      icon: Terminal,
      color: "from-blue-600 to-indigo-500",
      skills: resumeData.technicalSkills.languages,
      description: "Fundamental procedural, object-oriented, and querying systems."
    },
    {
      title: "Libraries & Analysis",
      icon: Cpu,
      color: "from-emerald-500 to-teal-500",
      skills: resumeData.technicalSkills.librariesTools,
      description: "Data analysis, machine learning algorithms, and high-performance vision pipelines."
    },
    {
      title: "Frameworks & Engine Platforms",
      icon: Layers,
      color: "from-violet-500 to-purple-500",
      skills: resumeData.technicalSkills.technologiesFrameworks,
      description: "Full-stack client-server ecosystems, databases, and microservice stacks."
    },
    {
      title: "Professional Coursework / Concepts",
      icon: Library,
      color: "from-amber-500 to-orange-500",
      skills: resumeData.coursework,
      description: "Theoretical, algebraic, and structural principles of computer architecture."
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Background radial gradient glow */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-505/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Chapter header */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center space-x-2 border border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20 px-3 py-1 rounded-full mb-3">
          <Cpu className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-blue-300 font-bold uppercase">
            ENG_CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Technical Stack & Skills
        </h2>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
          Comprehensive summary of my analytical engineering capacity, full-stack tools, and aspiring devops practices.
        </p>
      </div>

      {/* Bento-style Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <motion.div
              id={`skills-category-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl p-6 md:p-8 bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 backdrop-blur-xl hover:border-blue-500/20 dark:hover:border-blue-500/20 shadow-xl transition-all hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${cat.color} text-white shadow-md`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Category {idx + 1} // System
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      id={`skill-tag-${idx}-${sIdx}`}
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-50 hover:bg-slate-100 border border-slate-150 text-slate-700 dark:bg-slate-950/80 dark:hover:bg-slate-900/80 dark:border-slate-850 dark:text-slate-350 dark:hover:text-white transition-all hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Tech line at bottom */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-[1.5px] rounded-full mt-8 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[45%] rounded-full group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
