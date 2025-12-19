import React, { useState } from 'react';
import { Save, User, Lock, Bell, Building, Camera, Globe, Moon } from 'lucide-react';

export const Settings: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // Mock state for toggles
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    monthlyReport: true
  });

  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 1500);
  };

  const Toggle = ({ label, description, checked, onChange }: { label: string, description?: string, checked: boolean, onChange: () => void }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        {description && <span className="text-xs text-slate-500">{description}</span>}
      </div>
      <button 
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${checked ? 'bg-teal-600' : 'bg-slate-200'}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
           <p className="text-slate-500 text-sm">Manage your account preferences and clinic configuration.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save size={18} />
          )}
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <User className="text-teal-600" size={20} />
                <h3 className="font-bold text-slate-800">Profile Information</h3>
             </div>
             
             <div className="p-6">
                <div className="flex items-center gap-6 mb-8">
                   <div className="relative group cursor-pointer">
                      <img 
                        src="https://picsum.photos/100/100?random=8" 
                        alt="Profile" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-slate-50"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Camera className="text-white" size={24} />
                      </div>
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-800 text-lg">Dr. Sarah Indah</h4>
                      <p className="text-slate-500 text-sm mb-2">General Practitioner</p>
                      <button className="text-teal-600 text-sm font-medium hover:underline">Change Avatar</button>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase">First Name</label>
                      <input type="text" defaultValue="Sarah" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Last Name</label>
                      <input type="text" defaultValue="Indah" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Email Address</label>
                      <input type="email" defaultValue="sarah.indah@medicore.clinic" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Bio</label>
                      <textarea rows={3} defaultValue="Dedicated general practitioner with over 10 years of experience in family medicine." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none" />
                   </div>
                </div>
             </div>
          </div>

          {/* Clinic Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <Building className="text-teal-600" size={20} />
                <h3 className="font-bold text-slate-800">Clinic Details</h3>
             </div>
             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Clinic Name</label>
                    <input type="text" defaultValue="MediCore Health Center" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Address</label>
                    <input type="text" defaultValue="Jl. Jendral Sudirman No. 45, Jakarta Selatan" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Contact Number</label>
                    <input type="text" defaultValue="+62 21 555 0123" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Website</label>
                    <input type="text" defaultValue="www.medicore.clinic" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                </div>
             </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <Bell className="text-teal-600" size={20} />
                <h3 className="font-bold text-slate-800">Notifications</h3>
             </div>
             <div className="p-6 divide-y divide-slate-100">
                <Toggle 
                  label="Email Notifications" 
                  description="Receive updates about appointments."
                  checked={notifications.email}
                  onChange={() => setNotifications({...notifications, email: !notifications.email})}
                />
                <Toggle 
                  label="Push Notifications" 
                  description="New patient alerts on mobile app."
                  checked={notifications.push}
                  onChange={() => setNotifications({...notifications, push: !notifications.push})}
                />
                <Toggle 
                  label="SMS Reminders" 
                  description="Send daily schedule to phone."
                  checked={notifications.sms}
                  onChange={() => setNotifications({...notifications, sms: !notifications.sms})}
                />
                 <Toggle 
                  label="Monthly Report" 
                  description="Automated monthly performance PDF."
                  checked={notifications.monthlyReport}
                  onChange={() => setNotifications({...notifications, monthlyReport: !notifications.monthlyReport})}
                />
             </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <Lock className="text-teal-600" size={20} />
                <h3 className="font-bold text-slate-800">Security</h3>
             </div>
             <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" />
                </div>
                <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-sm transition-colors mt-2">
                  Change Password
                </button>
             </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <Globe className="text-teal-600" size={20} />
                <h3 className="font-bold text-slate-800">System</h3>
             </div>
             <div className="p-6 space-y-4">
               <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Language</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all">
                    <option>English (US)</option>
                    <option>Bahasa Indonesia</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Timezone</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all">
                    <option>(GMT+07:00) Jakarta</option>
                    <option>(GMT+08:00) Makassar</option>
                    <option>(GMT+09:00) Jayapura</option>
                  </select>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};