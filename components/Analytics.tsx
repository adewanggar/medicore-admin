import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';
// Added Clock to the imported icons from lucide-react
import { TrendingUp, Users, Calendar, DollarSign, Download, Filter, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const revenueTrend = [
  { month: 'Jan', current: 4000, previous: 3200 },
  { month: 'Feb', current: 3000, previous: 3500 },
  { month: 'Mar', current: 5500, previous: 4100 },
  { month: 'Apr', current: 4800, previous: 3800 },
  { month: 'May', current: 7000, previous: 5200 },
  { month: 'Jun', current: 6200, previous: 5500 },
];

const patientDemographics = [
  { name: 'Children (0-12)', value: 15 },
  { name: 'Teens (13-19)', value: 20 },
  { name: 'Adults (20-55)', value: 45 },
  { name: 'Seniors (55+)', value: 20 },
];

const COLORS = ['#0d9488', '#0ea5e9', '#6366f1', '#f59e0b'];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Advanced Analytics</h2>
          <p className="text-slate-500 text-sm">In-depth insights into clinic performance and patient trends.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 shadow-sm transition-colors">
              <Filter size={16} /> Date Range
           </button>
           <button className="px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-teal-600/20 transition-all active:scale-95">
              <Download size={16} /> Export CSV
           </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Retention Rate</p>
           <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-slate-800">78.5%</h3>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                 <ArrowUpRight size={10} className="mr-0.5" /> 2.1%
              </span>
           </div>
           <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-teal-500 rounded-full" style={{ width: '78%' }}></div>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">New Registrations</p>
           <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-slate-800">142</h3>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                 <ArrowUpRight size={10} className="mr-0.5" /> 12%
              </span>
           </div>
           <p className="text-[10px] text-slate-500 mt-2 font-medium">vs. 126 last month</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Appointment Fill Rate</p>
           <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-slate-800">92%</h3>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded flex items-center">
                 <Clock size={10} className="mr-0.5" /> Stable
              </span>
           </div>
           <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '92%' }}></div>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Cancellation Rate</p>
           <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-slate-800">4.2%</h3>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                 <ArrowDownRight size={10} className="mr-0.5" /> 1.5%
              </span>
           </div>
           <p className="text-[10px] text-slate-500 mt-2 font-medium">Lower is better</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Performance */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="mb-6 flex justify-between items-center">
              <div>
                 <h3 className="text-lg font-bold text-slate-800">Revenue Analysis</h3>
                 <p className="text-xs text-slate-500">Current year vs Previous year comparison</p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div><span className="text-[10px] font-bold text-slate-500 uppercase">Current</span></div>
                 <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><span className="text-[10px] font-bold text-slate-500 uppercase">Previous</span></div>
              </div>
           </div>
           <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={revenueTrend}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="previous" stroke="#e2e8f0" fill="#f8fafc" strokeWidth={2} />
                    <Area type="monotone" dataKey="current" stroke="#0d9488" fill="#ccfbf1" fillOpacity={0.3} strokeWidth={3} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Demographics Pie */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
           <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-800">Patient Demographics</h3>
              <p className="text-xs text-slate-500">Age distribution of registered patients</p>
           </div>
           <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="h-64 w-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={patientDemographics} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                          {patientDemographics.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                       </Pie>
                       <Tooltip />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                 {patientDemographics.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                       <div className="flex-1">
                          <p className="text-xs font-bold text-slate-700">{item.name}</p>
                          <p className="text-[10px] text-slate-400">{item.value}% of total</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};