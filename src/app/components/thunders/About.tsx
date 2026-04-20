'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb, Globe } from 'lucide-react';

const cards = [
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To become the global standard for unified digital ecosystems, where AI, web applications, backend systems, and interactive experiences converge seamlessly. We envision a world where technology adapts intelligently to human needs, creating platforms that are both powerful and intuitive.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To build next-generation digital infrastructure that empowers organizations and developers to create, deploy, and scale intelligent applications with unprecedented speed and reliability. We bridge the gap between cutting-edge AI research and practical, production-ready solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We continuously push the boundaries of what is possible in digital technology. Our platform incorporates the latest advances in artificial intelligence, distributed computing, and human-computer interaction to deliver solutions that are years ahead of the industry curve.',
  },
  {
    icon: Globe,
    title: 'Scalability',
    desc: 'Every component of the Thunders ecosystem is designed from the ground up for massive scale. Whether serving thousands or millions of users, our infrastructure adapts dynamically, ensuring consistent performance, reliability, and security across all deployments.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 sm:py-32 gradient-dark overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-thunder-green/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-thunder-blue/[0.02] rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-thunder-green tracking-widest uppercase border border-thunder-green/20 rounded-full bg-thunder-green/5">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Powering the{' '}
            <span className="bg-gradient-to-r from-thunder-green to-thunder-neon bg-clip-text text-transparent">
              Digital Revolution
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-thunder-text-muted text-base sm:text-lg leading-relaxed">
            Thunders Foundation is a next-generation technology platform
            dedicated to building intelligent, scalable, and immersive digital
            ecosystems that transform how organizations operate and innovate.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="group glass rounded-2xl p-6 hover:border-thunder-green/30 transition-all duration-500 border-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="w-12 h-12 rounded-xl bg-thunder-green/10 border border-thunder-green/20 flex items-center justify-center mb-5 group-hover:bg-thunder-green/15 group-hover:border-thunder-green/30 transition-all duration-300">
                <card.icon className="w-5 h-5 text-thunder-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-thunder-text-muted leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '50+', label: 'AI Models' },
            { value: '10M+', label: 'API Calls/Day' },
            { value: '200+', label: 'Integrations' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-thunder-green mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-thunder-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
