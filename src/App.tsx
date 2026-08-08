import React, { useState } from 'react';
import { ViewTab, ActiveLoan, EmiTransaction, UserProfile } from './types';
import {
  INITIAL_USER_PROFILE,
  INITIAL_ACTIVE_LOANS,
  INITIAL_TRANSACTIONS
} from './data/mockData';

import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WelcomeModal } from './components/WelcomeModal';
import { CallNowModal } from './components/CallNowModal';
import { PayEmiModal } from './components/PayEmiModal';
import { Footer } from './components/Footer';

import { HomeView } from './views/HomeView';
import { ServiceView } from './views/ServiceView';
import { DashboardView } from './views/DashboardView';
import { ProfileView } from './views/ProfileView';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [loans, setLoans] = useState<ActiveLoan[]>(INITIAL_ACTIVE_LOANS);
  const [transactions, setTransactions] = useState<EmiTransaction[]>(INITIAL_TRANSACTIONS);

  // Modals state
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true); // Shows on initial load
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);
  const [isPayEmiModalOpen, setIsPayEmiModalOpen] = useState<boolean>(false);

  // Real-time EMI payment handler
  const handlePaymentSuccess = (loanId: string, amount: number, paymentMode: string) => {
    // 1. Add transaction log
    const targetLoan = loans.find(l => l.id === loanId) || loans[0];
    const newTx: EmiTransaction = {
      id: `tx-${Date.now().toString().slice(-4)}`,
      loanNumber: targetLoan.loanNumber,
      amount,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      paymentMode: paymentMode as any,
      receiptNumber: `REC-3GF-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`,
      status: 'Successful'
    };

    setTransactions([newTx, ...transactions]);

    // 2. Update loan outstanding balance & paid months
    setLoans(prevLoans =>
      prevLoans.map(loan => {
        if (loan.id === loanId) {
          const newOutstanding = Math.max(0, loan.outstandingBalance - amount);
          const newPaidMonths = Math.min(loan.tenureMonths, loan.paidMonths + 1);
          return {
            ...loan,
            outstandingBalance: newOutstanding,
            paidMonths: newPaidMonths,
          };
        }
        return loan;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Desktop & Mobile Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenPayEmiModal={() => setIsPayEmiModalOpen(true)}
        userProfile={userProfile}
      />

      {/* Main Page Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={setCurrentTab}
            onOpenCallModal={() => setIsCallModalOpen(true)}
            onOpenPayEmiModal={() => setIsPayEmiModalOpen(true)}
            onOpenWelcomeDialogue={() => setIsWelcomeModalOpen(true)}
          />
        )}

        {currentTab === 'service' && (
          <ServiceView
            onOpenCallModal={() => setIsCallModalOpen(true)}
            onOpenPayEmiModal={() => setIsPayEmiModalOpen(true)}
          />
        )}

        {currentTab === 'dashboard' && (
          <DashboardView
            loans={loans}
            transactions={transactions}
            userProfile={userProfile}
            onOpenPayEmiModal={() => setIsPayEmiModalOpen(true)}
            onSelectTab={setCurrentTab}
          />
        )}

        {currentTab === 'profile' && (
          <ProfileView
            userProfile={userProfile}
            loans={loans}
            onOpenPayEmiModal={() => setIsPayEmiModalOpen(true)}
            onOpenCallModal={() => setIsCallModalOpen(true)}
            onSelectTab={setCurrentTab}
          />
        )}

        {currentTab === 'contact' && (
          <ContactSection
            onOpenCallModal={() => setIsCallModalOpen(true)}
          />
        )}
      </main>

      {/* Footer Component with Address, FAQs, Trust points */}
      <Footer
        onSelectTab={setCurrentTab}
        onOpenPayEmiModal={() => setIsPayEmiModalOpen(true)}
        onOpenCallModal={() => setIsCallModalOpen(true)}
      />

      {/* Mobile Bottom Navigation Bar (4 Icons explicitly required) */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        pendingEmiCount={loans.filter(l => l.status === 'Active').length}
      />

      {/* Interactive Overlay Dialogues / Modals */}
      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
        onViewDashboard={() => setCurrentTab('dashboard')}
        onCallNow={() => setIsCallModalOpen(true)}
        customerName={userProfile.name}
      />

      <CallNowModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      <PayEmiModal
        isOpen={isPayEmiModalOpen}
        onClose={() => setIsPayEmiModalOpen(false)}
        loans={loans}
        onPaymentSuccess={handlePaymentSuccess}
      />

    </div>
  );
}
