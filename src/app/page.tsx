'use client';

import { motion } from 'framer-motion';
import LoadingScreen from '@/components/thunders/LoadingScreen';
import Navbar from '@/components/thunders/Navbar';
import Hero from '@/components/thunders/Hero';
import About from '@/components/thunders/About';
import Features from '@/components/thunders/Features';
import Architecture from '@/components/thunders/Architecture';
import Projects from '@/components/thunders/Projects';
import GameSection from '@/components/thunders/GameSection';
import Contact from '@/components/thunders/Contact';
import Footer from '@/components/thunders/Footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-thunder-dark">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Architecture />
        <Projects />
        <GameSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
