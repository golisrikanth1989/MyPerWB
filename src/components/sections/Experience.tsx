import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { timeline } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience & Education"
          title="Research journey so far"
          description="From foundational studies to current postdoctoral research in next-generation wireless systems."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-line sm:left-[13px]" />

          <div className="space-y-10">
            {timeline.map((entry, i) => {
              const Icon = entry.type === "work" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={`${entry.title}-${i}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-0 flex h-[19px] w-[19px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-500 shadow-[0_0_0_3px_rgba(58,100,224,0.15)] sm:-left-10 sm:h-[27px] sm:w-[27px]">
                    <Icon size={12} className="hidden text-white sm:block" strokeWidth={2.5} />
                  </span>

                  <div className="rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-ink sm:text-lg">
                        {entry.title}
                      </h3>
                      <span className="rounded-full bg-paper-alt px-3 py-1 font-mono text-xs font-medium text-ink-soft">
                        {entry.year}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-brand-600">
                      {entry.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
