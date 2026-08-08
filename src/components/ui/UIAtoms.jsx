/* ── Shared tiny UI atoms used across multiple components ── */
import React from 'react';

/** Coloured initials circle avatar */
export function Avatar({ initials, size = 'md' }) {
  const sz =
    size === 'xl' ? 'w-16 h-16 text-xl'
    : size === 'lg' ? 'w-12 h-12 text-base'
    : 'w-10 h-10 text-sm';
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-white shadow-md ring-2 ring-white flex-shrink-0`}>
      {initials}
    </div>
  );
}

/** Small pill badge */
export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}

/** Section title block */
export function SectionHeader({ pill, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {pill && (
        <div className={`inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-700 text-sm font-semibold mb-4`}>
          {pill}
        </div>
      )}
      <h2 className="text-4xl font-black text-slate-800 mb-3 leading-tight">{title}</h2>
      {subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/** Animated progress bar */
export function ProgressBar({ value, max, label, sublabel, color = 'from-emerald-400 to-emerald-600' }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
        <span>{label}</span>
        <span>{sublabel}</span>
      </div>
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-right text-xs text-emerald-600 font-bold mt-1">{pct}% complete</p>
    </div>
  );
}

/** Stat card for hero section */
export function StatCard({ icon: Icon, label, value, dark = true }) {
  if (dark) {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-3">
          <Icon className="w-6 h-6 text-emerald-300" />
        </div>
        <p className="text-3xl font-black text-white mb-1">{value}</p>
        <p className="text-sm text-blue-200 font-medium">{label}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-md">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-blue-700" />
      </div>
      <p className="text-3xl font-black text-slate-800 mb-1">{value}</p>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
}

/** Star rating */
export function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Generic metric tile */
export function MetricTile({ icon: Icon, label, value, valueColor = 'text-slate-800' }) {
  return (
    <div className="text-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-slate-100">
        <Icon className="w-5 h-5 text-blue-800" />
      </div>
      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-xl font-black ${valueColor} leading-none`}>{value}</p>
    </div>
  );
}
