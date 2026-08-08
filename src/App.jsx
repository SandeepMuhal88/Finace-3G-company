import React, { useState } from 'react';
import {
  ShieldCheck,
  User,
  Menu,
  X,
  ChevronRight,
  Briefcase,
  GraduationCap,
  UserSquare2,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy Data
  const activeLoan = {
    amount: "$25,000",
    interestRate: "8.5%",
    outstandingBalance: "$18,450",
    nextEmiAmount: "$545.00",
    dueDate: "Oct 15, 2026"
  };

  const transactions = [
    { id: 1, date: "Sep 15, 2026", amount: "$545.00", status: "Successful" },
    { id: 2, date: "Aug 15, 2026", amount: "$545.00", status: "Successful" },
    { id: 3, date: "Jul 15, 2026", amount: "$545.00", status: "Successful" },
  ];

  const loanProducts = [
    {
      title: "Personal Loan",
      icon: <UserSquare2 className="w-8 h-8 text-blue-900" />,
      description: "Flexible financing for your personal needs, whether it's a vacation or home renovation.",
      rate: "From 10.5% p.a.",
    },
    {
      title: "Business Loan",
      icon: <Briefcase className="w-8 h-8 text-blue-900" />,
      description: "Scale your business with our customized corporate lending solutions and high limits.",
      rate: "From 8.0% p.a.",
    },
    {
      title: "Education Loan",
      icon: <GraduationCap className="w-8 h-8 text-blue-900" />,
      description: "Invest in your future with our low-interest education loans for top universities.",
      rate: "From 7.5% p.a.",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                {/* Fallback icon / User can replace with <img src="/logo.png" /> */}
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-blue-900 tracking-tight leading-tight">3G FINANCE</span>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest leading-none">Trading Company</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#" className="text-blue-900 font-medium hover:text-emerald-600 transition-colors">Home</a>
              <a href="#" className="text-slate-600 font-medium hover:text-emerald-600 transition-colors">Loan Products</a>
              <a href="#" className="text-slate-600 font-medium hover:text-emerald-600 transition-colors">My Dashboard</a>
              <a href="#" className="text-slate-600 font-medium hover:text-emerald-600 transition-colors">Contact Us</a>

              <button className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-blue-900 font-medium bg-slate-50 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-900 rounded-md">Loan Products</a>
              <a href="#" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-900 rounded-md">My Dashboard</a>
              <a href="#" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-900 rounded-md">Contact Us</a>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium">
                <User className="w-4 h-4" />
                <span>Login / Profile</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500 blur-3xl"></div>
          <div className="absolute top-48 -left-24 w-72 h-72 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Welcome back, <span className="text-emerald-400">Alex</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 font-light leading-relaxed">
              Empowering your financial future with secure, transparent loans. Manage your finances with trust and clarity.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20 space-y-12">

        {/* Dashboard Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            My Loan Dashboard
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Active Loan Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-lg font-semibold text-blue-900">Active Loan Summary</h3>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Current Loan Amount</p>
                  <p className="text-3xl font-bold text-slate-800">{activeLoan.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Interest Rate</p>
                  <p className="text-3xl font-bold text-slate-800">{activeLoan.interestRate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Outstanding Balance</p>
                  <p className="text-3xl font-bold text-blue-900">{activeLoan.outstandingBalance}</p>
                </div>
              </div>
            </div>

            {/* EMI Tracker */}
            <div className="bg-white rounded-xl shadow-md border-t-4 border-t-emerald-500 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-slate-50 opacity-50">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">EMI Tracker</h3>
                <div className="mb-6">
                  <p className="text-sm text-slate-500 font-medium mb-1">Next EMI Due</p>
                  <p className="text-4xl font-bold text-slate-800">{activeLoan.nextEmiAmount}</p>
                  <p className="text-sm font-medium text-emerald-600 mt-2 bg-emerald-50 inline-block px-2 py-1 rounded">
                    Due by {activeLoan.dueDate}
                  </p>
                </div>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 relative z-10">
                Pay EMI Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider">Recent EMI Payments</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-slate-100 text-sm text-slate-500">
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Amount</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-slate-700 font-medium">{tx.date}</td>
                      <td className="px-6 py-4 font-bold text-slate-800">{tx.amount}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          <CheckCircle2 className="w-3 h-3" />
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Available Loan Services */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Available Loan Services</h2>
            <p className="text-slate-500">Explore our premium financing options designed for your growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 p-6 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{product.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-emerald-600 mb-4">{product.rate}</p>
                  <button className="w-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-slate-300 py-12 mt-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl text-white tracking-tight">3G FINANCE</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Empowering individuals and businesses with trusted, transparent, and flexible financing solutions.
            </p>
            <div className="text-sm">
              <p className="font-semibold text-white mb-1">Customer Support</p>
              <p className="text-emerald-400 font-bold text-lg">1-800-3G-FINANCE</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Branch Locator</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Interest Rate Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Fair Practice Code</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-blue-900/50 text-xs text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} 3G Finance Trading Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

