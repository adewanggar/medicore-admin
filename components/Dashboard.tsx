import React, { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  Users, Calendar, Activity, DollarSign, FileText, Download, Trash2, 
  ChevronRight, Plus, Sparkles, TrendingUp, Clock, Star, Phone, MessageCircle, MoreHorizontal
} from 'lucide-react';
import { StatCard } from './StatCard';

// Data for Activity Area Chart
const activityData = [
  { name: 'Mon', visits: 24, revenue: 1200 },
  { name: 'Tue', visits: 45, revenue: 2100 },
  { name: 'Wed', visits: 32, revenue: 1600 },
  { name: 'Thu', visits: 58, revenue: 2800 },
  { name: 'Fri', visits: 85, revenue: 3500 },
  { name: 'Sat', visits: 60, revenue: 2400 },
  { name: 'Sun', visits: 30, revenue: 1100 },
];

// Data for Gender Bar Chart
const genderData = [
  { name: 'Mon', male: 20, female: 35 },
  { name: 'Tue', male: 40, female: 55 },
  { name: 'Wed', male: 30, female: 45 },
  { name: 'Thu', male: 50, female: 60 },
  { name: 'Fri', male: 65, female: 80 },
  { name: 'Sat', male: 45, female: 50 },
  { name: 'Sun', male: 25, female: 30 },
];

const appointments = [
  { id: '101', name: 'Budi Santoso', type: 'General Checkup', time: '09:00 AM', status: 'In Progress', avatar: 'https://picsum.photos/100/100?random=1' },
  { id: '102', name: 'Siti Aminah', type: 'Dental Care', time: '10:30 AM', status: 'Scheduled', avatar: 'https://picsum.photos/100/100?random=2' },
  { id: '103', name: 'Rahmat Hidayat', type: 'Consultation', time: '11:00 AM', status: 'Waiting', avatar: 'https://picsum.photos/100/100?random=3' },
  { id: '104', name: 'Dewi Lestari', type: 'Follow Up', time: '01:00 PM', status: 'Scheduled', avatar: 'https://picsum.photos/100/100?random=4' },
];

const documents = [
  { name: 'Lab_Report_Budi.pdf', size: '2.5mb', date: 'Just now' },
  { name: 'XRay_Siti_A.png', size: '12mb', date: '2 hrs ago' },
  { name: 'Insurance_Claim_09.pdf', size: '1.2mb', date: '5 hrs ago' },
  { name: 'Prescription_Rahmat.doc', size: '500kb', date: 'Yesterday' },
];

const activeDoctors = [
  { id: 1, name: "Dr. Sarah Indah", spec: "General Practitioner", status: "Available", image: "https://picsum.photos/100/100?random=8" },
  { id: 2, name: "Dr. Andi Wijaya", spec: "Dentist", status: "Busy", image: "https://picsum.photos/100/100?random=9" },
  { id: 3, name: "Dr. Budi Gunawan", spec: "Neurologist", status: "Available", image: "https://picsum.photos/100/100?random=10" },
];

const patientReviews = [
  { id: 1, name: "Ratna Sari", rating: 5, comment: "Pelayanan sangat ramah dan cepat. Terima kasih dokter!", date: "2h ago", avatar: "https://picsum.photos/100/100?random=11" },
  { id: 2, name: "Joko Anwar", rating: 4, comment: "Fasilitas bersih, tapi antrian apotek agak lama.", date: "5h ago", avatar: "https://picsum.photos/100/100?random=12" },
];

const HEALTH_TIPS = [
  "Ensure all patient records are updated immediately after consultation.",
  "Regular hand washing reduces the spread of clinic-acquired infections.",
  "Double-check patient allergies before prescribing medication.",
  "Maintain a calm demeanor to help reduce patient anxiety.",
  "Verify patient identity with two distinct identifiers.",
  "Keep the waiting area ventilated and sanitized.",
  "Encourage patients to complete their full course of antibiotics.",
  "Stay hydrated: Water is essential for kidney function.",
  "Encourage patients to schedule annual check-ups.",
  "Mental health is just as important as physical health."
];

