'use client';

import { Zap, Github, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Licenses', href: '#' },
  ],
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-thunder-dark to-thunder-darker" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-xl border border-thunder-green/30 bg-thunder-dark/80 group-hover:border-thunder-green/50 transition-colors">
                <Zap className="w-5 h-5 text-thunder-green" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wide text-white leading-tight">
                  THUNDERS
                </span>
                <span className="text-[10px] tracking-[0.2em] text-thunder-text-muted leading-none">
                  FOUNDATION
                </span>
              </div>
            </button>
            <p className="text-sm text-thunder-text-muted leading-relaxed mb-6 max-w-xs">
              Building the future of digital ecosystems. A next-generation
              platform for AI-powered applications and intelligent systems.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-thunder-text-muted hover:text-thunder-green hover:border-thunder-green/30 hover:bg-thunder-green/5 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-sm text-thunder-text-muted hover:text-thunder-green transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-thunder-text-muted">
            &copy; {new Date().getFullYear()} Thunders Foundation. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-thunder-text-muted hover:text-thunder-green transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
