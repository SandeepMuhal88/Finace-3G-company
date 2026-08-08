import React, { useState } from 'react';
import { UserProfile, ActiveLoan } from '../types';
import {
  User,
  ShieldCheck,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  Building,
  Award,
  Bell,
  Lock,
  LogOut,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Zap,
  HelpCircle
} from 'lucide-react';

interface ProfileViewProps {
  userProfile: UserProfile;
  loans: ActiveLoan[];
  onOpenPayEmiModal: () => void;
  onOpenCallModal: () => void;
  onSelectTab: (tab: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userProfile,
  loans,
  onOpenPayEmiModal,
  onOpenCallModal,
  onSelectTab,
}) => {
  const [autoDebitEnabled, setAutoDebitEnabled] = useState(true);

  const totalMonthlyEmi = loans.reduce((acc, l) => acc + l.monthlyEmi, 0);

  return (
    <div className="space-y-8 pb-16 animate-fadeIn">
      
      {/* Profile Header Card */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 font-black flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
              {userProfile.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 inline" /> KYC Verified
                </span>
                <span className="text-xs text-slate-400">Since {userProfile.joinedDate}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white">{userProfile.name}</h1>
              <p className="text-xs font-mono text-amber-400 font-bold">ID: {userProfile.customerId}</p>
            </div>
          </div>

          {/* EMI Pay Option explicitly requested in Profile Page */}
          <div className="w-full sm:w-auto">
            <button
              onClick={onOpenPayEmiModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-900/30 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay EMI Option</span>
            </button>
          </div>
        </div>
      </section>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Basic Details & CIBIL Score */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* CIBIL Score Meter Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-extrabold text-white">CIBIL Credit Score</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-xs">
                EXCELLENT
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-black text-amber-400">{userProfile.cibilScore}</span>
              <span className="text-xs text-slate-400">/ 900 Points</span>
            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-emerald-500 rounded-full"
                style={{ width: `${(userProfile.cibilScore / 900) * 100}%` }}
              />
            </div>

            <p className="text-xs text-slate-300">
              Your excellent credit score qualifies you for 3G Finance pre-approved personal & business loans up to ₹50 Lakhs with reduced interest rates.
            </p>
          </div>

          {/* Basic Customer Information */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg text-white space-y-4">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">
              Basic Personal Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Full Name</span>
                <span className="font-extrabold text-white">{userProfile.name}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Phone Number</span>
                <span className="font-extrabold text-white">{userProfile.phone}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Email Address</span>
                <span className="font-extrabold text-white">{userProfile.email}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Customer ID</span>
                <span className="font-mono font-bold text-amber-300">{userProfile.customerId}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Registered Address</span>
              <span className="font-semibold text-slate-200">{userProfile.address}</span>
            </div>
          </div>

          {/* Linked Bank Account Details */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg text-white space-y-3">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Building className="w-4 h-4 text-amber-400" />
              <span>Linked Disbursement Bank Account</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Bank Name</span>
                <span className="font-bold text-white">{userProfile.bankName}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">Account Number</span>
                <span className="font-mono font-bold text-white">{userProfile.accountNumber}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block">IFSC Code</span>
                <span className="font-mono font-bold text-amber-300">{userProfile.ifscCode}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: EMI Actions & Account Settings */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* EMI Pay Card in Profile */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-emerald-500/40 rounded-3xl p-6 shadow-xl text-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                Active EMI Status
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                {loans.length} Active Loans
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-300 block mb-1">Total Monthly EMI Obligations</span>
              <span className="text-3xl font-black text-amber-400">₹{totalMonthlyEmi.toLocaleString('en-IN')}</span>
            </div>

            <p className="text-xs text-slate-300">
              Pay your dues directly from your profile dashboard with instant electronic receipts.
            </p>

            <button
              onClick={onOpenPayEmiModal}
              className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay EMI Option Now</span>
            </button>
          </div>

          {/* Auto-Debit Settings */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg text-white space-y-4">
            <h3 className="text-base font-extrabold text-white border-b border-slate-800 pb-3">
              Payment Preferences
            </h3>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-white block">Auto-Debit NACH Mandate</span>
                <span className="text-[10px] text-slate-400">Automatically debit EMI on due date</span>
              </div>

              <button
                onClick={() => setAutoDebitEnabled(!autoDebitEnabled)}
                className={`w-12 h-6 rounded-full p-1 transition duration-200 cursor-pointer ${
                  autoDebitEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    autoDebitEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={onOpenCallModal}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Customer Care Desk</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
