import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isDark = false }) => {
  return (
    <svg
      viewBox="0 0 300 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for M */}
      <circle
        cx="40"
        cy="40"
        r="35"
        fill={isDark ? "#15803D" : "#7C2D12"}
        className="transition-colors duration-300"
      />
      
      {/* Letter M */}
      <path
        d="M20 55V25L30 35L40 25L50 35L60 25V55H55V35L45 45L40 40L35 45L25 35V55H20Z"
        fill="#EAB308"
        stroke={isDark ? "#000" : "#FFF"}
        strokeWidth="1"
      />
      
      {/* Company Name */}
      <text
        x="85"
        y="32"
        className={`font-bold text-2xl ${isDark ? 'fill-white' : 'fill-gray-900'} transition-colors duration-300`}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        MATONDA
      </text>
      
      {/* Tagline */}
      <text
        x="85"
        y="52"
        className={`font-medium text-sm ${isDark ? 'fill-gray-300' : 'fill-gray-600'} transition-colors duration-300`}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Signs & Branding
      </text>
      
      {/* Accent line */}
      <line
        x1="85"
        y1="58"
        x2="220"
        y2="58"
        stroke="#EAB308"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;