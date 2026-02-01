'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  BarChart3, FileText, Calculator, DollarSign, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, UserCheck, ListChecks 
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const businessServices = [
  {
    id: 'tax-planning',
    icon: BarChart3,
    title: 'Strategic Tax Planning',
    subtitle: 'Entity-Level Optimization',
    bgClass: 'bg-slate-50',
    iconColor: 'text-slate-700',
    overview: 'Strategic guidance for C-Corps, S-Corps, and LLCs to ensure your business structure and operations are maximized for tax efficiency.',
    includes: ['Entity structure optimization', 'Year-round tax tracking', 'Capital gains strategy', 'Credit & deduction mapping'],
    detailedServices: [
      { category: 'Proactive Planning', items: ['Long-term tax liability minimization', 'Reviewing business entity efficiency', 'Analyzing impact of new tax legislation'] },
      { category: 'Optimization', items: ['Identifying industry-specific credits', 'Strategic timing of income and expenses', 'Succession and exit tax planning'] }
    ],
    forWho: ['S-Corp & C-Corp Owners', 'Multi-entity business owners', 'Real estate investors', 'New business startups'],
    cta: 'Request Tax Strategy'
  },
  {
    id: 'bookkeeping',
    icon: FileText,
    title: 'Precise Bookkeeping',
    subtitle: 'Business Accounting Management',
    bgClass: 'bg-lime-50/80',
    iconColor: 'text-lime-600',
    overview: 'Full-cycle management of your daily financial operations, ensuring accuracy in reporting and healthy vendor/customer relations.',
    includes: ['Accounts Payable/Receivable', 'Bank Reconciliation', 'Expense Categorization', 'Financial Reporting'],
    detailedServices: [
      { category: 'Payables & Receivables', items: ['Recording vendor invoices & accuracy verification', 'Processing vendor payments', 'Creating & tracking customer invoices', 'Resolving billing discrepancies'] },
      { category: 'Reconciliation', items: ['Matching bank transactions with records', 'Identifying & resolving discrepancies', 'Categorizing business expenses', 'Cost-saving opportunity identification'] },
      { category: 'Reporting', items: ['Generating balance sheets & income statements', 'Customizing reports to client needs', 'Analyzing data for financial insights'] }
    ],
    forWho: ['Small to medium businesses', 'E-commerce retailers', 'Service providers', 'Growth-stage companies'],
    cta: 'Get Bookkeeping Quote'
  },
  {
    id: 'accounting-services',
    icon: Calculator,
    title: 'Expert Accounting Services',
    subtitle: 'Statement Preparation & Analysis',
    bgClass: 'bg-slate-50',
    iconColor: 'text-slate-700',
    overview: 'In-depth financial statement preparation and analysis to evaluate profitability, liquidity, and future trends.',
    includes: ['Financial Statement Preparation', 'Tax Prep & Planning', 'Budgeting & Forecasting', 'Financial Analysis'],
    detailedServices: [
      { category: 'Financial Reporting', items: ['Compiling accurate balance sheets', 'Creating income statements', 'Preparing cash flow statements', 'Ensuring accounting standards compliance'] },
      { category: 'Planning & Analysis', items: ['Creating detailed budgets', 'Forecasting performance based on history', 'Monitoring actual performance vs targets', 'Analyzing key ratios & metrics'] }
    ],
    forWho: ['Established companies', 'Firms seeking investment', 'Businesses needing audit-ready books', 'Owners focused on margins'],
    cta: 'Book a Financial Review'
  },
  {
    id: 'payroll',
    icon: DollarSign,
    title: 'Reliable Payroll Services',
    subtitle: 'Efficient Payroll Processing',
    bgClass: 'bg-lime-50/80',
    iconColor: 'text-lime-600',
    overview: 'Automated and compliant payroll management to ensure your employees are paid accurately and taxes are remitted on time.',
    includes: ['Wage Calculation', 'Tax Withholding', 'Pay Stub Generation', 'Benefits Management'],
    detailedServices: [
      { category: 'Payroll Operations', items: ['Calculating employee wages', 'Withholding and remitting payroll taxes', 'Generating employee pay stubs', 'Managing employee benefits programs'] }
    ],
    forWho: ['Businesses with 1-50 employees', 'Owners looking to outsource admin', 'Companies managing staff benefits', 'Multi-state employers'],
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
      { category: 'Advisory Scope', items: ['Offering strategic guidance for growth', 'Conducting financial health assessments', 'Providing recommendations for improvement', 'Supporting long-term planning'] }
    ],
    forWho: ['Scaling entrepreneurs', 'Owners planning an exit', 'Firms needing a "Fractional CFO"', 'Stagnant businesses needing a reset'],
    cta: 'Scale Your Business'
  }
];

export default function BusinessServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-20 pb-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-lime-400" />
            <span className="text-slate-300 text-xs font-semibold uppercase tracking-widest">Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Business <span className="text-lime-400">Services</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional accounting, payroll, and growth advisory tailored to help your business maximize profitability and ensure total compliance.
          </p>
          <Link href="/contact">
            <Button className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold text-base px-10 py-7 rounded-xl transition-all">
              Schedule a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Grid: 2 Columns */}
      <section className="-mt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessServices.map((service) => (
              <Card key={service.id} className="p-4 md:p-6 bg-white border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem]">
                <div className={`flex items-center gap-4 p-5 rounded-2xl mb-6 ${service.bgClass}`}>
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">{service.title}</h2>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mt-1">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 px-2">{service.overview}</p>

                <div className="space-y-3 mb-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="includes" className="border-slate-100 px-2">
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-4">
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> What's Included</div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pt-2 pb-4 pl-7">
                          {service.includes.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm flex gap-2"><span className="text-lime-500 font-bold">•</span> {item}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="deepdive" className="border-slate-100 px-2">
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-4 text-left">
                        <div className="flex items-center gap-2"><ListChecks className="w-5 h-5 text-slate-400" /> Detailed Service Scope</div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2 pb-4 pl-7">
                          {service.detailedServices.map((group, idx) => (
                            <div key={idx}>
                              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-2">{group.category}</h4>
                              <ul className="space-y-1">{group.items.map((item, i) => (<li key={i} className="text-slate-500 text-sm flex gap-2"><span>—</span> {item}</li>))}</ul>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="forwho" className="border-none px-2">
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-4">
                        <div className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-slate-400" /> Perfect For</div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pt-2 pb-2 pl-7">
                          {service.forWho.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm flex gap-2 italic"><span>•</span> {item}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="p-5 bg-slate-900 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                   <div className="text-center sm:text-left">
                      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Investment</p>
                      <p className="text-white font-bold text-sm">Custom Quote Required</p>
                   </div>
                   <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold px-6">
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}