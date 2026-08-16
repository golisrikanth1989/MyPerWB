export interface BlogPost {
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

// Edit freely — connect `link` to real posts when they exist.
export const blogPosts: BlogPost[] = [
  {
    date: "Add date",
    category: "NTN",
    title: "Understanding Doppler in LEO Satellite Communications",
    description:
      "A look at how Doppler shift arises in low Earth orbit satellite links and why it matters for waveform and receiver design.",
    link: "#",
  },
  {
    date: "Add date",
    category: "5G NR",
    title: "5G NR NTN: Challenges and Opportunities",
    description:
      "Exploring the technical challenges of extending 5G New Radio to non-terrestrial networks, and where the opportunities lie.",
    link: "#",
  },
  {
    date: "Add date",
    category: "SDR",
    title: "Experiments with USRP B210",
    description:
      "Notes from hands-on experimentation with the USRP B210 software-defined radio platform for wireless research.",
    link: "#",
  },
  {
    date: "Add date",
    category: "Open Source",
    title: "OpenAirInterface for 5G NR Research",
    description:
      "Getting started with the OpenAirInterface stack for 5G NR gNB and UE experimentation.",
    link: "#",
  },
  {
    date: "Add date",
    category: "6G",
    title: "From 5G to 6G: What Changes?",
    description:
      "A researcher's perspective on the technical shifts expected as wireless systems evolve from 5G toward 6G.",
    link: "#",
  },
];
