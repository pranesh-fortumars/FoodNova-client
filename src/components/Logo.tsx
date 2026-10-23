interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  return (
    <a href="#top" className={`flex items-center gap-2.5 group ${className}`} aria-label="FoodNova Consulting home">
      <span className="relative flex h-9 w-9 items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="none" stroke={variant === 'light' ? '#FFFFFF' : '#211747'} strokeWidth="1.5" />
          <path d="M20 8 C13 8, 9 14, 9 20 C9 26, 14 30, 20 30 C26 30, 31 26, 31 20 C31 14, 27 8, 20 8 Z" fill="none" stroke="#42DFA8" strokeWidth="1.8" />
          <line x1="20" y1="30" x2="20" y2="35" stroke="#42DFA8" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13 17 Q16.5 14, 20 17 Q23.5 20, 27 17" fill="none" stroke="#42DFA8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="13" cy="17" r="1.5" fill="#42DFA8" />
          <circle cx="27" cy="17" r="1.5" fill="#42DFA8" />
          <circle cx="20" cy="22" r="2" fill="#42DFA8" />
        </svg>
      </span>
      <span className={`font-display font-bold text-lg tracking-tight ${textColor}`}>
        FoodNova
        <span className="font-medium text-sm opacity-70 ml-1">Consulting</span>
      </span>
    </a>
  );
}
