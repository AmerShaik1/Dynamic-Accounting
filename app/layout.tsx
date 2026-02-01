import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dynamic Accounting Services | Certified Tax Advisor | United States',
  description: 'Expert tax preparation, bookkeeping, payroll processing, and financial statements for individuals and small businesses across the United States. 10+ years of trusted service.',
  keywords: 'tax advisor, certified tax advisor, bookkeeping, payroll processing, tax preparation, United States',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
