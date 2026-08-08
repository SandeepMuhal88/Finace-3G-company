import React, { useState } from 'react';

/* ── Layout ── */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

/* ── Sections ── */
import Hero from './components/sections/Hero';
import Dashboard from './components/sections/Dashboard';
import LoanProducts from './components/sections/LoanProducts';
import {
  WhyUsSection,
  ProcessSection,
  TestimonialsSection,
  ContactSection,
  CTABanner,
} from './components/sections/HomeSections';

/* ── UI ── */
import PayEMIModal from './components/ui/PayEMIModal';

/* ── Global Styles ── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom scroll bar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 999px; }
  ::-webkit-scrollbar-thumb:hover { background: #64748b; }

  /* Entrance animation */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up { animation: fadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; }

  /* EMI button pulse ring */
  @keyframes pulse-ring {
    0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
    60%       { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
  }

  /* Page transition */
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .page-enter { animation: slideIn 0.4s ease both; }
`;

/* ── Page Wrapper ── */
function Page({ children }) {
  return <div className="page-enter">{children}</div>;
}

/* ────────── App Root ────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [payOpen, setPayOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <style>{GLOBAL_CSS}</style>

      {/* ── Navigation ── */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* ── Pages ── */}
      {activeTab === 'home' && (
        <Page>
          <Hero setActiveTab={handleTabChange} />
          <WhyUsSection />
          <ProcessSection />
          <LoanProducts />
          <TestimonialsSection />
          <CTABanner setActiveTab={handleTabChange} />
        </Page>
      )}

      {activeTab === 'products' && (
        <Page>
          {/* Products page hero */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-3">Our Portfolio</p>
              <h1 className="text-5xl font-black text-white mb-4">Loan Products</h1>
              <p className="text-xl text-blue-200 max-w-xl mx-auto">
                Explore our full range of financial solutions crafted for every need and budget.
              </p>
            </div>
          </div>
          <LoanProducts />
          <CTABanner setActiveTab={handleTabChange} />
        </Page>
      )}

      {activeTab === 'dashboard' && (
        <Page>
          {/* Dashboard page hero */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-2">Customer Portal</p>
              <h1 className="text-4xl font-black text-white">My Loan Dashboard</h1>
            </div>
          </div>
          <Dashboard onPay={() => setPayOpen(true)} />
          <CTABanner setActiveTab={handleTabChange} />
        </Page>
      )}

      {activeTab === 'contact' && (
        <Page>
          {/* Contact page hero */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest mb-3">Always Here For You</p>
              <h1 className="text-5xl font-black text-white mb-4">Contact Us</h1>
              <p className="text-xl text-blue-200 max-w-xl mx-auto">
                Have a question? Our team is ready to assist you 24/7.
              </p>
            </div>
          </div>
          <ContactSection />
        </Page>
      )}

      {/* ── Footer ── */}
      <Footer />

      {/* ── Pay EMI Modal (global) ── */}
      <PayEMIModal open={payOpen} onClose={() => setPayOpen(false)} />
    </div>
  );
}
