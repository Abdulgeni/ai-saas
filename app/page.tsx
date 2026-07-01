import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Background radial accent glow elements */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/10">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Synthetix
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-95 transition-all px-5 py-2.5 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content Section */}
      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-32 text-center z-10">
        
        {/* Metric Release Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            Powered by Gemini AI 2.5
          </span>
        </div>

        {/* Hero Copy */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Summarize Anything<br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            in Seconds
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          The complete AI-powered SaaS platform. Built on modern tech to help you distill text, coordinate research, and track insights seamlessly.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/signup" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-xl font-semibold text-base transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-white/5 active:translate-y-0"
          >
            Start Free Trial →
          </Link>
          <Link 
            href="/pricing" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Pricing
          </Link>
        </div>

        {/* Features Showcase Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1 */}
          <div className="group bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-900 hover:border-slate-800/85 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Lightning Fast</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Distill high-volume technical documentation into readable summaries in milliseconds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-900 hover:border-slate-800/85 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Enterprise Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full data isolation, database encryption, and secure authorization setups out of the box.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-slate-900 hover:border-slate-800/85 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Unified Billing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Invoiced subscription plans with granular usage metering and accurate metrics mapping.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}