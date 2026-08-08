import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface EmiCalculatorProps {
  onApplyLoan: (amount: number, tenureMonths: number, monthlyEmi: number) => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ onApplyLoan }) => {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% annual interest rate

  // Calculate EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEmi = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (r === 0) return Math.round(P / n);
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEmi = calculateEmi();
  const totalPayable = monthlyEmi * (tenureYears * 12);
  const totalInterest = Math.max(0, totalPayable - loanAmount);

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-xl p-5 sm:p-7 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-sky-100">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl border border-sky-200">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">3G Loan EMI Calculator</h3>
            <p className="text-xs text-slate-500">Instant Loan Calculation & RBI Approved Low Rates</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          8.5% p.a. Lowest Rate
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Sliders Side */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700">Required Loan Amount</label>
              <span className="text-sm font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                ₹ {loanAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={25000}
              max={2500000}
              step={25000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
              <span>₹ 25,000</span>
              <span>₹ 10 Lakhs</span>
              <span>₹ 25 Lakhs</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700">Loan Duration (Tenure)</label>
              <span className="text-sm font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={7}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
              <span>1 Year</span>
              <span>3 Years</span>
              <span>5 Years</span>
              <span>7 Years</span>
            </div>
          </div>

          {/* Interest Rate Selection */}
          <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">Applied Annual Interest Rate</span>
            <div className="flex items-center gap-1.5">
              {[8.5, 9.5, 10.5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setInterestRate(rate)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all ${
                    interestRate === rate
                      ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Result Side */}
        <div className="lg:col-span-5 bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-28 h-28 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-sky-300">
              Estimated Monthly Installment
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
              ₹ {monthlyEmi.toLocaleString('en-IN')}
              <span className="text-xs font-normal text-sky-200 ml-1">/ month</span>
            </div>

            <div className="space-y-2 mt-5 pt-4 border-t border-sky-800/80 text-xs">
              <div className="flex justify-between text-sky-200">
                <span>Principal Amount:</span>
                <span className="font-bold text-white">₹ {loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sky-200">
                <span>Total Interest:</span>
                <span className="font-bold text-amber-300">₹ {totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sky-200 pt-1 border-t border-sky-800/40 font-bold">
                <span className="text-white">Total Amount Payable:</span>
                <span className="text-white">₹ {totalPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3">
            <button
              onClick={() => onApplyLoan(loanAmount, tenureYears * 12, monthlyEmi)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm rounded-xl hover:brightness-110 active:scale-98 transition-all shadow-md"
            >
              <span>Apply Loan Now for ₹{loanAmount.toLocaleString('en-IN')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-sky-300 mt-2.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Zero Hidden Charges · 100% Paperless Digital Loan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
