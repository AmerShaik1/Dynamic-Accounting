import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">About Us</h1>
            <p className="text-xl text-slate-600">20+ Years of Excellence in Tax and Accounting Services</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Dynamic Accounting and Payroll was founded on a simple belief: everyone deserves expert, personalized tax and accounting services without the corporate overhead and impersonal service.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                For over 20 years, we've been building lasting relationships with individuals and small business owners in San Diego, serving as their trusted financial advisors during critical decisions and challenging periods.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Our commitment to excellence, proactive planning, and client success has earned us the trust of hundreds of satisfied clients who rely on us for strategic financial guidance and expert preparation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we continue that mission - combining decades of expertise with modern technology to deliver results that transform financial outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '500+', label: 'Clients Served' },
                { num: '20+', label: 'Years in Business' },
                { num: '98%', label: 'Satisfaction Rate' },
                { num: '$5M+', label: 'Tax Savings Generated' },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-lime-50 border border-slate-200 text-center">
                  <p className="text-3xl font-bold text-slate-800 mb-2">{stat.num}</p>
                  <p className="text-slate-700 font-semibold">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">What guides every decision and interaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                desc: 'We commit to the highest standards in everything we do, from attention to detail to client service.'
              },
              {
                icon: Heart,
                title: 'Integrity',
                desc: 'We operate with complete honesty and transparency, always putting our clients\' interests first.'
              },
              {
                icon: Users,
                title: 'Partnership',
                desc: 'We view our clients as partners in their financial success, invested in their long-term goals.'
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                desc: 'We help our clients achieve financial growth through strategic planning and expert guidance.'
              },
            ].map((value, idx) => (
              <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-all">
                <value.icon className="w-12 h-12 text-lime-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600">Expert professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-lime-50 border-2 border-lime-200">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">SK</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">Shehzad Keshwji</h3>
              <p className="text-lime-500 font-semibold text-center mb-6">Certified Tax Advisor & Founder</p>

              <div className="space-y-4 mb-6">
                <p className="text-slate-700 leading-relaxed">
                  With over 20 years of experience in tax preparation, accounting, and financial planning, Shehzad founded Dynamic Accounting and Payroll with a vision to provide personalized, expert service to individuals and small businesses.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As a Certified Tax Advisor, Shehzad stays current with the latest tax laws and strategic opportunities to help clients minimize their tax burden and maximize financial success.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900 mb-3">Specialties:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-lime-500">✓</span>
                    <span>Tax strategy and planning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-500">✓</span>
                    <span>Business entity structuring</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-500">✓</span>
                    <span>Complex tax situations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-500">✓</span>
                    <span>IRS representation</span>
                  </li>
                </ul>
              </div>
            </Card>

            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Work With Shehzad?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Deep Expertise',
                    desc: 'Two decades of real-world experience handling complex tax situations for hundreds of clients.'
                  },
                  {
                    title: 'Proactive Planning',
                    desc: 'Rather than reactive tax filing, Shehzad focuses on year-round strategic planning to maximize savings.'
                  },
                  {
                    title: 'Local Knowledge',
                    desc: 'Deep understanding of San Diego and California business environment, regulations, and opportunities.'
                  },
                  {
                    title: 'Personal Attention',
                    desc: 'Works directly with clients rather than delegating to junior staff, ensuring your needs are truly understood.'
                  },
                  {
                    title: 'Transparent Communication',
                    desc: 'Explains complex concepts clearly and keeps you informed about all decisions affecting your finances.'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border-l-4 border-l-lime-500">
                    <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why San Diego Trusts Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why San Diego Trusts Us</h2>
            <p className="text-xl text-slate-600">Building relationships one client at a time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Results',
                desc: 'Our clients consistently save thousands in taxes through our strategic planning and expert guidance.'
              },
              {
                title: 'Accessibility',
                desc: 'We\'re responsive and available when you need us. Not hidden behind automated systems.'
              },
              {
                title: 'Confidentiality',
                desc: 'Your financial information is sacred. We maintain strict confidentiality and secure information handling.'
              },
              {
                title: 'Continuous Learning',
                desc: 'We invest in staying current with tax law changes and new strategies to benefit our clients.'
              },
              {
                title: 'Client Success',
                desc: 'We measure our success by your financial success. We celebrate your wins and support during challenges.'
              },
              {
                title: 'Honest Advice',
                desc: 'We tell you what you need to hear, not what you want to hear. Always in your best interest.'
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Credentials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                credential: 'Certified Tax Advisor',
                org: 'National Association of Certified Tax Advisors',
                year: 'Current'
              },
              {
                credential: '20+ Years Experience',
                org: 'Tax Preparation & Accounting',
                year: '2004 - Present'
              },
              {
                credential: 'Client Satisfaction',
                org: '98% Client Satisfaction Rate',
                year: 'Consistent'
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-gradient-to-br from-slate-50 to-lime-50 border border-lime-200 text-center">
                <Award className="w-12 h-12 text-lime-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.credential}</h3>
                <p className="text-slate-600 mb-2">{item.org}</p>
                <p className="text-lime-500 font-semibold">{item.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-lime-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-slate-300 mb-8">Schedule a free consultation with Shehzad to discuss your financial goals.</p>
          <Link href="/contact">
            <Button className="bg-white text-slate-800 hover:bg-slate-50 transition-all text-lg px-8 py-6 rounded-lg font-semibold">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
