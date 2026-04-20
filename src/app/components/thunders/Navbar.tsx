'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 group"
            onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-thunder-green/30 bg-thunder-dark/80 group-hover:border-thunder-green/50 transition-colors">
              <Zap
                className="w-5 h-5 sm:w-6 sm:h-6 text-thunder-green"
                strokeWidth={1.8}
              />
              <div className="absolute inset-0 rounded-xl bg-thunder-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-wide text-white leading-tight">
                THUNDERS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-thunder-text-muted leading-none hidden sm:block">
                FOUNDATION
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative px-4 py-2 text-sm text-thunder-text-muted hover:text-thunder-green transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-thunder-green group-hover:w-6 transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="ml-4 px-5 py-2 text-sm font-medium text-thunder-dark bg-thunder-green rounded-lg hover:bg-thunder-neon transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,204,102,0.3)]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-thunder-text-muted hover:text-thunder-green transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-strong border-t border-thunder-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm text-thunder-text-muted hover:text-thunder-green hover:bg-thunder-green/5 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick('#contact')}
                className="w-full mt-3 px-5 py-3 text-sm font-medium text-thunder-dark bg-thunder-green rounded-lg hover:bg-thunder-neon transition-all"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
