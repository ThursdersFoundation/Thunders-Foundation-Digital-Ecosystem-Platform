'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Zap, Target } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function GameSection() {
  const ref = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const frameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  const createParticles = useCallback((): Particle[] => {
    const w = canvasRef.current?.width || 600;
    const h = canvasRef.current?.height || 400;
    const newParticles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 2,
        color: Math.random() > 0.7 ? '#00bfff' : Math.random() > 0.4 ? '#00ff99' : '#00cc66',
      });
    }
    particlesRef.current = newParticles;
    return newParticles;
  }, []);

  useEffect(() => {
    setParticles(createParticles());
  }, [createParticles]);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw grid
      ctx.strokeStyle = 'rgba(0, 204, 102, 0.05)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Update and draw particles
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      let currentScore = score;

      particlesRef.current.forEach((p) => {
        // Mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          p.vx += (dx / dist) * 0.3;
          p.vy += (dy / dist) * 0.3;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 5) {
          p.vx = (p.vx / speed) * 5;
          p.vy = (p.vy / speed) * 5;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, p.color + '40');
        gradient.addColorStop(1, p.color + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.3;
            ctx.strokeStyle = `rgba(0, 204, 102, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse cursor glow
      const cursorGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
      cursorGrad.addColorStop(0, 'rgba(0, 255, 153, 0.08)');
      cursorGrad.addColorStop(1, 'rgba(0, 255, 153, 0)');
      ctx.fillStyle = cursorGrad;
      ctx.beginPath();
      ctx.arc(mx, my, 80, 0, Math.PI * 2);
      ctx.fill();

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
  }, [score]);

  useEffect(() => {
    if (isRunning) {
      gameLoop();
    } else {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isRunning, gameLoop]);

  const handleReset = () => {
    setIsRunning(false);
    setScore(0);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    createParticles();
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    // Check if clicked near a particle
    particlesRef.current.forEach((p) => {
      const dx = p.x - x;
      const dy = p.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 20) {
        setScore((s) => s + 1);
        // Explode effect
        p.vx = (Math.random() - 0.5) * 10;
        p.vy = (Math.random() - 0.5) * 10;
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = (e.clientX - rect.left) * (canvas.width / rect.width);
    mouseRef.current.y = (e.clientY - rect.top) * (canvas.height / rect.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    }
  }, []);

  return (
    <section className="relative py-24 sm:py-32 gradient-dark overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-thunder-green tracking-widest uppercase border border-thunder-green/20 rounded-full bg-thunder-green/5">
            Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Experience the{' '}
            <span className="bg-gradient-to-r from-thunder-green to-thunder-blue bg-clip-text text-transparent">
              Simulation
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-thunder-text-muted text-base sm:text-lg leading-relaxed">
            Move your cursor to attract particles. Click near particles to score points.
            A demonstration of real-time interactive physics simulation built on web technologies.
          </p>
        </motion.div>

        {/* Game Container */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass rounded-2xl overflow-hidden border border-white/5">
            {/* Game toolbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-thunder-text-muted font-mono">
                  particle_simulation.sys
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-thunder-green/10 border border-thunder-green/20">
                  <Target className="w-3.5 h-3.5 text-thunder-green" />
                  <span className="text-sm font-semibold text-thunder-green">
                    {score}
                  </span>
                </div>
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                >
                  {isRunning ? (
                    <Pause className="w-4 h-4 text-thunder-text-muted" />
                  ) : (
                    <Play className="w-4 h-4 text-thunder-green" />
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                >
                  <RotateCcw className="w-4 h-4 text-thunder-text-muted" />
                </button>
              </div>
            </div>

            {/* Canvas */}
            <canvas
              ref={canvasRef}
              className="w-full h-[350px] sm:h-[450px] cursor-crosshair"
              onClick={handleCanvasClick}
              onMouseMove={handleMouseMove}
            />

            {/* Info bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/5">
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-thunder-text-muted">
                  Particles: <span className="text-thunder-green">60</span>
                </span>
                <span className="text-[11px] text-thunder-text-muted">
                  Engine: <span className="text-thunder-blue">WebGL 2D</span>
                </span>
              </div>
              <span className="text-[11px] text-thunder-text-muted">
                Move cursor to attract | Click particles to score
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
