'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Monitor,
  Server,
  Brain,
  Database,
  ArrowDown,
  Shield,
  Cloud,
  GitBranch,
} from 'lucide-react';

const layers = [
  {
    icon: Monitor,
    title: 'Frontend Layer',
    desc: 'React / Next.js applications with responsive design, real-time updates, and immersive UI/UX experiences optimized for all devices.',
    color: 'thunder-green',
    items: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'API Gateway',
    desc: 'Unified API layer handling routing, authentication, rate limiting, and request transformation across all microservices.',
    color: 'thunder-neon',
    items: ['REST API', 'WebSocket', 'GraphQL', 'gRPC'],
  },
  {
    icon: Brain,
    title: 'AI Services',
    desc: 'Dedicated AI infrastructure for model serving, inference optimization, and intelligent decision-making pipelines.',
    color: 'thunder-blue',
    items: ['NLP Engine', 'ML Pipeline', 'Recommendations', 'Vision AI'],
  },
  {
    icon: Database,
    title: 'Data Layer',
    desc: 'Persistent storage with multi-database strategy, caching layers, and real-time data synchronization.',
    color: 'thunder-green',
    items: ['PostgreSQL', 'Redis Cache', 'Object Storage', 'Search Index'],
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    desc: 'Cloud-native infrastructure with auto-scaling, container orchestration, and edge computing capabilities.',
    color: 'thunder-neon',
    items: ['Kubernetes', 'Docker', 'Edge CDN', 'Auto-Scaling'],
  },
  {
    icon: Shield,
    title: 'Security & Monitoring',
    desc: 'Comprehensive security framework with real-time monitoring, threat detection, and automated incident response.',
    color: 'thunder-blue',
    items: ['End-to-End Encryption', 'RBAC', 'Audit Logs', 'SIEM'],
  },
];

function getLayerColor(color: string) {
  switch (color) {
    case 'thunder-green':
      return {
        border: 'border-thunder-green/30 hover:border-thunder-green/50',
        bg: 'bg-thunder-green/10',
        text: 'text-thunder-green',
        glow: 'shadow-[0_0_30px_rgba(0,204,102,0.1)]',
      };
    case 'thunder-neon':
      return {
        border: 'border-thunder-neon/30 hover:border-thunder-neon/50',
        bg: 'bg-thunder-neon/10',
        text: 'text-thunder-neon',
        glow: 'shadow-[0_0_30px_rgba(0,255,153,0.1)]',
      };
    case 'thunder-blue':
      return {
        border: 'border-thunder-blue/30 hover:border-thunder-blue/50',
        bg: 'bg-thunder-blue/10',
        text: 'text-thunder-blue',
        glow: 'shadow-[0_0_30px_rgba(0,191,255,0.1)]',
      };
    default:
      return {
        border: 'border-thunder-green/30',
        bg: 'bg-thunder-green/10',
        text: 'text-thunder-green',
        glow: '',
      };
  }
}

export default function Architecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="architecture" className="relative py-24 sm:py-32 gradient-dark overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-thunder-green/[0.02] rounded-full blur-[150px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-thunder-green tracking-widest uppercase border border-thunder-green/20 rounded-full bg-thunder-green/5">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Platform{' '}
            <span className="bg-gradient-to-r from-thunder-green to-thunder-blue bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-thunder-text-muted text-base sm:text-lg leading-relaxed">
            A modular, event-driven architecture designed for resilience, scalability, and
            rapid iteration. Each layer operates independently while communicating
            through well-defined interfaces.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-4">
            {layers.map((layer, i) => {
              const colors = getLayerColor(layer.color);
              return (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div
                    className={`glass rounded-2xl p-5 sm:p-6 border ${colors.border} transition-all duration-500 hover:${colors.glow}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`shrink-0 w-11 h-11 rounded-xl ${colors.bg} border border-white/5 flex items-center justify-center`}
                      >
                        <layer.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                          {layer.title}
                        </h3>
                        <p className="text-sm text-thunder-text-muted leading-relaxed mb-3">
                          {layer.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {layer.items.map((item, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 text-[11px] font-medium text-thunder-text-muted bg-white/5 rounded-md border border-white/5"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-thunder-green/30" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
