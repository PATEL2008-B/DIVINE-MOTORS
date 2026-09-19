import { FC } from 'react';

interface DivineLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showLocation?: boolean;
  className?: string;
}

export const DivineLogo: FC<DivineLogoProps> = ({
  size = 'md',
  showText = true,
  showLocation = true,
  className = '',
}) => {
  // Dimensions based on size
  const badgeSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const titleSizeMap = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Chrome & Electric Cyan Automotive Emblem */}
      <div className={`relative ${badgeSizeMap[size]} flex-shrink-0 group`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,229,255,0.45)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Chrome Gradient */}
            <linearGradient id="dm-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="75%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Dark Metallic Inner Gradient */}
            <linearGradient id="dm-inner-shield" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#080d1a" />
              <stop offset="100%" stopColor="#03060d" />
            </linearGradient>

            {/* Electric Blue Cyan Glow Accent */}
            <linearGradient id="dm-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            
            {/* Chrome Border Highlights */}
            <linearGradient id="dm-border-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Outer Hexagonal Automotive Shield */}
          <path
            d="M50 4 L88 22 L88 64 L50 96 L12 64 L12 22 Z"
            fill="url(#dm-inner-shield)"
            stroke="url(#dm-border-bevel)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Inset Rim */}
          <path
            d="M50 11 L81 26 L81 60 L50 88 L19 60 L19 26 Z"
            fill="none"
            stroke="#1e293b"
            strokeWidth="1.2"
          />

          {/* Cyan Energy Horizon Pulse Line */}
          <line
            x1="22"
            y1="50"
            x2="78"
            y2="50"
            stroke="url(#dm-cyan)"
            strokeWidth="1"
            strokeDasharray="4 2"
            opacity="0.6"
          />

          {/* The Custom "DM" Monogram Symbol */}
          {/* Futuristic 'D' Curve on Left */}
          <path
            d="M26 30 L43 30 C54 30 58 38 58 50 C58 62 54 70 43 70 L26 70 Z"
            fill="none"
            stroke="url(#dm-chrome)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* D Inner Core */}
          <path
            d="M34 38 L42 38 C48 38 50 43 50 50 C50 57 48 62 42 62 L34 62 Z"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Futuristic 'M' Wings overlapping into the D */}
          <path
            d="M44 70 L53 36 L64 54 L75 36 L84 70"
            fill="none"
            stroke="url(#dm-chrome)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Crown Diamond Vertex */}
          <polygon
            points="50,16 53,22 50,25 47,22"
            fill="#00e5ff"
          />
        </svg>
      </div>

      {/* Brand Text Block */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-heading font-black tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_14px_rgba(0,229,255,0.4)] ${titleSizeMap[size]}`}>
              DIVINE
            </span>
            <span className={`font-heading font-extrabold tracking-[0.14em] text-white ${titleSizeMap[size]}`}>
              MOTORS
            </span>
          </div>

          {showLocation && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[9px] sm:text-[10px] font-tech tracking-[0.28em] text-cyan-400 font-semibold uppercase">
                AHMEDABAD • GUJARAT
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DivineLogo;
