import React from 'react';
import { motion } from 'framer-motion';

export type TabType = 'companies' | 'analysis' | 'timeline' | 'offcampus';

interface TabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'companies', label: 'Companies', icon: '📋' },
    { id: 'analysis', label: 'Analysis', icon: '📊' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'offcampus', label: 'Off-Campus', icon: '🌐' },
  ];

  return (
    <div className="flex p-1 bg-bg3 rounded-xl mb-8 w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg overflow-hidden ${
            activeTab === tab.id ? 'text-text' : 'text-text3 hover:text-text2'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-bg2 shadow-sm rounded-lg"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
             <span>{tab.icon}</span> {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};
