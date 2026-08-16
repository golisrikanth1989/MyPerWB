import type { LucideIcon } from "lucide-react";
import { GraduationCap, FlaskConical, Radio, Satellite, Sparkles } from "lucide-react";

export interface JourneyStep {
  icon: LucideIcon;
  label: string;
}

export const journeySteps: JourneyStep[] = [
  { icon: GraduationCap, label: "Education" },
  { icon: FlaskConical, label: "Research" },
  { icon: Radio, label: "5G" },
  { icon: Satellite, label: "NTN" },
  { icon: Sparkles, label: "6G" },
];
