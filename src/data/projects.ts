export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  highlights: string[];
}

// Edit this array to add, remove or update featured research projects.
export const projects: Project[] = [
  {
    id: "sitara",
    number: "01",
    title: "SiTARA – 6G MOMC Non-Terrestrial Access",
    description:
      "Research on sixth-generation multi-orbit/multi-connectivity non-terrestrial access using advanced sequence and waveform concepts.",
    details:
      "This work investigates multi-orbit, multi-connectivity (MOMC) access schemes for 6G non-terrestrial networks, exploring how sequence design and waveform choices can support reliable access across LEO and GEO satellite links operating alongside terrestrial 5G/6G infrastructure.",
    tags: ["6G", "NTN", "LEO", "GEO", "Waveforms"],
    highlights: [
      "Multi-orbit / multi-connectivity access design",
      "Sequence and waveform investigation for 6G NTN",
      "Integration considerations with terrestrial access",
    ],
  },
  {
    id: "5g-nr-ntn-platform",
    number: "02",
    title: "5G NR NTN Experimental Platform",
    description:
      "Experimental 5G NR NTN platform using open-source cellular software, SDR hardware and channel emulation.",
    details:
      "An experimental testbed combining open-source 5G NR software stacks with SDR hardware and channel emulation to study non-terrestrial network behaviour under realistic satellite propagation conditions.",
    tags: ["5G NR", "OAI", "USRP", "NTN"],
    highlights: [
      "End-to-end 5G NR NTN testbed",
      "SDR-based RF front end",
      "Channel emulation for satellite propagation",
    ],
  },
  {
    id: "oai-5g-nr-experiments",
    number: "03",
    title: "OpenAirInterface 5G NR Experiments",
    description:
      "Experimental investigation of 5G NR gNB and UE operation using software-defined radio platforms.",
    details:
      "Hands-on experimentation with the OpenAirInterface (OAI) 5G NR stack, covering gNB and UE operation on SDR platforms to explore protocol behaviour, radio configuration and over-the-air performance.",
    tags: ["OAI", "5G NR", "SDR", "RF"],
    highlights: [
      "gNB / UE operation with OAI",
      "SDR-based over-the-air testing",
      "RF configuration and validation",
    ],
  },
  {
    id: "ntn-channel-emulation",
    number: "04",
    title: "NTN Channel Emulation",
    description:
      "Experimental evaluation of GEO and LEO satellite communication scenarios including propagation delay and Doppler effects.",
    details:
      "Emulation and evaluation of GEO and LEO satellite channel conditions, capturing propagation delay, Doppler shift and other link characteristics relevant to non-terrestrial network research.",
    tags: ["LEO", "GEO", "Channel Emulator", "Doppler"],
    highlights: [
      "GEO and LEO scenario emulation",
      "Propagation delay and Doppler modelling",
      "Link-level evaluation for NTN research",
    ],
  },
];
