import React, { useState } from 'react';
import { CreditCard, X, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface PayEmiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PayEmiModal: React.FC<PayEmiModalProps> = ({ isOpen, onClose }) => {
  const [loanId, setLoanId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loanId || !mobileNumber || !amount) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setLoanId('');
    setMobileNumber('');
    setAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-sky-100 shadow-2xl overflow-hidden text-slate-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <CreditCard className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold text-sky-100 uppercase tracking-wider">
              Official EMI Payment Gateway
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-white">Pay Monthly Loan Installment</h3>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">Payment Request Generated!</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Loan ID: <strong className="text-sky-700">{loanId.toUpperCase()}</strong>
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Amount: <strong className="text-emerald-700">₹{Number(amount).toLocaleString('en-IN')}</strong>
                </p>
              </div>

              <div className="p-4 bg-sky-50 rounded-2xl text-xs text-slate-600 border border-sky-100 text-left space-y-1">
                <p className="font-bold text-sky-900 mb-1">What happens next?</p>
                <p>1. A payment notification has been sent to {mobileNumber}.</p>
                <p>2. Complete the payment on your UPI app or Debit Card.</p>
                <p>3. Instant SMS confirmation & receipt will be dispatched within 2 minutes.</p>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-sky-600 text-white font-bold rounded-xl text-xs hover:bg-sky-700 transition-colors"
              >
                Close & Return to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Loan Account No. / Agreement Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 3G-LN-982314"
                  value={loanId}
                  onChange={(e) => setLoanId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registered Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10 digit mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  EMI Installment Amount (₹) *
                </label>
                <input
                  type="number"
                  required
                  placeholder="Enter amount e.g. 8500"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
                />
              </div>

              {/* Payment Option Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'upi', label: 'UPI / GPay / PhonePe' },
                    { id: 'card', label: 'Debit / Credit Card' },
                    { id: 'netbanking', label: 'Net Banking' },
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`p-2.5 rounded-xl border text-center font-bold text-[11px] transition-all ${
                        paymentMethod === m.id
                          ? 'bg-sky-50 border-sky-600 text-sky-800 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-xs rounded-2xl hover:from-sky-700 hover:to-blue-700 transition-all shadow-md active:scale-98"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Proceed to Pay Securely</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-bit SSL Encryption · RBI Compliant Payment Gateway</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
