import React from 'react';
import { EmiCalculator } from './EmiCalculator';
import { 
  ShieldCheck, 
  Percent, 
  Zap, 
  FileCheck2, 
  ArrowRight, 
  Clock, 
  Building2, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2, 
  CreditCard, 
  TrendingUp,
  Award
} from 'lucide-react';

interface HomeViewProps {
  onApplyLoan: (amount: number, tenureMonths: number, monthlyEmi: number) => void;
  onOpenCall: () => void;
  onOpenPayEmi: () => void;
  onSelectService: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onApplyLoan,
  onOpenCall,
  onOpenPayEmi,
  onSelectService,
}) => {
  const loanCategories = [
    {
      id: 'personal',
      title: 'Personal Instant Loan',
      amount: 'Up to ₹10 Lakhs',
      rate: '8.5% p.a.',
      tag: 'Instant Disbursal',
      desc: 'Quick cash loan for emergency, medical, travel, or wedding needs.',
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 'business',
      title: 'Business & Trading Loan',
      amount: 'Up to ₹25 Lakhs',
      rate: '9.2% p.a.',
      tag: 'Zero Collateral',
      desc: 'Expand working capital, purchase stock, or scale business operations.',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'home',
      title: 'Home & Property Finance',
      amount: 'Up to ₹50 Lakhs',
      rate: '8.25% p.a.',
      tag: 'Long Tenure 20 Yrs',
      desc: 'Purchase new house, plot, or renovate existing home with low EMI.',
      color: 'from-sky-600 to-teal-600',
    },
    {
      id: 'vehicle',
      title: 'Two Wheeler & Car Loan',
      amount: 'Up to ₹8 Lakhs',
      rate: '8.8% p.a.',
      tag: '100% On-Road',
      desc: 'Buy bike or car with minimal documentation & instant approval.',
      color: 'from-indigo-600 to-blue-700',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Light Blue Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-300/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full border border-white/20 text-xs font-extrabold text-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Instant Pre-Approved Loans up to ₹25 Lakhs</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Fast, Trusted & Digital Loan Solutions
          </h1>

          <p className="text-xs sm:text-sm text-sky-100 max-w-2xl font-normal leading-relaxed">
            Get instant personal & business loans with low interest rates starting from <strong className="text-amber-300 font-bold">8.5% p.a.</strong> No lengthy paperwork, 100% RBI/NBFC partner transparency, and disbursal within 24 hours.
          </p>

          {/* Highlights Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15">
              <span className="block text-[10px] text-sky-200">Starting Interest</span>
              <span className="font-extrabold text-amber-300 text-sm">8.5% p.a.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15">
              <span className="block text-[10px] text-sky-200">Approval Time</span>
              <span className="font-extrabold text-white text-sm">30 Minutes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15">
              <span className="block text-[10px] text-sky-200">Max Loan Amount</span>
              <span className="font-extrabold text-white text-sm">₹25 Lakhs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15">
              <span className="block text-[10px] text-sky-200">Paperwork</span>
              <span className="font-extrabold text-emerald-300 text-sm">100% Paperless</span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onOpenCall}
              className="flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Direct Customer Call (+91 98000 12345)</span>
            </button>

            <button
              onClick={onOpenPayEmi}
              className="flex items-center gap-2 px-5 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs sm:text-sm rounded-xl transition-all"
            >
              <CreditCard className="w-4 h-4 text-amber-300" />
              <span>Pay Existing EMI</span>
            </button>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section id="calculator">
        <EmiCalculator onApplyLoan={onApplyLoan} />
      </section>

      {/* Loan Services Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Loan & Finance Products</h2>
            <p className="text-xs text-slate-500">Choose the right loan tailored for your personal & business needs</p>
          </div>
          <span className="hidden sm:inline-block text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Instant Approval Guarantee
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loanCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-sky-100 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                    {cat.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{cat.rate}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-extrabold text-sky-700 mt-0.5">{cat.amount}</p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{cat.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(cat.id)}
                  className="w-full flex items-center justify-between text-xs font-bold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 p-2.5 rounded-xl transition-all"
                >
                  <span>Apply & Know Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose 3G Finance Section */}
      <section className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            Why 3G Finance
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            India's Leading Trusted Digital Loan Facilitator
          </h2>
          <p className="text-xs text-slate-500">
            Empowering 50,000+ happy families and business owners across India with direct bank transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
            <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mx-auto shadow-2xs">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">30 Min Fast Disbursal</h4>
            <p className="text-xs text-slate-500">Funds transferred directly into your Bank Account once approved.</p>
          </div>

          <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
            <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mx-auto shadow-2xs">
              <Percent className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Lowest EMI & Interest</h4>
            <p className="text-xs text-slate-500">Flexible interest starting from 8.5% p.a. with zero prepayment penalty.</p>
          </div>

          <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
            <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mx-auto shadow-2xs">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Minimal Documents</h4>
            <p className="text-xs text-slate-500">Only Aadhaar Card & PAN Card required for digital approval.</p>
          </div>

          <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 text-center space-y-2">
            <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mx-auto shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">100% Safe & RBI Partner</h4>
            <p className="text-xs text-slate-500">Regulated NBFC/Bank tie-ups with encrypted secure data processing.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
