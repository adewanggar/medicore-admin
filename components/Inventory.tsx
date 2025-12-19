import React, { useState } from 'react';
import { Package, Search, Plus, Filter, AlertTriangle, ArrowUpRight, ArrowDownRight, MoreHorizontal, Edit, Trash2 } from 'lucide-react';

const mockInventory = [
  { id: 'SKU-001', name: 'Paracetamol 500mg', category: 'Medicine', stock: 120, unit: 'Boxes', status: 'In Stock', price: '$12.00' },
  { id: 'SKU-002', name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 15, unit: 'Bottles', status: 'Low Stock', price: '$25.50' },
  { id: 'SKU-003', name: 'Surgical Masks', category: 'Supplies', stock: 500, unit: 'Units', status: 'In Stock', price: '$0.50' },
  { id: 'SKU-004', name: 'Insulin Syringes', category: 'Supplies', stock: 8, unit: 'Packs', status: 'Low Stock', price: '$45.00' },
  { id: 'SKU-005', name: 'Ibuprofen 400mg', category: 'Medicine', stock: 85, unit: 'Boxes', status: 'In Stock', price: '$15.00' },
  { id: 'SKU-006', name: 'Latex Gloves (M)', category: 'Supplies', stock: 0, unit: 'Boxes', status: 'Out of Stock', price: '$18.00' },
];

export const Inventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = mockInventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Inventory Management</h2>
          <p className="text-slate-500 text-sm">Monitor medical supplies and medicine stock levels.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95">
          <Plus size={18} />
          Add New Item
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
           <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
              <Package size={24} />
           </div>
           <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Items</p>
              <p className="text-2xl font-black text-slate-800">1,240</p>
           </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
           <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
              <AlertTriangle size={24} />
           </div>
           <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Low Stock</p>
              <p className="text-2xl font-black text-slate-800">12 Items</p>
           </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
           <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
              <ArrowDownRight size={24} />
           </div>
           <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Out of Stock</p>
              <p className="text-2xl font-black text-slate-800">3 Items</p>
           </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name or SKU..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button className="px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
               <Filter size={16} /> Filter Category
            </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Item Name / SKU</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Level</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                     <div className="text-sm font-bold text-slate-800">{item.name}</div>
                     <div className="text-[10px] text-slate-400 font-mono">{item.id}</div>
                  </td>
                  <td className="px-6 py-4">
                     <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item.category}</span>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                           <div 
                              className={`h-full rounded-full ${item.stock > 50 ? 'bg-emerald-500' : item.stock > 10 ? 'bg-amber-500' : 'bg-red-500'}`} 
                              style={{ width: `${Math.min(item.stock, 100)}%` }}
                           ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700">{item.stock} {item.unit}</span>
                     </div>
                  </td>
                  <td className="px-6 py-4">
                     <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${
                        item.status === 'In Stock' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                        item.status === 'Low Stock' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        'bg-red-50 text-red-600 border-red-100'
                     }`}>
                        {item.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"><Edit size={16} /></button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};