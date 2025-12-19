import React from 'react';
import { Construction, RefreshCw, Clock } from 'lucide-react';

export const Maintenance: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center text-center px-6 animate-in fade-in duration-500">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-amber-500/10 blur-[60px] rounded-full scale-150"></div>
        <div className="relative w-40 h-40 flex items-center justify-center">
           <div className="absolute inset-0 border-[6px] border-amber-100 border-t-amber-500 rounded-full animate-spin duration-[3000ms]"></div>
           <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-amber-50 flex items-center justify-center text-amber-500">
              <Construction size={48} />
           </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-black text-slate-800 mb-3">System Maintenance</h2>
      <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
        We're currently performing scheduled maintenance to improve our medical services. We'll be back online shortly.
      </p>
      
      {/* Progress Box */}
      <div className="w-full max-w-xs bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-10">
         <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Update Progress</span>
            <span className="text-xs font-black text-amber-600">75%</span>
         </div>
         <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-amber-500 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
         </div>
         <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 py-2 rounded-xl">
            <Clock size={12} />
            Estimated time: 15 minutes
         </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg active:scale-95"
        >
          <RefreshCw size={18} />
          Check Status
        </button>
        <button 
          onClick={onBack}
          className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-2xl font-bold transition-all hover:bg-slate-50 active:scale-95"
        >
          Return to Dashboard
        </button>
      </div>

      <div className="mt-16 flex items-center gap-2 text-slate-400">
         <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
         <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Service Status: Deploying Updates</span>
      </div>
    </div>
  );
};