import { Link } from "react-router-dom";
import { Linkedin, GraduationCap, Github, Fingerprint } from "lucide-react";
import Container from "../ui/Container";
import { navLinks, site } from "../../data/site";

const socials = [
  { icon: Linkedin, href: site.links.linkedin, label: "LinkedIn" },
  { icon: GraduationCap, href: site.links.googleScholar, label: "Google Scholar" },
  { icon: Github, href: site.links.github, label: "GitHub" },
  { icon: Fingerprint, href: site.links.orcid, label: "ORCID" },
];

const footerLinks = navLinks.filter((l) =>
  ["Home", "About", "Research", "Projects", "Publications", "My Learning", "Contact"].includes(
    l.label
  )
);

function linkTarget(href: string) {
  return href.startsWith("#") ? { pathname: "/", hash: href } : href;
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-alt">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-dark.png`}
                alt=""
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-2xl font-bold text-ink">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Researching the future of wireless communications.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={linkTarget(link.href)}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Connect
            </h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:text-ink"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
