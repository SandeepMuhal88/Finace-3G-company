import React from 'react';
import { X, CreditCard, CheckCircle2 } from 'lucide-react';
import { LOAN, USER } from '../../data/mockData';

export default function PayEMIModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-1">Secure Payment</p>
            <h3 className="text-white text-2xl font-black">Confirm EMI Payment</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          {/* Amount highlight */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 mb-6 text-center">
            <p className="text-sm text-emerald-600 font-bold uppercase tracking-widest mb-2">Amount Due</p>
            <p className="text-6xl font-black text-emerald-700 mb-2">{LOAN.nextEmi}</p>
            <p className="text-slate-500 text-sm">Due by <strong className="text-slate-700">{LOAN.dueDate}</strong></p>
          </div>

          {/* Summary rows */}
          <div className="bg-slate-50 rounded-2xl p-5 mb-6 space-y-3.5 border border-slate-100">
            {[
              { label: 'Loan Account', value: LOAN.id },
              { label: 'Customer Name', value: USER.name },
              { label: 'Customer ID', value: USER.id },
              { label: 'Payment Month', value: 'October 2026' },
              { label: 'EMI No.', value: `${LOAN.paid + 1} of ${LOAN.total}` },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center text-sm border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <span className="text-slate-500 font-medium">{r.label}</span>
                <span className="font-bold text-slate-800">{r.value}</span>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="mb-6">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Pay Via</p>
            <div className="grid grid-cols-3 gap-3">
              {['UPI', 'Net Banking', 'Debit Card'].map(m => (
                <button key={m} className="py-2.5 border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-700 transition-all">
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Secure note */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            Payments are secured with 256-bit SSL encryption.
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-4 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" /> Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
