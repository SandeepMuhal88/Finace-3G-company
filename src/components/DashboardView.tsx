import React, { useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Clock,
  CheckCircle2,
  FileText,
  Download,
  PlusCircle,
  ArrowUpRight,
  AlertCircle,
  TrendingUp,
  UserCheck
} from 'lucide-react';

interface DashboardViewProps {
  onOpenPayEmi: () => void;
  onApplyNewLoan: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onOpenPayEmi, onApplyNewLoan }) => {
  const [activeTab, setActiveTab] = useState<'loans' | 'transactions' | 'documents'>('loans');

  const myLoans = [
    {
      id: 'SLPL-LN-982314',
      type: 'Personal Loan',
      amount: 300000,
      disbursedDate: '12 Jan 2026',
      emiAmount: 8850,
      nextDueDate: '10 Aug 2026',
      paidEmis: 6,
      totalEmis: 36,
      status: 'Active',
      interestRate: '8.5%',
    },
    {
      id: 'SLPL-LN-441209',
      type: 'Two Wheeler Loan',
      amount: 85000,
      disbursedDate: '05 Mar 2025',
      emiAmount: 2950,
      nextDueDate: '15 Aug 2026',
      paidEmis: 17,
      totalEmis: 24,
      status: 'Active',
      interestRate: '9.0%',
    },
  ];

  const recentTransactions = [
    { id: 'TXN-882190', date: '10 Jul 2026', desc: 'EMI Payment - 3G-LN-982314', amount: '₹ 8,850', status: 'Success' },
    { id: 'TXN-882189', date: '15 Jun 2026', desc: 'EMI Payment - 3G-LN-441209', amount: '₹ 2,950', status: 'Success' },
    { id: 'TXN-882188', date: '10 Jun 2026', desc: 'EMI Payment - 3G-LN-982314', amount: '₹ 8,850', status: 'Success' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                Verified Customer
              </span>
              <span className="text-xs text-sky-100 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> KYC Complete
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black">Welcome Back, Rahul Kumar</h1>
            <p className="text-xs text-sky-100 mt-0.5">
              Customer ID: 3G-CUST-882019 · Registered Mobile: +91 98*** **345
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenPayEmi}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1.5"
            >
              <CreditCard className="w-4 h-4 text-slate-950" />
              <span>Pay EMI Now</span>
            </button>

            <button
              onClick={onApplyNewLoan}
              className="px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white font-bold text-xs rounded-xl border border-white/30 transition-all flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4 text-white" />
              <span>New Loan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase">Total Loan Sanctioned</span>
            <div className="text-xl font-black text-slate-900 mt-0.5">₹ 3,85,000</div>
            <span className="text-[10px] text-emerald-600 font-semibold">2 Active Loans</span>
          </div>
          <div className="p-3 bg-sky-50 text-sky-600 rounded-xl border border-sky-100">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase">Upcoming Total EMI</span>
            <div className="text-xl font-black text-sky-700 mt-0.5">₹ 11,800</div>
            <span className="text-[10px] text-amber-600 font-semibold">Due on 10 Aug 2026</span>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl border border-amber-100">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase">Credit Score Rating</span>
            <div className="text-xl font-black text-emerald-700 mt-0.5">782 / 900</div>
            <span className="text-[10px] text-slate-500 font-semibold">Excellent CIBIL Score</span>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="bg-white rounded-3xl border border-sky-100 p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-100 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('loans')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'loans'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'bg-sky-50/50 text-slate-600 hover:bg-sky-100/60'
              }`}
          >
            Active Loans ({myLoans.length})
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'transactions'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'bg-sky-50/50 text-slate-600 hover:bg-sky-100/60'
              }`}
          >
            Payment History
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'documents'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'bg-sky-50/50 text-slate-600 hover:bg-sky-100/60'
              }`}
          >
            Loan Sanction Letters
          </button>
        </div>

        {/* Active Loans */}
        {activeTab === 'loans' && (
          <div className="space-y-4">
            {myLoans.map((loan) => (
              <div
                key={loan.id}
                className="p-5 bg-sky-50/40 rounded-2xl border border-sky-100 hover:border-sky-300 transition-all space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-sky-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900">{loan.type}</span>
                    <span className="text-xs font-bold text-sky-700 bg-white px-2.5 py-0.5 rounded-full border border-sky-200">
                      {loan.id}
                    </span>
                  </div>

                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    ● {loan.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 text-[10px] block">Loan Amount</span>
                    <span className="font-extrabold text-slate-900">₹ {loan.amount.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">Monthly EMI</span>
                    <span className="font-extrabold text-sky-700">₹ {loan.emiAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">Next Due Date</span>
                    <span className="font-bold text-amber-700">{loan.nextDueDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">Tenure Progress</span>
                    <span className="font-bold text-slate-800">{loan.paidEmis} / {loan.totalEmis} Paid</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-600 h-full rounded-full transition-all"
                      style={{ width: `${(loan.paidEmis / loan.totalEmis) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={onOpenPayEmi}
                    className="px-4 py-2 bg-sky-600 text-white font-bold text-xs rounded-xl hover:bg-sky-700 transition-colors shadow-2xs"
                  >
                    Pay EMI for {loan.id}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Transactions */}
        {activeTab === 'transactions' && (
          <div className="divide-y divide-sky-100 text-xs">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="py-3.5 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">{tx.desc}</span>
                  <span className="text-[10px] text-slate-400">{tx.date} · Ref: {tx.id}</span>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-emerald-700 block">{tx.amount}</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-3 text-xs">
            {myLoans.map((loan) => (
              <div key={loan.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-sky-600" />
                  <div>
                    <span className="font-bold text-slate-900 block">Official Sanction Letter - {loan.id}</span>
                    <span className="text-[10px] text-slate-500">PDF Document · Digitally Signed</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading official sanction letter for ${loan.id}...`)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-sky-50 text-sky-700 font-bold rounded-lg border border-sky-200 hover:bg-sky-100"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
