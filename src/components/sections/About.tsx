import { motion } from "framer-motion";
import { CheckCircle2, Download, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { site } from "../../data/site";

const focusAreas = [
  "5G NR",
  "Beyond 5G / 6G",
  "Non-Terrestrial Networks",
  "LEO/GEO Satellite Communications",
  "Software Defined Radio",
  "Machine Learning for Communications",
  "PHY/MAC Layer Research",
  "Open-Source Cellular Networks",
];

const stats = [
  { label: "5G/6G Research" },
  { label: "NTN" },
  { label: "SDR" },
  { label: "Open Source" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-[2rem] border border-dashed border-line" />
              {/* Portrait photo — served from public/images/portrait.jpg */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br from-ink to-brand-800 shadow-card">
                <img
                  src={`${import.meta.env.BASE_URL}images/portrait.jpg`}
                  alt="Srikanth Goli"
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 -top-5 rounded-2xl border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-card"
              >
                Postdoctoral Researcher
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute -bottom-5 -left-5 rounded-2xl border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-card"
              >
                University of Luxembourg · SnT
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-alt px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                About Me
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-ink sm:text-4xl">
                I work at the intersection of wireless communications, satellite networks and
                intelligent communication systems.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
                I am a researcher working at the intersection of wireless communications,
                satellite networks, and intelligent communication systems. My work spans
                theoretical investigation and hands-on experimentation, connecting standards,
                signal processing and real hardware.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="shrink-0 text-brand-500" />
                    <span className="text-sm text-ink-soft">{area}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#research" variant="primary" icon={<ArrowUpRight size={16} />}>
                  Read More
                </Button>
                <Button href={site.cvUrl} variant="secondary" download icon={<Download size={16} />}>
                  Download CV
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-line pt-8 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-sm font-semibold text-ink">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
