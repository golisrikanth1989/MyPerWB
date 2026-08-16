import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}
