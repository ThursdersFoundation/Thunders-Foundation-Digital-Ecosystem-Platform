'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Server,
  LayoutDashboard,
  Gamepad2,
  BarChart3,
  Shield,
  Cpu,
  Workflow,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Leverage powerful AI capabilities including natural language processing, intelligent chatbots, personalized recommendations, and predictive analytics that learn and adapt to user behavior in real time.',
    highlight: 'Core',
  },
  {
    icon: Server,
    title: 'Scalable Backend',
    desc: 'Enterprise-grade backend infrastructure built for high availability and horizontal scaling. Microservices architecture ensures each component can scale independently based on demand patterns.',
    highlight: 'Core',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    desc: 'Comprehensive management interface with real-time monitoring, user analytics, content management, and system health dashboards. Full control over every aspect of your digital ecosystem.',
    highlight: 'Platform',
  },
  {
    icon: Gamepad2,
    title: 'Game Systems',
    desc: 'Interactive gaming engines and simulation frameworks for building immersive web-based experiences. From casual games to complex simulations, our platform handles the heavy lifting.',
    highlight: 'Interactive',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    desc: 'Advanced data analytics pipeline with real-time dashboards, custom reporting, and actionable insights. Transform raw data into strategic intelligence that drives informed decision-making.',
    highlight: 'Intelligence',
  },
  {
    icon: Shield,
    title: 'Security Layer',
    desc: 'Multi-layered security infrastructure with end-to-end encryption, role-based access control, threat detection, and compliance-ready audit logging for enterprise deployments.',
    highlight: 'Platform',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    desc: 'Distributed computing at the edge for ultra-low latency experiences. Content delivery, serverless functions, and real-time processing closer to users for blazing-fast performance.',
    highlight: 'Infrastructure',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Visual workflow builder for automating business processes, data pipelines, and integration flows. Drag-and-drop interface for creating complex automation without writing code.',
    highlight: 'Platform',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-thunder-green/[0.015] rounded-full blur-[200px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-thunder-green tracking-widest uppercase border border-thunder-green/20 rounded-full bg-thunder-green/5">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-thunder-green to-thunder-neon bg-clip-text text-transparent">
              Build & Scale
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-thunder-text-muted text-base sm:text-lg leading-relaxed">
            A comprehensive suite of tools and services designed to power every
            aspect of your digital ecosystem, from intelligent automation to
            real-time analytics.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group relative glass rounded-2xl p-6 hover:border-thunder-green/25 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-thunder-green/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge */}
              <span className="inline-block px-2 py-0.5 mb-4 text-[10px] font-medium text-thunder-blue tracking-wider uppercase bg-thunder-blue/10 rounded-full">
                {f.highlight}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-thunder-green/10 border border-thunder-green/15 flex items-center justify-center mb-4 group-hover:bg-thunder-green/15 group-hover:scale-110 transition-all duration-300">
                <f.icon className="w-5 h-5 text-thunder-green" />
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-white mb-2.5 group-hover:text-thunder-green transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-sm text-thunder-text-muted leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
