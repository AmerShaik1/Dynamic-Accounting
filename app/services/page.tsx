'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  BarChart3, 
  FileText, 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  UserCheck,
  ListChecks
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: 'tax-planning',
    icon: BarChart3,
    title: 'Strategic Tax Planning',
    subtitle: 'Proactive Liability Management',
    bgClass: 'bg-slate-50',
    iconColor: 'text-slate-700',
    overview: 'Forward-looking strategies designed to minimize your tax burden and align your financial structure with current tax laws.',
    includes: ['Entity structure optimization', 'Year-round tax tracking', 'Capital gains strategy', 'Credit & deduction mapping'],
    detailedServices: [
      { category: 'Proactive Planning', items: ['Long-term tax liability minimization', 'Reviewing business entity efficiency', 'Analyzing impact of new tax legislation'] },
      { category: 'Optimization', items: ['Identifying industry-specific credits', 'Strategic timing of income and expenses', 'Succession and exit tax planning'] }
    ],
    forWho: ['High-income earners', 'Multi-entity business owners', 'Real estate investors', 'New business startups'],
    cta: 'Request Tax Strategy'
  },
  {
    id: 'bookkeeping',
    icon: FileText,
    title: 'Precise Bookkeeping',
    subtitle: 'Business Accounting Management',
    bgClass: 'bg-lime-50/50',
    iconColor: 'text-[#65a30d]',
    overview: 'Total management of your daily financial operations, from vendor payments to customer billing and discrepancy resolution.',
    includes: ['Accounts Payable/Receivable', 'Bank Reconciliation', 'Expense Categorization', 'Financial Reporting'],
    detailedServices: [
      { category: 'Accounts Payable', items: ['Recording vendor invoices', 'Verifying invoice accuracy', 'Processing vendor payments', 'Managing vendor relationships'] },
      { category: 'Accounts Receivable', items: ['Creating & sending customer invoices', 'Tracking customer payments', 'Following up on overdue payments', 'Resolving billing discrepancies'] },
      { category: 'Bank Reconciliation', items: ['Matching bank transactions with records', 'Identifying & resolving discrepancies', 'Ensuring reporting accuracy'] },
      { category: 'Expense Tracking', items: ['Categorizing business expenses', 'Monitoring spending patterns', 'Identifying cost-saving opportunities'] },
      { category: 'Financial Reporting', items: ['Generating balance sheets & income statements', 'Customizing reports to client needs', 'Presenting data to stakeholders'] }
    ],
    forWho: ['Small to medium businesses', 'E-commerce retailers', 'Service providers', 'Freelancers'],
    cta: 'Get Bookkeeping Quote'
  },
  {
    id: 'accounting-services',
    icon: Calculator,
    title: 'Expert Accounting Services',
    subtitle: 'Statement Preparation & Analysis',
    bgClass: 'bg-slate-50',
    iconColor: 'text-slate-700',
    overview: 'Comprehensive preparation of financial statements and expert analysis to evaluate profitability, liquidity, and trends.',
    includes: ['Financial Statement Preparation', 'Tax Prep & Planning', 'Budgeting & Forecasting', 'Financial Analysis'],
    detailedServices: [
      { category: 'Financial Statements', items: ['Compiling accurate balance sheets', 'Creating income statements', 'Preparing cash flow statements', 'Ensuring standards compliance'] },
      { category: 'Tax Preparation', items: ['Filing annual tax returns', 'Calculating tax liabilities', 'Identifying deductions & credits', 'Optimization strategy development'] },
      { category: 'Budgeting & Forecasting', items: ['Creating detailed budgets', 'Forecasting performance on historical data', 'Monitoring targets vs actuals', 'Adjusting forecasts for change'] },
      { category: 'Financial Analysis', items: ['Analyzing key ratios & metrics', 'Evaluating profitability & liquidity', 'Identifying trends and patterns', 'Decision-making insights'] }
    ],
    forWho: ['Established companies', 'Firms seeking investment', 'Businesses needing audit-ready books', 'Growth-stage startups'],
    cta: 'Book a Financial Review'
  },
  {
    id: 'payroll',
    icon: DollarSign,
    title: 'Reliable Payroll Services',
    subtitle: 'Efficient Payroll Processing',
    bgClass: 'bg-lime-50/50',
    iconColor: 'text-[#65a30d]',
    overview: 'Automated and compliant payroll management to ensure your employees are paid accurately and taxes are remitted on time.',
    includes: ['Wage Calculation', 'Tax Withholding', 'Pay Stub Generation', 'Benefits Management'],
    detailedServices: [
      { category: 'Payroll Processing', items: ['Calculating employee wages', 'Withholding and remitting payroll taxes', 'Generating employee pay stubs', 'Managing employee benefits'] }
    ],
    forWho: ['Businesses with 1-50 employees', 'Owners outsourcing admin tasks', 'Companies managing benefits', 'Multi-state employers'],
    cta: 'Plan Your Payroll'
  },
  {
    id: 'growth-support',
    icon: TrendingUp,
    title: 'Business Growth Support',
    subtitle: 'Strategic Advisory Services',
    bgClass: 'bg-slate-50',
    iconColor: 'text-slate-700',
    overview: 'Strategic guidance and financial health assessments designed to support long-term planning and goal setting for business expansion.',
    includes: ['Strategic Guidance', 'Health Assessments', 'Improvement Planning', 'Goal Setting'],
    detailedServices: [
      { category: 'Advisory Services', items: ['Offering strategic guidance for growth', 'Conducting financial health assessments', 'Providing recommendations for improvement', 'Supporting long-term planning'] }
    ],
    forWho: ['Entrepreneurs scaling up', 'Business owners planning exits', 'Firms needing a "Fractional CFO"', 'Stagnant businesses needing a reset'],
    cta: 'Scale Your Business'
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION: DARK SLATE & LIME --- */}
      <section className="bg-[#0f172a] pt-24 pb-44 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-[#a3e635]" />
            <span className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Premier Accounting Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Financial Excellence <span className="text-[#a3e635]">Tailored</span> <br /> For Your Success
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            From meticulous bookkeeping to high-level tax strategy, we provide the financial foundation your business needs to thrive.
          </p>

          <Link href="/contact">
            <Button className="bg-[#a3e635] hover:bg-[#bef264] text-slate-900 font-bold text-lg px-10 py-7 rounded-xl transition-all shadow-[0_10px_30px_rgba(163,230,53,0.2)]">
              Book a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* --- SERVICES GRID (2 COLUMNS) --- */}
      <section className="-mt-20 pb-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-[0_20px_60px_rgba(0,0,0,0.07)] rounded-[2.5rem] bg-white overflow-hidden flex flex-col h-full transform transition-all hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
                {/* Header */}
                <div className={`${service.bgClass} p-8 md:p-10 border-b border-slate-100`}>
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex-shrink-0">
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* Triple Accordion: Included, Deep-Dive (Client Points), For Who */}
                <div className="p-6 md:p-8 flex-1">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    
                    {/* 1. What's Included */}
                    <AccordionItem value="includes" className="border-none bg-slate-50/50 rounded-2xl px-5">
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-5 text-base">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#a3e635]" />
                          What's Included
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <ul className="space-y-3 pl-8">
                          {service.includes.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm flex gap-3">
                              <span className="text-[#a3e635] font-black">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {/* 2. Service Deep-Dive (CLIENT POINTS) */}
                    <AccordionItem value="deepdive" className="border-none bg-slate-50/50 rounded-2xl px-5">
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-5 text-base text-left">
                        <div className="flex items-center gap-3">
                          <ListChecks className="w-5 h-5 text-blue-500" />
                          Detailed Service Scope
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-5 pl-8">
                          {service.detailedServices.map((group, idx) => (
                            <div key={idx}>
                              <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">
                                {group.category}
                              </h4>
                              <ul className="space-y-2">
                                {group.items.map((item, i) => (
                                  <li key={i} className="text-slate-600 text-sm flex gap-2">
                                    <span className="text-slate-400">•</span> {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* 3. Perfect For */}
                    <AccordionItem value="forWho" className="border-none bg-slate-50/50 rounded-2xl px-5">
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-5 text-base">
                        <div className="flex items-center gap-3">
                          <UserCheck className="w-5 h-5 text-slate-400" />
                          Perfect For
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <ul className="space-y-3 pl-8">
                          {service.forWho.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm flex gap-3 italic">
                              <span className="text-slate-300 font-bold">—</span> {item}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Footer CTA */}
                <div className="p-8 pt-0 mt-auto">
                  <div className="bg-slate-900 rounded-[1.5rem] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-0.5">Investment</p>
                      <p className="text-white font-bold text-sm tracking-tight italic">Custom Quote Required</p>
                    </div>
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button className="w-full bg-[#a3e635] hover:bg-[#bef264] text-slate-900 font-black text-xs uppercase tracking-tighter px-8 py-6 rounded-xl transition-all shadow-lg">
                        {service.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-slate-50 text-center px-4 border-t border-slate-200">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight uppercase italic">
          Ready for <span className="text-lime-600">Financial Growth?</span>
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-12 py-8 rounded-2xl shadow-2xl transition-all hover:scale-105">
            Get Your Free Assessment
          </Button>
        </Link>
      </section>
    </main>
  );
}