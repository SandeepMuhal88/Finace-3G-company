import { ActiveLoan, EmiTransaction, LoanService, UserProfile, FAQItem } from '../types';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: "Rajesh Kumar Verma",
  customerId: "3GF-8839201",
  email: "rajesh.verma@3gfinance.com",
  phone: "+91 98765 43210",
  kycStatus: "Verified",
  cibilScore: 785,
  address: "Plot No. 42, Executive Enclave, Sector 18, Commercial Hub, India",
  bankName: "HDFC Bank Ltd.",
  accountNumber: "•••• •••• 4920",
  ifscCode: "HDFC0001892",
  joinedDate: "14 Jan 2024"
};

export const INITIAL_ACTIVE_LOANS: ActiveLoan[] = [
  {
    id: "loan-1",
    loanNumber: "3GF-PL-2024-9912",
    type: "Personal Growth Loan",
    sanctionedAmount: 500000,
    outstandingBalance: 320000,
    monthlyEmi: 12450,
    interestRate: 8.99,
    tenureMonths: 48,
    paidMonths: 16,
    nextEmiDueDate: "15 Aug 2026",
    status: "Active",
    category: "Personal"
  },
  {
    id: "loan-2",
    loanNumber: "3GF-BL-2025-4019",
    type: "Business Expansion Loan",
    sanctionedAmount: 1200000,
    outstandingBalance: 980000,
    monthlyEmi: 28900,
    interestRate: 9.50,
    tenureMonths: 60,
    paidMonths: 8,
    nextEmiDueDate: "20 Aug 2026",
    status: "Active",
    category: "Business"
  }
];

export const INITIAL_TRANSACTIONS: EmiTransaction[] = [
  {
    id: "tx-101",
    loanNumber: "3GF-PL-2024-9912",
    amount: 12450,
    date: "15 Jul 2026",
    paymentMode: "UPI",
    receiptNumber: "REC-3GF-9912-0726",
    status: "Successful"
  },
  {
    id: "tx-100",
    loanNumber: "3GF-BL-2025-4019",
    amount: 28900,
    date: "20 Jul 2026",
    paymentMode: "Auto-Debit",
    receiptNumber: "REC-3GF-4019-0726",
    status: "Successful"
  },
  {
    id: "tx-099",
    loanNumber: "3GF-PL-2024-9912",
    amount: 12450,
    date: "15 Jun 2026",
    paymentMode: "NetBanking",
    receiptNumber: "REC-3GF-9912-0626",
    status: "Successful"
  }
];

