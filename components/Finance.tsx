
import React from 'react';
import { CreditCard, DollarSign, TrendingUp, Download, ArrowUpRight, Search, Filter, MoreVertical, CheckCircle2, Clock, XCircle, Info } from 'lucide-react';

const mockTransactions = [
  { id: 'INV-2023-001', patient: 'Budi Santoso', amount: '$150.00', date: '2023-10-24', method: 'Insurance', status: 'Paid' },
  { id: 'INV-2023-002', patient: 'Siti Aminah', amount: '$45.50', date: '2023-10-24', method: 'Cash', status: 'Paid' },
  { id: 'INV-2023-003', patient: 'Rahmat Hidayat', amount: '$320.00', date: '2023-10-23', method: 'Credit Card', status: 'Pending' },
  { id: 'INV-2023-004', patient: 'Dewi Lestari', amount: '$90.00', date: '2023-10-23', method: 'Debit Card', status: 'Paid' },
  { id: 'INV-2023-005', patient: 'Agus Pratama', amount: '$12.00', date: '2023-10-22', method: 'Cash', status: 'Paid' },
];

export const Finance: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Finance & Billing</h2>
          <p className="text-slate-500 text-sm">Track clinic revenue, invoices, and patient payments.</p>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center justify-center gap-2 border border-slate-200 bg-white text-slate-700 px-5 py-2.5 rounded-xl font-medium transition-all hover:bg-slate-50">
              <Download size={18} /> Export Report
           </button>
           <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95">
              <DollarSign size={18} /> New Invoice
           </button>
        </div>
      </div>

      {/* Financial Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-teal-600 to-emerald-700 p-6 rounded-3xl text-white shadow-lg shadow-teal-900/10 relative overflow-hidden group">
           <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                 <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md"><DollarSign size={20} /></div>
                 <span className="flex items-center text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-md"><ArrowUpRight size={10} className="mr-1" /> +14.5%</span>
              </div>
              <p className="text-teal-50/80 text-xs font-bold uppercase tracking-wider">Total Revenue (Month)</p>
              <p className="text-3xl font-black mt-1">$45,280.00</p>
           </div>
           <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><CreditCard size={20} /></div>
              <span className="text-xs font-bold text-slate-400">Monthly Target</span>
           </div>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Payments Collected</p>
           <div className="flex items-end justify-between mt-1">
              <p className="text-3xl font-black text-slate-800">82%</p>
              <p className="text-xs font-bold text-slate-500 mb-1">$37,120 / $45k</p>
           </div>
           <div className="w-full h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: '82%' }}></div>
           </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><Clock size={20} /></div>
              <span className="text-xs font-bold text-red-500">Urgent</span>
           </div>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unpaid Invoices</p>
           <p className="text-3xl font-black text-slate-800 mt-1">$3,450.00</p>
           {/* Added Info icon which is now imported from lucide-react */}
           <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-1 font-medium"><Info size={10} /> 12 invoices pending payment</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
           <h3 className="text-lg font-bold text-slate-800">Recent Transactions</h3>
           <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                 <input type="text" placeholder="Search invoices..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/20" />
              </div>
              <button className="p-2 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50"><Filter size={18} /></button>
           </div>
        </div>
        <div className="overflow-x-auto">
           <table className="w-full">
              <thead className="bg-slate-50/50">
                 <tr>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Invoice ID</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Patient Name</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Method</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-right"></th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                 {mockTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                       <td className="px-6 py-4 text-xs font-bold text-slate-600">{tx.id}</td>
                       <td className="px-6 py-4">
                          <div className="text-sm font-bold text-slate-800">{tx.patient}</div>
                          <div className="text-[10px] text-slate-400">{tx.date}</div>
                       </td>
                       <td className="px-6 py-4 text-sm font-black text-slate-800">{tx.amount}</td>
                       <td className="px-6 py-4 text-xs text-slate-500 font-medium">{tx.method}</td>
                       <td className="px-6 py-4">
                          <span className={`flex items-center gap-1.5 text-[10px] font-bold ${tx.status === 'Paid' ? 'text-emerald-600' : 'text-amber-600'}`}>
                             {tx.status === 'Paid' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                             {tx.status}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
           <button className="text-xs font-bold text-teal-600 hover:underline">View All Transactions</button>
        </div>
      </div>
    </div>
  );
};
