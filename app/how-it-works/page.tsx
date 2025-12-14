import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, MessageSquare, BarChart3, CheckCircle2, Phone } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">How It Works</h1>
            <p className="text-xl text-slate-600">Our proven 4-step process delivers results</p>
          </div>
        </div>
      </section>

      {/* Step-by-step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                num: '1',
                title: 'Initial Consultation',
                icon: MessageSquare,
                desc: 'We start with a thorough conversation to understand your financial situation, challenges, and goals. This consultation is always free and gives us a clear picture of your needs.',
                details: [
                  'In-depth discussion of your current finances',
                  'Understanding your short and long-term goals',
                  'Identifying pain points and challenges',
                  'Discussing your timeline and expectations',
                  'No obligations - purely informational'
                ]
              },
              {
                num: '2',
                title: 'Assessment & Strategic Planning',
                icon: BarChart3,
                desc: 'Based on our consultation, we conduct a detailed analysis of your financial records and develop a customized strategy tailored specifically to your situation.',
                details: [
                  'Comprehensive financial analysis',
                  'Tax opportunity identification',
                  'Cost-benefit analysis of recommended services',
                  'Custom action plan development',
                  'Written proposal and timeline'
                ]
              },
              {
                num: '3',
                title: 'Expert Implementation',
                icon: CheckCircle2,
                desc: 'Our experienced team executes the plan with precision, maintaining clear communication every step of the way. We handle the complexity so you don\'t have to.',
                details: [
                  'Organized data collection and organization',
                  'Professional preparation of documents',
                  'Compliance with all tax requirements',
                  'Regular progress updates and check-ins',
                  'Transparent communication and support'
                ]
              },
              {
                num: '4',
                title: 'Review & Ongoing Support',
                icon: Phone,
                desc: 'Once everything is complete, we review results together and establish an ongoing support relationship to monitor your progress and adjust strategies as needed.',
                details: [
                  'Results presentation and explanation',
                  'Discussion of savings and improvements',
                  'Tax planning for next period',
                  'Available for questions and adjustments',
                  'Ongoing consultation and support'
                ]
              }
            ].map((step, idx) => (
              <div key={step.num} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 1 ? 'md:order-last' : ''}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className={idx % 2 === 1 ? '' : ''}>
                    <Card className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-100">
                      <h3 className="text-lg font-semibold text-slate-900 mb-6">What Happens:</h3>
                      <ul className="space-y-4">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex gap-3">
                            <ArrowRight size={20} className="text-lime-500 flex-shrink-0 mt-1" />
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>

                {idx < 3 && <div className="flex justify-center my-16">
                  <div className="hidden md:block w-1 h-12 bg-gradient-to-b from-blue-200 to-emerald-200"></div>
                </div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-xl text-slate-600">From consultation to completed services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Week 1', text: 'Initial Consultation' },
              { label: 'Week 2', text: 'Assessment & Planning' },
              { label: 'Weeks 3-6', text: 'Implementation' },
              { label: 'Week 7', text: 'Review & Support' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-slate-800 to-lime-500 text-white rounded-lg p-6 mb-4">
                  <p className="font-bold text-lg">{item.label}</p>
                </div>
                <p className="text-slate-700 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 mt-12 text-lg">
            Timeline varies based on complexity. We'll provide a specific schedule during your initial consultation.
          </p>
        </div>
      </section>

      {/* FAQs about Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is the initial consultation really free?',
                a: 'Yes, absolutely. We offer a free consultation to understand your needs and discuss how we can help. There\'s no obligation to move forward.'
              },
              {
                q: 'How long will the entire process take?',
                a: 'Most projects take 4-8 weeks depending on complexity. We\'ll provide a specific timeline during your consultation.'
              },
              {
                q: 'What information do I need to provide?',
                a: 'We\'ll give you a detailed checklist after your consultation. Typically: financial records, receipts, bank statements, and any relevant business documents.'
              },
              {
                q: 'Can I change my plan later?',
                a: 'Absolutely. As your business changes, we\'ll adjust our services. We\'re flexible and adapt to your evolving needs.'
              },
              {
                q: 'What if I have questions during the process?',
                a: 'You\'ll have direct access to our team. We believe in transparent communication and encourage questions throughout the entire process.'
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 bg-slate-50">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">Book your free consultation today and take the first step.</p>
          <Link href="/contact">
            <Button className="bg-white text-slate-800 hover:bg-slate-50 transition-all text-lg px-8 py-6 rounded-lg font-semibold">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
