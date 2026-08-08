import React from 'react';
import {
  CheckCircle2, TrendingUp, Wallet, Calendar,
  CreditCard, BadgePercent, BarChart3, ChevronRight,
  ArrowUpRight, Clock, Download, AlertCircle
} from 'lucide-react';
import { Badge, ProgressBar, MetricTile, Avatar } from '../ui/UIAtoms';
import { LOAN, TRANSACTIONS, USER } from '../../data/mockData';

/* ── Active Loan Summary Card ── */
function LoanSummaryCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow">
      {/* Header band */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">Active Loan Account</p>
          <p className="text-white font-bold text-lg">{LOAN.type} — {LOAN.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <Badge className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
            Active
          </Badge>
        </div>
      </div>

      <div className="p-8">
        {/* 3 Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <MetricTile icon={CreditCard} label="Loan Amount" value={LOAN.amount} valueColor="text-slate-800" />
          <MetricTile icon={BadgePercent} label="Interest Rate" value={LOAN.interestRate} valueColor="text-blue-700" />
          <MetricTile icon={Wallet} label="Outstanding" value={LOAN.outstanding} valueColor="text-rose-600" />
        </div>

        {/* Loan meta info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-100">
          {[
            { label: 'Loan Tenure', value: LOAN.tenure, icon: Calendar },
            { label: 'Start Date', value: LOAN.startDate, icon: Calendar },
            { label: 'End Date', value: LOAN.endDate, icon: Calendar },
            { label: 'EMIs Paid', value: `${LOAN.paid} / ${LOAN.total}`, icon: BarChart3 },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-medium">{label}</p>
                <p className="text-sm font-bold text-slate-700 mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <ProgressBar
          value={LOAN.paid}
          max={LOAN.total}
          label={`${LOAN.paid} EMIs Paid`}
          sublabel={`${LOAN.total - LOAN.paid} remaining`}
        />
      </div>
    </div>
  );
}

/* ── EMI Tracker Card ── */
function EmiTrackerCard({ onPay }) {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl shadow-2xl p-8 flex flex-col justify-between relative overflow-hidden hover:shadow-blue-900/40 transition-shadow">
      {/* Decorative rings */}
      <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-emerald-500/15 bg-emerald-500/5" />
      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-blue-500/10" />
      <div className="absolute right-4 bottom-32 w-20 h-20 rounded-full border border-white/5" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-blue-300 text-xs font-black uppercase tracking-widest">EMI Tracker</p>
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </div>

        <p className="text-blue-200 text-sm font-medium mb-2">Next EMI Amount</p>
        <p className="text-5xl font-black text-white mb-4 leading-none">{LOAN.nextEmi}</p>

        {/* Due alert */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/25 rounded-full px-4 py-2 mb-6">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-bold text-amber-200">Due {LOAN.dueDate} · {LOAN.daysLeft} days left</span>
        </div>

        {/* Mini tiles */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
            <p className="text-blue-300 text-xs mb-1 font-medium">Monthly EMI</p>
            <p className="text-white font-bold">{LOAN.nextEmi}</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
            <p className="text-blue-300 text-xs mb-1 font-medium">Remaining</p>
            <p className="text-white font-bold">{LOAN.total - LOAN.paid} months</p>
          </div>
        </div>

        {/* Payment warning */}
        {LOAN.daysLeft <= 7 && (
          <div className="flex items-start gap-2 bg-red-500/15 border border-red-400/20 rounded-2xl p-3 mb-6">
            <AlertCircle className="w-4 h-4 text-red-300 flex-shrink-0 mt-0.5" />
            <p className="text-red-200 text-xs font-medium">
              EMI is due in {LOAN.daysLeft} days. Avoid late payment charges.
            </p>
          </div>
        )}
      </div>

      <button
        onClick={onPay}
        className="relative z-10 w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-base py-4 rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
        style={{ animation: 'pulse-ring 2.2s infinite' }}
      >
        <CreditCard className="w-5 h-5" />
        Pay EMI Now
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/* ── Recent Transactions Table ── */
function TransactionsCard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div>
          <h3 className="font-black text-slate-800 uppercase tracking-wide text-sm">Recent EMI Payments</h3>
          <p className="text-xs text-slate-400 mt-0.5">Last {TRANSACTIONS.length} payment records</p>
        </div>
        <button className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors">
          View Full History <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-slate-50/70">
              {['Date', 'Reference No.', 'Payment Mode', 'Amount', 'Status', 'Receipt'].map(h => (
                <th key={h} className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-widest">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {TRANSACTIONS.map((tx, i) => (
              <tr
                key={tx.id}
                className={`hover:bg-slate-50 transition-colors ${i === 0 ? 'bg-emerald-50/40' : ''}`}
              >
                <td className="px-6 py-5 text-sm font-semibold text-slate-700">{tx.date}</td>
                <td className="px-6 py-5 text-sm text-slate-500 font-mono">{tx.ref}</td>
                <td className="px-6 py-5">
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {tx.mode}
                  </span>
                </td>
                <td className="px-6 py-5 text-base font-black text-slate-800">{tx.amount}</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                    <Download className="w-3 h-3" /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Credit Profile Card ── */
function CreditProfileCard() {
  const score = USER.creditScore;
  const pct = ((score - 300) / (900 - 300)) * 100;
  const color = score >= 750 ? 'text-emerald-600' : score >= 650 ? 'text-amber-600' : 'text-red-600';
  const label = score >= 750 ? 'Excellent' : score >= 650 ? 'Good' : 'Fair';

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide">Credit Profile</h3>
        <Avatar initials={USER.avatar} />
      </div>

      {/* Score dial */}
      <div className="text-center mb-6">
        <p className={`text-6xl font-black ${color} mb-1`}>{score}</p>
        <p className={`text-sm font-bold ${color}`}>{label} Credit Score</p>
        <p className="text-xs text-slate-400 mt-1">CIBIL Score · Updated Aug 2026</p>
      </div>

      {/* Score bar */}
      <div className="h-3 bg-gradient-to-r from-red-400 via-amber-400 to-emerald-500 rounded-full mb-2 relative">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-blue-700 rounded-full shadow-lg"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
        <span>300</span><span>600</span><span>750</span><span>900</span>
      </div>

      <hr className="my-5 border-slate-100" />

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Member Since</span>
          <span className="font-bold text-slate-700">{USER.memberSince}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Active Loans</span>
          <span className="font-bold text-slate-700">1</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Repayment Record</span>
          <span className="font-bold text-emerald-600">100% On-Time</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Dashboard Component ── */
export default function Dashboard({ onPay }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-black text-blue-700 uppercase tracking-widest mb-2">Customer Portal</p>
            <h2 className="text-4xl font-black text-slate-800 mb-2">My Loan Dashboard</h2>
            <p className="text-slate-500">Track your active loan, EMI schedule, and payment history.</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700">All Systems Active</span>
          </div>
        </div>

        {/* Row 1: Loan Summary + EMI + Credit */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
          <div className="xl:col-span-5">
            <LoanSummaryCard />
          </div>
          <div className="xl:col-span-4">
            <EmiTrackerCard onPay={onPay} />
          </div>
          <div className="xl:col-span-3">
            <CreditProfileCard />
          </div>
        </div>

        {/* Row 2: Transactions */}
        <TransactionsCard />
      </div>
    </section>
  );
}
