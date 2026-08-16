import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { researchAreas } from "../../data/research";

export default function Research() {
  return (
    <section id="research" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What I Research"
          title="Four connected areas of research"
          description="My work moves between theory, simulation and real hardware — spanning next-generation radio access, satellite integration, intelligence in the network, and open experimentation."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-brand-600">
                <area.icon size={22} />
              </div>

              <h3 className="relative mt-6 text-lg font-semibold text-ink">{area.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">
                {area.description}
              </p>

              <div className="relative mt-6 flex items-center gap-1.5 text-xs font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more <ArrowUpRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
