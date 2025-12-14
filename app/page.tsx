'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle2, BarChart3, Users, Zap, Award, ArrowRight, FileText, DollarSign, Calculator, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/animated-counter';
import TrustBadges from '@/components/trust-badges';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Enhanced Hero Section with Animated Gradient Background */}
      <section className="relative min-h-[500px] md:min-h-[550px] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-lime-50 pt-16 pb-12 md:pt-20 md:pb-16">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-gradient-to-br from-lime-200 to-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-100 to-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4 px-5 py-2 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full text-sm font-semibold shadow-lg border border-slate-200 hover:scale-105 transition-all duration-300">
                <span className="text-lime-500">✓</span> Certified Tax Advisor • 20+ Years Experience
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight animate-float">
                Tax & Accounting Solutions{' '}
                <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-lime-500 bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </h1>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Dynamic Accounting and Payroll delivers expert bookkeeping, tax preparation, and strategic financial guidance for individuals and small businesses in San Diego.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group">
                  <Button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-700 hover:to-slate-800 transition-all duration-500 text-base px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="text-base px-8 py-6 rounded-xl border-2 border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto">
                    Learn About Services
                  </Button>
                </Link>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-lime-500 bg-clip-text text-transparent">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <p className="text-slate-600 text-xs font-medium mt-1">Clients Served</p>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-lime-500 bg-clip-text text-transparent">
                    <AnimatedCounter end={20} suffix="+" />
                  </div>
                  <p className="text-slate-600 text-xs font-medium mt-1">Years in Business</p>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-lime-500 bg-clip-text text-transparent">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-slate-600 text-xs font-medium mt-1">Satisfaction Rate</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="animate-fade-in-up animation-delay-300">
                <TrustBadges />
              </div>
            </div>

            {/* Enhanced Right Side Card */}
            <div className="hidden lg:block animate-fade-in-up animation-delay-200">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-lime-500 rounded-3xl transform rotate-3 opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-5 border border-slate-200/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-700 hover:scale-[1.02]">
                  <div className="space-y-3">
                    <div className="group/item flex items-center gap-3 p-3 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-xl transition-all duration-500 hover:scale-105 border border-slate-200/50">
                      <div className="p-2 bg-white rounded-lg shadow-md group-hover/item:shadow-lg transition-all duration-300">
                        <BarChart3 className="text-slate-800 group-hover/item:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <span className="font-semibold text-slate-900 text-base">Strategic Tax Planning</span>
                    </div>
                    <div className="group/item flex items-center gap-3 p-3 bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl hover:shadow-xl transition-all duration-500 hover:scale-105 border border-lime-200/50">
                      <div className="p-2 bg-white rounded-lg shadow-md group-hover/item:shadow-lg transition-all duration-300">
                        <FileText className="text-lime-500 group-hover/item:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <span className="font-semibold text-slate-900 text-base">Expert Preparation</span>
                    </div>
                    <div className="group/item flex items-center gap-3 p-3 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-xl transition-all duration-500 hover:scale-105 border border-slate-200/50">
                      <div className="p-2 bg-white rounded-lg shadow-md group-hover/item:shadow-lg transition-all duration-300">
                        <Calculator className="text-slate-800 group-hover/item:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <span className="font-semibold text-slate-900 text-base">Precise Bookkeeping</span>
                    </div>
                    <div className="group/item flex items-center gap-3 p-3 bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl hover:shadow-xl transition-all duration-500 hover:scale-105 border border-lime-200/50">
                      <div className="p-2 bg-white rounded-lg shadow-md group-hover/item:shadow-lg transition-all duration-300">
                        <TrendingUp className="text-lime-500 group-hover/item:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <span className="font-semibold text-slate-900 text-base">Business Growth Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos / Trust Indicator Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 font-medium text-base mb-6">
            Trusted by 500+ San Diego businesses and individuals
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {['Industry Leader', 'Top Rated 2024', 'Certified Excellence', 'Award Winner', '5-Star Service'].map((badge, idx) => (
              <div key={idx} className="text-slate-400 font-bold text-lg tracking-wide hover:text-slate-600 transition-colors duration-300">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Service Cards with Glassmorphism */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Core Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive accounting and tax solutions for your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: FileText, title: 'Bookkeeping', desc: 'Accurate record-keeping and transaction management', gradient: 'from-slate-500 to-slate-700' },
              { icon: BarChart3, title: 'Financial Statements', desc: 'Clear, professional financial reporting', gradient: 'from-lime-400 to-lime-600' },
              { icon: Calculator, title: 'Payroll Processing', desc: 'Efficient, compliant payroll management', gradient: 'from-slate-600 to-slate-800' },
              { icon: DollarSign, title: 'Tax Preparation', desc: 'Expert preparation and filing', gradient: 'from-lime-500 to-lime-700' },
              { icon: TrendingUp, title: 'Tax Strategies', desc: 'Proactive planning to minimize liability', gradient: 'from-slate-700 to-lime-600' },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="group relative p-5 bg-white/80 backdrop-blur-sm border-2 border-slate-200/50 hover:border-lime-400/50 transition-all duration-700 hover:shadow-2xl hover:scale-105 animate-fade-in-up overflow-hidden rounded-xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                <div className="relative z-10">
                  <div className="mb-3 inline-block p-2.5 bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-md group-hover:shadow-xl">
                    <service.icon className="w-8 h-8 text-lime-500 group-hover:text-lime-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-normal">{service.desc}</p>
                </div>

                {/* Decorative Border Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-lime-500 to-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Individuals vs Businesses - Asymmetric Layout */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-100 to-transparent rounded-full filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Solutions for Every Situation</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Whether you're an individual or a small business, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* For Individuals Card */}
            <Card className="group relative p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-400 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] rounded-2xl overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-600 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="inline-block p-3 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl mb-4 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">For Individuals</h3>
                <ul className="space-y-2.5 text-slate-600 text-base mb-6">
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Personal tax return preparation and optimization</span>
                  </li>
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Self-employment and freelance tax guidance</span>
                  </li>
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Investment and capital gains planning</span>
                  </li>
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>IRA and retirement account strategies</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-slate-800 hover:bg-slate-700 text-white transition-all duration-500 px-6 py-5 text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 w-full">
                    Schedule Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>

              {/* Decorative Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </Card>

            {/* For Small Businesses Card - Featured */}
            <Card className="group relative p-6 bg-gradient-to-br from-lime-50 to-white backdrop-blur-sm border-2 border-lime-300 hover:border-lime-500 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] rounded-2xl overflow-hidden animate-fade-in-up animation-delay-200">
              {/* Premium Badge */}
              <div className="absolute top-5 right-5 px-3 py-1.5 bg-gradient-to-r from-lime-500 to-lime-600 text-white text-xs font-bold rounded-full shadow-lg">
                POPULAR
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-lime-400 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="inline-block p-3 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl mb-4 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">For Small Businesses</h3>
                <ul className="space-y-2.5 text-slate-600 text-base mb-6">
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Monthly bookkeeping and accounting services</span>
                  </li>
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Professional financial statements and reports</span>
                  </li>
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Payroll processing and compliance management</span>
                  </li>
                  <li className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 size={20} className="text-lime-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span>Business tax planning and entity structuring</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white transition-all duration-500 px-6 py-5 text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 w-full">
                    Start Free Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>

              {/* Decorative Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-200 to-transparent rounded-full filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our proven process delivers results in just 4 steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Initial Consultation', desc: 'We listen to your needs and understand your goals.', color: 'from-slate-800 to-slate-700' },
              { num: '2', title: 'Assessment & Planning', desc: 'We analyze your situation and create a tailored plan.', color: 'from-slate-700 to-lime-500' },
              { num: '3', title: 'Expert Execution', desc: 'Our team implements the strategy with precision.', color: 'from-lime-500 to-lime-600' },
              { num: '4', title: 'Review & Support', desc: 'We monitor results and adjust as needed.', color: 'from-lime-600 to-slate-800' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <span className="relative z-10">{step.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-normal">{step.desc}</p>
                </div>

                {/* Connecting Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-lime-300 to-slate-300 opacity-30"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white transition-all duration-500 px-8 py-6 text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
                Learn More About Our Process
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Cards */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-lime-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-lime-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What Our Clients Say</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Real success stories from real clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Dynamic Accounting transformed how we handle our finances. Their proactive tax strategies saved us thousands annually.",
                author: "Sarah Chen",
                role: "Small Business Owner"
              },
              {
                quote: "Professional, reliable, and genuinely interested in our financial success. Highly recommend!",
                author: "Michael Rodriguez",
                role: "Self-Employed Consultant"
              },
              {
                quote: "Finally, a CPA who explains things clearly and actually cares about maximizing our returns.",
                author: "Jennifer Park",
                role: "Tech Startup Founder"
              },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="group p-5 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-700 hover:shadow-2xl hover:scale-105 rounded-2xl border-2 border-white/20 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-700 text-sm mb-5 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-base">{testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4 px-5 py-2 bg-lime-500/20 backdrop-blur-sm border border-lime-500/30 text-lime-400 rounded-full text-xs font-semibold">
            Limited Time Offer
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Ready to Optimize Your Finances?
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Book your free consultation today and discover how much you could save with expert tax strategies.
          </p>

          <Link href="/contact">
            <Button className="group bg-white text-slate-900 hover:bg-lime-400 hover:text-slate-900 transition-all duration-500 text-base px-10 py-6 rounded-xl font-semibold shadow-2xl hover:shadow-[0_20px_60px_rgba(217,249,157,0.4)] hover:scale-105">
              Book Your Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Button>
          </Link>

          <p className="mt-6 text-slate-400 text-xs">
            No obligation • 30-minute strategy session • Personalized recommendations
          </p>
        </div>
      </section>

      {/* Add Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.7s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </main>
  );
}
