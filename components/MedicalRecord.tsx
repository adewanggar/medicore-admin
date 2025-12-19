import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Added AlertCircle to the imports from lucide-react to fix reference error
import { User, Activity, FileText, Pill, Calendar, Clock, ChevronRight, FileSearch, ArrowUp, ArrowDown, AlertCircle } from 'lucide-react';

const vitalData = [
  { time: '08:00', bp: 120, hr: 72 },
  { time: '10:00', bp: 118, hr: 75 },
  { time: '12:00', bp: 125, hr: 80 },
  { time: '14:00', bp: 122, hr: 78 },
  { time: '16:00', bp: 119, hr: 74 },
];

export const MedicalRecord: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Patient Profile Header */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
           <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" 
                alt="Alya Nasution" 
                className="w-32 h-32 rounded-[40px] object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white p-2 rounded-2xl shadow-lg">
                 <User size={20} />
              </div>
           </div>
           <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                 <h2 className="text-3xl font-black text-slate-800">Alya Nasution</h2>
                 <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-100">Patient ID: #MC-2849</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
                 <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Age / Gender</p><p className="text-sm font-bold text-slate-700">24 yrs • Female</p></div>
                 <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Blood Type</p><p className="text-sm font-bold text-slate-700">O Positive (O+)</p></div>
                 <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Weight / Height</p><p className="text-sm font-bold text-slate-700">58kg • 165cm</p></div>
                 <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Visit</p><p className="text-sm font-bold text-slate-700">Oct 12, 2023</p></div>
              </div>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Tabs Menu */}
      <div className="flex p-1.5 bg-slate-100/80 rounded-2xl w-fit">
         {['Overview', 'Vitals', 'Lab Results', 'History'].map((tab) => (
            <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  activeTab === tab ? 'bg-white text-teal-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
               }`}
            >
               {tab}
            </button>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Main Content Area */}
         <div className="lg:col-span-2 space-y-6">
            {/* Vitals Charts Summary */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <div>
                     <h3 className="font-bold text-slate-800">Tanda Vital (Vitals)</h3>
                     <p className="text-xs text-slate-500">Real-time health monitoring trend</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div><span className="text-[10px] font-bold text-slate-400 uppercase">Blood Pressure</span></div>
                     <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div><span className="text-[10px] font-bold text-slate-400 uppercase">Heart Rate</span></div>
                  </div>
               </div>
               <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={vitalData}>
                        <defs>
                           <linearGradient id="colorBp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/><stop offset="95%" stopColor="#0d9488" stopOpacity={0}/></linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                        <Tooltip />
                        <Area type="monotone" dataKey="bp" stroke="#0d9488" fill="url(#colorBp)" strokeWidth={3} />
                        <Area type="monotone" dataKey="hr" stroke="#6366f1" fill="transparent" strokeWidth={3} strokeDasharray="5 5" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Medical Timeline */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-6">Medical History Timeline</h3>
               <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <Activity size={16} />
                     </div>
                     <div className="w-[calc(100%-4rem)] md:w-[45%] bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-1">
                           <time className="text-[10px] font-bold text-teal-600 uppercase">Oct 12, 2023</time>
                           <span className="text-[10px] font-bold text-slate-400">Regular Checkup</span>
                        </div>
                        <div className="text-sm font-bold text-slate-800">Neurology Consultation</div>
                        <p className="text-xs text-slate-500 mt-2">Diagnosed with Migraine without aura. Prescribed Rizatriptan.</p>
                     </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <FileSearch size={16} />
                     </div>
                     <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-1">
                           <time className="text-[10px] font-bold text-slate-400 uppercase">Aug 05, 2023</time>
                           <span className="text-[10px] font-bold text-slate-400">Lab Test</span>
                        </div>
                        <div className="text-sm font-bold text-slate-800">Blood Analysis & EEG</div>
                        <p className="text-xs text-slate-500 mt-2">All results within normal range. No abnormal electrical activity detected.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Sidebar Area */}
         <div className="space-y-6">
            {/* Medications Card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
               <div className="p-6 border-b border-slate-100 bg-teal-50/30">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2"><Pill size={18} className="text-teal-600" /> Current Medications</h3>
               </div>
               <div className="p-4 space-y-3">
                  <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-4">
                     <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">P</div>
                     <div><p className="text-xs font-bold text-slate-800">Paracetamol 500mg</p><p className="text-[10px] text-slate-400">1x Daily • After meal</p></div>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-4">
                     <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center font-bold">R</div>
                     <div><p className="text-xs font-bold text-slate-800">Rizatriptan 10mg</p><p className="text-[10px] text-slate-400">As needed • For acute migraine</p></div>
                  </div>
               </div>
            </div>

            {/* Allergies Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-rose-600"><AlertCircle size={18} /> Known Allergies</h3>
               <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl border border-rose-100">Penicillin</span>
                  <span className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl border border-rose-100">Peanuts</span>
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-400 text-xs font-bold rounded-xl border border-slate-100">No seasonal allergies</span>
               </div>
            </div>

            {/* Recent Documents Quick Access */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
               <h3 className="font-bold text-slate-800 mb-4">Diagnostic Reports</h3>
               <div className="space-y-4">
                  <div className="flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-teal-50 transition-colors"><FileText size={16} className="text-slate-400 group-hover:text-teal-600" /></div>
                        <div><p className="text-xs font-bold text-slate-700">Lab_Report_Alya.pdf</p><p className="text-[10px] text-slate-400">2.4 MB • Oct 12</p></div>
                     </div>
                     <ChevronRight size={14} className="text-slate-300 group-hover:text-teal-600" />
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-teal-50 transition-colors"><FileText size={16} className="text-slate-400 group-hover:text-teal-600" /></div>
                        <div><p className="text-xs font-bold text-slate-700">MRI_Scan_Brain.png</p><p className="text-[10px] text-slate-400">14.2 MB • Aug 05</p></div>
                     </div>
                     <ChevronRight size={14} className="text-slate-300 group-hover:text-teal-600" />
                  </div>
               </div>
               <button className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-colors">View All Documents</button>
            </div>
         </div>
      </div>
    </div>
  );
};