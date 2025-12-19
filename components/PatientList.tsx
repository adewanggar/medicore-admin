import React, { useState } from 'react';
import { Patient, Status } from '../types';
import { Search, MoreHorizontal, Sparkles, X, Plus, Filter, User, Calendar, FileText, Save, Activity } from 'lucide-react';
import { generatePatientSummary } from '../services/geminiService';

// Mock Data
const mockPatients: Patient[] = [
  { id: '1', name: 'Budi Santoso', age: 45, gender: 'Male', lastVisit: '2023-10-24', diagnosis: 'Hypertension', status: Status.Active, avatar: '', notes: 'Patient reports occasional headaches. BP 140/90. Prescribed Amlodipine 5mg.' },
  { id: '2', name: 'Siti Aminah', age: 29, gender: 'Female', lastVisit: '2023-10-22', diagnosis: 'Influenza', status: Status.Completed, avatar: '', notes: 'Symptoms subsiding. Fever gone. Advised rest.' },
  { id: '3', name: 'Rahmat Hidayat', age: 52, gender: 'Male', lastVisit: '2023-10-20', diagnosis: 'Type 2 Diabetes', status: Status.Active, avatar: '', notes: 'Blood sugar levels fluctuating. Needs dietary consultation. Hba1c 7.8%.' },
  { id: '4', name: 'Dewi Lestari', age: 34, gender: 'Female', lastVisit: '2023-10-18', diagnosis: 'Migraine', status: Status.Pending, avatar: '', notes: 'Chronic migraine attacks triggered by stress.' },
  { id: '5', name: 'Agus Pratama', age: 22, gender: 'Male', lastVisit: '2023-10-15', diagnosis: 'Gastritis', status: Status.Active, avatar: '', notes: 'Complains of stomach pain after eating spicy food.' },
  { id: '6', name: 'Indah Permata', age: 28, gender: 'Female', lastVisit: '2023-10-10', diagnosis: 'Dermatitis', status: Status.Active, avatar: '', notes: 'Skin rash on arms. Prescribed topical cream.' },
];

