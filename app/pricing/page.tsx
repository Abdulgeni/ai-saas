"use client";
import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.u
      }
    } catch (err) {
      // Handle network or redirect errors gracefully here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 py-24 px-6 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden">
      
      {/* Background radial accent glow elements */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Header Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-4">
            <span className="text-xs font-semibold text-indigo-400">💰 Plan Selection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Start for free and scale seamlessly when your operations require high-volume processing capabilities.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          
          {/* Card 1: Free Tier */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-900 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
            <div>
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-2">Sandbox</h3>
              <p className="text-5xl font-extrabold text-white mb-6">$0</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4.5 h-4.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>10 summaries / month</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4.5 h-4.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Standard response window</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4.5 h-4.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Web workspace access</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/signup"
              className="block text-center py-3.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl font-medium text-sm transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Card 2: Pro Tier */}
          <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
            
            {/* Visual Priority Tag */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-indigo-400">
              Most Popular
            </div>

            <div>
              <h3 className="text-lg font-bold text-indigo-400 uppercase tracking-wider mb-2">Developer Pro</h3>
              <p className="text-5xl font-extrabold text-white mb-6">
                $29<span className="text-base font-normal text-slate-500"> / month</span>
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-200">
                  <svg className="w-4.5 h-4.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-medium">Unlimited summarization queries</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4.5 h-4.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Priority API access window</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4.5 h-4.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Advanced analytical metrics dashboard</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4.5 h-4.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Premium ticket support line</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={handleCheckout} 
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Redirecting to Checkout...</span>
                </>
              ) : (
                <span>Subscribe Now</span>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}