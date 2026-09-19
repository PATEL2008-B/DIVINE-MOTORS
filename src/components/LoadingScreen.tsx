import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DivineLogo } from './DivineLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 400);
          }, 300);
          return 100;
        }
        // Swift, high-tech progression
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04060a] text-white select-none overflow-hidden"
        >
          {/* Subtle background ambient blue glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Custom Divine Motors Automotive Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center mb-8 text-center"
          >
            <DivineLogo size="xl" showText={false} />

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-2xl md:text-3xl font-heading font-extrabold tracking-[0.25em] text-white uppercase"
            >
              DIVINE MOTORS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-1 text-xs font-tech tracking-[0.3em] text-cyan-400/90 uppercase"
            >
              REPAIR • UPGRADE • DRIVE • AHMEDABAD
            </motion.p>
          </motion.div>

          {/* Loading bar & percentage */}
          <div className="w-64 max-w-[80vw] flex flex-col items-center">
            <div className="w-full h-[3px] bg-neutral-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="w-full flex justify-between items-center mt-3 text-[11px] font-tech text-neutral-400">
              <span className="tracking-widest uppercase text-neutral-400">INITIALIZING SYSTEMS</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
