import React, { useState } from 'react';
import { Search, Plus, Filter, Mail, Phone, MoreHorizontal, CheckCircle2, Clock, MapPin, UserPlus } from 'lucide-react';

const mockStaff = [
  { id: 1, name: "Dr. Sarah Indah", role: "Specialist", spec: "General Practitioner", status: "Available", email: "sarah.i@medicore.com", phone: "+62 812 3456 7890", image: "https://picsum.photos/200/200?random=101" },
  { id: 2, name: "Dr. Andi Wijaya", role: "Specialist", spec: "Dentist", status: "On Leave", email: "andi.w@medicore.com", phone: "+62 812 9988 7766", image: "https://picsum.photos/200/200?random=102" },
  { id: 3, name: "Dr. Budi Gunawan", role: "Specialist", spec: "Neurologist", status: "Busy", email: "budi.g@medicore.com", phone: "+62 812 4433 2211", image: "https://picsum.photos/200/200?random=103" },
  { id: 4, name: "Siska Putri, RN", role: "Nursing", spec: "Head Nurse", status: "Available", email: "siska.p@medicore.com", phone: "+62 813 5544 3322", image: "https://picsum.photos/200/200?random=104" },
  { id: 5, name: "Dr. Citra Amelia", role: "Specialist", spec: "Pediatrician", status: "Available", email: "citra.a@medicore.com", phone: "+62 815 1122 3344", image: "https://picsum.photos/200/200?random=105" },
  { id: 6, name: "Reza Pratama", role: "Support", spec: "Front Desk", status: "Available", email: "reza.p@medicore.com", phone: "+62 817 6677 8899", image: "https://picsum.photos/200/200?random=106" },
];

export const StaffDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Staff Directory</h2>
          <p className="text-slate-500 text-sm">Manage medical professionals and clinic support team.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95">
          <UserPlus size={18} />
          Add New Staff
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, specialty, or role..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 shadow-sm transition-colors">
          <Filter size={16} /> Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStaff.map((staff) => (
          <div key={staff.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="relative">
                  <img src={staff.image} alt={staff.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-50 shadow-sm" />
                  <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    staff.status === 'Available' ? 'bg-emerald-500' : 
                    staff.status === 'Busy' ? 'bg-amber-500' : 'bg-slate-300'
                  }`}></span>
                </div>
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors"><MoreHorizontal size={18} /></button>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1">{staff.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md uppercase tracking-wide">{staff.role}</span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-medium">{staff.spec}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Mail size={14} className="text-slate-400" />
                  <span className="truncate">{staff.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Phone size={14} className="text-slate-400" />
                  <span>{staff.phone}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-colors">View Profile</button>
                <button className="flex-1 py-2 bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-700 rounded-xl text-xs font-bold transition-all">Assign Shift</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};