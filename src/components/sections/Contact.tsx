import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  GraduationCap,
  Github,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { site } from "../../data/site";

const contactLinks = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Linkedin, label: "LinkedIn", href: site.links.linkedin },
  { icon: GraduationCap, label: "Google Scholar", href: site.links.googleScholar },
  { icon: Github, label: "GitHub", href: site.links.github },
  { icon: Building2, label: "University Profile", href: site.links.university },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend is wired up yet — connect this to an email/API service
    // (e.g. Formspree, a serverless function) to actually deliver messages.
    setStatus("success");
    setForm(initialForm);
  }

  const fields: { key: keyof FormState; label: string; type?: string; textarea?: boolean }[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email", type: "email" },
    { key: "subject", label: "Subject" },
    { key: "message", label: "Message", textarea: true },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-alt px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-ink sm:text-4xl">
                Let&apos;s Connect
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-md text-balance leading-relaxed text-ink-soft">
                Interested in wireless communications, NTN, 5G/6G research or collaboration?
                Feel free to get in touch.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 text-sm font-medium text-ink-soft shadow-card transition-all hover:-translate-y-0.5 hover:text-ink"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-alt text-ink">
                      <link.icon size={16} />
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.key}
                    className={field.textarea ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field.key}
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint"
                    >
                      {field.label}
                    </label>
                    {field.textarea ? (
                      <textarea
                        id={field.key}
                        rows={5}
                        value={form[field.key]}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className={`w-full resize-none rounded-xl border bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand-400 focus:bg-white ${
                          errors[field.key] ? "border-red-300" : "border-line"
                        }`}
                        placeholder="Tell me a little about what you'd like to discuss..."
                      />
                    ) : (
                      <input
                        id={field.key}
                        type={field.type ?? "text"}
                        value={form[field.key]}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className={`w-full rounded-xl border bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand-400 focus:bg-white ${
                          errors[field.key] ? "border-red-300" : "border-line"
                        }`}
                        placeholder={field.label}
                      />
                    )}
                    {errors[field.key] && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle size={12} />
                        {errors[field.key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-700 sm:w-auto"
              >
                Send Message
                <Send size={15} />
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-signal-teal"
                >
                  <CheckCircle2 size={16} />
                  Thanks — your message has been captured. I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
