import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell as PieCell
} from 'recharts';
import type { Company } from '../data';

interface AnalysisProps {
  companies: Company[];
}

export const Analysis: React.FC<AnalysisProps> = ({ companies }) => {
  // 1. CTC Distribution
  const ranges = [
    { name: '< 8L', min: 0, max: 8 },
    { name: '8 – 12L', min: 8, max: 12 },
    { name: '12 – 16L', min: 12, max: 16 },
    { name: '16 – 25L', min: 16, max: 25 },
    { name: '> 25L', min: 25, max: Infinity },
  ];
  const withCTC = companies.filter(c => c.ctc !== null);
  const ctcDistData = ranges.map(r => ({
    name: r.name,
    count: withCTC.filter(c => c.ctc! >= r.min && c.ctc! < r.max).length
  }));

  // 2. Top Companies
  const topCompaniesData = [...companies]
    .filter(c => c.ctc)
    .sort((a, b) => (b.ctc || 0) - (a.ctc || 0))
    .slice(0, 8)
    .map(c => ({ name: c.company, ctc: c.ctc }));

  // 3. Placed Counts
  const placedData = [...companies]
    .filter(c => c.placed > 0)
    .sort((a, b) => b.placed - a.placed)
    .slice(0, 10)
    .map(c => ({ name: c.company, placed: c.placed }));

  // 4. Placement Type
  const typeCounts: Record<string, number> = {};
  companies.forEach(c => {
    const t = c.type.split(' ')[0];
    typeCounts[t] = (typeCounts[t] || 0) + 1;
  });
  const typeData = Object.entries(typeCounts).map(([name, value]) => ({ name, value }));

  const COLORS = ['#6c63ff', '#34d399', '#fbbf24', '#60a5fa', '#f87171', '#a78bfa'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
      
      <div className="glass-card p-6">
        <h3 className="text-sm font-bold syne mb-6 uppercase tracking-wider text-text2">CTC Distribution (LPA)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ctcDistData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text3)" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text3)" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '12px' }}
                cursor={{ fill: 'var(--bg3)', opacity: 0.4 }}
              />
              <Bar dataKey="count" fill="var(--accent)" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-sm font-bold syne mb-6 uppercase tracking-wider text-text2">Top Companies by CTC (LPA)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topCompaniesData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" stroke="var(--text3)" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis dataKey="name" type="category" stroke="var(--text3)" fontSize={10} tickLine={false} axisLine={false} width={80} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '12px' }}
              />
              <Bar dataKey="ctc" fill="var(--accent2)" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-sm font-bold syne mb-6 uppercase tracking-wider text-text2">Students Placed (Top 10)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={placedData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" stroke="var(--text3)" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis dataKey="name" type="category" stroke="var(--text3)" fontSize={10} tickLine={false} axisLine={false} width={80} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '12px' }}
              />
              <Bar dataKey="placed" fill="var(--green)" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-sm font-bold syne mb-6 uppercase tracking-wider text-text2">Placement Categories</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={typeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {typeData.map((_, index) => (
                  <PieCell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '12px' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};
