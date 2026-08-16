import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import Badge from "../ui/Badge";
import type { Project } from "../../data/projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-line bg-white p-8 shadow-card-hover sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:bg-paper-alt hover:text-ink"
            >
              <X size={16} />
            </button>

            <span className="font-mono text-xs font-medium text-brand-600">
              {project.number}
            </span>
            <h3 className="mt-2 text-balance text-2xl font-semibold text-ink sm:text-3xl">
              {project.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <p className="mt-6 text-balance leading-relaxed text-ink-soft">
              {project.details}
            </p>

            <div className="mt-7 space-y-3">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" />
                  <span className="text-sm text-ink-soft">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
