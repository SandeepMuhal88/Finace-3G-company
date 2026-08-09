import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'dark' }) => {
  const isLightText = variant === 'light';

  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg'
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${sizeClasses[size]} ${className}`}>
      {/* Shreeji Finance Custom Emblem - Trust Royal Blue & Gold */}
      <div className="relative flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 shadow-md border border-sky-300/50 text-white font-black text-lg">
        <div className="absolute inset-0.5 rounded-[10px] bg-blue-950/20 backdrop-blur-[1px] flex items-center justify-center">
          <span className="bg-gradient-to-br from-amber-300 via-white to-sky-200 bg-clip-text text-transparent drop-shadow-xs font-extrabold tracking-tighter text-xl">
            %
          </span>
        </div>
        {/* Upward Growth Arrow Accent */}
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-xs">
          <svg className="w-2 h-2 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`text-lg font-black tracking-wider uppercase ${isLightText ? 'text-white' : 'text-slate-900'}`}>
            Shreeji <span className="text-sky-600 font-extrabold">FINANCE</span>
          </span>
        </div>
        <span className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${isLightText ? 'text-sky-200' : 'text-slate-500'}`}>
          Trading Company
        </span>
      </div>
    </div>
  );
};
