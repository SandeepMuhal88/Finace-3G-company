import React, { useState } from 'react';
import { LOAN_SERVICES } from '../data/mockData';
import { LoanService } from '../types';
import {
  CheckCircle2,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  HelpCircle,
  X,
  Send,
  Sparkles,
  CreditCard,
  Building2,
  UserCheck,
  Home,
  Car,
  Coins,
  GraduationCap
} from 'lucide-react';

interface ServiceViewProps {
  onOpenCallModal: () => void;
  onOpenPayEmiModal: () => void;
}

export const ServiceView: React.FC<ServiceViewProps> = ({ onOpenCallModal, onOpenPayEmiModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [applyModalService, setApplyModalService] = useState<LoanService | null>(null);
  const [applyFormSubmitted, setApplyFormSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    fullName: 'Rajesh Kumar Verma',
    phone: '+91 98765 43210',
    requestedAmount: '500000',
    employmentType: 'Salaried'
  });

  const categories = ['All', 'Personal', 'Business', 'Home', 'Vehicle', 'Gold', 'Education'];

  const filteredServices = selectedCategory === 'All'
    ? LOAN_SERVICES
    : LOAN_SERVICES.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Car': return <Car className="w-6 h-6" />;
      case 'Coins': return <Coins className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyFormSubmitted(true);
    setTimeout(() => {
      setApplyFormSubmitted(false);
      setApplyModalService(null);
      alert("Application submitted! Our 3G Finance representative will verify your documents within 2 hours.");
    }, 2000);
  };

  return (
    <div className="space-y-10 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold inline-block">
            3G Financial Services & Products
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Transparent Loan Services <br />
            <span className="text-amber-400">Tailored To Your Ambitions</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore our comprehensive portfolio of low-interest loan options. Every loan product from 3G Finance Trading Company features 100% digital verification, clear EMI terms, and zero hidden penalties.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenPayEmiModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay Active EMI Now</span>
            </button>

            <button
              onClick={onOpenCallModal}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold border border-slate-700 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Advisory Desk</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat} {cat === 'All' ? 'Services' : 'Loans'}
          </button>
        ))}
      </div>

      {/* Loan Services List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-6 shadow-lg flex flex-col justify-between group transition duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                  {getServiceIcon(service.iconName)}
                </div>

                {service.popular && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black border border-emerald-500/30">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition mb-1">
                {service.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-black text-amber-400">{service.interestRate}</span>
                <span className="text-xs text-slate-400">| Tenure: {service.tenure}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 mb-6 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80">
                <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider block mb-1">
                  Key Benefits
                </span>
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Required Documents */}
              <div className="space-y-1 mb-6">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                  Documents Needed:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.documentsRequired.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-medium"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Max Sanction</span>
                <span className="text-sm font-black text-white">{service.maxAmount}</span>
              </div>

              <button
                onClick={() => setApplyModalService(service)}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md active:scale-95 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Instant Loan Application Modal */}
      {applyModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
            
            <button
              onClick={() => setApplyModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold border border-amber-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Apply for {applyModalService.title}</h3>
                <p className="text-xs text-amber-400 font-semibold">{applyModalService.interestRate} • Instant Pre-approval</p>
              </div>
            </div>

            {applyFormSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-sm font-bold text-white">Submitting your loan application...</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Applicant Name</label>
                  <input
                    type="text"
                    required
                    value={applicantData.fullName}
                    onChange={(e) => setApplicantData({ ...applicantData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Required Amount (₹)</label>
                    <input
                      type="number"
                      required
                      value={applicantData.requestedAmount}
                      onChange={(e) => setApplicantData({ ...applicantData, requestedAmount: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Employment Type</label>
                  <select
                    value={applicantData.employmentType}
                    onChange={(e) => setApplicantData({ ...applicantData, employmentType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="Salaried">Salaried Employee</option>
                    <option value="Self Employed">Self-Employed / Business Owner</option>
                    <option value="Professional">Doctor / CA / Professional</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  <span className="font-bold text-slate-300 block mb-0.5">3G Finance Verification:</span>
                  By submitting, you consent to soft credit check and contact by a 3G Finance relationship officer.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Loan Application</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
