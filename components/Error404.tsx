import React from 'react';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export const Error404: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center text-center px-6 animate-in fade-in zoom-in duration-300">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-teal-500/10 blur-[60px] rounded-full scale-150"></div>
        <div className="relative w-32 h-32 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center text-teal-600 transform -rotate-6">
           <FileQuestion size={64} strokeWidth={1.5} />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-600/20 flex items-center justify-center text-white font-black text-xl border-4 border-white">
           ?
        </div>
      </div>
      
      <h1 className="text-8xl font-black text-slate-200 tracking-tighter mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Page Not Found</h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-600/20 active:scale-95 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>
      
      <div className="mt-12 flex gap-8">
         <div className="text-left">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Help Desk</p>
            <p className="text-sm font-medium text-slate-600">+62 21 555 0123</p>
         </div>
         <div className="w-px h-10 bg-slate-200"></div>
         <div className="text-left">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Support Email</p>
            <p className="text-sm font-medium text-slate-600">support@medicore.clinic</p>
         </div>
      </div>
    </div>
  );
};