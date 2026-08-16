interface SignalWaveProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export default function SignalWave({
  className = "",
  color = "#3A64E0",
  strokeWidth = 2,
}: SignalWaveProps) {
  return (
    <svg
      viewBox="0 0 600 60"
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 C 25 5, 50 5, 75 30 C 100 55, 125 55, 150 30 C 175 5, 200 5, 225 30 C 250 55, 275 55, 300 30 C 325 5, 350 5, 375 30 C 400 55, 425 55, 450 30 C 475 5, 500 5, 525 30 C 550 55, 575 55, 600 30"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="6 8"
        className="animate-dash-flow"
      />
    </svg>
  );
}
