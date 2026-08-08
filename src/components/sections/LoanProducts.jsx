import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Building2, ChevronRight, X } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';

/* ── Single Product Card ── */
function ProductCard({ product, onApply }) {
  const { title, icon: Icon, tag, tagColor, description, rate, rateColor, limit, tenure, features, topGradient, iconBg, btnGradient, ring } = product;

  return (
    <div
      className={`group relative bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ring-2 ring-transparent ${ring} hover:ring-opacity-100`}
    >
      {/* Colour accent top bar */}
      <div className={`h-1.5 bg-gradient-to-r ${topGradient}`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tagColor}`}>{tag}</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-black text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">{description}</p>

        {/* Rate + Limit tiles */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
            <p className="text-xs text-slate-400 font-medium mb-1">Starting Rate</p>
            <p className={`text-lg font-black ${rateColor}`}>{rate}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
            <p className="text-xs text-slate-400 font-medium mb-1">Max Limit</p>
            <p className="text-sm font-black text-blue-800">{limit}</p>
          </div>
        </div>

        {/* Tenure */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-5 bg-blue-50 rounded-xl px-3 py-2">
          <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
          Repayment tenure: <span className="font-bold text-blue-700">{tenure}</span>
        </div>

        {/* Feature list */}
        <ul className="space-y-2 mb-6">
          {features.map(f => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => onApply(product)}
          className={`mt-auto w-full bg-gradient-to-r ${btnGradient} text-white font-bold py-3.5 rounded-2xl shadow-md hover:opacity-90 active:opacity-80 flex items-center justify-center gap-2 transition-all`}
        >
          Apply Now <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ── Apply Modal ── */
function ApplyModal({ product, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', amount: '', tenure: '' });

  if (!product) return null;
  const { title, icon: Icon, iconBg, rate } = product;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Modal Header */}
        <div className={`bg-gradient-to-r ${product.topGradient} px-8 py-6 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconBg} bg-white/20 flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Apply For</p>
              <h3 className="text-white text-xl font-black">{title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2].map(s => (
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-400'}`}>{s}</div>
                {s < 2 && <div className={`flex-1 h-0.5 transition-colors ${step > s ? 'bg-blue-900' : 'bg-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-600 mb-4">Personal Details</p>
              {[
                { label: 'Full Name', key: 'name', placeholder: 'Enter your full name', type: 'text' },
                { label: 'Mobile Number', key: 'phone', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              ))}
              <button
                onClick={() => setStep(2)}
                className="w-full mt-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-600 mb-4">Loan Requirements</p>
              {[
                { label: 'Loan Amount (₹)', key: 'amount', placeholder: 'e.g. 5,00,000', type: 'text' },
                { label: 'Preferred Tenure (months)', key: 'tenure', placeholder: 'e.g. 36', type: 'number' },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              ))}
              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 border border-slate-100">
                <p className="font-bold text-slate-700 mb-1">Indicative Rate: <span className="text-emerald-600">{rate}</span></p>
                <p className="text-xs">Final rate subject to credit assessment. T&C apply.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <button onClick={() => setStep(1)} className="flex-1 py-3.5 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                  Back
                </button>
                <button
                  onClick={onClose}
                  className={`flex-1 py-3.5 rounded-2xl bg-gradient-to-r ${product.btnGradient} text-white font-black shadow-lg hover:opacity-90 transition-opacity`}
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main Loan Products Section ── */
export default function LoanProducts() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-bold mb-5">
              <Building2 className="w-4 h-4" />
              Our Lending Solutions
            </div>
            <h2 className="text-5xl font-black text-slate-800 mb-4 tracking-tight">Available Loan Services</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Six premium financing options tailored to fuel your personal goals, business ambitions,
              academic dreams, and more.
            </p>
          </div>

          {/* Products Grid — 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} onApply={setSelected} />
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-slate-400 mt-10">
            All loans are subject to credit approval and verification. Interest rates are subject to change.
            <a href="#" className="text-blue-600 font-semibold ml-1 hover:underline">Read full terms.</a>
          </p>
        </div>
      </section>

      <ApplyModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
