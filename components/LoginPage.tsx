import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      if (email && password) {
        setLoading(false);
        onLogin();
      } else {
        setLoading(false);
        setError('Please enter both email and password.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-inter">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16 animate-in fade-in slide-in-from-left-4 duration-500">
        <div className="w-full max-w-md space-y-8">
          
          {/* Logo Mobile */}
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="relative w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-600/20">
               M
            </div>
            <span className="text-lg font-bold text-slate-800 tracking-tight">MediCore</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
            <p className="text-slate-500">Please enter your details to access the admin panel.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="doctor@medicore.clinic"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 placeholder:text-slate-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="password">Password</label>
                  <a href="#" className="text-xs font-semibold text-teal-600 hover:text-teal-700">Forgot password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-600 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 placeholder:text-slate-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-xs font-medium rounded-lg border border-red-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-teal-600/25 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
          
          <div className="pt-4 text-center">
             <p className="text-sm text-slate-500">
               Don't have an account? <a href="#" className="font-bold text-teal-600 hover:underline">Contact Admin</a>
             </p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-900 to-emerald-900 relative overflow-hidden items-center justify-center p-12">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Pattern Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 max-w-lg text-white space-y-8">
           {/* Branding */}
           <div className="flex items-center gap-3 mb-8">
             <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
               <div className="bg-white w-6 h-6 rounded-lg flex items-center justify-center text-teal-900 font-bold text-xs">M</div>
             </div>
             <div>
               <h2 className="text-2xl font-bold tracking-tight">MediCore</h2>
               <p className="text-teal-200/80 text-xs font-medium uppercase tracking-widest">Admin Dashboard</p>
             </div>
           </div>

           <div className="space-y-6">
             <h3 className="text-4xl font-bold leading-tight">
               Streamline your clinic operations with AI-powered insights.
             </h3>
             <p className="text-lg text-teal-100/80 leading-relaxed">
               Manage patients, appointments, and staff efficiently. Let Gemini AI handle the summarization while you focus on care.
             </p>
           </div>

           {/* Feature List */}
           <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                 <div className="p-2 bg-teal-500/20 rounded-lg text-teal-300"><CheckCircle2 size={20} /></div>
                 <span className="font-medium text-sm">Real-time Updates</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                 <div className="p-2 bg-teal-500/20 rounded-lg text-teal-300"><CheckCircle2 size={20} /></div>
                 <span className="font-medium text-sm">AI Summaries</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
