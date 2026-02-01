'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Download, FileText, Calendar, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function ResourcesPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = (e: React.FormEvent, docName: string) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
    // In a real app, this would trigger an API call
    console.log(`Downloading ${docName} for ${email}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  const taxDeadlines = [
    { date: 'January 31', event: 'W-2s and 1099s due', who: 'Employers/Payers' },
    { date: 'February 28', event: 'Individual tax return deadline', who: 'Individual Filers' },
    { date: 'March 15', event: 'Business tax return deadline', who: 'Business Entities' },
    { date: 'April 15', event: 'Individual tax return deadline (if not extended)', who: 'Individual Filers' },
    { date: 'April 15', event: 'Quarterly estimated tax payment (Q1)', who: 'Self-Employed/Investors' },
    { date: 'June 15', event: 'Quarterly estimated tax payment (Q2)', who: 'Self-Employed/Investors' },
    { date: 'September 15', event: 'Quarterly estimated tax payment (Q3)', who: 'Self-Employed/Investors' },
    { date: 'October 15', event: 'Payroll tax return deadline', who: 'Employers' },
    { date: 'December 31', event: 'Year-end tax planning deadline', who: 'All Taxpayers' },
  ];

  const faqs = [
    {
      q: 'When should I file my taxes?',
      a: 'The federal tax deadline is April 15 for individuals. However, we recommend filing as early as possible to get refunds faster and reduce fraud risk. We can often file much earlier once we receive your documents.'
    },
    {
      q: 'How much should I charge for tax services?',
      a: 'Tax service pricing varies based on complexity, type of entity, and industry. We recommend consulting with a professional like Dynamic Accounting Services to determine appropriate pricing.'
    },
    {
      q: 'What deductions am I missing?',
      a: 'This depends on your situation. Common deductions include home office, vehicle expenses, professional development, and equipment. We identify deductions specific to your business.'
    },
    {
      q: 'Should I incorporate my business?',
      a: 'This depends on your income, liability concerns, and tax situation. We analyze your specific circumstances and recommend the best entity structure (sole proprietor, LLC, S-Corp, etc.).'
    },
    {
      q: 'How can I reduce my tax liability?',
      a: 'There are many strategies: income deferral, expense acceleration, retirement contributions, entity structuring, and strategic timing of events. We create a personalized tax plan for maximum savings.'
    },
    {
      q: 'What happens if I get audited?',
      a: 'If you work with us, we have comprehensive records and documentation. We can represent you before the IRS and handle all communications on your behalf.'
    },
    {
      q: 'Do I need to keep receipts and invoices?',
      a: 'Yes. The IRS may ask for supporting documentation for any deduction. We recommend keeping records for at least 3-7 years.'
    },
    {
      q: 'What is the difference between tax avoidance and tax evasion?',
      a: 'Tax avoidance is legal - using allowed strategies to minimize taxes. Tax evasion is illegal - deliberately hiding income or falsifying documents. We only recommend legal tax avoidance strategies.'
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Resources & Guides</h1>
            <p className="text-xl text-slate-600">Free tools and information to help you manage your finances</p>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Download Free Resources</h2>
            <p className="text-xl text-slate-600">Get organized for tax season and business success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Complete Tax Checklist',
                desc: 'Comprehensive checklist of documents and items you\'ll need for tax preparation',
                items: [
                  'Personal deduction checklist',
                  'Business expense tracker',
                  'Estimated quarterly tax guide',
                  'Document organization tips',
                ]
              },
              {
                title: 'Tax Deadlines Calendar',
                desc: '2024 complete tax deadline calendar for individuals and businesses',
                items: [
                  'All federal deadlines',
                  'State deadline information',
                  'Quarterly payment reminders',
                  'Extension guidance',
                ]
              },
            ].map((resource, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="w-8 h-8 text-slate-800 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-slate-600">{resource.desc}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-lime-500">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <form onSubmit={(e) => handleDownload(e, resource.title)} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-800 to-lime-500 text-white hover:from-slate-700 hover:to-lime-600 transition-all"
                  >
                    <Download size={18} className="mr-2" />
                    {submitted ? 'Check Your Email!' : 'Download Now'}
                  </Button>
                </form>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Deadlines */}
      <section className="py-20 bg-slate-50" id="deadlines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">2024 Tax Deadlines</h2>
            <p className="text-xl text-slate-600">Important dates you need to know</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {taxDeadlines.map((deadline, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-lime-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-slate-800 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 text-lg">{deadline.date}</p>
                    <p className="text-slate-900 font-semibold mb-1">{deadline.event}</p>
                    <p className="text-slate-600 text-sm">{deadline.who}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-slate-700">
              <span className="font-semibold">Tip:</span> Mark these dates in your calendar and set reminders. If you can't meet a deadline, you can request an extension, but it's better to plan ahead.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Answers to common tax and accounting questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-8 bg-slate-50 hover:shadow-lg transition-all">
                <div className="flex gap-4 mb-4">
                  <HelpCircle className="w-6 h-6 text-slate-800 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-slate-900">{faq.q}</h3>
                </div>
                <p className="text-slate-700 ml-10">{faq.a}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 to-lime-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-6">Our team is here to help. Schedule a free consultation to discuss your specific situation.</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-slate-800 to-lime-500 text-white hover:from-slate-700 hover:to-lime-600 transition-all">
                Ask Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Tax Tips</h2>
            <p className="text-xl text-slate-600">Insights from our Certified Tax Advisor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '5 Tax Deductions You Might Be Missing', date: 'Updated Monthly' },
              { title: 'How to Prepare for an IRS Audit', date: 'Updated Quarterly' },
              { title: 'Tax Planning Strategies for Business Owners', date: 'Updated Quarterly' },
            ].map((article, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-all cursor-pointer">
                <FileText className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{article.title}</h3>
                <p className="text-slate-600 text-sm">{article.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-lime-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Taxes?</h2>
          <p className="text-xl text-slate-300 mb-8">Get personalized advice from a Certified Tax Advisor.</p>
          <Link href="/contact">
            <Button className="bg-white text-slate-800 hover:bg-slate-50 transition-all text-lg px-8 py-6 rounded-lg font-semibold">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
