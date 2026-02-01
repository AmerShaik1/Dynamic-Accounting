import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle2, X } from 'lucide-react';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Bookkeeping',
      price: 'Starting at $299',
      period: 'per month',
      description: 'For businesses with ongoing transaction needs',
      features: [
        { text: 'Monthly transaction recording', included: true },
        { text: 'Bank reconciliation', included: true },
        { text: 'Accounts receivable/payable management', included: true },
        { text: 'General ledger maintenance', included: true },
        { text: 'Unlimited transactions', included: true },
        { text: 'Quarterly financial reports', included: true },
        { text: 'Year-round consultation', included: false },
      ]
    },
    {
      name: 'Financial Statements',
      price: 'Starting at $199',
      period: 'per month',
      description: 'Professional financial reporting and analysis',
      features: [
        { text: 'Monthly financial statements', included: true },
        { text: 'Balance sheets & income statements', included: true },
        { text: 'Cash flow analysis', included: true },
        { text: 'Financial ratio analysis', included: true },
        { text: 'Variance analysis', included: true },
        { text: 'Professional formatting', included: true },
        { text: 'Lender-ready formats', included: true },
      ],
      highlighted: true
    },
    {
      name: 'Payroll Processing',
      price: 'Starting at $95',
      period: 'per month + per-employee',
      description: 'Complete payroll management and compliance',
      features: [
        { text: 'Bi-weekly or monthly processing', included: true },
        { text: 'Tax calculation & deposits', included: true },
        { text: 'Federal/state compliance', included: true },
        { text: 'Direct deposit processing', included: true },
        { text: 'Employee tax reporting (W-2s)', included: true },
        { text: 'Payroll tax filings', included: true },
        { text: 'Multi-state support', included: true },
      ]
    },
  ];

  const serviceRates = [
    { service: 'Tax Preparation (Individual)', rate: 'Contact for Quote' },
    { service: 'Tax Preparation (Business)', rate: 'Contact for Quote' },
    { service: 'Tax Strategy Planning', rate: 'Contact for Quote' },
    { service: 'Consultation (hourly)', rate: '$150 - $250/hour' },
    { service: 'IRS Representation', rate: 'Contact for Quote' },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600">No hidden fees. Pay for what you need.</p>
          </div>
        </div>
      </section>

      {/* Monthly Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Monthly Services</h2>
            <p className="text-slate-600">Ongoing recurring services for consistent financial management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative p-8 transition-all hover:shadow-xl ${plan.highlighted ? 'border-2 border-lime-500 md:scale-105 bg-gradient-to-br from-white to-lime-50' : 'border border-slate-200'}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-800 to-lime-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6 text-sm">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-slate-800">{plan.price}</div>
                  <p className="text-slate-600 text-sm">{plan.period}</p>
                </div>

                <Link href="/contact" className="block mb-8">
                  <Button className={`w-full py-6 font-semibold transition-all ${plan.highlighted ? 'bg-lime-500 hover:bg-lime-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                    Get Started
                  </Button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3">
                      {feature.included ? (
                        <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-1" />
                      ) : (
                        <X size={20} className="text-slate-300 flex-shrink-0 mt-1" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Custom Services</h2>
            <p className="text-slate-600">Project-based services with customized pricing</p>
          </div>

          <Card className="bg-white border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-800 to-lime-500">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Pricing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {serviceRates.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-900">{item.service}</td>
                      <td className="px-6 py-4 text-slate-700">{item.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700">
              <span className="font-semibold">Note:</span> Custom services are quoted based on complexity and scope. We'll provide a detailed estimate after discussing your specific needs during a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Value Adds */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included With Every Package</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Expert Guidance', desc: 'Direct access to our Certified Tax Advisor for questions and guidance' },
              { title: 'Proactive Planning', desc: 'Year-round tax planning to identify opportunities and minimize liability' },
              { title: 'Timely Delivery', desc: 'Meet all deadlines and ensure compliance with all regulatory requirements' },
              { title: 'Professional Reports', desc: 'Clear, accurate, and professional financial documentation' },
              { title: 'Secure Communication', desc: 'Encrypted and secure client portal for document sharing' },
              { title: 'Peace of Mind', desc: '10+ years of expertise handling your most important financial matters' },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you offer discounts for bundled services?',
                a: 'Yes! We offer package discounts when combining multiple services. Contact us for a custom quote.'
              },
              {
                q: 'Can I upgrade or downgrade my service level?',
                a: 'Absolutely. Your needs may change, and we can adjust your service level month-to-month.'
              },
              {
                q: 'Are there any setup fees?',
                a: 'No hidden fees. Some services have a one-time setup fee which we\'ll clearly communicate upfront.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, ACH, credit cards, and checks. We\'ll work out the best payment method with you.'
              },
              {
                q: 'Do you offer a money-back guarantee?',
                a: 'We\'re confident in our work. If you\'re not satisfied, we\'ll work with you to make it right.'
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 bg-white">
                <h3 className="font-semibold text-slate-900 text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-lime-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Find the Right Plan for You</h2>
          <p className="text-xl text-slate-300 mb-8">Get a personalized quote during your free consultation.</p>
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
