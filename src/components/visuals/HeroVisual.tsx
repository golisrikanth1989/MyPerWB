import { motion } from "framer-motion";
import { Satellite, RadioTower, Smartphone, Cpu } from "lucide-react";
import SignalWave from "./SignalWave";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-square w-full">
        {/* backdrop grid glow */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute inset-0 rounded-[2.5rem] bg-grid-faint bg-[length:28px_28px] opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

        {/* concentric orbit rings */}
        <div className="absolute inset-[6%] rounded-full border border-line" />
        <div className="absolute inset-[16%] rounded-full border border-dashed border-line" />
        <div className="absolute inset-[30%] rounded-full border border-line/70" />

        {/* orbiting satellite */}
        <motion.div
          className="absolute inset-[6%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white text-brand-600 shadow-glow"
            >
              <Satellite size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* counter-orbit smaller node */}
        <motion.div
          className="absolute inset-[16%]"
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
            <div className="h-3 w-3 rounded-full bg-signal-cyan shadow-[0_0_0_4px_rgba(34,184,207,0.18)]" />
          </div>
        </motion.div>

        {/* central tower with pulse rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 rounded-full bg-brand-400/25 animate-pulse-ring" />
          <span
            className="absolute inset-0 rounded-full bg-brand-400/25 animate-pulse-ring"
            style={{ animationDelay: "1.1s" }}
          />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-white shadow-card">
            <RadioTower size={26} />
          </div>
        </div>

        {/* floating device chip: UE */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-3 bottom-[14%] flex items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-2 text-xs font-medium text-ink-soft shadow-card backdrop-blur"
        >
          <Smartphone size={14} className="text-brand-600" />
          UE
        </motion.div>

        {/* floating device chip: gNB */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute -right-3 top-[16%] flex items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-2 text-xs font-medium text-ink-soft shadow-card backdrop-blur"
        >
          <Cpu size={14} className="text-brand-600" />
          gNB
        </motion.div>
      </div>

      {/* signal waveform strip */}
      <div className="mt-6 rounded-2xl border border-line bg-white/80 px-4 py-3 shadow-card backdrop-blur">
        <SignalWave className="h-8 w-full" />
        <p className="mt-1 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          Signal · Waveform · NTN Link
        </p>
      </div>
    </div>
  );
}
