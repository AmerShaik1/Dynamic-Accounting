'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  User, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ServicesDirectoryPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0f172a] pt-24 pb-32 px-4 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-[#a3e635]" />
            <span className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase italic leading-[1.1]">
            Financial <span className="text-[#a3e635]">Solutions</span> <br /> For Everyone
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-0 font-medium leading-relaxed">
            Whether you are managing personal wealth or scaling a global enterprise, our precision-driven accounting keeps you ahead.
          </p>
        </div>
      </section>

      {/* --- CHOICE SECTION --- */}
      <section className="-mt-16 pb-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Choice 1: Individual */}
          <Link href="/services/individual" className="group">
            <Card className="h-full p-10 md:p-12 bg-white border-none shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-[3rem] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 transition-colors group-hover:bg-[#a3e635]/10">
                <User className="w-10 h-10 text-slate-900 transition-colors group-hover:text-[#65a30d]" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Individual</h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Expert tax preparation, personal wealth strategies, and long-term financial planning for individuals and families.
              </p>
              <ul className="space-y-3 mb-10 text-left w-full max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> Tax Preparation
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> Wealth Strategy
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> Estate Planning
                </li>
              </ul>
              <Button className="mt-auto w-full bg-slate-900 group-hover:bg-slate-800 text-white font-black uppercase tracking-widest py-7 rounded-2xl transition-all">
                View Personal Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </Link>

          {/* Choice 2: Business */}
          <Link href="/services/business" className="group">
            <Card className="h-full p-10 md:p-12 bg-white border-none shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-[3rem] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-lime-50 rounded-[2rem] flex items-center justify-center mb-8 transition-colors group-hover:bg-[#a3e635]">
                <Briefcase className="w-10 h-10 text-[#65a30d] transition-colors group-hover:text-slate-900" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Business</h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Full-cycle bookkeeping, payroll management, and strategic advisory to maximize your company's profitability.
              </p>
              <ul className="space-y-3 mb-10 text-left w-full max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> Bookkeeping & AP/AR
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> Payroll Processing
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> Growth Advisory
                </li>
              </ul>
              <Button className="mt-auto w-full bg-[#a3e635] group-hover:bg-[#bef264] text-slate-900 font-black uppercase tracking-widest py-7 rounded-2xl transition-all">
                View Business Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </Link>

        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-slate-50 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight uppercase italic">
          Not sure <span className="text-[#65a30d]">which track</span> to choose?
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-black px-12 py-8 rounded-2xl shadow-xl transition-all hover:scale-105">
            Get a Custom Assessment
          </Button>
        </Link>
      </section>
    </main>
  );
}