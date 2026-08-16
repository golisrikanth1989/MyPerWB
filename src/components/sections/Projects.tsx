import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Satellite, RadioTower, Cpu, Waves } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../../data/projects";

const visualIcons = [Satellite, RadioTower, Cpu, Waves];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Research"
          title="Selected research projects"
          description="A closer look at experimental and conceptual work spanning 6G non-terrestrial access, 5G NR testbeds, and satellite channel emulation."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = visualIcons[i % visualIcons.length];
            return (
              <motion.button
                key={project.id}
                onClick={() => setActive(project)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group text-left"
              >
                <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-paper-alt to-brand-50">
                    <div className="absolute inset-0 bg-grid-faint bg-[length:24px_24px] opacity-40" />
                    <span className="absolute left-6 top-6 font-mono text-xs font-semibold text-brand-600">
                      {project.number}
                    </span>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-20 w-20 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-card transition-colors duration-300 group-hover:text-brand-600"
                    >
                      <Icon size={32} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-ink">
                      View project details
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
