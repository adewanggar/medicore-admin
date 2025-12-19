import React from 'react';
import { StatCardProps } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StatCard: React.FC<StatCardProps> = ({ title, value, trend, isPositive, icon }) => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className={`flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
          {isPositive ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
          {trend}
        </span>
      </div>
      <div>
        <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{title}</h3>
        <p className="text-2xl font-black text-slate-800 tracking-tight">{value}</p>
      </div>
    </div>
  );
};