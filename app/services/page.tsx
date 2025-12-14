'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { FileText, BarChart3, Calculator, DollarSign, TrendingUp, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'bookkeeping',
    icon: FileText,
    title: 'Bookkeeping',
    subtitle: 'Accurate Financial Record-Keeping',
    overview: 'Professional bookkeeping services that keep your financial records organized, accurate, and audit-ready.',
    forWho: [
      'Small businesses with multiple daily transactions',
      'E-commerce businesses and online retailers',
      'Service-based businesses',
      'Freelancers and contract workers',
      'Anyone needing organized financial records'
    ],
    includes: [
      'Monthly transaction recording and reconciliation',
      'Accounts receivable and payable management',
      'Bank and credit card reconciliation',
      'General ledger maintenance',
      'Financial data organization and reporting',
      'Payroll records coordination'
    ],
    price: 'Starting at $299/month',
  },
  {
    id: 'statements',
    icon: BarChart3,
    title: 'Financial Statements',
    subtitle: 'Professional Financial Reporting',
    overview: 'Clear, comprehensive financial statements that give you full visibility into your business health and performance.',
    forWho: [
      'Business owners seeking financial clarity',
      'Companies applying for loans or financing',
      'Businesses showing investor confidence',
      'Anyone needing professional financial reports',
      'Tax preparation and audit support'
    ],
    includes: [
      'Balance sheets and income statements',
      'Cash flow statements',
      'Month-over-month and year-over-year analysis',
      'Key financial ratios and metrics',
      'Professional formatting and presentation',
      'Bank and lender-ready formats'
    ],
    price: 'Starting at $199 per month',
  },
  {
    id: 'payroll',
    icon: Calculator,
    title: 'Payroll Processing',
    subtitle: 'Compliant & Efficient Payroll Management',
    overview: 'Complete payroll processing services ensuring accuracy, compliance, and on-time payments for your employees.',
    forWho: [
      'Small businesses with employees',
      'Multi-state employers',
      'Companies requiring compliance management',
      'Businesses looking to outsource payroll',
      'Growing companies scaling their workforce'
    ],
    includes: [
      'Bi-weekly and monthly payroll processing',
      'Tax withholding calculations and deposits',
      'Federal and state compliance',
      'Employee reporting (W-2s, 1099s)',
      'Direct deposit processing',
      'Payroll tax filings and management'
    ],
    price: 'Starting at $95 per month + per-employee fees',
  },
  {
    id: 'tax-prep',
    icon: DollarSign,
    title: 'Tax Preparation',
    subtitle: 'Expert Tax Filing & Return Preparation',
    overview: 'Comprehensive tax preparation services that maximize deductions and minimize your tax liability.',
    forWho: [
      'Individual income tax filers',
      'Self-employed professionals',
      'Small business owners',
      'Corporate entity owners',
      'Investors with complex tax situations'
    ],
    includes: [
      'Complete tax return preparation',
      'Income and deduction optimization',
      'Estimated quarterly tax planning',
      'E-filing and submission',
      'Electronic delivery of returns',
      'Year-round consultation and updates'
    ],
    price: 'Contact for Quote',
  },
  {
    id: 'strategies',
    icon: TrendingUp,
    title: 'Tax Strategies',
    subtitle: 'Proactive Tax Planning & Minimization',
    overview: 'Strategic tax planning throughout the year to legally minimize your tax burden and maximize financial success.',
    forWho: [
      'Business owners seeking tax savings',
      'High-income individuals',
      'Real estate investors',
      'E-commerce and online business owners',
      'Companies planning major transactions'
    ],
    includes: [
      'Quarterly tax planning reviews',
      'Entity structure optimization',
      'Deduction identification and tracking',
      'Retirement account strategies',
      'Capital gains planning',
      'Year-end tax minimization strategies'
    ],
    price: 'Contact for Quote',
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-50 to-lime-50 py-12 md:py-16 overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -top-1/3 -right-1/4 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Services</h1>
            <p className="text-base md:text-lg text-slate-600">Complete accounting and tax solutions tailored to your needs</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, idx) => (
              <div key={service.id} id={service.id}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={idx % 2 === 1 ? 'md:order-last' : ''}>
                    <div className="group flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-lime-500 rounded-lg flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                        <service.icon className="w-6 h-6 text-white transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900">{service.title}</h2>
                        <p className="text-lime-500 font-semibold text-sm">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 mb-5">{service.overview}</p>

                    <div className="mb-5 p-4 bg-white/80 backdrop-blur-sm rounded-lg border-l-4 border-lime-500 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <h3 className="text-base font-semibold text-slate-900 mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex gap-2.5 group">
                            <CheckCircle2 size={18} className="text-lime-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-slate-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="bg-gradient-to-br from-slate-50 to-lime-50 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                        <p className="text-slate-600 text-xs mb-1">Pricing</p>
                        <p className="text-lg font-bold text-slate-800">{service.price}</p>
                      </div>
                      <Link href="/contact" className="flex items-center">
                        <Button className="bg-gradient-to-r from-slate-800 to-lime-500 text-white hover:from-slate-700 hover:to-lime-600 transition-all duration-500 flex-1 text-base py-5 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                          Learn More & Discuss
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <Card className="group relative p-5 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative">
                        <h3 className="text-base font-semibold text-slate-900 mb-3 border-b-2 border-lime-500 pb-2">Perfect For:</h3>
                        <ul className="space-y-2.5">
                          {service.forWho.map((item, i) => (
                            <li key={i} className="flex gap-2.5 group/item">
                              <div className="w-1.5 h-1.5 bg-lime-500 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-300 group-hover/item:scale-150"></div>
                              <span className="text-slate-700 text-sm leading-normal">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>

                {idx < services.length - 1 && <div className="border-t border-slate-200 mt-10"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-lime-50/30 relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Why Choose Dynamic Accounting?</h2>
            <p className="text-base text-slate-600">What sets us apart from the rest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Certified Expertise', desc: 'Certified Tax Advisor with deep industry knowledge and ongoing professional development', delay: 'animation-delay-0' },
              { title: '20+ Years Experience', desc: 'Decades of proven success serving hundreds of satisfied clients in the San Diego area', delay: 'animation-delay-200' },
              { title: 'Personalized Approach', desc: 'We treat each client uniquely, tailoring strategies to your specific financial goals', delay: 'animation-delay-400' },
              { title: 'Proactive Planning', desc: 'We dont wait for tax season; we plan throughout the year to maximize your results', delay: 'animation-delay-600' },
              { title: 'Local Knowledge', desc: 'Deep understanding of California and San Diego business environment and regulations', delay: 'animation-delay-800' },
              { title: 'Transparent Pricing', desc: 'Clear, honest pricing with no hidden fees. We explain everything we do', delay: 'animation-delay-1000' },
            ].map((item, idx) => (
              <Card
                key={idx}
                className={`group p-5 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-slate-100 hover:border-lime-500/30 ${item.delay} animate-fade-in`}
              >
                <div className="border-l-4 border-lime-500 pl-3 mb-2">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-800 to-lime-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-slate-100 mb-8 leading-relaxed">Let's discuss which services are right for your situation.</p>
          <Link href="/contact">
            <Button className="bg-white text-slate-800 hover:bg-slate-50 transition-all duration-500 text-base px-8 py-6 rounded-xl font-semibold shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:scale-105">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
