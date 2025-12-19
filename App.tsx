import React, { useState, useEffect, useRef } from 'react';
import { LayoutDashboard, Users, Calendar, Settings as SettingsIcon, LogOut, Menu, Bell, Search, X, User, Mail, Check, Clock, FileText, Info, AlertCircle, ChevronDown, HelpCircle, ExternalLink, Package, CreditCard, Activity, FileWarning, ShieldAlert, Construction, BarChart3, UsersRound, Video, ClipboardList } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { PatientList } from './components/PatientList';
import { AppointmentList } from './components/AppointmentList';
import { Settings } from './components/Settings';
import { LoginPage } from './components/LoginPage';
import { Inventory } from './components/Inventory';
import { Finance } from './components/Finance';
import { Error404 } from './components/Error404';
import { Error403 } from './components/Error403';
import { Maintenance } from './components/Maintenance';
import { StaffDirectory } from './components/StaffDirectory';
import { Analytics } from './components/Analytics';
import { Telemedicine } from './components/Telemedicine';
import { MedicalRecord } from './components/MedicalRecord';

type View = 'dashboard' | 'patients' | 'appointments' | 'staff' | 'analytics' | 'inventory' | 'finance' | 'settings' | '404' | '403' | 'maintenance' | 'telemedicine' | 'medical-record';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsProfileMenuOpen(false);
    setCurrentView('dashboard');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'patients': return <PatientList />;
      case 'appointments': return <AppointmentList />;
      case 'staff': return <StaffDirectory />;
      case 'analytics': return <Analytics />;
      case 'inventory': return <Inventory />;
      case 'finance': return <Finance />;
      case 'settings': return <Settings />;
      case 'telemedicine': return <Telemedicine />;
      case 'medical-record': return <MedicalRecord />;
      default: return <Dashboard />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: React.ElementType; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        if (window.innerWidth < 768) setIsSidebarOpen(false);
      }}
      className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 group font-medium text-sm ${
        currentView === view
          ? 'bg-gradient-to-r from-teal-50 to-teal-50/50 text-teal-700 shadow-sm'
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <Icon
        size={18}
        strokeWidth={currentView === view ? 2.5 : 2}
        className={`transition-colors duration-300 ${
          currentView === view ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-600'
        }`}
      />
      <span>{label}</span>
      {currentView === view && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-teal-600 rounded-l-full"></div>
      )}
    </button>
  );

  if (!isAuthenticated) return <LoginPage onLogin={handleLogin} />;

  // Full Page Views
  if (currentView === '404') return <Error404 onBack={() => setCurrentView('dashboard')} />;
  if (currentView === '403') return <Error403 onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'maintenance') return <Maintenance onBack={() => setCurrentView('dashboard')} />;

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-inter text-slate-900">
      <aside className={`${isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-0 md:translate-x-0'} fixed md:relative h-full bg-white border-r border-slate-100 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col z-40 shadow-2xl md:shadow-none overflow-hidden`}>
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3 px-1">
            <div className="relative w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">M</div>
            <div className="overflow-hidden">
               <h1 className="text-base font-bold tracking-tight text-slate-800 leading-none">MediCore</h1>
               <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">Admin Panel</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50"><X size={18} /></button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-200">
          <div className="px-3">
            <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
            <div className="space-y-0.5">
               <NavItem view="dashboard" icon={LayoutDashboard} label="Dashboard" />
               <NavItem view="patients" icon={Users} label="Patients" />
               <NavItem view="appointments" icon={Calendar} label="Appointments" />
               <NavItem view="telemedicine" icon={Video} label="Telemedicine" />
               <NavItem view="medical-record" icon={ClipboardList} label="Medical Records" />
               <NavItem view="staff" icon={UsersRound} label="Staff Directory" />
               <NavItem view="analytics" icon={BarChart3} label="Analytics" />
            </div>
          </div>

          <div className="px-3">
             <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Operations</p>
             <div className="space-y-0.5">
               <NavItem view="inventory" icon={Package} label="Inventory" />
               <NavItem view="finance" icon={CreditCard} label="Finance" />
             </div>
          </div>

          <div className="px-3">
             <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Demo Templates</p>
             <div className="space-y-0.5">
               <NavItem view="404" icon={FileWarning} label="Error 404" />
               <NavItem view="403" icon={ShieldAlert} label="Error 403" />
               <NavItem view="maintenance" icon={Construction} label="Maintenance" />
             </div>
          </div>

          <div className="px-3">
             <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">System</p>
             <div className="space-y-0.5">
               <NavItem view="settings" icon={SettingsIcon} label="Settings" />
             </div>
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
        <header className="h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-30">
          <div className="h-full px-4 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all"><Menu size={22} /></button>
              <h2 className="text-lg font-bold text-slate-800 capitalize tracking-tight leading-tight">
                {currentView.replace('-', ' ')}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative" ref={profileRef}>
                <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center gap-3 pl-1 pr-2 py-1.5 rounded-full border border-transparent transition-all group hover:bg-slate-50">
                  <img src="https://picsum.photos/100/100?random=8" alt="Profile" className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover" />
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-bold text-slate-800 leading-none">Dr. Sarah</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Admin</p>
                  </div>
                  <ChevronDown size={14} className="text-slate-400" />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 z-40 py-2 animate-in fade-in zoom-in-95 duration-150 origin-top-right">
                    <div className="px-2">
                      <button onClick={handleLogout} className="w-full text-left px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl flex items-center gap-3"><LogOut size={18} /> Logout</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </main>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/20 z-10 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
}

export default App;