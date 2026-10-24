interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'dark', className = '', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const subtitleColor = variant === 'light' ? 'text-mint-300' : 'text-mint-600';

  return (
    <a href="#top" className={`flex items-center gap-3 group ${className}`} aria-label="FoodNova Consulting home">
      {/* Atomic Lightbulb with Leaf & Cutlery core emblem */}
      <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-navy p-1 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id="logoBulbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#42DFA8" stop-opacity="1"/>
              <stop offset="60%" stop-color="#42DFA8" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#211747" stop-opacity="0"/>
            </radialGradient>
          </defs>

          {/* Glow */}
          <ellipse cx="250" cy="230" rx="90" ry="100" fill="url(#logoBulbGlow)" />

          {/* Atomic Orbits (3 intersecting elliptical rings) */}
          <ellipse cx="250" cy="230" rx="190" ry="68" fill="none" stroke="#42DFA8" strokeWidth="6" transform="rotate(-15 250 230)" />
          <ellipse cx="250" cy="230" rx="190" ry="68" fill="none" stroke="#42DFA8" strokeWidth="6" transform="rotate(45 250 230)" />
          <ellipse cx="250" cy="230" rx="190" ry="68" fill="none" stroke="#42DFA8" strokeWidth="6" transform="rotate(105 250 230)" />

          {/* Atomic Orbit Electrons */}
          <circle cx="260" cy="85" r="10" fill="#42DFA8" />
          <circle cx="240" cy="375" r="10" fill="#42DFA8" />
          <circle cx="95" cy="170" r="10" fill="#42DFA8" />
          <circle cx="405" cy="290" r="10" fill="#42DFA8" />
          <circle cx="80" cy="255" r="10" fill="#42DFA8" />
          <circle cx="420" cy="205" r="10" fill="#42DFA8" />

          {/* Central Scientific Lightbulb */}
          <path d="M195 215 C195 170, 220 145, 250 145 C280 145, 305 170, 305 215 C305 238, 290 258, 280 272 L280 288 C280 292, 276 295, 272 295 L228 295 C224 295, 220 292, 220 288 L220 272 C210 258, 195 238, 195 215 Z" 
                fill="#42DFA8" stroke="#42DFA8" strokeWidth="4" strokeLinejoin="round" />

          {/* Bulb Screw Base */}
          <path d="M224 304 L276 304" stroke="#42DFA8" strokeWidth="7" strokeLinecap="round" />
          <path d="M228 315 L272 315" stroke="#42DFA8" strokeWidth="7" strokeLinecap="round" />
          <path d="M236 325 C236 330, 264 330, 264 325" stroke="#42DFA8" strokeWidth="7" strokeLinecap="round" fill="none" />

          {/* Inner Core Window (Navy) */}
          <circle cx="250" cy="218" r="40" fill="#211747" />

          {/* Sprouting Leaf */}
          <path d="M228 232 C226 200, 240 182, 268 185 C264 193, 258 198, 246 200 C240 208, 235 220, 232 232 Z" fill="#42DFA8" />
          <path d="M256 186 C266 180, 274 183, 276 190 C269 194, 262 193, 256 186 Z" fill="#42DFA8" />

          {/* Fork & Spoon */}
          <path d="M242 225 L242 245" stroke="#42DFA8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M238 214 L238 221 C238 224, 246 224, 246 221 L246 214" fill="none" stroke="#42DFA8" strokeWidth="2" strokeLinecap="round" />
          <line x1="242" y1="214" x2="242" y2="222" stroke="#42DFA8" strokeWidth="2" strokeLinecap="round" />

          <path d="M258 225 L258 245" stroke="#42DFA8" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="258" cy="217" rx="4.5" ry="6.5" fill="#42DFA8" />
        </svg>
      </span>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-none ${textColor}`}>
            FOODNOVA
          </span>
          <span className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase leading-tight mt-1 ${subtitleColor}`}>
            CONSULTING
          </span>
        </div>
      )}
    </a>
  );
}
