import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { journeySteps } from "../../data/journey";

export default function Journey() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="My Research Journey"
          title="From foundations to future networks"
          description="Each stage builds on the last — grounding 6G research in a solid path through education, experimentation and standards-driven work."
        />

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-2">
            {journeySteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 sm:contents">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-6 py-6 text-center shadow-card sm:w-40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <step.icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-ink">{step.label}</span>
                </motion.div>

                {i < journeySteps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="hidden shrink-0 text-line sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
