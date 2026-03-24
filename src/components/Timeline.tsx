import { motion } from 'framer-motion';
import type { Company } from '../data';

interface TimelineProps {
  companies: Company[];
}

export const Timeline: React.FC<TimelineProps> = ({ companies }) => {
  const sorted = [...companies].sort((a, b) => {
    // Basic date parsing for sorting (14 Nov 25 -> 2025-11-14)
    const parse = (d: string) => {
      const p = d.split(' ');
      const day = p[0];
      const month = p[1];
      const months: Record<string, string> = { Jan:'01', Feb:'02', Mar:'03', Apr:'04', May:'05', Jun:'06', Jul:'07', Aug:'08', Sept:'09', Oct:'10', Nov:'11', Dec:'12' };
      return `20${p[2]}-${months[month]}-${day.padStart(2, '0')}`;
    };
    return parse(b.date).localeCompare(parse(a.date));
  });

  return (
    <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border pb-20">
      {sorted.map((c) => (
        <motion.div
          key={c.sno}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative glass-card p-4 md:p-6"
        >
          <div className={`absolute -left-[30px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-bg ${
            c.status === 'Completed' ? 'bg-green' : 'bg-yellow'
          }`} />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold syne text-lg">{c.company}</h4>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  c.status === 'Completed' ? 'bg-green-bg text-green' : 'bg-yellow-bg text-yellow'
                }`}>
                  {c.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-text3">
                <span className="flex items-center gap-1">📅 {c.date}</span>
                <span className="flex items-center gap-1">💼 {c.type}</span>
                <span className="flex items-center gap-1">🎓 {c.branches.join(', ')}</span>
              </div>
            </div>
            
            <div className="text-right flex flex-col items-end">
              <div className="text-xl font-bold syne text-text">
                {c.ctc ? `₹${c.ctc}L` : 'Stipend'}
              </div>
              <div className="text-[10px] font-mono text-text3 bg-bg3 px-2 py-1 rounded mt-1">
                {c.placed} students placed
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
