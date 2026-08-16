import { motion } from "framer-motion";
import { Satellite, Link2, RadioTower, Server, Smartphone } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";

const nodes = [
  { icon: Satellite, label: "Satellite" },
  { icon: Link2, label: "NTN Link" },
  { icon: RadioTower, label: "5G gNB" },
  { icon: Server, label: "Core Network" },
  { icon: Smartphone, label: "UE" },
];

const parameters = ["LEO / GEO", "Doppler", "Propagation Delay", "Timing Advance", "5G NR"];

function Connector({ index }: { index: number }) {
  return (
    <div className="relative flex items-center justify-center py-2 lg:flex-1 lg:py-0">
      {/* vertical connector (mobile) */}
      <div className="relative h-10 w-px overflow-hidden bg-line lg:hidden">
        <motion.div
          className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-brand-500 to-transparent"
          animate={{ y: ["-100%", "300%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
        />
      </div>
      {/* horizontal connector (desktop) */}
      <div className="relative hidden h-px w-full overflow-hidden bg-line lg:block">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
        />
      </div>
    </div>
  );
}

export default function ArchitectureVisualization() {
  return (
    <section className="border-y border-line bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="System View"
          title="How the pieces connect"
          description="A simplified view of the end-to-end chain my research touches — from orbit down to the device."
        />

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-stretch rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10 lg:flex-row lg:items-center">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex flex-col items-center lg:flex-1">
                {i > 0 && <Connector index={i} />}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-paper-alt px-6 py-5 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                    <node.icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-ink">{node.label}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {parameters.map((param) => (
              <Badge key={param} className="bg-paper-alt">
                {param}
              </Badge>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
