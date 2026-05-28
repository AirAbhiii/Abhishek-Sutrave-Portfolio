import { motion } from "motion/react";
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from "lucide-react";
import { resumeData } from "../data";

interface InteractivePDFProps {
  onClose: () => void;
}

export default function InteractivePDF({ onClose }: InteractivePDFProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      id="interactive-pdf-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto print:p-0 print:bg-white"
    >
      <div className="relative max-w-4xl w-full flex flex-col h-[90vh] print:h-auto print:max-w-full bg-white rounded-3xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 print:hidden shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500">
              SECURE_PRINT_RENDERER // PROPORTIONAL A4
            </h3>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Print trigger */}
            <button
              id="pdf-print-action"
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-bold font-mono tracking-wider text-slate-700 hover:text-slate-900 border border-slate-200 bg-white rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-all select-none active:scale-95"
            >
              <Printer className="w-4 h-4 text-emerald-505 text-emerald-600" />
              PRINT TO PDF
            </button>

            {/* Close Overlay */}
            <button
              id="pdf-close-btn"
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Canvas Container */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 md:px-16 print:overflow-visible print:p-0 select-text">
          {/* Main Resume Worksheet A4 Lookalike */}
          <div className="max-w-[800px] mx-auto text-left text-slate-800 font-sans leading-relaxed">
            
            {/* Header section */}
            <div className="border-b-2 border-slate-900 pb-5 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                  {resumeData.basics.name}
                </h1>
                <p className="text-sm md:text-base font-mono font-bold text-slate-600 mt-1 uppercase tracking-wider">
                  {resumeData.basics.title}
                </p>
              </div>

              {/* Contacts */}
              <div className="flex flex-col space-y-1.5 md:items-end text-xs text-slate-650 font-mono">
                <span className="flex items-center gap-1.5 justify-end">
                  <Phone className="w-3.5 h-3.5" />
                  {resumeData.basics.phone}
                </span>
                <span className="flex items-center gap-1.5 justify-end">
                  <Mail className="w-3.5 h-3.5" />
                  {resumeData.basics.email}
                </span>
                <span className="flex items-center gap-1.5 justify-end">
                  <MapPin className="w-3.5 h-3.5" />
                  {resumeData.basics.location}
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <a href={resumeData.basics.links.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-slate-900">LinkedIn</a>
                  <span>|</span>
                  <a href={resumeData.basics.links.github} target="_blank" rel="noreferrer" className="underline hover:text-slate-900">GitHub</a>
                  <span>|</span>
                  <a href={resumeData.basics.links.leetcode} target="_blank" rel="noreferrer" className="underline hover:text-slate-900">LeetCode</a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{edu.institution}</h3>
                      <p className="text-xs text-slate-600">{edu.degree}, {edu.detail}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-600">
                      <p className="font-semibold">{edu.location}</p>
                      <p>{edu.dates}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework / Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Coursework / Skills
              </h2>
              <p className="text-xs text-slate-700 leading-normal font-mono">
                {resumeData.coursework.join(", ")}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700 font-sans">
                <p>
                  <strong>Languages:</strong> {resumeData.technicalSkills.languages.join(", ")}
                </p>
                <p>
                  <strong>Libraries/Tools:</strong> {resumeData.technicalSkills.librariesTools.join(", ")}
                </p>
                <p>
                  <strong>Technologies/Frameworks:</strong> {resumeData.technicalSkills.technologiesFrameworks.join(", ")}
                </p>
              </div>
            </div>

            {/* Internship Section */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                Internship
              </h2>
              {resumeData.experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{exp.company}</h3>
                      <p className="text-xs text-slate-755 text-slate-650 font-semibold">{exp.role}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-600">
                      <p className="font-semibold">{exp.location}</p>
                      <p>{exp.dates}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] sm:text-xs text-slate-700">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-left leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                Projects
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start mb-1.5">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {proj.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-slate-600 font-mono">
                          {proj.stack.join(", ")}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-slate-600">
                        {proj.date}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] sm:text-xs text-slate-700">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-left leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Achievements
              </h2>
              <ul className="list-disc list-inside space-y-1.5 pl-1 text-[11px] sm:text-xs text-slate-705 text-slate-700">
                {resumeData.achievements.map((ach, idx) => (
                  <li key={idx} className="text-left leading-relaxed">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Section */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] sm:text-xs text-slate-700">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="text-left leading-normal font-medium">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}
