import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard, 
  FileText, 
  CheckCircle2, 
  Lock, 
  HelpCircle,
  LogOut
} from 'lucide-react';

interface ProfileViewProps {
  onOpenCall: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onOpenCall }) => {
  const [formData, setFormData] = useState({
    fullName: 'Rahul Kumar',
    mobile: '9800012345',
    email: 'rahul.kumar@gmail.com',
    panNumber: 'ABCDE1234F',
    aadhaarNumber: 'XXXX-XXXX-8890',
    city: 'New Delhi',
    pincode: '110001',
    address: 'Flat 402, Royal Residency, Connaught Place, New Delhi',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Profile Info Card */}
      <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-md">
            RK
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-white">
              <CheckCircle2 className="w-3 h-3" />
            </span>
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h1 className="text-xl font-black text-slate-900">{formData.fullName}</h1>
              <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                KYC Verified
              </span>
            </div>
            <p className="text-xs text-slate-500">Customer ID: 3G-CUST-882019 · Member Since Jan 2025</p>
          </div>
        </div>

        <button
          onClick={onOpenCall}
          className="px-4 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs rounded-xl border border-sky-200 transition-all flex items-center gap-2"
        >
          <Phone className="w-4 h-4 text-sky-600" />
          <span>Contact Account Officer</span>
        </button>
      </div>

      {/* Main Profile Form */}
      <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-sky-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Personal & Financial Details</h2>
            <p className="text-xs text-slate-500">Keep your loan profile updated for instant 1-click approvals</p>
          </div>
          {isSaved && (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ✓ Details Saved Successfully!
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Legal Name (as per PAN)</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Mobile Number (Aadhaar Linked)</label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">PAN Card Number</label>
              <input
                type="text"
                disabled
                value={formData.panNumber}
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 text-slate-500 rounded-xl font-mono cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Aadhaar Card Number</label>
              <input
                type="text"
                disabled
                value={formData.aadhaarNumber}
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 text-slate-500 rounded-xl font-mono cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">City / Region</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Residential Address</label>
            <textarea
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs"
            >
              Update Profile Information
            </button>
          </div>
        </form>

        {/* Security & KYC Info Footer */}
        <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-center gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
          <p>
            Your information is protected by Shreeji Finance Bank-Grade 256-Bit SSL Encryption. We never share your details with unauthorized third parties.
          </p>
        </div>
      </div>
    </div>
  );
};
