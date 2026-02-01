'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  FileText, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, UserCheck, ListChecks 
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const individualServices = [
  {
    id: 'individual-tax-prep',
    icon: FileText,
    title: 'Individual Tax Preparation',
    subtitle: 'Accurate & Optimized Filings',
    bgClass: 'bg-slate-50',
    iconColor: 'text-slate-700',
    overview: 'Expert preparation of Federal and State tax returns for individuals and families, ensuring you maximize every available credit and deduction.',
    includes: ['Form 1040 Federal Filings', 'Multi-State Income Tax returns', 'Electronic filing & direct deposit', 'Standard vs Itemized Analysis'],
    detailedServices: [
      { category: 'Compliance', items: ['W-2 and 1099 income reporting', 'Self-employment tax (Schedule C) filings', 'Stock, Crypto, and Real Estate gain reporting'] },
      { category: 'Support', items: ['Accuracy verification & quality review', 'Audit protection guidance', 'IRS/State correspondence assistance'] }
    ],
    forWho: ['Salaried employees', 'Freelancers and Gig workers', 'Individual investors', 'Families and Students'],
    cta: 'Prepare My Taxes'
  },
  {
    id: 'personal-tax-strategy',
    icon: BarChart3,
    title: 'Strategic Tax Planning',
    subtitle: 'Wealth Preservation Planning',
    bgClass: 'bg-lime-50/80',
    iconColor: 'text-lime-600',
    overview: 'Proactive personal tax strategies designed to reduce your long-term tax burden and protect your household assets.',
    includes: ['Retirement plan optimization', 'Capital gains tax management', 'Charitable giving strategies', 'Estate tax exposure review'],
    detailedServices: [
      { category: 'Proactive Planning', items: ['Education savings (529 plans) advisory', 'Tax-loss harvesting analysis', 'Analyzing life event tax impacts'] },
      { category: 'Wealth Protection', items: ['High-net-worth tax shielding', 'Family trust tax coordination', 'Strategic timing of income'] }
    ],
    forWho: ['High-income earners', 'Investors with complex portfolios', 'Families planning for education', 'Legacy-focused individuals'],
    cta: 'Plan My Strategy'
  }
];

export default function IndividualServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero: Matched to Home Page Style */}
      <section className="bg-slate-900 pt-20 pb-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-lime-400" />
            <span className="text-slate-300 text-xs font-semibold uppercase tracking-widest">Personal Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Individual <span className="text-lime-400">Services</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional tax preparation and wealth planning designed to keep more of what you earn and secure your financial future.
          </p>
          <Link href="/contact">
            <Button className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold text-base px-10 py-7 rounded-xl transition-all">
              Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Grid: Matched to Original Services Design */}
      <section className="-mt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {individualServices.map((service) => (
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
                      <AccordionTrigger className="text-slate-900 font-bold hover:no-underline py-4">
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