export const Dashboard: React.FC = () => {
  const [dailyTip, setDailyTip] = useState<string>("");

  useEffect(() => {
    const randomTip = HEALTH_TIPS[Math.floor(Math.random() * HEALTH_TIPS.length)];
    setDailyTip(randomTip);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in pb-8">
      
      {/* 1. Modern Welcome Section with Abstract Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-8 text-white shadow-xl shadow-teal-900/10">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-2">Good Morning, Dr. Sarah 👋</h2>
            <p className="text-teal-50/90 text-sm mb-6 leading-relaxed">
              You have <span className="font-bold text-white">4 appointments</span> remaining today. 
              The clinic traffic is up by 12% compared to yesterday.
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-sm font-medium transition-all border border-white/10">
                <Plus size={16} /> New Patient
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-sm font-medium transition-all border border-white/10">
                <Calendar size={16} /> Schedule Visit
              </button>
            </div>
          </div>
          
          {/* Tip of the day card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 max-w-sm w-full">
            <div className="flex items-center gap-2 mb-2 text-teal-100">
               <Sparkles size={14} className="text-yellow-300" />
               <span className="text-xs font-bold uppercase tracking-wider">Daily Insight</span>
            </div>
            <p className="text-sm italic text-white leading-snug">"{dailyTip}"</p>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* 2. Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Patients" value="1,284" trend="+12%" isPositive={true} icon={<Users size={20} />} />
        <StatCard title="Revenue" value="$12,450" trend="+8.2%" isPositive={true} icon={<DollarSign size={20} />} />
        <StatCard title="Appointments" value="42" trend="-2.4%" isPositive={false} icon={<Calendar size={20} />} />
        <StatCard title="Avg. Wait Time" value="14 min" trend="-1 min" isPositive={true} icon={<Clock size={20} />} />
      </div>

      {/* 3. Charts Section - Split View for Modern Look */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Area Chart: Activity Trend */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Clinic Activity</h3>
              <p className="text-xs text-slate-500">Patient visits and revenue overview</p>
            </div>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-teal-600 transition-colors">
                <TrendingUp size={18} />
              </button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4'}}
                />
                <Area type="monotone" dataKey="visits" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Bar Chart: Demographics */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800">Demographics</h3>
            <p className="text-xs text-slate-500">Weekly patient distribution</p>
          </div>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genderData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={10} />
                <RechartsTooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="male" name="Male" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="female" name="Female" fill="#0d9488" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-center gap-6">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span> Male
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-teal-600"></span> Female
              </div>
          </div>
        </div>
      </div>

      {/* 4. Staff & Satisfaction Section - NEW CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Doctors on Duty Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">Doctors on Duty</h3>
             <button className="text-slate-400 hover:text-teal-600 transition-colors"><MoreHorizontal size={18} /></button>
           </div>
           <div className="p-4 flex-1 space-y-4">
              {activeDoctors.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-2xl transition-colors group">
                   <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                        <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${doc.status === 'Available' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      </div>
                      <div>
                         <h4 className="text-sm font-bold text-slate-800">{doc.name}</h4>
                         <p className="text-xs text-slate-500">{doc.spec}</p>
                      </div>
                   </div>
                   <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white transition-all"><MessageCircle size={14} /></button>
                      <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white transition-all"><Phone size={14} /></button>
                   </div>
                </div>
              ))}
           </div>
           <div className="p-4 bg-slate-50/50 border-t border-slate-100">
              <button className="w-full py-2 text-xs font-bold text-teal-700 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">View All Staff</button>
           </div>
        </div>

        {/* Patient Satisfaction Card */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">Patient Satisfaction</h3>
             <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-amber-600">4.8/5.0</span>
             </div>
           </div>
           <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
              {/* Left: Summary */}
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                 <div className="relative w-24 h-24 flex items-center justify-center bg-teal-50 rounded-full mb-2">
                    <span className="text-3xl font-black text-teal-600">96%</span>
                 </div>
                 <h4 className="font-bold text-slate-800">Positive Feedback</h4>
                 <p className="text-xs text-slate-500 max-w-[180px]">Based on 450+ reviews collected this month.</p>
                 <div className="flex gap-1 mt-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                 </div>
              </div>

              {/* Right: Recent Reviews */}
              <div className="space-y-4">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Recent Reviews</h4>
                 {patientReviews.map((review) => (
                    <div key={review.id} className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                       <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                             <img src={review.avatar} alt={review.name} className="w-6 h-6 rounded-full" />
                             <span className="text-xs font-bold text-slate-700">{review.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-400">{review.date}</span>
                       </div>
                       <p className="text-xs text-slate-600 italic">"{review.comment}"</p>
                       <div className="flex gap-0.5 mt-2">
                          {[...Array(review.rating)].map((_, i) => <Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>

      {/* 5. Bottom Lists: Modern Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Appointment List */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">Today's Schedule</h3>
             <button className="text-teal-600 text-xs font-bold hover:underline flex items-center bg-teal-50 px-3 py-1.5 rounded-full transition-colors">
               View All <ChevronRight size={14} className="ml-1" />
             </button>
           </div>
           <div className="p-2">
             <table className="w-full">
               <tbody className="divide-y divide-slate-50">
                 {appointments.map((apt) => (
                   <tr key={apt.id} className="hover:bg-slate-50/80 transition-colors group rounded-xl">
                     <td className="px-6 py-4">
                       <div className="text-sm font-bold text-slate-800">{apt.name}</div>
                       <div className="text-xs text-slate-500">{apt.type}</div>
                     </td>
                     <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md w-fit">
                            <Clock size={12} /> {apt.time}
                        </div>
                     </td>
                     <td className="px-4 py-4 whitespace-nowrap text-right">
                       <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                         apt.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                         apt.status === 'Waiting' ? 'bg-orange-100 text-orange-600' :
                         'bg-emerald-100 text-emerald-600'
                       }`}>
                         {apt.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Recent Documents */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">Recent Documents</h3>
             <button className="text-slate-400 hover:text-teal-600 transition-colors">
               <Activity size={18} />
             </button>
           </div>
           <div className="p-4 flex-1 overflow-y-auto">
             <div className="space-y-2">
               {documents.map((doc, idx) => (
                 <div key={idx} className="flex items-center p-3 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-2xl transition-all group cursor-pointer">
                   <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                     <FileText size={20} />
                   </div>
                   <div className="flex-1 min-w-0">
                     <h4 className="text-sm font-bold text-slate-800 truncate">{doc.name}</h4>
                     <p className="text-xs text-slate-400 flex items-center gap-2">
                       {doc.size} <span className="w-1 h-1 rounded-full bg-slate-300"></span> {doc.date}
                     </p>
                   </div>
                   <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                     <button className="p-2 rounded-lg text-slate-400 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                       <Download size={16} />
                     </button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
              <button className="text-xs font-bold text-slate-500 uppercase tracking-wide hover:text-teal-600 transition-colors">View File Manager</button>
           </div>
        </div>
      </div>
    </div>
  );
};