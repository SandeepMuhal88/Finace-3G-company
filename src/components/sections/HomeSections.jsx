import React from 'react';
import { Stars, Avatar } from '../ui/UIAtoms';
import { TESTIMONIALS } from '../../data/mockData';
import {
  ShieldCheck, Clock, Zap, Headphones, CheckCircle2,
  ArrowUpRight, Phone, Mail
} from 'lucide-react';

const WHY_US = [
  { icon: Zap, title: 'Lightning Approval', desc: 'Get your loan approved in as little as 24 hours with our streamlined digital process.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: ShieldCheck, title: '100% Secure & Transparent', desc: 'End-to-end data encryption and zero hidden charges. Your trust is our top priority.', color: 'text-blue-700', bg: 'bg-blue-50' },
  { icon: Clock, title: 'Flexible Repayment', desc: 'Choose your EMI schedule — weekly, monthly, or quarterly — to match your cash flow.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Headphones, title: '24/7 Dedicated Support', desc: 'Our relationship managers and support team are available round the clock for you.', color: 'text-violet-600', bg: 'bg-violet-50' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Apply Online', desc: 'Fill out our simple digital form in under 5 minutes.' },
  { num: '02', title: 'Upload Documents', desc: 'Securely upload your KYC and income proof digitally.' },
  { num: '03', title: 'Credit Evaluation', desc: 'Our system evaluates your application in real-time.' },
  { num: '04', title: 'Loan Disbursement', desc: 'Funds credited directly to your bank account.' },
];

/* ── Why Choose Us Section ── */
function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-bold mb-6">
              <ShieldCheck className="w-4 h-4" /> Why 3G Finance
            </div>
            <h2 className="text-5xl font-black text-slate-800 mb-5 leading-tight">
              Built on Trust.<br />
              <span className="text-blue-900">Driven by Excellence.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              For over 15 years, 3G Finance Trading Company has been the partner of choice for individuals
              and businesses seeking reliable, transparent, and compassionate financial solutions.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['RBI Registered NBFC', 'ISO 9001:2015', 'CIBIL Partner', 'AA+ CARE Rating'].map(b => (
                <span key={b} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {b}
                </span>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all hover:-translate-y-0.5">
              Learn Our Story <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_US.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 text-sm">{title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Process Section ── */
function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-emerald-500 opacity-5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/20 rounded-full px-4 py-2 text-emerald-300 text-sm font-bold mb-5">
            <Zap className="w-4 h-4" /> Simple 4-Step Process
          </div>
          <h2 className="text-5xl font-black text-white mb-4">Get Your Loan in 4 Easy Steps</h2>
          <p className="text-xl text-blue-200">Fast, paperless, and completely digital.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/40 to-transparent z-0" />
              )}
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/12 transition-colors relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                  <span className="text-2xl font-black text-white">{step.num}</span>
                </div>
                <h4 className="font-black text-white mb-2">{step.title}</h4>
                <p className="text-blue-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials Section ── */
function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-slate-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-slate-500">Trusted by thousands across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white rounded-3xl border border-slate-100 shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
              <Stars count={t.rating} />
              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar initials={t.avatar} />
                <div>
                  <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact Section ── */
function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-bold mb-6">
              <Headphones className="w-4 h-4" /> Get In Touch
            </div>
            <h2 className="text-5xl font-black text-slate-800 mb-5">We're Here to Help You</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Have questions about our loans or need help with your account?
              Our dedicated support team is available 24/7.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Phone, label: 'Toll-Free Number', value: '1-800-3G-FINANCE', sub: 'Available 24/7, 365 days', href: 'tel:' },
                { icon: Mail, label: 'Email Support', value: 'support@3gfinance.com', sub: 'Response within 2 hours', href: 'mailto:support@3gfinance.com' },
              ].map(({ icon: Icon, label, value, sub, href }) => (
                <a key={label} href={href} className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                  <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-lg font-black text-slate-800">{value}</p>
                    <p className="text-sm text-slate-500">{sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8">
            <h3 className="text-2xl font-black text-slate-800 mb-2">Send Us a Message</h3>
            <p className="text-slate-500 text-sm mb-7">We'll get back to you within 2 business hours.</p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'First Name', placeholder: 'John', type: 'text' },
                  { label: 'Last Name', placeholder: 'Doe', type: 'text' },
                ].map(f => (
                  <div key={f.label}>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Subject</label>
                <select className="w-full px-4 py-3 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-600">
                  <option>Loan Enquiry</option>
                  <option>EMI Issue</option>
                  <option>Account Support</option>
                  <option>General Query</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Message</label>
                <textarea rows={4} placeholder="How can we help you today?" className="w-full px-4 py-3 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" />
              </div>

              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-black py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5">
                Send Message <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ── */
function CTABanner({ setActiveTab }) {
  return (
    <section className="py-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 -left-24 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-2">Limited Time Offer</p>
              <h3 className="text-4xl font-black text-white mb-2">Ready for Your Next Loan?</h3>
              <p className="text-blue-200 text-lg">Quick approval · Zero processing fee for first 100 applicants · Lowest rates guaranteed.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                onClick={() => setActiveTab('products')}
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-4 rounded-2xl shadow-xl flex items-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Apply Online <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" /> Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Composite Home Page Sections Export ── */
export { WhyUsSection, ProcessSection, TestimonialsSection, ContactSection, CTABanner };
