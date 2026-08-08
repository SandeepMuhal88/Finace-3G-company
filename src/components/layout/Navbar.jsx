import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Bell, Menu, X, ChevronDown,
  User, Settings, LogOut, CreditCard
} from 'lucide-react';
import { Avatar, Badge } from '../ui/UIAtoms';
import { USER, NAV_LINKS } from '../../data/mockData';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('#profile-menu')) setProfileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-xl shadow-lg border-b border-slate-200/80'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <button onClick={() => setActiveTab('home')} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center shadow-lg group-hover:shadow-blue-900/30 transition-shadow">
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-blue-900 tracking-tight leading-none">3G</span>
                <span className="text-2xl font-bold text-slate-700 tracking-tight leading-none">Finance</span>
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 leading-none mt-0.5">
                Trading Company
              </p>
            </div>
          </button>

          {/* ── Desktop Nav Tabs ── */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-xl p-1 gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === link.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-900 hover:bg-white/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Notification Bell */}
            <button className="relative w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative" id="profile-menu">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2.5 pl-2 pr-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Avatar initials={USER.avatar} />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800 leading-tight">{USER.name}</p>
                  <p className="text-xs text-slate-500">{USER.id}</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-14 w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 overflow-hidden">
                  {/* User Info Block */}
                  <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-slate-50 border-b border-slate-100 mb-1">
                    <div className="flex items-center gap-3">
                      <Avatar initials={USER.avatar} />
                      <div>
                        <p className="text-sm font-bold text-slate-800">{USER.name}</p>
                        <Badge className="bg-emerald-100 text-emerald-700 mt-0.5">
                          Credit Score: {USER.creditScore}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-sm text-slate-700 transition-colors">
                    <User className="w-4 h-4 text-blue-600" /> My Profile
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-sm text-slate-700 transition-colors">
                    <CreditCard className="w-4 h-4 text-emerald-600" /> Loan Accounts
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-sm text-slate-700 transition-colors">
                    <Settings className="w-4 h-4 text-slate-400" /> Settings
                  </a>
                  <hr className="my-1.5 border-slate-100" />
                  <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 text-sm text-red-500 transition-colors">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-5 space-y-2 shadow-xl">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); setMobileOpen(false); }}
              className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === link.id
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-blue-900'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Avatar initials={USER.avatar} />
              <div>
                <p className="text-sm font-bold text-slate-800">{USER.name}</p>
                <p className="text-xs text-slate-500">{USER.id}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
