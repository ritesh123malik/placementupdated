import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { companies } from './data';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { StatsGrid } from './components/StatsGrid';
import { Tabs, type TabType } from './components/Tabs';
import { CompanyTable } from './components/CompanyTable';
import { Analysis } from './components/Analysis';
import { Timeline } from './components/Timeline';
import { OffCampus } from './components/OffCampus';
import { Changelog } from './components/Changelog';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('companies');

  const stats = useMemo(() => {
    const completed = companies.filter((c) => c.status === 'Completed');
    const withCTC = companies.filter((c) => c.ctc !== null);
    const ctcs = withCTC.map((c) => c.ctc as number).sort((a, b) => a - b);
    
    const avg = ctcs.length ? (ctcs.reduce((a, b) => a + b, 0) / ctcs.length).toFixed(1) : '0';
    
    const median = ctcs.length
      ? (ctcs.length % 2 === 0
          ? (ctcs[ctcs.length / 2 - 1] + ctcs[ctcs.length / 2]) / 2
          : ctcs[Math.floor(ctcs.length / 2)]
        ).toFixed(1)
      : '0';
    
    const totalPlaced = companies.reduce((a, c) => a + c.placed, 0) + 28;
    const fixedCTCs = companies.filter((c) => c.fixed).map((c) => c.fixed as number);
    const avgFixed = fixedCTCs.length ? (fixedCTCs.reduce((a, b) => a + b, 0) / fixedCTCs.length).toFixed(1) : '0';
    
    const stipends = companies.filter((c) => c.stipend).map((c) => c.stipend as number);
    const avgStipend = stipends.length
      ? Math.round(stipends.reduce((a, b) => a + b, 0) / stipends.length / 1000).toString()
      : '0';

    return {
      totalCompanies: companies.length,
      completedCount: completed.length,
      totalPlaced,
      placementRate: ((totalPlaced / 490) * 100).toFixed(1),
      avgCTC: avg,
      medianCTC: median,
      avgFixed,
      avgStipend,
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Analytics />
      {/* Header */}
      <header className="glass sticky top-0 z-50 py-3 border-b border-border">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            <span className="syne font-extrabold text-lg tracking-tight">
              LNMIIT <span className="text-accent2">Placement</span> 2026
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green/10 border border-green/20 text-green text-[10px] font-bold uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-green animate-pulse" /> Live Feed
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <Hero totalCompanies={stats.totalCompanies} totalPlaced={stats.totalPlaced} />
        <StatsGrid stats={stats} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'companies' && <CompanyTable companies={companies} />}
              {activeTab === 'analysis' && <Analysis companies={companies} />}
              {activeTab === 'timeline' && <Timeline companies={companies} />}
              {activeTab === 'offcampus' && <OffCampus />}
              {activeTab === 'changelog' && <Changelog />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border mt-20 opacity-40">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest">
          <div></div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
