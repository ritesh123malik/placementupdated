import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  totalCompanies: number;
  totalPlaced: number;
}

export const Hero: React.FC<HeroProps> = ({ totalCompanies, totalPlaced }) => {
  return (
    <section className="py-12 md:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 syne"
      >
        Placement <span className="text-accent2">Intelligence</span>
        <br />
        Dashboard
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-mono text-sm text-text3 tracking-wider uppercase"
      >
        LNMIIT_JAIPUR // BATCH_2026 // {totalCompanies} COMPANIES // {totalPlaced} STUDENTS PLACED
      </motion.div>
    </section>
  );
};
