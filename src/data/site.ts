// Central place for personal / contact details.
// Replace placeholder values with your real details at any time.

export const site = {
  name: "Srikanth Goli",
  role: "Postdoctoral Researcher",
  affiliation: "University of Luxembourg · SnT",
  tagline: "5G/6G · NTN · Satellite Communications · AI",
  email: "srikanth.goli@uni.lu", // placeholder — replace with real address
  location: "Luxembourg",
  cvUrl: `${import.meta.env.BASE_URL}cv/Srikanth-Goli-CV.pdf`,
  links: {
    linkedin: "https://www.linkedin.com/in/",
    googleScholar: "https://scholar.google.com/",
    orcid: "https://orcid.org/",
    github: "https://github.com/",
    researchGate: "https://www.researchgate.net/",
    university: "https://www.uni.lu/snt-en/",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "My Learning", href: "/learning" },
  { label: "Contact", href: "#contact" },
];
