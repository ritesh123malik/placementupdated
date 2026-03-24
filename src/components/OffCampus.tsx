import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { offCampus } from '../data';

export const OffCampus: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl pb-20">
      <div className="glass-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Globe size={120} />
        </div>
        
        <h3 className="text-2xl font-bold syne mb-4 flex items-center gap-2">
          🌐 Off-Campus <span className="text-accent2">Triumph</span>
        </h3>
        <p className="text-text2 leading-relaxed mb-6">
          Beyond our on-campus drives, <span className="font-bold text-text">28 students</span> secured positions independently at global tech giants. These placements reflect the high technical standards of the LNMIIT 2026 batch.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {offCampus.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true }}
              className="px-4 py-3 bg-bg3 border border-border rounded-xl text-center font-semibold text-text2 hover:border-accent hover:text-text transition-all cursor-default flex items-center justify-center gap-2 group"
            >
              {name}
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-bg rounded-2xl border border-green/20">
            <div className="text-3xl font-bold text-green syne">28</div>
            <div className="text-xs font-mono text-text3 uppercase tracking-wider mt-1">Total Independent Offers</div>
          </div>
          <div className="p-4 bg-accent-glow/10 rounded-2xl border border-accent/20">
            <div className="text-3xl font-bold text-accent2 syne">9+</div>
            <div className="text-xs font-mono text-text3 uppercase tracking-wider mt-1">Top-Tier Companies</div>
          </div>
        </div>
      </div>
      
      <div className="p-4 rounded-xl border border-yellow/30 bg-yellow-bg text-yellow text-xs leading-relaxed flex items-start gap-3">
        <span className="text-base">⚠️</span>
        <span>Note: Off-campus data is included in the "Total Students Placed" stat (136) and "Placement Rate" calculations, but excluded from average and median CTC statistics to maintain metric consistency for on-campus drives.</span>
      </div>
    </div>
  );
};
