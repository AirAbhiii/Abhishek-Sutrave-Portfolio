import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500; // ~1.5 seconds loading time

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min((elapsed / duration) * 100, 100);
      setProgress(calculated);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300); // Small pause for completeness feel
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="splash-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none"
      >
        {/* Subtle background tech coordinates/grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-xs w-full px-6">
          {/* Monogram / Logo Ring Indicator */}
          <div className="relative mb-8 flex items-center justify-center">
            <motion.div
              id="splash-ring"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-24 h-24 rounded-full border border-dashed border-blue-500/40"
            />
            
            <motion.div
              id="splash-outer-ring"
              initial={{ rotate: 360, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute w-28 h-28 rounded-full border border-double border-emerald-500/25"
            />
            
            <motion.div
              id="splash-monogram"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative w-20 h-20 bg-slate-900/90 rounded-full flex items-center justify-center shadow-lg border border-slate-800/80 backdrop-blur-md"
            >
              <span className="text-3xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 to-emerald-400 font-mono">
                AS
              </span>
            </motion.div>
          </div>

          {/* Subheader status */}
          <motion.div
            id="splash-status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-xs font-mono font-medium tracking-[0.25em] text-blue-400 uppercase">
              ABHISHEK SUTRAVE
            </h2>
            <p className="text-[10px] font-mono text-slate-500 tracking-widest mt-1 uppercase">
              DevOps & AI Systems Portfolio
            </p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-full bg-slate-900 h-[3px] rounded-full mt-8 overflow-hidden relative border border-slate-800">
            <motion.div
              id="splash-progress"
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-emerald-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Numerical progress */}
          <motion.div
            id="splash-percentage"
            className="text-[10px] font-mono text-slate-400 mt-2"
          >
            {Math.round(progress)}% SECURE_INITIALIZE
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
