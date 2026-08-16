export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Wireless Communications",
    skills: ["5G NR", "6G", "NTN", "OFDM", "SC-FDMA", "RPDMA", "PHY/MAC"],
  },
  {
    category: "SDR & RF",
    skills: [
      "USRP B210",
      "USRP X310",
      "Software Defined Radio",
      "RF Testing",
      "Spectrum Analyzer",
      "Signal Generator",
    ],
  },
  {
    category: "Software",
    skills: ["MATLAB", "Python", "C/C++", "Linux", "Git"],
  },
  {
    category: "5G/Network Platforms",
    skills: ["OpenAirInterface", "srsRAN", "Open5GS", "free5GC", "UERANSIM"],
  },
];
