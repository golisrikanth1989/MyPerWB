export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education";
}

// Placeholder timeline — update years, titles and descriptions as needed.
export const timeline: TimelineEntry[] = [
  {
    year: "Present",
    title: "Postdoctoral Researcher",
    organization: "University of Luxembourg · SnT",
    description:
      "Researching 5G/6G, non-terrestrial networks and satellite communications, with experimental work on SDR platforms and open-source cellular stacks.",
    type: "work",
  },
  {
    year: "Add years",
    title: "Research Experience",
    organization: "Add organization",
    description:
      "Add a short description of prior research work, projects or roles relevant to wireless communications.",
    type: "work",
  },
  {
    year: "Add years",
    title: "Ph.D.",
    organization: "Add university",
    description: "Add a short description of your doctoral research focus and contributions.",
    type: "education",
  },
  {
    year: "Add years",
    title: "Master's Degree",
    organization: "Add university",
    description: "Add a short description of your master's studies and specialization.",
    type: "education",
  },
  {
    year: "Add years",
    title: "Bachelor's Degree",
    organization: "Add university",
    description: "Add a short description of your undergraduate studies.",
    type: "education",
  },
];
