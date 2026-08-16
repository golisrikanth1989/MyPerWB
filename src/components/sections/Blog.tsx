import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { blogPosts } from "../../data/blog";

export default function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Research Notes"
          title="Writing on wireless systems"
          description="Short, practical notes from ongoing research and experimentation — easy to expand into full posts."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between gap-2">
                <Badge>{post.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-ink-faint">
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>

              <h3 className="mt-5 text-balance text-base font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {post.description}
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
      </Container>
    </section>
  );
}
