export type ViewTab = 'home' | 'service' | 'dashboard' | 'profile' | 'contact';

export interface ActiveLoan {
  id: string;
  loanNumber: string;
  type: string;
  sanctionedAmount: number;
  outstandingBalance: number;
  monthlyEmi: number;
  interestRate: number; // percentage
  tenureMonths: number;
  paidMonths: number;
  nextEmiDueDate: string;
  status: 'Active' | 'Closed' | 'Overdue';
  category: 'Personal' | 'Business' | 'Home' | 'Vehicle' | 'Gold';
}

export interface EmiTransaction {
  id: string;
  loanNumber: string;
  amount: number;
  date: string;
  paymentMode: 'UPI' | 'NetBanking' | 'Debit Card' | 'Auto-Debit';
  receiptNumber: string;
  status: 'Successful' | 'Processing' | 'Failed';
}

export interface LoanService {
  id: string;
  title: string;
  category: string;
  maxAmount: string;
  interestRate: string;
  tenure: string;
  description: string;
  features: string[];
  documentsRequired: string[];
  popular?: boolean;
  iconName: string;
}

export interface UserProfile {
  name: string;
  customerId: string;
  email: string;
  phone: string;
  kycStatus: 'Verified' | 'Pending' | 'Rejected';
  cibilScore: number;
  address: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  joinedDate: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
