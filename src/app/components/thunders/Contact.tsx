'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'thursdersfoundation@gmail.com',
    href: 'mailto:thursdersfoundation@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Medan, North Sumatera',
    href: '#',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '085373539518',
    href: 'tel:+6285373539518',
  },
];

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-thunder-green/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-thunder-blue/[0.015] rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-thunder-green tracking-widest uppercase border border-thunder-green/20 rounded-full bg-thunder-green/5">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Get in{' '}
            <span className="bg-gradient-to-r from-thunder-green to-thunder-neon bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-thunder-text-muted text-base sm:text-lg leading-relaxed">
            Ready to build the future with us? Whether you have a question about
            our platform, need technical support, or want to explore partnership
            opportunities, we are here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left - Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Info Cards */}
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex items-center gap-4 glass rounded-xl p-4 hover:border-thunder-green/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-thunder-green/10 border border-thunder-green/20 flex items-center justify-center group-hover:bg-thunder-green/15 transition-all">
                  <item.icon className="w-4 h-4 text-thunder-green" />
                </div>
                <div>
                  <div className="text-xs text-thunder-text-muted mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm text-white group-hover:text-thunder-green transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-thunder-text-muted mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-thunder-text-muted hover:text-thunder-green hover:border-thunder-green/30 hover:bg-thunder-green/5 transition-all duration-300"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-thunder-text-muted mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-thunder-text-muted/50 focus:outline-none focus:border-thunder-green/40 focus:ring-1 focus:ring-thunder-green/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-thunder-text-muted mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-thunder-text-muted/50 focus:outline-none focus:border-thunder-green/40 focus:ring-1 focus:ring-thunder-green/20 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-thunder-text-muted mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-thunder-text-muted/50 focus:outline-none focus:border-thunder-green/40 focus:ring-1 focus:ring-thunder-green/20 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-thunder-text-muted mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-thunder-text-muted/50 focus:outline-none focus:border-thunder-green/40 focus:ring-1 focus:ring-thunder-green/20 transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-thunder-green/80 text-thunder-dark cursor-default'
                    : 'bg-thunder-green text-thunder-dark hover:bg-thunder-neon hover:shadow-[0_0_25px_rgba(0,204,102,0.3)] hover:-translate-y-0.5'
                }`}
              >
                {submitted ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
