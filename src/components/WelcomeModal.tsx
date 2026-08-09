import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, ArrowRight, X, PhoneCall, Award, CheckCircle2 } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCall: () => void;
  onExplore: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  onClose,
  onOpenCall,
  onExplore,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-sky-100 shadow-2xl overflow-hidden text-slate-800">
        {/* Top Decorative Header */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase rounded-full tracking-wider shadow-2xs">
              Welcome to Official Portal
            </span>
            <span className="text-xs text-sky-100 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> RBI Approved
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Welcome to Shreeji Finance
          </h2>
          <p className="text-xs text-sky-100 mt-1">
            Trusted Loan & Trading Finance Partner Since 2012
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Logo & Subheading */}
          <div className="flex items-center justify-between p-3.5 bg-sky-50/80 rounded-2xl border border-sky-100">
            <Logo size="md" variant="dark" />
            <div className="text-right">
              <span className="text-[10px] text-slate-500 font-semibold block">Reg. No.</span>
              <span className="text-xs font-bold text-sky-700">SFTC/FIN/2026/892</span>
            </div>
          </div>

          {/* Key Value Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Personal & Business Loans up to ₹25 Lakhs</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Instant Disbursal in 24 Hours</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Lowest 8.5% Interest Rates</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Easy Monthly EMI Repayment</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => {
                onExplore();
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all active:scale-98"
            >
              <span>Explore Loan Services & EMI Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onOpenCall();
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-200 font-bold text-xs rounded-2xl transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              <span>Talk to Customer Care Officer (+91 98000 12345)</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-sky-50 px-6 py-2.5 text-center border-t border-sky-100">
          <p className="text-[10px] text-slate-500 flex items-center justify-center gap-1">
            <Award className="w-3 h-3 text-sky-600" />
            Licensed Non-Banking Financial Services Partner · ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </div>
  );
};