export const PatientList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const filteredPatients = mockPatients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAiAnalysis = async (patient: Patient) => {
    setSelectedPatient(patient);
    setLoadingAi(true);
    setAiSummary('');
    const summary = await generatePatientSummary(patient);
    setAiSummary(summary);
    setLoadingAi(false);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Patients</h2>
          <p className="text-slate-500 text-sm">Manage patient records and view medical histories.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95"
        >
          <Plus size={18} />
          Add Patient
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
         {/* Search Toolbar */}
         <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
             {/* Search */}
             <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, diagnosis, or ID..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             {/* Filter Button */}
             <div className="flex gap-2 w-full sm:w-auto">
                 <button className="px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center gap-2 justify-center w-full sm:w-auto transition-colors">
                    <Filter size={16} /> Filters
                 </button>
             </div>
         </div>

         {/* Modern Table */}
         <div className="overflow-x-auto">
            <table className="w-full">
               <thead className="bg-slate-50/50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Patient Name</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Diagnosis</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Last Visit</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient) => (
                      <tr key={patient.id} className="group hover:bg-slate-50/80 transition-all duration-200">
                        {/* Name Column */}
                        <td className="px-6 py-4">
                           <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm border border-teal-100">
                                {patient.name.charAt(0)}
                              </div>
                              <div>
                                 <div className="text-sm font-bold text-slate-800">{patient.name}</div>
                                 <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                    <User size={10} /> {patient.age} yrs • {patient.gender}
                                 </div>
                              </div>
                           </div>
                        </td>
                        
                        {/* Diagnosis */}
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                              <span className="text-sm font-medium text-slate-700">{patient.diagnosis}</span>
                           </div>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                           <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${
                              patient.status === Status.Active ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                              patient.status === Status.Pending ? 'bg-amber-50 text-amber-600 border-amber-100' :
                              'bg-slate-100 text-slate-600 border-slate-200'
                           }`}>
                              {patient.status}
                           </span>
                        </td>

                        {/* Last Visit */}
                        <td className="px-6 py-4">
                           <div className="text-sm text-slate-500 flex items-center gap-2">
                              <Calendar size={14} className="text-slate-400" />
                              {patient.lastVisit}
                           </div>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => handleAiAnalysis(patient)}
                                className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors text-xs font-bold"
                              >
                                 <Sparkles size={14} className="group-hover/btn:animate-pulse" /> 
                                 Analyze
                              </button>
                              <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                                 <MoreHorizontal size={18} />
                              </button>
                           </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                         No patients found matching your search.
                      </td>
                    </tr>
                  )}
               </tbody>
            </table>
         </div>
         
         {/* Footer / Pagination */}
         <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
            <span className="text-xs text-slate-500">Showing {filteredPatients.length} entries</span>
            <div className="flex gap-2">
               <button className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>Previous</button>
               <button className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
            </div>
         </div>
      </div>

      {/* Add Patient Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-white/20 flex flex-col max-h-[90vh]">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-3xl">
                <h3 className="text-lg font-bold text-slate-800">Add New Patient</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 rounded-full text-slate-400 hover:bg-white hover:text-slate-600 transition-colors">
                   <X size={20} />
                </button>
             </div>
             
             <div className="p-6 overflow-y-auto">
                <form className="space-y-6">
                   {/* Personal Info */}
                   <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-slate-700">Full Name</label>
                            <input type="text" placeholder="e.g. John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Date of Birth</label>
                            <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Gender</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all">
                               <option>Select Gender</option>
                               <option>Male</option>
                               <option>Female</option>
                            </select>
                         </div>
                      </div>
                   </div>
                   
                   {/* Medical Info */}
                   <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Medical Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Initial Diagnosis</label>
                            <div className="relative">
                               <Activity className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                               <input type="text" placeholder="e.g. Hypertension" className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Status</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all">
                               <option>Active</option>
                               <option>Pending</option>
                               <option>Completed</option>
                            </select>
                         </div>
                         <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-slate-700">Initial Notes</label>
                            <textarea rows={3} placeholder="Add patient history or symptoms..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"></textarea>
                         </div>
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
                   <Save size={16} /> Save Patient
                </button>
             </div>
          </div>
        </div>
      )}

      {/* AI Modal */}
       {selectedPatient && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
              <div>
                 <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg">
                       <Sparkles size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">AI Health Insights</h3>
                 </div>
                 <p className="text-xs text-slate-500 ml-1">Generating summary for <span className="font-semibold text-slate-700">{selectedPatient.name}</span></p>
              </div>
              <button 
                 onClick={() => setSelectedPatient(null)} 
                 className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-8 overflow-y-auto">
               {loadingAi ? (
                 <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="relative w-12 h-12 mb-4">
                       <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                       <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <h4 className="text-slate-800 font-medium mb-1">Analyzing Medical Records</h4>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto">Please wait while Gemini analyzes the patient's history and diagnosis...</p>
                 </div>
               ) : (
                 <div className="space-y-4">
                    <div className="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100">
                       <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <FileText size={14} /> Summary
                       </h4>
                       <p className="text-slate-700 text-sm leading-relaxed">{aiSummary}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-xs text-slate-500 block mb-1">Latest Diagnosis</span>
                          <span className="text-sm font-semibold text-slate-800">{selectedPatient.diagnosis}</span>
                       </div>
                       <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-xs text-slate-500 block mb-1">Last Visit</span>
                          <span className="text-sm font-semibold text-slate-800">{selectedPatient.lastVisit}</span>
                       </div>
                    </div>
                 </div>
               )}
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
                <button 
                  onClick={() => setSelectedPatient(null)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 font-medium text-sm transition-colors"
                >
                    Close
                </button>
                {!loadingAi && (
                   <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium text-sm transition-colors shadow-lg shadow-indigo-600/20">
                      Export Report
                   </button>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};