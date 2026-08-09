import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  Briefcase, 
  Home as HomeIcon, 
  Car, 
  User, 
  DollarSign, 
  Clock 
} from 'lucide-react';

interface ServiceViewProps {
  onApplyLoan: (amount: number, tenureMonths: number, monthlyEmi: number) => void;
  selectedServiceId?: string;
}

export const ServiceView: React.FC<ServiceViewProps> = ({ onApplyLoan, selectedServiceId }) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedServiceId || 'personal');

  const services = [
    {
      id: 'personal',
      name: 'Personal Instant Loan',
      icon: User,
      maxAmount: '₹ 10,000 to ₹ 10,000,00',
      rate: '8.5% - 11.5% p.a.',
      tenure: '12 to 60 Months',
      tag: 'Most Popular',
      description: 'Quick un-collateralized loan for personal emergencies, family functions, medical treatment, home repairs, or vacations.',
      features: [
        'Instant Approval within 15 Minutes',
        'Direct Bank Account Transfer',
        'Minimal Paperwork (Aadhaar & PAN)',
        'Flexible EMI Repayment Tenure',
        'No Preclosure Penalty'
      ],
      documents: ['Aadhaar Card', 'PAN Card', '3 Month Salary/Bank Statement', 'Cancelled Cheque']
    },
    {
      id: 'business',
      name: 'Business & Working Capital Loan',
      icon: Briefcase,
      maxAmount: '₹ 1,000,00 to ₹ 25,000,00',
      rate: '9.2% - 13.0% p.a.',
      tenure: '12 to 84 Months',
      tag: 'Zero Collateral',
      description: 'Capital assistance designed for MSMEs, traders, shopkeepers, and startups to expand business inventory, machinery, or cash flow.',
      features: [
        'No Asset Collateral Required',
        'GST & Non-GST Loan Options Available',
        'Overdraft Facility Available',
        'Quick Disbursal within 24-48 Hours',
        'Tax Benefits on Interest Paid'
      ],
      documents: ['PAN & Aadhaar Card', 'Business Registration Proof', '6 Months Bank Statement', 'GST Certificate (if applicable)']
    },
    {
      id: 'home',
      name: 'Home Loan & Property Finance',
      icon: HomeIcon,
      maxAmount: '₹ 5,000,00 to ₹ 50,000,00',
      rate: '8.25% - 9.8% p.a.',
      tenure: '5 to 20 Years',
      tag: 'Lowest Interest',
      description: 'Affordable home loan financing for buying a new flat, constructing a house, purchasing plot land, or renovating existing property.',
      features: [
        'Lowest Monthly EMI Guarantee',
        'PMAY Government Subsidy Assistance',
        'Balance Transfer Facility at Lower Rates',
        'Free Technical & Legal Valuation Support',
        'Up to 90% Property Funding'
      ],
      documents: ['PAN & Aadhaar Card', 'Property Agreement Papers', 'Income Proof / Salary Slips', 'Form 16 / ITR Copy']
    },
    {
      id: 'vehicle',
      name: 'Vehicle & Car Loan',
      icon: Car,
      maxAmount: '₹ 50,000 to ₹ 8,000,00',
      rate: '8.8% - 12.0% p.a.',
      tenure: '12 to 60 Months',
      tag: '100% On-Road Funding',
      description: 'Drive home your dream bike or car with flexible car and two-wheeler finance options at attractive low interest rates.',
      features: [
        'Up to 100% On-Road Price Financing',
        'Instant Approval at Dealer Showrooms',
        'Pre-owned & Used Car Loans Available',
        'No Hidden Processing Fees',
        'Easy Digital KYC'
      ],
      documents: ['PAN Card & Aadhaar Card', 'Driving License', 'Income Proof / Bank Statement', 'Vehicle Quotation Sheet']
    }
  ];

  const currentService = services.find((s) => s.id === activeCategory) || services[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Title */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            RBI Approved Loan Offerings
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Shreeji Finance Loan Services
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Transparent interest rates, minimal documentation, and 100% digital online approval. Select a loan product below to check eligibility & apply.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-sky-100">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = activeCategory === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveCategory(s.id)}
                className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold transition-all text-left border ${
                  isActive
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md scale-102'
                    : 'bg-sky-50/50 text-slate-700 border-sky-100 hover:bg-sky-100/60'
                }`}
              >
                <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-white text-sky-600 border border-sky-200'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block truncate">{s.name}</span>
                  <span className={`text-[10px] font-semibold ${isActive ? 'text-sky-100' : 'text-slate-400'}`}>
                    {s.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Service Detail Panel */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-sky-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                {currentService.tag}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Digital Approval
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">{currentService.name}</h2>
            <p className="text-xs text-slate-500 mt-1">{currentService.description}</p>
          </div>

          <button
            onClick={() => onApplyLoan(300000, 36, 9500)}
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-xs rounded-2xl hover:from-sky-700 hover:to-blue-700 transition-all shadow-md active:scale-98"
          >
            <span>Apply for {currentService.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Loan Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
            <span className="text-[10px] font-semibold text-slate-500 block uppercase">Eligible Amount Range</span>
            <span className="text-base font-black text-sky-900 mt-1 block">{currentService.maxAmount}</span>
          </div>

          <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
            <span className="text-[10px] font-semibold text-slate-500 block uppercase">Interest Rate</span>
            <span className="text-base font-black text-sky-900 mt-1 block">{currentService.rate}</span>
          </div>

          <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
            <span className="text-[10px] font-semibold text-slate-500 block uppercase">Repayment Tenure</span>
            <span className="text-base font-black text-sky-900 mt-1 block">{currentService.tenure}</span>
          </div>
        </div>

        {/* Key Features & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Features */}
          <div className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Key Features & Benefits</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              {currentService.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-600" />
              <span>Required Documents</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              {currentService.documents.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