export const LOAN_SERVICES: LoanService[] = [
  {
    id: "srv-personal",
    title: "Instant Personal Loan",
    category: "Personal",
    maxAmount: "Up to ₹15,000,000",
    interestRate: "Starting at 8.5% p.a.",
    tenure: "12 to 72 Months",
    description: "Quick approval personal financing for emergency expenses, home renovation, or weddings with 0% hidden fees and instant bank transfer.",
    features: [
      "100% Paperless online processing",
      "Disbursal within 2 hours of KYC approval",
      "Flexible prepay & foreclosure options",
      "No collateral required"
    ],
    documentsRequired: [
      "Aadhaar Card / Passport",
      "PAN Card",
      "Last 3 months Bank Statements",
      "Salary Slip / Income proof"
    ],
    popular: true,
    iconName: "UserCheck"
  },
  {
    id: "srv-business",
    title: "Business Growth Loan",
    category: "Business",
    maxAmount: "Up to ₹50,000,000",
    interestRate: "Starting at 9.2% p.a.",
    tenure: "24 to 120 Months",
    description: "Empowering small & medium enterprises with working capital loans, machinery purchase, and business expansion credit lines.",
    features: [
      "Collateral-free options up to ₹25 Lakhs",
      "Customized repayment plans as per cashflow",
      "Tax deduction benefits on interest",
      "Dedicated relationship manager"
    ],
    documentsRequired: [
      "Business Registration Certificate / GST",
      "Company PAN & Owner ID Proof",
      "Last 2 years audited ITR & P&L",
      "6 months Bank Statement"
    ],
    popular: true,
    iconName: "Building2"
  },
  {
    id: "srv-home",
    title: "Home & Property Loan",
    category: "Home",
    maxAmount: "Up to ₹100,000,000",
    interestRate: "Starting at 7.9% p.a.",
    tenure: "5 to 30 Years",
    description: "Realize your dream home with low monthly EMIs, door-step legal evaluation, and instant property balance transfer options.",
    features: [
      "Lowest EMI options in the market",
      "Pre-approved property search support",
      "PMAY subsidy assistance available",
      "Zero foreclosure charges on floating rates"
    ],
    documentsRequired: [
      "Property Legal Documents / Title Deed",
      "Proof of Identity & Address",
      "Income Proof / Form 16",
      "Approved Building Layout Plan"
    ],
    iconName: "Home"
  },
  {
    id: "srv-vehicle",
    title: "Vehicle & Car Loan",
    category: "Vehicle",
    maxAmount: "Up to ₹5,000,000",
    interestRate: "Starting at 8.2% p.a.",
    tenure: "12 to 84 Months",
    description: "Up to 95% on-road funding for commercial cars, EV vehicles, and luxury automobiles with flexible EMI schedules.",
    features: [
      "Up to 95% on-road price financing",
      "Instant spot approval at dealerships",
      "Attractive terms for Electric Vehicles (EV)",
      "Minimal documentation"
    ],
    documentsRequired: [
      "KYC Documents",
      "Vehicle Proforma Invoice",
      "Income tax returns",
      "Driving License"
    ],
    iconName: "Car"
  },
  {
    id: "srv-gold",
    title: "Instant Gold Loan",
    category: "Gold",
    maxAmount: "Up to ₹2,000,000",
    interestRate: "Starting at 6.9% p.a.",
    tenure: "3 to 24 Months",
    description: "Pledge gold jewelry for immediate cash in 15 minutes. Highest per-gram valuation with insured vault storage.",
    features: [
      "15-Minute cash in hand or bank credit",
      "Highest per-gram valuation guaranteed",
      "Bullet repayment option (Pay interest only)",
      "100% Insured free vault storage"
    ],
    documentsRequired: [
      "Aadhaar / Voter ID",
      "PAN Card",
      "Gold Ornaments for evaluation"
    ],
    iconName: "Coins"
  },
  {
    id: "srv-education",
    title: "Higher Education Loan",
    category: "Education",
    maxAmount: "Up to ₹4,000,000",
    interestRate: "Starting at 8.0% p.a.",
    tenure: "Up to 15 Years",
    description: "Support higher studies in top premier institutes worldwide with moratorium period until course completion.",
    features: [
      "No EMI during course duration",
      "Covers tuition fees, hostel & travel",
      "Section 80E tax exemption on interest",
      "Direct disbursement to university"
    ],
    documentsRequired: [
      "Admission Letter from College",
      "Mark sheets of X, XII & Graduation",
      "Co-applicant Income Proof"
    ],
    iconName: "GraduationCap"
  }
];

export const COMPANY_FAQS: FAQItem[] = [
  {
    question: "What makes Shreeji Finance Trading Company trustworthy?",
    answer: "Shreeji Finance Trading Company is fully compliant with financial regulations, operating under licensed NBFC partnerships with 256-bit SSL encryption. We maintain 100% transparency with zero hidden charges, flexible EMI tenure, and clear digital loan contracts.",
    category: "General"
  },
  {
    question: "How fast can I get loan approval and money in my account?",
    answer: "For Personal and Gold Loans, disbursal takes as low as 15 minutes to 2 hours post KYC verification. Business and Home loans are processed within 24 to 48 hours.",
    category: "Process"
  },
  {
    question: "How can I pay my monthly EMI on the website?",
    answer: "You can easily click the 'Pay Now EMI' button from your Dashboard, Service page, or Profile tab. We support UPI (Google Pay, PhonePe, Paytm), NetBanking, and Debit Cards. Receipts are generated instantly.",
    category: "EMI & Payments"
  },
  {
    question: "What minimum CIBIL score is required for Shreeji Finance loans?",
    answer: "We welcome applicants with a CIBIL score of 650+. Even if you have a lower credit score, our Gold Loans and Secured Business Loans offer hassle-free approvals.",
    category: "Eligibility"
  },
  {
    question: "Are there pre-payment or foreclosure charges?",
    answer: "Shreeji Finance Trading Company offers 0% foreclosure charges on personal floating rate loans after completing 6 successful EMI payments.",
    category: "EMI & Payments"
  }
];

export const COMPANY_BRANCH_INFO = {
  name: "Shreeji Finance Trading Company Pvt. Ltd.",
  tagline: "Your Trusted Financial Partner For Growth & Prosperity",
  regNumber: "CIN: U65929DL2018PTC339102",
  rbiStatus: "Registered Non-Banking Financial Partner",
  headOffice: "Shreeji Finance Tower, Floor 4, Plot 18-A, Financial District, Trade Corridor, New Delhi - 110001, India",
  phoneNumbers: ["+91 1800-333-3G3G (Toll Free)", "+91 98765 43210"],
  supportEmail: "support@3gfinancetrading.com",
  workingHours: "Monday to Saturday: 9:30 AM - 7:00 PM (IST)"
};
