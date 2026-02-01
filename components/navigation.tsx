'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-xl border-b border-slate-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Logo size="md" />
            <span className="inline font-bold text-white text-base sm:text-xl lg:text-2xl tracking-tight">
              Dynamic Accounting Services
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className="text-white hover:text-lime-400 hover:bg-slate-800 transition-all duration-200 text-base font-medium px-4"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="ml-3 bg-lime-500 text-slate-900 hover:bg-lime-400 hover:scale-105 transition-all duration-200 font-bold shadow-lg shadow-lime-500/20 px-6">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white hover:text-lime-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 space-y-1 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white hover:bg-slate-800 hover:text-lime-400 rounded-lg transition-all duration-200 font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-lime-500 text-slate-900 hover:bg-lime-400 transition-all duration-200 font-bold shadow-lg shadow-lime-500/20 h-12 text-base">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
