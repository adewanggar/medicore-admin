import React, { useState } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, PhoneOff, MessageSquare, User, Info, MoreVertical, Send, ShieldCheck, PlusCircle } from 'lucide-react';

export const Telemedicine: React.FC = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [message, setMessage] = useState('');

  return (
    <div className="h-full flex flex-col gap-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[600px]">
        
        {/* Left: Video Call Area */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="relative flex-1 bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-800">
            {/* Main Video (Patient) */}
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
              alt="Patient" 
              className="w-full h-full object-cover"
            />
            
            {/* Self View (Doctor) */}
            <div className="absolute top-6 right-6 w-48 h-32 bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl">
               <img 
                src="https://picsum.photos/400/300?random=8" 
                alt="Doctor Self View" 
                className="w-full h-full object-cover"
               />
               <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase">You (Dr. Sarah)</div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-4 bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
               <button onClick={() => setIsMicOn(!isMicOn)} className={`p-4 rounded-2xl transition-all ${isMicOn ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-red-500 text-white shadow-lg shadow-red-500/20'}`}>
                  {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
               </button>
               <button onClick={() => setIsVideoOn(!isVideoOn)} className={`p-4 rounded-2xl transition-all ${isVideoOn ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-red-500 text-white shadow-lg shadow-red-500/20'}`}>
                  {isVideoOn ? <VideoIcon size={20} /> : <VideoOff size={20} />}
               </button>
               <div className="w-px h-8 bg-white/10 mx-2"></div>
               <button className="bg-red-500 hover:bg-red-600 p-4 rounded-2xl text-white shadow-lg shadow-red-500/40 transition-all active:scale-95">
                  <PhoneOff size={24} />
               </button>
            </div>

            {/* Status Overlays */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
               <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Live: 12:45</span>
               </div>
               <div className="bg-black/20 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <ShieldCheck size={14} className="text-teal-400" />
                  <span className="text-xs font-medium text-white">End-to-End Encrypted</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Interaction Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           {/* Patient Info Card */}
           <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold">AN</div>
                    <div>
                       <h3 className="font-bold text-slate-800">Alya Nasution</h3>
                       <p className="text-xs text-slate-500">24 yrs • Female • O+</p>
                    </div>
                 </div>
                 <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl"><Info size={18} /></button>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-50">
                 <div className="flex justify-between text-xs">
                    <span className="text-slate-400 font-bold uppercase">Appointment</span>
                    <span className="text-slate-800 font-bold">General Checkup</span>
                 </div>
                 <div className="flex justify-between text-xs">
                    <span className="text-slate-400 font-bold uppercase">Condition</span>
                    <span className="text-amber-600 font-bold">Severe Migraine</span>
                 </div>
              </div>
           </div>

           {/* Quick Notes / Prescriptions */}
           <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <MessageSquare size={18} className="text-teal-600" /> Consultation Chat
                 </h3>
                 <button className="p-1.5 rounded-lg text-teal-600 bg-teal-50 hover:bg-teal-100 transition-colors"><PlusCircle size={18} /></button>
              </div>
              
              <div className="flex-1 p-5 overflow-y-auto space-y-4">
                 <div className="bg-slate-50 p-3 rounded-2xl text-xs text-slate-600 max-w-[85%]">
                    <p className="font-bold text-[10px] text-teal-600 uppercase mb-1">System</p>
                    Alya Nasution has joined the call.
                 </div>
                 <div className="bg-teal-600 p-3 rounded-2xl rounded-tr-none text-xs text-white ml-auto max-w-[85%] shadow-md">
                    Hello Alya, can you hear me clearly?
                 </div>
                 <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-xs text-slate-700 max-w-[85%]">
                    Yes doctor, I can hear you.
                 </div>
                 <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-xs text-slate-700 max-w-[85%]">
                    My head has been hurting since last night...
                 </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100">
                 <div className="relative">
                    <input 
                       type="text" 
                       placeholder="Type your message..."
                       className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all active:scale-90">
                       <Send size={16} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};