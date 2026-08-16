import { ExternalLink, GraduationCap, Fingerprint, Users } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { publications } from "../../data/publications";
import { site } from "../../data/site";

export default function Publications() {
  return (
    <section id="publications" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected Publications"
            title="Recent research output"
            description="Placeholder entries shown below — replace with real titles, authors and links as they are published."
          />
          <div className="flex flex-wrap gap-3">
            <Button href={site.links.googleScholar} variant="secondary" icon={<GraduationCap size={15} />}>
              Google Scholar
            </Button>
            <Button href={site.links.orcid} variant="secondary" icon={<Fingerprint size={15} />}>
              ORCID
            </Button>
            <Button href={site.links.researchGate} variant="secondary" icon={<Users size={15} />}>
              ResearchGate
            </Button>
          </div>
        </div>

        <div className="mt-14 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-7 transition-colors hover:bg-paper-alt sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="min-w-0">
                  <p className="text-balance text-base font-semibold text-ink sm:text-lg">
                    {pub.title}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{pub.authors}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
                    {pub.venue} · {pub.year}
                  </p>
                </div>
                <div className="shrink-0">
                  <Button href={pub.link} variant="secondary" icon={<ExternalLink size={14} />}>
                    View Paper
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
