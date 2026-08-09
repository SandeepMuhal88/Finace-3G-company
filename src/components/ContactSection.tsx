import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: 'Personal Loan',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-xs my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Get in Touch
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Have Questions About Loan Approval?
            </h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Our dedicated financial advisors are available 24/7 to guide you through interest rates, eligibility criteria, and instant loan applications.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3 p-3.5 bg-sky-50/60 rounded-2xl border border-sky-100">
              <div className="p-2 bg-sky-600 text-white rounded-xl shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Customer Helpline</span>
                <a href="tel:+919800012345" className="text-sky-700 font-extrabold text-sm hover:underline">
                  +91 98000 12345
                </a>
                <span className="text-[10px] text-slate-500 block">Toll-Free Helpline (Mon-Sat 9AM-7PM)</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-sky-50/60 rounded-2xl border border-sky-100">
              <div className="p-2 bg-sky-600 text-white rounded-xl shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Email Support</span>
                <a href="mailto:[EMAIL_ADDRESS]" className="text-sky-700 font-bold hover:underline">
                  [EMAIL_ADDRESS]
                </a>
                <span className="text-[10px] text-slate-500 block">Average Response Time: 15 minutes</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-sky-50/60 rounded-2xl border border-sky-100">
              <div className="p-2 bg-sky-600 text-white rounded-xl shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Head Corporate Office</span>
                <span className="text-slate-600 font-medium">Shreeji Finance Tower, Sector 62, Noida, NCR, India - 201301</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">Inquiry Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you <strong className="text-sky-800">{formData.name}</strong>. Our loan officer will call you back on <strong className="text-sky-800">{formData.phone}</strong> within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-sky-600 text-white font-bold text-xs rounded-xl hover:bg-sky-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <h3 className="text-sm font-bold text-slate-900 mb-1">Request Free Loan Callback</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10 digit phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Required Loan Type</label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 outline-none"
                  >
                    <option>Personal Instant Loan</option>
                    <option>Business Trading Loan</option>
                    <option>Home Loan</option>
                    <option>Vehicle / Car Loan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message / Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Mention loan amount required or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Loan Callback Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
