import React, { useState } from 'react';
import { ViewTab, LoanService } from '../types';
import { EmiCalculator } from '../components/EmiCalculator';
import { LOAN_SERVICES, COMPANY_BRANCH_INFO } from '../data/mockData';
import {
  Phone,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Building2,
  Percent,
  Clock,
  Briefcase,
  FileCheck
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: ViewTab) => void;
  onOpenCallModal: () => void;
  onOpenPayEmiModal: () => void;
  onOpenWelcomeDialogue: () => void;
  onSelectServiceApply?: (serviceTitle: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenCallModal,
  onOpenPayEmiModal,
  onOpenWelcomeDialogue,
  onSelectServiceApply,
}) => {
  return (
    <div className="space-y-12 pb-16 animate-fadeIn">
      
      {/* Hero Section / Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 md:p-12 shadow-2xl text-white">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Official Portal • 3G Finance Trading Company</span>
            <button 
              onClick={onOpenWelcomeDialogue}
              className="ml-2 text-[11px] underline text-amber-400 hover:text-amber-200 cursor-pointer font-extrabold"
            >
              Info Dialogue
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Smart & Trustworthy <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Loans For Every Need.
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            Welcome to <strong className="text-white font-bold">3G Finance Trading Company</strong>. We empower individuals and small businesses with instant, hassle-free low-interest loans, transparent processing, and digital EMI management.
          </p>

          {/* TWO ATTRACTIVE BUTTONS: View Dashboard & Call Now */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={() => onSelectTab('dashboard')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 active:scale-98 transition duration-200 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <LayoutDashboard className="w-5 h-5 text-slate-950" />
              <span>View Dashboard</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenCallModal}
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700/90 text-white font-extrabold text-sm border border-slate-700 hover:border-amber-400/60 active:scale-98 transition duration-200 flex items-center justify-center gap-3 cursor-pointer shadow-md"
            >
              <Phone className="w-5 h-5 text-amber-400 animate-bounce" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400">8.5% p.a.</div>
              <div className="text-xs text-slate-400 font-medium">Lowest Interest Rate</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">24 Hours</div>
              <div className="text-xs text-slate-400 font-medium">Fast Disbursal</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-black text-white">10,000+</div>
              <div className="text-xs text-slate-400 font-medium">Happy Customers</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400">0% Hidden</div>
              <div className="text-xs text-slate-400 font-medium">Transparent Terms</div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick EMI Pay Callout Strip */}
      <section className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold shrink-0">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">Already Have an Active Loan?</h3>
            <p className="text-xs text-slate-300">Pay your monthly EMI instantly with zero processing fee or check upcoming dues.</p>
          </div>
        </div>

        <button
          onClick={onOpenPayEmiModal}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition cursor-pointer whitespace-nowrap"
        >
          Pay EMI Now
        </button>
      </section>

      {/* Featured Loan Services Overview */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Loan Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Loan Services Provided</h2>
          </div>

          <button
            onClick={() => onSelectTab('service')}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Services</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOAN_SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 transition duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-[11px] font-extrabold border border-slate-700">
                    {service.category}
                  </span>
                  <span className="text-xs font-black text-emerald-400">{service.interestRate}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-1.5 mb-6 text-[11px] text-slate-300">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">Max Limit</span>
                  <span className="text-xs font-extrabold text-white">{service.maxAmount}</span>
                </div>

                <button
                  onClick={() => onSelectTab('service')}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition cursor-pointer"
                >
                  Apply Loan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMI Calculator Component */}
      <section>
        <EmiCalculator
          onApplyForLoan={(amount, tenure, type) => {
            if (onSelectServiceApply) onSelectServiceApply(type);
            onSelectTab('service');
          }}
        />
      </section>

      {/* Why Choose 3G Finance Section */}
      <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 text-white space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">3G Trust Guarantee</span>
          <h2 className="text-2xl sm:text-3xl font-black">Why 3G Finance Trading Company?</h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Built on integrity, speed, and customer satisfaction. We take pride in delivering transparent financial assistance across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">256-Bit SSL Security</h3>
            <p className="text-xs text-slate-400">All customer financial data and KYC details are heavily encrypted.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Instant Disbursal</h3>
            <p className="text-xs text-slate-400">Direct bank transfer within 2 hours of document verification.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Low Interest Rates</h3>
            <p className="text-xs text-slate-400">Competitive interest starting from 8.5% p.a. with reduced monthly EMIs.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">100% Paperless</h3>
            <p className="text-xs text-slate-400">Upload documents digitally and get loan approvals right from home.</p>
          </div>
        </div>
      </section>

    </div>
  );
};
