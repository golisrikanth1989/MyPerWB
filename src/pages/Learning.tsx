import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import { myLearnings, myActivities, type LearningItem } from "../data/learning";

function LearningGrid({ items }: { items: LearningItem[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.a
          key={item.title + i}
          href={item.link}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5 }}
          className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <div className="flex items-center justify-between gap-2">
            <Badge>{item.category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-ink-faint">
              <Calendar size={12} />
              {item.date}
            </span>
          </div>

          <h3 className="mt-5 text-balance text-base font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700">
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
            {item.description}
          </p>

          <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-ink">
            Read More
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default function Learning() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <SectionHeading
          eyebrow="My Learning"
          title="Learnings & activities"
          description="A running log of things I've learned and things I've been part of — each card links out to the full write-up."
        />
      </Container>

      <Container className="mt-16">
        <h2 className="text-xl font-semibold text-ink sm:text-2xl">My Learnings</h2>
        <LearningGrid items={myLearnings} />
      </Container>

      <Container className="mt-20">
        <h2 className="text-xl font-semibold text-ink sm:text-2xl">My Activities</h2>
        <LearningGrid items={myActivities} />
      </Container>
    </div>
  );
}
