'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
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
          
          {/* BRANDING: Dynamic Accounting (Line 1) Services (Line 2) - Matched Fonts/Colors */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Logo size="md" />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-white text-base md:text-xl leading-tight tracking-tight">
                Dynamic Accounting
              </span>
              <span className="font-bold text-white text-base md:text-xl leading-tight tracking-tight">
                Services
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-lime-400 hover:bg-slate-800 transition-all duration-200 text-base font-medium px-4">
                Home
              </Button>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="text-white group-hover:text-lime-400 group-hover:bg-slate-800 transition-all duration-200 text-base font-medium px-4 flex items-center gap-1"
              >
                Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </Button>
              
              <div className="absolute left-0 w-52 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden">
                  <Link href="/services/individual" className="block px-4 py-3 text-sm text-white hover:bg-slate-800 hover:text-lime-400 border-b border-slate-800 transition-colors">
                    Individual Services
                  </Link>
                  <Link href="/services/business" className="block px-4 py-3 text-sm text-white hover:bg-slate-800 hover:text-lime-400 transition-colors">
                    Business Services
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
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

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-white hover:text-lime-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 space-y-1 animate-in slide-in-from-top duration-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white font-medium text-base">
              Home
            </Link>

            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex justify-between items-center px-4 py-3 text-white hover:bg-slate-800 hover:text-lime-400 rounded-lg font-medium text-base"
            >
              Services <ChevronDown size={18} className={isServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            
            {isServicesOpen && (
              <div className="bg-slate-800/50 rounded-lg mx-2 mb-2">
                <Link href="/services/individual" onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm text-slate-300 hover:text-lime-400 border-b border-white/5">
                  Individual Services
                </Link>
                <Link href="/services/business" onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm text-slate-300 hover:text-lime-400">
                  Business Services
                </Link>
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white hover:bg-slate-800 hover:text-lime-400 rounded-lg font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-lime-500 text-slate-900 font-bold h-12 text-base">
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