'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  );
}