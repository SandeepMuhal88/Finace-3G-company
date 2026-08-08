import React from 'react';
import { ShieldCheck, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

/* Inline SVG social icons (lucide-react doesn't have these) */
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
    </svg>
  ),
};

const FOOTER_LINKS = {
  'Loan Products': ['Personal Loan', 'Business Loan', 'Education Loan', 'Home Loan', 'Gold Loan', 'Vehicle Loan'],
  'Company': ['About Us', 'Leadership Team', 'Careers', 'Press & Media', 'Awards & Recognition', 'CSR Initiatives'],
  'Customer Support': ['FAQs', 'Grievance Redressal', 'Branch Locator', 'EMI Calculator', 'Loan Eligibility', 'Track Application'],
  'Legal': ['Terms & Conditions', 'Privacy Policy', 'Interest Rate Policy', 'Fair Practice Code', 'NBFC Registration', 'KYC Policy'],
};

const SOCIAL = [
  { icon: SocialIcons.Facebook, label: 'Facebook', href: '#' },
  { icon: SocialIcons.Twitter, label: 'Twitter / X', href: '#' },
  { icon: SocialIcons.Linkedin, label: 'LinkedIn', href: '#' },
  { icon: SocialIcons.Instagram, label: 'Instagram', href: '#' },
  { icon: SocialIcons.Youtube, label: 'YouTube', href: '#' },
];

const CERTIFICATIONS = [
  'RBI Registered NBFC',
  'ISO 9001:2015 Certified',
  'CIBIL Partner',
  'AA+ Rated by CARE',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* ── Newsletter / CTA Strip ── */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white mb-1">Stay Updated with 3G Finance</h3>
            <p className="text-blue-200 text-sm">Get the latest loan offers, interest rate updates, and financial tips.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 lg:w-80 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
            <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-colors whitespace-nowrap text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand Column — spans 2 */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-white tracking-tight leading-none">3G</span>
                  <span className="text-2xl font-bold text-slate-300 tracking-tight leading-none">Finance</span>
                </div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 leading-none mt-0.5">Trading Company</p>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Trusted by 12,500+ customers since 2009, we empower financial freedom through transparent,
              accessible, and responsible lending across India.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-7">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Get In Touch</p>
              <a href="tel:18003gfinance" className="flex items-center gap-2.5 text-sm hover:text-emerald-400 transition-colors group">
                <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>1-800-3G-FINANCE (Toll Free)</span>
              </a>
              <a href="mailto:support@3gfinance.com" className="flex items-center gap-2.5 text-sm hover:text-emerald-400 transition-colors group">
                <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>support@3gfinance.com</span>
              </a>
              <p className="flex items-start gap-2.5 text-sm">
                <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>3G Finance Tower, BKC, Bandra East,<br />Mumbai — 400 051, Maharashtra, India</span>
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex items-center gap-2">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mr-2">Certifications &amp; Affiliations:</p>
            {CERTIFICATIONS.map(c => (
              <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-400 text-xs font-semibold rounded-lg border border-slate-700">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} 3G Finance Trading Company. All rights reserved.<br />
            <span className="text-slate-700">Loans are subject to credit approval. Terms and conditions apply. Responsible lending policy in effect.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Sitemap'].map(l => (
              <a key={l} href="#" className="text-slate-600 hover:text-emerald-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
