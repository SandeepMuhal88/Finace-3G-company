import React from 'react';
import { Phone, X, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CallNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallNowModal: React.FC<CallNowModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-sky-100 shadow-2xl overflow-hidden text-slate-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 bg-amber-400 text-slate-950 rounded-lg">
              <Phone className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-sky-100 uppercase tracking-wider">
              24/7 Loan Assistance Helpline
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-white">Call 3G Finance Support</h3>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="text-center p-4 bg-sky-50 rounded-2xl border border-sky-100">
            <span className="text-xs font-semibold text-slate-500 block mb-1">Direct Toll-Free Hotline</span>
            <a
              href="tel:+919800012345"
              className="text-2xl sm:text-3xl font-black text-sky-700 hover:text-sky-800 transition-colors tracking-tight block"
            >
              +91 98000 12345
            </a>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mt-2 border border-emerald-200">
              ● Representative Available Now
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
              <Clock className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Operating Hours: Monday to Saturday (9:00 AM - 7:00 PM)</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Instant Status Verification for Active Loan Applications</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Languages Supported: Hindi, English, Regional Languages</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="tel:+919800012345"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-sm rounded-2xl hover:from-sky-700 hover:to-blue-700 transition-all shadow-md active:scale-98"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Click to Call +91 98000 12345</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
