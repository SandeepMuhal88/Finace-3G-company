import React, { useState } from 'react';
import { ActiveLoan, EmiTransaction, UserProfile } from '../types';
import {
  CreditCard,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  ChevronRight,
  Sparkles,
  PieChart,
  ShieldCheck,
  Plus
} from 'lucide-react';

interface DashboardViewProps {
  loans: ActiveLoan[];
  transactions: EmiTransaction[];
  userProfile: UserProfile;
  onOpenPayEmiModal: () => void;
  onSelectTab: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  loans,
  transactions,
  userProfile,
  onOpenPayEmiModal,
  onSelectTab,
}) => {
  const [selectedLoanId, setSelectedLoanId] = useState<string>(loans[0]?.id || '');

  const totalSanctioned = loans.reduce((acc, l) => acc + l.sanctionedAmount, 0);
  const totalOutstanding = loans.reduce((acc, l) => acc + l.outstandingBalance, 0);
  const totalMonthlyEmi = loans.reduce((acc, l) => acc + l.monthlyEmi, 0);

  const activeLoan = loans.find(l => l.id === selectedLoanId) || loans[0];

  const handleDownloadStatement = (loanNumber: string) => {
    alert(`Loan Statement for ${loanNumber} generated and downloading PDF...`);
  };

  return (
    <div className="space-y-8 pb-16 animate-fadeIn">
      
      {/* Portfolio Overview Summary Card */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">3G Customer Portal</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                KYC Verified
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Hello, {userProfile.name}
            </h1>
            <p className="text-xs text-slate-400">Customer ID: {userProfile.customerId}</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenPayEmiModal}
              className="flex-1 md:flex-none px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-900/30 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay Now EMI</span>
            </button>

            <button
              onClick={() => onSelectTab('service')}
              className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Apply Loan</span>
            </button>
          </div>
        </div>

        {/* Financial Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Total Sanctioned Capital
            </span>
            <span className="text-xl sm:text-2xl font-black text-white">
              ₹{totalSanctioned.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
              Current Outstanding Balance
            </span>
            <span className="text-xl sm:text-2xl font-black text-amber-300">
              ₹{totalOutstanding.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
              Total Monthly EMI Due
            </span>
            <span className="text-xl sm:text-2xl font-black text-emerald-400">
              ₹{totalMonthlyEmi.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </section>

      {/* Active Loans Detail Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-white">Your Active Loan Accounts ({loans.length})</h2>
          <span className="text-xs text-amber-400 font-bold">Select account to inspect details</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Active Loan Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {loans.map((loan) => {
              const isSelected = loan.id === activeLoan?.id;
              const progressPct = Math.round((loan.paidMonths / loan.tenureMonths) * 100);

              return (
                <div
                  key={loan.id}
                  onClick={() => setSelectedLoanId(loan.id)}
                  className={`p-5 rounded-3xl border transition cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-500/5'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 text-[10px] font-extrabold border border-slate-700">
                      {loan.category} Loan
                    </span>
                    <span className="text-xs font-bold text-emerald-400">{loan.status}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-1">{loan.type}</h3>
                  <p className="text-[11px] font-mono text-slate-400 mb-3">{loan.loanNumber}</p>

                  <div className="flex justify-between items-baseline mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">Monthly EMI</span>
                      <span className="text-lg font-black text-amber-400">₹{loan.monthlyEmi.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-bold">Outstanding</span>
                      <span className="text-sm font-black text-white">₹{loan.outstandingBalance.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
                    <span>{loan.paidMonths} of {loan.tenureMonths} Months Repaid</span>
                    <span>{progressPct}% Paid</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Loan Detailed Inspector */}
          {activeLoan && (
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-white shadow-xl">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block">
                    Account Inspector
                  </span>
                  <h3 className="text-xl font-black text-white">{activeLoan.type}</h3>
                  <p className="text-xs text-slate-400 font-mono">{activeLoan.loanNumber}</p>
                </div>

                <button
                  onClick={() => handleDownloadStatement(activeLoan.loanNumber)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Statement</span>
                </button>
              </div>

              {/* Outstanding vs Repaid Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Sanctioned</span>
                  <span className="text-sm font-black text-white">₹{activeLoan.sanctionedAmount.toLocaleString('en-IN')}</span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Interest Rate</span>
                  <span className="text-sm font-black text-emerald-400">{activeLoan.interestRate}% p.a.</span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Next Due Date</span>
                  <span className="text-sm font-black text-amber-300">{activeLoan.nextEmiDueDate}</span>
                </div>
              </div>

              {/* Big Direct Pay EMI Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 border border-emerald-500/30 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Upcoming EMI Payment</span>
                  <span className="text-2xl font-black text-white">₹{activeLoan.monthlyEmi.toLocaleString('en-IN')}</span>
                </div>

                <button
                  onClick={onOpenPayEmiModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition cursor-pointer"
                >
                  Pay Now EMI
                </button>
              </div>

              {/* Repayment Breakdown info */}
              <div className="space-y-2 text-xs text-slate-300">
                <span className="font-bold text-slate-400 block uppercase tracking-wider text-[10px]">
                  3G Loan Terms & Benefits:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>0% Foreclosure Penalty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Auto-Debit Configured</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Tax Exemption Eligible</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instant Digital Receipts</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Transaction History Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-white">Recent EMI Payment History</h2>
          <span className="text-xs text-slate-400">Updated in real-time</span>
        </div>

        <div className="divide-y divide-slate-800/80 overflow-x-auto">
          {transactions.map((tx) => (
            <div key={tx.id} className="py-3.5 flex items-center justify-between gap-4 text-xs min-w-[500px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">{tx.loanNumber}</span>
                  <span className="text-[10px] text-slate-400">{tx.date} • via {tx.paymentMode}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-black text-emerald-400 block">₹{tx.amount.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-slate-400 font-mono">{tx.receiptNumber}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
