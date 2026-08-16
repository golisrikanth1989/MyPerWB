import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Radio } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { navLinks, site } from "../../data/site";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  const hashIds = navLinks
    .filter((l) => l.href.startsWith("#"))
    .map((l) => l.href.slice(1));
  const activeId = useScrollSpy(hashIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function linkTarget(href: string) {
    return href.startsWith("#") ? { pathname: "/", hash: href } : href;
  }

  function isLinkActive(href: string) {
    return href.startsWith("#")
      ? isHomeRoute && activeId === href.slice(1)
      : location.pathname === href;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-b border-line shadow-[0_1px_0_rgba(14,20,32,0.03)]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          to={linkTarget("#home")}
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white transition-transform duration-300 group-hover:rotate-6">
            <Radio className="h-4.5 w-4.5" size={18} />
          </span>
          <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
            Srikanth Goli
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                to={linkTarget(link.href)}
                className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-paper-alt"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.cvUrl} variant="primary" download icon={<Download size={15} />}>
            Download CV
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={linkTarget(link.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink-soft transition-colors hover:bg-paper-alt hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-4">
                <Button
                  href={site.cvUrl}
                  variant="primary"
                  download
                  icon={<Download size={15} />}
                  className="w-full"
                >
                  Download CV
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
