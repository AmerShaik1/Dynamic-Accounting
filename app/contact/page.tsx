'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    business_name: '',
    business_size: 'individual',
    city: '',
    state: '',
    service_interest: 'Bookkeeping',
    preferred_contact_method: 'email',
    preferred_time_window: 'morning',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // If the user starts typing again, hide the success message
    if (success) setSuccess(false);
    
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess(true);
      
      // 1. AUTO-SCROLL to the top of the page so the user sees the thank you message
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Reset form data
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        business_name: '',
        business_size: 'individual',
        city: '',
        state: '',
        service_interest: 'Bookkeeping',
        preferred_contact_method: 'email',
        preferred_time_window: 'morning',
        message: '',
      });

      // 2. PERSISTENT SUCCESS: Notice setTimeout is removed. 
      // The message stays until user interacts with the form again.
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-slate-600">Ready to optimize your finances? Let's talk.</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600 mb-2">+1 (858) 688-3763</p>
                    <p className="text-slate-500 text-sm">Available during business hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 mb-2">sk@taxpro360.net</p>
                    <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">San Diego, California</p>
                    <p className="text-slate-500 text-sm">Available for virtual meetings</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Hours</h3>
                    <p className="text-slate-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM PT</p>
                    <p className="text-slate-600 text-sm">By appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-lime-50 border border-lime-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">Free Initial Consultation</h3>
                <p className="text-slate-700 text-sm mb-4">Every new client gets a free, no-obligation consultation to discuss your situation and goals.</p>
                <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white">
                  Schedule Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                {success && (
                  <div className="mb-6 p-4 bg-lime-50 border border-lime-200 rounded-lg animate-in fade-in slide-in-from-top duration-500">
                    <p className="text-lime-800 font-semibold text-lg">Thank you! We&apos;ll be in touch shortly.</p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                        placeholder="(619) 555-0000"
                      />
                    </div>
                  </div>

                  {/* Business Info */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Business Name (Optional)</label>
                    <input
                      type="text"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                      placeholder="Your Business Name"
                    />
                  </div>

                  {/* Business Size & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Business Type *</label>
                      <select
                        name="business_size"
                        value={formData.business_size}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                      >
                        <option value="individual">Individual</option>
                        <option value="micro">Micro Business</option>
                        <option value="small">Small Business</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                        placeholder="San Diego"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                        placeholder="CA"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Services Interested In *</label>
                    <select
                      name="service_interest"
                      value={formData.service_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                    >
                      <option value="Bookkeeping">Bookkeeping</option>
                      <option value="Financial Statements">Financial Statements</option>
                      <option value="Payroll">Payroll Processing</option>
                      <option value="Tax Preparation">Tax Preparation</option>
                      <option value="Tax Strategies">Tax Strategies</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Contact Method & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Contact Method *</label>
                      <select
                        name="preferred_contact_method"
                        value={formData.preferred_contact_method}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Preferred Time *</label>
                      <select
                        name="preferred_time_window"
                        value={formData.preferred_time_window}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
                      >
                        <option value="morning">Morning (9-12 PM)</option>
                        <option value="afternoon">Afternoon (12-5 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all resize-none"
                      placeholder="Tell us about your situation and goals..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-slate-800 to-lime-500 text-white hover:from-slate-700 hover:to-lime-600 transition-all py-3 font-semibold disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Schedule Free Consultation'}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information will only be used to contact you about your consultation request.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Schedule */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What to Expect</h2>
            <p className="text-xl text-slate-600">Your free consultation journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Form Submission',
                desc: 'You provide your information and tell us about your needs'
              },
              {
                step: '2',
                title: 'Quick Confirmation',
                desc: 'We\'ll contact you within 24 hours to schedule'
              },
              {
                step: '3',
                title: 'Consultation',
                desc: 'Meet with our Certified Tax Advisor to discuss your situation'
              },
              {
                step: '4',
                title: 'Next Steps',
                desc: 'We\'ll outline options and create your personalized plan'
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}