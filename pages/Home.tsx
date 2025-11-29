import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileSpreadsheet, ShieldCheck, Download, Sparkles, LayoutGrid, BarChart3, DollarSign, PenTool } from 'lucide-react';
import { Button } from '../components/Button';
import { getSavingTips } from '../services/geminiService';

export const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const [tips, setTips] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetTips = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await getSavingTips(input);
    setTips(result);
    setLoading(false);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-brand-50 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Professional Excel Templates & Custom Dashboard Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Download premium, ready-to-use budget spreadsheets immediately, or hire us to design a custom Excel dashboard tailored to your specific financial needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/pricing">
                <Button size="lg" className="shadow-lg shadow-brand-500/30">View Templates</Button>
              </Link>
              <Link to="/features" className="text-sm font-semibold leading-6 text-slate-900 flex items-center">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Template Showcase */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-brand-600">Design Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We build beautiful, functional spreadsheets.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-5xl rounded-xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10">
            <div className="rounded-lg bg-white overflow-hidden aspect-[16/9] flex flex-col">
              {/* Fake Excel Toolbar */}
              <div className="bg-[#107c41] h-10 flex items-center px-4 space-x-4">
                <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-white text-sm font-medium">Personal_Budget_Dashboard_v2.xlsx</div>
              </div>
              <div className="bg-slate-100 h-8 border-b border-slate-300 flex items-center px-4 space-x-6 text-xs text-slate-600">
                <span>File</span><span>Home</span><span>Insert</span><span>Data</span><span>Review</span><span className="text-brand-600 font-bold">View</span>
              </div>
              
              {/* Fake Excel Grid */}
              <div className="flex-1 bg-slate-50 p-6 overflow-hidden relative">
                <div className="grid grid-cols-12 gap-4 h-full">
                  
                  {/* Sidebar stats */}
                  <div className="col-span-3 space-y-4">
                    <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 uppercase">Total Income</div>
                      <div className="text-xl font-bold text-green-600">$4,250.00</div>
                    </div>
                    <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                      <div className="text-xs text-slate-500 uppercase">Total Expenses</div>
                      <div className="text-xl font-bold text-red-600">$2,105.50</div>
                    </div>
                    <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                       <div className="text-xs text-slate-500 uppercase">Savings</div>
                       <div className="text-xl font-bold text-brand-600">$2,144.50</div>
                    </div>
                  </div>

                  {/* Main Chart Area */}
                  <div className="col-span-9 grid grid-rows-2 gap-4">
                     <div className="bg-white p-4 rounded border border-slate-200 shadow-sm relative">
                        <div className="flex justify-between mb-4">
                           <h4 className="font-bold text-slate-700">Monthly Cash Flow</h4>
                           <div className="flex space-x-2">
                              <div className="w-20 h-2 bg-slate-200 rounded"></div>
                              <div className="w-4 h-2 bg-slate-200 rounded"></div>
                           </div>
                        </div>
                        {/* CSS Chart Representation */}
                        <div className="flex items-end justify-between h-32 px-4 space-x-2">
                           {[40, 60, 45, 70, 50, 80, 65, 85, 60, 75, 90, 80].map((h, i) => (
                              <div key={i} className="w-full bg-brand-100 rounded-t-sm relative group">
                                 <div 
                                  style={{ height: `${h}%` }} 
                                  className="absolute bottom-0 w-full bg-brand-500 rounded-t-sm transition-all duration-500"
                                 ></div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                           <h4 className="font-bold text-slate-700 mb-2">Top Categories</h4>
                           <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm">
                                 <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>Housing</span>
                                 <span>35%</span>
                              </div>
                              <div className="w-full h-1 bg-slate-100 rounded"><div className="w-[35%] h-1 bg-blue-500 rounded"></div></div>

                              <div className="flex items-center justify-between text-sm">
                                 <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>Food</span>
                                 <span>20%</span>
                              </div>
                              <div className="w-full h-1 bg-slate-100 rounded"><div className="w-[20%] h-1 bg-purple-500 rounded"></div></div>
                           </div>
                        </div>
                        <div className="bg-white p-4 rounded border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
                           <LayoutGrid className="h-10 w-10 text-slate-300 mb-2" />
                           <p className="text-sm text-slate-500">Expense Breakdown Table</p>
                           <div className="mt-2 w-3/4 h-16 border border-slate-100 bg-slate-50 grid grid-cols-3 gap-1 p-1">
                              {[...Array(9)].map((_, i) => <div key={i} className="bg-white rounded-sm"></div>)}
                           </div>
                        </div>
                     </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Tool Section */}
      <div className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 mb-4 ring-1 ring-inset ring-brand-600/20">
                  <Sparkles className="h-4 w-4 mr-2" /> Free Value Add
               </div>
               <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Quick Budget Tip
               </h2>
               <p className="mt-6 text-lg leading-8 text-slate-600">
                  While you decide on your template, use our free tool to get immediate saving ideas. Enter a spending category below.
               </p>
               <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
                  <form onSubmit={handleGetTips} className="flex gap-4">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="e.g., Coffee, Groceries, Rent"
                      className="flex-1 rounded-lg border-slate-300 border px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    />
                    <Button type="submit" disabled={loading || !input}>
                      {loading ? '...' : 'Get Tip'}
                    </Button>
                  </form>
                  {tips.length > 0 && (
                     <div className="mt-6 space-y-3">
                        {tips.map((tip, index) => (
                           <div key={index} className="flex gap-3 text-slate-700 text-sm">
                              <span className="text-brand-600 font-bold">•</span>
                              {tip}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
               <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <FileSpreadsheet className="h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                    One-Time Purchase
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Pay once for the Excel file. No recurring subscriptions or hidden app fees.</p>
                  </dd>
               </div>
               <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <PenTool className="h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                    Custom Design Service
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">Need something unique? We offer a paid service to design custom dashboards tailored to your exact requirements.</p>
                  </dd>
               </div>
               <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                    <LayoutGrid className="h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                    Fully Editable
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">It's Excel! Tweak formulas, change colors, and add columns as your needs grow.</p>
                  </dd>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                 Start budgeting better today.
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                 Download our "Ultimate Budget Dashboard" template or request a quote for our custom spreadsheet design services.
              </p>
              <div className="flex justify-center gap-4">
                 <Link to="/pricing">
                    <Button size="lg" variant="primary">View Pricing</Button>
                 </Link>
                 <Link to="/contact">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">Contact Sales</Button>
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};