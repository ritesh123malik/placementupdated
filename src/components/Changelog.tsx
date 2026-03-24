import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { changelog } from '../data';

export const Changelog: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl pb-20">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold outfit flex items-center gap-2">
          📋 Placement <span className="text-accent2">Changelog</span>
        </h3>
        <div className="text-[10px] font-mono text-text3 px-2 py-1 bg-bg3 border border-border rounded-lg uppercase tracking-widest">
          Live Updates
        </div>
      </div>

      <div className="space-y-4">
        {changelog.map((entry, i) => (
          <motion.div
            key={`${entry.company}-${i}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-5 relative overflow-hidden group hover:border-accent2/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`mt-1 p-2 rounded-xl border ${
                entry.type === 'NEW' ? 'bg-green-bg border-green/20 text-green' :
                entry.type === 'UPDATE' ? 'bg-blue-bg border-blue/20 text-blue' :
                'bg-red-bg border-red/20 text-red'
              }`}>
                {entry.type === 'NEW' ? <PlusCircle size={18} /> :
                 entry.type === 'UPDATE' ? <RefreshCw size={18} /> :
                 <AlertTriangle size={18} />}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-text truncate pr-4 text-lg">{entry.company}</h4>
                  <span className="text-[10px] font-mono text-text3 whitespace-nowrap">{entry.date}</span>
                </div>
                
                <p className="text-sm text-text2 mb-3 leading-relaxed">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {entry.ctc && (
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-bg3 border border-border rounded-lg">
                      <span className="text-[10px] font-mono text-text3 uppercase">CTC</span>
                      <span className="text-xs font-bold text-accent">{entry.ctc}</span>
                    </div>
                  )}
                  {entry.students && (
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-bg3 border border-border rounded-lg">
                      <span className="text-[10px] font-mono text-text3 uppercase">Selected</span>
                      <span className="text-xs font-bold text-green">{entry.students}</span>
                    </div>
                  )}
                  {entry.status && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-bg/5 border border-green/10 rounded-lg">
                      <CheckCircle2 size={10} className="text-green" />
                      <span className="text-[10px] font-bold text-green uppercase tracking-tighter">{entry.status}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-border bg-bg2 text-text3 text-xs text-center font-medium">
        All updates are verified by the placement office before appearing here.
      </div>
    </div>
  );
};
