'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Thunders AI Chat',
    desc: 'Intelligent conversational AI engine supporting multi-turn dialogue, context-aware responses, and seamless integration with enterprise data sources.',
    tags: ['AI', 'NLP', 'Real-time'],
    color: 'green',
    status: 'Live',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time business intelligence dashboard with interactive visualizations, custom reports, and predictive analytics powered by machine learning models.',
    tags: ['Dashboard', 'Analytics', 'ML'],
    color: 'blue',
    status: 'Live',
  },
  {
    title: 'CloudForge CMS',
    desc: 'Headless content management system with AI-powered content suggestions, multi-language support, and dynamic publishing workflows.',
    tags: ['CMS', 'API', 'Content'],
    color: 'green',
    status: 'Beta',
  },
  {
    title: 'Nexus Game Engine',
    desc: 'Browser-based game development framework with physics simulation, multiplayer networking, and cross-platform deployment capabilities.',
    tags: ['Gaming', 'WebGL', 'Multiplayer'],
    color: 'blue',
    status: 'Alpha',
  },
  {
    title: 'SecureVault Auth',
    desc: 'Enterprise authentication and authorization platform with biometric support, SSO integration, and zero-trust security architecture.',
    tags: ['Security', 'Auth', 'Enterprise'],
    color: 'green',
    status: 'Live',
  },
  {
    title: 'DataStream Pipeline',
    desc: 'Real-time data processing pipeline supporting event streaming, ETL operations, and automated data quality monitoring at scale.',
    tags: ['Data', 'Streaming', 'ETL'],
    color: 'blue',
    status: 'Beta',
  },
];

function getColorClasses(color: string) {
  return color === 'green'
    ? {
        tag: 'bg-thunder-green/10 text-thunder-green border-thunder-green/20',
        hover: 'hover:border-thunder-green/30 hover:shadow-[0_0_30px_rgba(0,204,102,0.08)]',
        status: 'bg-thunder-green/10 text-thunder-green',
      }
    : {
        tag: 'bg-thunder-blue/10 text-thunder-blue border-thunder-blue/20',
        hover: 'hover:border-thunder-blue/30 hover:shadow-[0_0_30px_rgba(0,191,255,0.08)]',
        status: 'bg-thunder-blue/10 text-thunder-blue',
      };
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-thunder-green/[0.015] rounded-full blur-[180px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-thunder-blue/[0.01] rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-thunder-green tracking-widest uppercase border border-thunder-green/20 rounded-full bg-thunder-green/5">
            Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Featured{' '}
            <span className="bg-gradient-to-r from-thunder-green to-thunder-neon bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-thunder-text-muted text-base sm:text-lg leading-relaxed">
            Explore the diverse range of modules and projects within the
            Thunders ecosystem, each designed to solve real-world challenges with
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={i}
                className={`group glass rounded-2xl p-6 border border-white/5 transition-all duration-500 ${colors.hover} cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-thunder-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-thunder-text-muted opacity-0 group-hover:opacity-100 group-hover:text-thunder-green transition-all duration-300" />
                </div>

                {/* Status */}
                <span
                  className={`inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full mb-3 ${colors.status}`}
                >
                  {project.status}
                </span>

                {/* Description */}
                <p className="text-sm text-thunder-text-muted leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md border ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
