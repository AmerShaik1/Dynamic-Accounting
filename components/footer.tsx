import Link from 'next/link';
import { Phone, Mail, Globe } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <h3 className="font-bold text-lg">Dynamic Accounting Services</h3>
            </div>
            <p className="text-slate-400 text-sm">10+ years of trusted tax and accounting services for individuals and small businesses.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lime-400">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/services#bookkeeping" className="hover:text-lime-400 transition-colors">Business</Link></li>
              <li><Link href="/services#statements" className="hover:text-lime-400 transition-colors">Financial Statements</Link></li>
              <li><Link href="/services#payroll" className="hover:text-lime-400 transition-colors">Payroll Processing</Link></li>
              <li><Link href="/services#tax-prep" className="hover:text-lime-400 transition-colors">Tax Preparation</Link></li>
              <li><Link href="/services#strategies" className="hover:text-lime-400 transition-colors">Tax Strategies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lime-400">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/resources" className="hover:text-lime-400 transition-colors">Tax Checklist</Link></li>
              <li><Link href="/resources" className="hover:text-lime-400 transition-colors">Tax Deadlines</Link></li>
              <li><Link href="/resources#faq" className="hover:text-lime-400 transition-colors">FAQs</Link></li>
              <li><Link href="/about" className="hover:text-lime-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lime-400">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="text-lime-400 flex-shrink-0 mt-1" />
                <a href="tel:+18586883763" className="hover:text-lime-400 transition-colors">+1 (858) 688-3763</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-lime-400 flex-shrink-0 mt-1" />
                <a href="mailto:sk@taxpro360.net" className="hover:text-lime-400 transition-colors">sk@taxpro360.net</a>
              </li>
              <li className="flex gap-2">
                <Globe size={16} className="text-lime-400 flex-shrink-0 mt-1" />
                <a href="https://www.taxpro360.net" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">www.taxpro360.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2026 Dynamic Accounting and Payroll. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-slate-400 text-sm">
              <Link href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-lime-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-lime-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
