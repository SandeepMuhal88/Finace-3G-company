import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Phone, Mail, MapPin, Award, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenCallModal: () => void;
  onOpenPayEmiModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenCallModal, onOpenPayEmiModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="md" variant="light" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Shreeji Finance Trading Company is a premier digital loan aggregator and financial technology partner registered under Indian Non-Banking Financial regulations.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-sky-400 font-semibold bg-sky-950/60 p-2.5 rounded-xl border border-sky-800/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>RBI / NBFC Partner Reg. No: SFTC/FIN/2026/892</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-[11px]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-sky-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('service')} className="hover:text-sky-400 transition-colors">
                  Loan Services
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('dashboard')} className="hover:text-sky-400 transition-colors">
                  Customer Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('profile')} className="hover:text-sky-400 transition-colors">
                  My Profile & KYC
                </button>
              </li>
            </ul>
          </div>

          {/* Loan Products */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-[11px]">Loan Offerings</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Personal Instant Loan (up to ₹10L)</li>
              <li>Business & Working Capital (up to ₹25L)</li>
              <li>Home Construction Finance (up to ₹50L)</li>
              <li>Vehicle & Two Wheeler Loan</li>
              <li>Pre-Approved Credit Line</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-[11px]">Helpline Support</h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenCallModal}
                className="w-full flex items-center gap-2.5 p-2.5 bg-sky-900/60 hover:bg-sky-800/80 text-white font-bold rounded-xl border border-sky-700/50 transition-all text-left"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="block text-[10px] text-sky-200">24/7 Support Hotline</span>
                  <span className="text-xs font-extrabold">+91 98000 12345</span>
                </div>
              </button>

              <button
                onClick={onOpenPayEmiModal}
                className="w-full flex items-center gap-2.5 p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition-all text-left"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="block text-[10px] text-slate-400">EMI Payment Gateway</span>
                  <span className="text-xs font-extrabold">Pay Monthly Installment</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Shreeji Finance Trading Company. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#disclaimer" className="hover:text-slate-300 transition-colors">RBI Fair Practice Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
