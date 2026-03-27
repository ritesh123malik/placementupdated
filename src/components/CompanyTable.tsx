import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronUp, ChevronDown, CheckCircle2, Clock } from 'lucide-react';
import type { Company } from '../data';

interface CompanyTableProps {
  companies: Company[];
}

type SortKey = 'company' | 'ctc' | 'placed' | 'date' | 'branches';

export const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Completed' | 'Pending'>('all');
  const [branchFilter, setBranchFilter] = useState<string>('all');
  const [sortKey, setSortKey] = useState<SortKey>('company');
  const [sortDir, setSortDir] = useState<1 | -1>(1);

  const branches = ['CSE', 'CCE', 'ECE', 'Mech'];

  const filteredAndSorted = useMemo(() => {
    return companies
      .filter((c) => {
        const matchesSearch = c.company.toLowerCase().includes(search.toLowerCase()) || 
                             c.type.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
        const matchesBranch = branchFilter === 'all' || c.branches.includes(branchFilter);
        return matchesSearch && matchesStatus && matchesBranch;
      })
      .sort((a, b) => {
        if (sortKey === 'branches') {
          const ab = a.branches.join(',');
          const bb = b.branches.join(',');
          return ab.localeCompare(bb) * sortDir;
        }
        let av = a[sortKey];
        let bv = b[sortKey];
        if (av === null) av = -Infinity;
        if (bv === null) bv = -Infinity;
        if (typeof av === 'string') return av.localeCompare(bv as string) * sortDir;
        return ((av as number) - (bv as number)) * sortDir;
      });
  }, [companies, search, statusFilter, branchFilter, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 1 ? -1 : 1);
    } else {
      setSortKey(key);
      setSortDir(1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text3" size={18} />
          <input
            type="text"
            placeholder="Search companies or types..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-bg3 border border-border rounded-xl outline-none focus:border-accent transition-colors text-sm"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="flex bg-bg3 p-1 rounded-xl border border-border">
            {(['all', 'Completed', 'Pending'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  statusFilter === s ? 'bg-bg2 shadow-sm text-text' : 'text-text3 hover:text-text2'
                }`}
              >
                {s === 'all' ? 'All' : s}
              </button>
            ))}
          </div>

          <div className="flex bg-bg3 p-1 rounded-xl border border-border">
            <button
              onClick={() => setBranchFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                branchFilter === 'all' ? 'bg-bg2 shadow-sm text-text' : 'text-text3 hover:text-text2'
              }`}
            >
              All
            </button>
            {branches.map((b) => (
              <button
                key={b}
                onClick={() => setBranchFilter(b)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  branchFilter === b ? 'bg-bg2 shadow-sm text-text' : 'text-text3 hover:text-text2'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-fit">
            <thead>
              <tr className="bg-bg3/50">
                <th className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border">#</th>
                <th 
                  className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border cursor-pointer hover:bg-bg4 transition-colors sort-header"
                  onClick={() => toggleSort('company')}
                >
                  <div className="flex items-center gap-1">
                    Company {sortKey === 'company' && (sortDir === 1 ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                  </div>
                </th>
                <th 
                  className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border cursor-pointer hover:bg-bg4 transition-colors sort-header"
                  onClick={() => toggleSort('branches')}
                >
                  <div className="flex items-center gap-1">
                    Branches {sortKey === 'branches' && (sortDir === 1 ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                  </div>
                </th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border">Type</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border">CGPA</th>
                <th 
                  className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border cursor-pointer hover:bg-bg4 transition-colors sort-header"
                  onClick={() => toggleSort('ctc')}
                >
                  <div className="flex items-center gap-1">
                    CTC {sortKey === 'ctc' && (sortDir === 1 ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                  </div>
                </th>
                <th 
                  className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border cursor-pointer hover:bg-bg4 transition-colors sort-header"
                  onClick={() => toggleSort('placed')}
                >
                  <div className="flex items-center gap-1">
                    Placed {sortKey === 'placed' && (sortDir === 1 ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                  </div>
                </th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-wider text-text3 border-b border-border text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredAndSorted.map((c, index) => (
                  <motion.tr
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={c.sno}
                    className="group border-b border-border last:border-0 hover:bg-bg3/30 transition-colors"
                  >
                    <td className="p-4 text-xs font-mono text-text3">{index + 1}</td>
                    <td className="p-4 td-company">
                      <div className="font-bold text-text group-hover:text-accent transition-colors leading-tight">
                        {c.company}
                      </div>
                      <div className="text-[10px] font-mono text-text3 mt-0.5">{c.date}</div>
                    </td>
                    <td className="p-4 td-branches">
                      <div className="flex flex-wrap gap-1">
                        {c.branches.map(b => (
                          <span key={b} className="branch-pill">
                            {b}
                          </span>
                        ))}
                        {c.branches.length === 0 && <span className="text-text3 text-[10px]">Open</span>}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 bg-blue-bg text-blue text-[10px] font-bold rounded-full uppercase tracking-tight whitespace-nowrap">
                        {c.type}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-xs text-text2 whitespace-nowrap">{c.cgpa}</td>
                    <td className="p-4">
                      {c.ctc ? (
                        <div className="min-w-[80px]">
                          <div className="font-extrabold text-text syne">₹{c.ctc}L</div>
                          {c.fixed && <div className="text-[10px] font-mono text-text3">Fixed: ₹{c.fixed}L</div>}
                        </div>
                      ) : (
                        <div className="text-text3 text-xs">—</div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className={`inline-flex items-center justify-center min-w-[32px] px-2 py-1 rounded-lg text-xs font-bold font-mono ${
                        c.placed > 0 ? 'bg-green-bg text-green border border-green/20' : 'bg-bg4 text-text3'
                      }`}>
                        {c.placed}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        c.status === 'Completed' ? 'bg-green-bg text-green' : 'bg-yellow-bg text-yellow'
                      }`}>
                        {c.status === 'Completed' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                        {c.status}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        {filteredAndSorted.length === 0 && (
          <div className="p-12 text-center">
            <div className="text-3xl mb-2">🔍</div>
            <div className="text-text2 font-medium">No companies match your filters</div>
            <div className="text-text3 text-xs mt-1">Try adjusting your search or filters</div>
          </div>
        )}
      </div>
      <div className="text-[10px] font-mono text-text3 px-2">
        Showing {filteredAndSorted.length} of {companies.length} results
      </div>
    </div>
  );
};
