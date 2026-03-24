import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  note?: string;
  color?: 'green' | 'yellow' | 'blue' | 'accent' | 'purple';
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, note, color = 'accent', index }) => {
  const colorClasses = {
    green: 'text-green border-t-green',
    yellow: 'text-yellow border-t-yellow',
    blue: 'text-blue border-t-blue',
    accent: 'text-accent border-t-accent',
    purple: 'text-accent2 border-t-accent2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className={`glass-card p-6 border-t-2 ${colorClasses[color]}`}
    >
      <div className="font-mono text-[10px] uppercase tracking-widest text-text3 mb-2">{label}</div>
      <div className={`text-3xl font-bold syne ${colorClasses[color].split(' ')[0]}`}>{value}</div>
      {note && <div className="text-[11px] text-text3 mt-1">{note}</div>}
    </motion.div>
  );
};

interface StatsGridProps {
  stats: {
    totalCompanies: number;
    completedCount: number;
    totalPlaced: number;
    placementRate: string;
    avgCTC: string;
    medianCTC: string;
    avgFixed: string;
    avgStipend: string;
  };
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const data: { label: string; value: string | number; note: string; color: 'green' | 'yellow' | 'blue' | 'accent' | 'purple' }[] = [
    { label: 'Total Companies', value: stats.totalCompanies, note: `${stats.completedCount} completed`, color: 'accent' },
    { label: 'Students Placed', value: stats.totalPlaced, note: 'of 490 students', color: 'green' },
    { label: 'Placement Rate', value: `${stats.placementRate}%`, note: 'incl. off-campus', color: 'purple' },
    { label: 'Average CTC', value: `₹${stats.avgCTC}L`, note: 'on-campus only', color: 'yellow' },
    { label: 'Median CTC', value: `₹${stats.medianCTC}L`, note: 'on-campus only', color: 'accent' },
    { label: 'Avg Fixed CTC', value: `₹${stats.avgFixed}L`, note: 'base component', color: 'blue' },
    { label: 'Avg Stipend', value: `₹${stats.avgStipend}K`, note: 'monthly', color: 'blue' },
    { label: 'Highest CTC', value: '₹59.3L', note: 'DE Shaw', color: 'purple' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {data.map((stat, i) => (
        <StatCard key={stat.label} {...stat} index={i} />
      ))}
    </div>
  );
};
