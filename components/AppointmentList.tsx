import React, { useState } from 'react';
import { Appointment, AppointmentStatus } from '../types';
import { Calendar, Clock, MoreVertical, Plus, Filter, Search, User, Stethoscope, ChevronDown, X, Check } from 'lucide-react';

const mockAppointments: Appointment[] = [
  { id: '1', patientName: 'Budi Santoso', doctorName: 'Dr. Sarah Indah', date: '2023-10-27', time: '09:00 AM', type: 'General Checkup', status: 'Scheduled', avatar: '' },
  { id: '2', patientName: 'Siti Aminah', doctorName: 'Dr. Andi Wijaya', date: '2023-10-27', time: '10:30 AM', type: 'Dental Cleanup', status: 'Scheduled', avatar: '' },
  { id: '3', patientName: 'Rahmat Hidayat', doctorName: 'Dr. Sarah Indah', date: '2023-10-26', time: '02:00 PM', type: 'Diabetes Control', status: 'Completed', avatar: '' },
  { id: '4', patientName: 'Dewi Lestari', doctorName: 'Dr. Budi Gunawan', date: '2023-10-26', time: '11:00 AM', type: 'Neurology Consult', status: 'Cancelled', avatar: '' },
  { id: '5', patientName: 'Agus Pratama', doctorName: 'Dr. Sarah Indah', date: '2023-10-28', time: '09:15 AM', type: 'Gastritis Check', status: 'Scheduled', avatar: '' },
  { id: '6', patientName: 'Linda Kusuma', doctorName: 'Dr. Andi Wijaya', date: '2023-10-28', time: '01:45 PM', type: 'Root Canal', status: 'Scheduled', avatar: '' },
];

export const AppointmentList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppointmentStatus | 'All'>('Scheduled');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredAppointments = mockAppointments.filter(app => {
    const matchesTab = activeTab === 'All' || app.status === activeTab;
    const matchesSearch = app.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusStyles = (status: AppointmentStatus) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Cancelled': return 'bg-slate-100 text-slate-500 border-slate-200'; // Modern "muted" look for cancelled
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header Stats / Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Appointments</h2>
           <p className="text-slate-500 text-sm">Manage your clinic schedule and bookings.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95"
        >
          <Plus size={18} />
          New Appointment
        </button>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-5 border-b border-slate-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          
          {/* Tabs */}
          <div className="flex p-1 bg-slate-100/80 rounded-xl w-full xl:w-auto overflow-x-auto">
            {['All', 'Scheduled', 'Completed', 'Cancelled'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 xl:flex-none px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-white text-teal-700 shadow-sm ring-1 ring-slate-200' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex items-center gap-3 w-full xl:w-auto">
             <div className="relative flex-1 sm:min-w-[280px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search patient, doctor..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <button className="px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
               <Filter size={16} /> Filter
             </button>
          </div>
        </div>

        {/* Table List */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition-colors group">
                    
                    {/* Patient Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center font-bold text-sm">
                            {app.patientName.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">{app.patientName}</div>
                          <div className="text-xs text-slate-500 mt-0.5">ID: #{1000 + parseInt(app.id)}</div>
                        </div>
                      </div>
                    </td>

                    {/* Doctor Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center gap-2">
                           <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                               <Stethoscope size={14} />
                           </div>
                           <span className="text-sm font-medium text-slate-700">{app.doctorName}</span>
                       </div>
                    </td>

                    {/* Type Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                       <span className="text-sm text-slate-600">{app.type}</span>
                    </td>

                    {/* Schedule Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                           <Clock size={14} className="text-teal-500" /> {app.time}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 pl-0.5">
                           <Calendar size={12} /> {app.date}
                        </div>
                      </div>
                    </td>

                    {/* Status Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${getStatusStyles(app.status)}`}>
                        {app.status}
                      </span>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                      <div className="flex flex-col items-center justify-center">
                         <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-300">
                             <Calendar size={24} />
                         </div>
                         <p className="font-medium">No appointments found.</p>
                         <p className="text-sm text-slate-400 mt-1">Try adjusting your filters or search terms.</p>
                      </div>
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
           <span className="text-xs text-slate-500">Showing {filteredAppointments.length} results</span>
           <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
           </div>
        </div>
      </div>

       {/* Add Appointment Modal */}
       {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-white/20 flex flex-col max-h-[90vh]">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-3xl">
                <h3 className="text-lg font-bold text-slate-800">Schedule Appointment</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 rounded-full text-slate-400 hover:bg-white hover:text-slate-600 transition-colors">
                   <X size={20} />
                </button>
             </div>
             
             <div className="p-6 overflow-y-auto">
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Patient Search */}
                      <div className="space-y-2 md:col-span-2">
                         <label className="text-sm font-semibold text-slate-700">Patient</label>
                         <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input type="text" placeholder="Search for patient..." className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
                         </div>
                      </div>

                      {/* Doctor Selection */}
                      <div className="space-y-2 md:col-span-2">
                         <label className="text-sm font-semibold text-slate-700">Doctor</label>
                         <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all">
                            <option>Dr. Sarah Indah (General)</option>
                            <option>Dr. Andi Wijaya (Dental)</option>
                            <option>Dr. Budi Gunawan (Neurology)</option>
                         </select>
                      </div>

                      {/* Date & Time */}
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700">Date</label>
                         <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700">Time</label>
                         <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
                      </div>

                       {/* Type & Status */}
                       <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700">Consultation Type</label>
                         <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all">
                            <option>General Checkup</option>
                            <option>Dental Care</option>
                            <option>Consultation</option>
                            <option>Follow Up</option>
                         </select>
                      </div>
                       <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700">Status</label>
                         <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all">
                            <option>Scheduled</option>
                            <option>Confirmed</option>
                            <option>Waiting</option>
                         </select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-semibold text-slate-700">Notes / Reason</label>
                          <textarea rows={2} placeholder="Brief reason for visit..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"></textarea>
                      </div>
                   </div>
                </form>
             </div>

             <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3 rounded-b-3xl">
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 font-medium text-sm transition-colors"
                >
                    Cancel
                </button>
                <button className="px-5 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 font-medium text-sm transition-colors shadow-lg shadow-teal-600/20 flex items-center gap-2">
                   <Check size={16} /> Confirm Booking
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};