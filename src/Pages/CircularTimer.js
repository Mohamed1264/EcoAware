import { Play, Pause } from "lucide-react";

const CircularTimer = ({
  duration,
  timeLeft,
  size = 100,
  strokeWidth = 8,
  onTogglePause,
  paused,
  textColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((duration - timeLeft) / duration) * circumference;

  // Calculate color based on time left
  const getColor = () => {
    if (timeLeft <= 5) return 'text-red-500';
    if (timeLeft <= 10) return 'text-yellow-500';
    return textColor || 'text-gray-700';
  };

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer"
      onClick={onTogglePause}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#e5e7eb" // Light gray background
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Circle */}
        <circle
          stroke="currentColor"
          className={getColor()}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      {/* Center Text/Icon */}
      <div className={`absolute flex items-center justify-center font-bold ${getColor()}`}>
        {paused ? <Play className="w-6 h-6" /> : <span>{timeLeft}</span>}
      </div>
    </div>
  );
};

export default CircularTimer;
