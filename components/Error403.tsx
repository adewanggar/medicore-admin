import React from 'react';
import { ShieldAlert, ArrowLeft, Lock } from 'lucide-react';

export const Error403: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center text-center px-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-red-500/10 blur-[60px] rounded-full scale-150"></div>
        <div className="relative w-32 h-32 bg-white rounded-3xl shadow-xl border border-red-50 flex items-center justify-center text-red-500">
           <ShieldAlert size={64} strokeWidth={1.5} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-red-100 rounded-full animate-ping opacity-20"></div>
      </div>
      
      <h1 className="text-8xl font-black text-slate-200 tracking-tighter mb-4">403</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Access Forbidden</h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
        You don't have permission to access this resource. This area is restricted to high-level administrators only.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onBack}
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg active:scale-95"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
        <button 
          className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-2xl font-bold transition-all hover:bg-slate-50 active:scale-95"
        >
          <Lock size={18} />
          Request Access
        </button>
      </div>

      <p className="mt-12 text-xs text-slate-400 font-medium flex items-center gap-2">
         Logged in as <span className="text-slate-800 font-bold">Dr. Sarah Indah</span> (ID: 8842-X)
      </p>
    </div>
  );
};