import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="absolute inset-0 quiet-grid opacity-60" />
      <motion.div
        className="relative w-[min(88vw,440px)] rounded-2xl border border-cyan-300/20 bg-white/[0.04] p-7 shadow-glow backdrop-blur-2xl"
        initial={{ scale: 0.94, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.38em] text-cyan-200/80">
              Initializing
            </p>
            <h1 className="mt-2 text-2xl font-black text-white">Bimun Portfolio</h1>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-100">
            BA
          </div>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between font-mono text-xs text-slate-400">
          <span>cloud | cyber | web</span>
          <span>loading</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
