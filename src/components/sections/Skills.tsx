import { motion } from "framer-motion";
import { Radio, CircuitBoard, Code2, Network } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/skills";

const groupIcons = [Radio, CircuitBoard, Code2, Network];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools and technologies I work with"
          description="A working toolkit across wireless standards, RF hardware, software platforms and open-source cellular stacks."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-line bg-white p-7 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{group.category}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-line bg-paper-alt px-3.5 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
