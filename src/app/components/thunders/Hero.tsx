'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      <ParticleBackground />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial gradient overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-thunder-green/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-thunder-blue/[0.03] rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-thunder-green/20 bg-thunder-green/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-thunder-green" />
          <span className="text-xs sm:text-sm text-thunder-green font-medium tracking-wide">
            Next-Gen Digital Ecosystem
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-white">Building the Future of</span>
          <br />
          <span className="bg-gradient-to-r from-thunder-green via-thunder-neon to-thunder-green bg-clip-text text-transparent text-glow-green">
            Digital Ecosystems
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg text-thunder-text-muted leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A unified AI-powered platform integrating intelligent systems, scalable
          backends, and immersive interactive experiences into one seamless
          digital ecosystem.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="group relative w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-thunder-dark bg-thunder-green rounded-xl btn-neon"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => handleScroll('#features')}
            className="group w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-thunder-text border border-thunder-border rounded-xl hover:border-thunder-green/40 hover:bg-thunder-green/5 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <Play className="w-4 h-4 text-thunder-green" />
              Explore Platform
            </span>
          </button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { label: 'AI Integration', value: 'Smart' },
            { label: 'Scalable Systems', value: 'Robust' },
            { label: 'Interactive Apps', value: 'Immersive' },
            { label: 'Real-time Analytics', value: 'Insightful' },
          ].map((item, i) => (
            <div
              key={i}
              className="group glass rounded-xl p-4 hover:border-thunder-green/30 transition-all duration-300"
            >
              <div className="text-[10px] sm:text-xs text-thunder-text-muted uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-sm sm:text-base font-semibold text-white group-hover:text-thunder-green transition-colors">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-thunder-green/30 flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-thunder-green/60 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
