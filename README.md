# 3G Finance Trading Company — Web Portal

A professional single-page React application for **3G Finance Trading Company**, built with **React 19**, **Vite 8**, and **Tailwind CSS v4**.

## 🚀 Live Demo

> Deployed on Vercel — link appears here after deployment.

## 🛠 Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 19 | UI Framework |
| Vite | 8 | Build Tool & Dev Server |
| Tailwind CSS | 4 | Utility-first Styling |
| Lucide React | latest | Icons |
| Vercel | — | Hosting & CDN |

## 📁 Project Structure

```
src/
├── App.jsx                       # Root component & page router
├── index.css                     # Tailwind CSS import
│
├── data/
│   └── mockData.js               # All mock data (users, loans, products)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx            # Sticky nav with tab routing
│   │   └── Footer.jsx            # Full corporate footer
│   │
│   ├── sections/
│   │   ├── Hero.jsx              # Hero section with loan preview
│   │   ├── Dashboard.jsx         # Customer loan dashboard
│   │   ├── LoanProducts.jsx      # 6 loan product cards + Apply modal
│   │   └── HomeSections.jsx      # Why Us, Process, Testimonials, Contact
│   │
│   └── ui/
│       ├── UIAtoms.jsx           # Reusable UI components
│       └── PayEMIModal.jsx       # EMI payment modal
```

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/SandeepMuhal88/Finace-3G-company.git
cd Finace-3G-company

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import `SandeepMuhal88/Finace-3G-company` from GitHub
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site goes live in ~60 seconds.

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📄 Pages & Features

| Page | URL | Description |
|---|---|---|
| Home | `/` | Hero, Why Us, Process, Loans, Testimonials |
| Loan Products | (tab) | 6 loan types with Apply modal |
| My Dashboard | (tab) | Active loan, EMI tracker, CIBIL score |
| Contact Us | (tab) | Contact form & support info |

## 📞 Support

- **Phone:** 1-800-3G-FINANCE  
- **Email:** support@3gfinance.com  
- **Registered:** RBI NBFC · ISO 9001:2015

---

&copy; 2026 3G Finance Trading Company. All rights reserved.