import type { LucideIcon } from "lucide-react";
import { Radio, Satellite, BrainCircuit, CircuitBoard } from "lucide-react";

export interface ResearchArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const researchAreas: ResearchArea[] = [
  {
    icon: Radio,
    title: "5G & 6G Networks",
    description:
      "Research on next-generation cellular architectures, radio access networks, PHY-layer techniques and future wireless systems.",
  },
  {
    icon: Satellite,
    title: "Non-Terrestrial Networks",
    description:
      "Research on satellite-assisted communications, LEO/GEO systems, Doppler compensation, timing advance and NTN integration.",
  },
  {
    icon: BrainCircuit,
    title: "AI for Communications",
    description:
      "Machine learning and intelligent algorithms for optimizing wireless communication systems.",
  },
  {
    icon: CircuitBoard,
    title: "Software Defined Radio",
    description:
      "Experimental wireless research using SDR platforms, USRP devices and open-source cellular stacks.",
  },
];
