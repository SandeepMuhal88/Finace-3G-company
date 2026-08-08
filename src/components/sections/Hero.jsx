import React from 'react';
import { ShieldCheck, ArrowUpRight, ChevronRight, CheckCircle2, TrendingUp, Clock } from 'lucide-react';
import { StatCard } from '../ui/UIAtoms';
import { STATS, USER } from '../../data/mockData';

export default function Hero({ setActiveTab }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 min-h-[92vh] flex flex-col justify-center">

      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blobs */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-emerald-500 opacity-[0.08] blur-3xl" />
        <div className="absolute top-32 -left-64 w-[600px] h-[600px] rounded-full bg-blue-400 opacity-[0.08] blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-teal-400 opacity-[0.07] blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/25 rounded-full px-4 py-2 text-emerald-300 text-sm font-semibold mb-8">
              <ShieldCheck className="w-4 h-4" />
              RBI Registered NBFC · Trusted Since 2009
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 tracking-tight">
              Welcome,{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                {USER.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-200">
                Your Financial Future Starts Here.
              </span>
            </h1>

            <p className="text-lg text-blue-200/90 font-light leading-relaxed mb-10 max-w-lg">
              Empowering your financial journey with{' '}
              <strong className="text-white font-semibold">secure</strong>,{' '}
              <strong className="text-white font-semibold">transparent</strong> and{' '}
              <strong className="text-white font-semibold">flexible</strong> loans.
              We put your goals first, always.
            </p>

            {/* Key promises */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {['Zero Hidden Charges', 'Approval in 24 Hrs', 'Lowest Interest Rates'].map(p => (
                <div key={p} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                View My Dashboard
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                Explore Loans
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ── Right: Quick Info Card ── */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest">Your Loan At A Glance</p>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-bold">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> ACTIVE
                </span>
              </div>

              {/* Big loan amount */}
              <div>
                <p className="text-5xl font-black text-white mb-1">₹25,00,000</p>
                <p className="text-blue-300 text-sm">Personal Loan · PL-3G-20481</p>
              </div>

              <hr className="border-white/10" />

              {/* Mini metrics */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Interest Rate', value: '8.5%', color: 'text-blue-300' },
                  { label: 'Outstanding', value: '₹18.45L', color: 'text-rose-300' },
                  { label: 'Next EMI', value: '₹54,500', color: 'text-emerald-300' },
                ].map(m => (
                  <div key={m.label} className="text-center">
                    <p className={`text-xl font-black ${m.color}`}>{m.value}</p>
                    <p className="text-blue-400 text-xs mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <hr className="border-white/10" />

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-blue-300 mb-2 font-medium">
                  <span>12 of 48 EMIs paid</span>
                  <span>25% complete</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                </div>
              </div>

              {/* Due date alert */}
              <div className="flex items-center gap-3 bg-amber-500/15 border border-amber-400/25 rounded-2xl px-4 py-3">
                <Clock className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <div>
                  <p className="text-amber-200 text-sm font-bold">Next EMI Due in 7 Days</p>
                  <p className="text-amber-300/70 text-xs">Due: October 15, 2026</p>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('dashboard')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                <TrendingUp className="w-5 h-5" />
                Go to Full Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* ── Trust Stats Strip ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-24">
          {STATS.map((s, i) => (
            <StatCard key={i} icon={s.icon} label={s.label} value={s.value} dark={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
