import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, CreditCard, HelpCircle, Menu, X, ShieldCheck, Home, Briefcase, LayoutDashboard, UserCheck } from 'lucide-react';
import { ViewTab, UserProfile } from '../types';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  onOpenCallModal: () => void;
  onOpenPayEmiModal: () => void;
  userProfile?: UserProfile;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenCallModal,
  onOpenPayEmiModal,
  userProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ViewTab; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'service', label: 'Services', icon: Briefcase },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: UserCheck },
  ];

  const handleNavClick = (id: ViewTab) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs text-slate-800">
      {/* Top Banner - Light Blue Announcement */}
      <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Direct Bank Loan Approval · RBI / NBFC Registered Partner</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] opacity-90">
            <span>Customer Care: +91 98000 12345</span>
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group"
          >
            <Logo size="md" variant="dark" />
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-sky-50/80 p-1 rounded-xl border border-sky-100">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-sky-700 shadow-xs border border-sky-200'
                      : 'text-slate-600 hover:text-sky-700 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-2.5">
            <button
              onClick={onOpenPayEmiModal}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 rounded-xl text-xs font-bold transition-all shadow-2xs"
            >
              <CreditCard className="w-3.5 h-3.5 text-sky-600" />
              Pay EMI
            </button>

            <button
              onClick={onOpenCallModal}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-700 hover:to-blue-700 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              Call Now
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCallModal}
              className="p-2 text-sky-700 bg-sky-50 border border-sky-200 rounded-xl active:scale-95 flex items-center justify-center"
              aria-label="Call Helpline"
            >
              <Phone className="w-4 h-4 text-sky-600" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 rounded-xl text-slate-800 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors focus:outline-none active:scale-95 flex items-center gap-1.5 font-bold text-xs shadow-2xs"
              aria-label="Toggle Mobile Navigation Menu"
            >
              <span className="text-xs text-sky-800 font-extrabold">Menu</span>
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-sky-700" />
              ) : (
                <Menu className="w-5 h-5 text-sky-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sky-200 px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-bold text-slate-800">3G Finance Quick Menu</span>
            </div>
            {userProfile && (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Verified Account
              </span>
            )}
          </div>

          {/* Mobile Main Navigation Links */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left border ${
                    isActive
                      ? 'bg-sky-50 text-sky-800 border-sky-300 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-sky-50/50'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-sky-600 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Action Buttons in Mobile Menu */}
          <div className="space-y-2 pt-2 border-t border-sky-100">
            <button
              onClick={() => {
                onOpenPayEmiModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-sky-50 hover:bg-sky-100 text-sky-900 rounded-xl border border-sky-200 text-xs font-bold transition-all"
            >
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-sky-600" />
                <span>Pay Monthly EMI / Deposit</span>
              </div>
              <span className="text-[10px] bg-sky-200 text-sky-800 px-2 py-0.5 rounded-md font-bold">Fast Pay</span>
            </button>

            <button
              onClick={() => {
                onOpenCallModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-98"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Helpline (+91 98000 12345)</span>
              </div>
              <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-md font-bold">24/7</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl border border-slate-200 text-xs font-semibold transition-all"
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-slate-500" />
                <span>Need Support or Inquiry?</span>
              </div>
              <span className="text-[11px] text-sky-600 font-bold">Contact Us →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
