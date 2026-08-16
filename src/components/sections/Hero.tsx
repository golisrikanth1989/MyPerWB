import { motion } from "framer-motion";
import { ArrowRight, Download, Radio } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroVisual from "../visuals/HeroVisual";
import { site } from "../../data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:44px_44px] opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-100/60 blur-3xl" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-brand-600 shadow-card"
          >
            <Radio size={13} />
            {site.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Advancing Wireless Communications{" "}
            <span className="bg-gradient-to-r from-brand-600 to-signal-cyan bg-clip-text text-transparent">
              Beyond 5G
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 font-display text-xl font-semibold text-ink sm:text-2xl"
          >
            {site.name}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-2 font-mono text-sm text-ink-soft sm:text-[15px]"
          >
            {site.role} · 5G/6G · NTN · Satellite Communications · AI
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            I work on next-generation wireless communication systems, with a focus on 5G/6G
            networks, non-terrestrial networks, satellite communications, software-defined
            radio, and intelligent communication systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <Button href="#research" variant="primary" icon={<ArrowRight size={16} />}>
              Explore My Research
            </Button>
            <Button href={site.cvUrl} variant="secondary" download icon={<Download size={16} />}>
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
