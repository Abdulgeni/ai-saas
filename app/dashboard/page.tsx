"use client";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [usage, setUsage] = useState(0);
  const [copied, setCopied] = useState(false);

  const usageLimit = 100;
  const usagePercentage = Math.min((usage / usageLimit) * 100, 100);

  useEffect(() => {
    fetch("/api/usage")
      .then((r) => r.json())
      .then((d) => setUsage(d.count || 0))
      .catch(() => setUsage(0));
  }, []);

  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      setSummary(data.summary || "");
      setUsage(data.usage || 0);
    } catch (err) {
      // Error handling can be integrated here
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!summary) return;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Navigation Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur-md px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/10">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white tracking-tight">Synthetix</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs text-slate-400 font-medium">
              {session?.user?.email}
            </span>
            <button 
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-xs text-slate-400 hover:text-red-400 px-3 py-1.5 border border-slate-900 hover:border-red-950 bg-slate-900/50 hover:bg-red-950/20 rounded-lg transition"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 flex flex-col gap-8">
        
        {/* Header Introduction */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Workspace</h1>
          <p className="text-sm text-slate-400 mt-1">Configure parameters and request summarization tasks</p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Usage Tracker */}
          <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-900 flex flex-col justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Monthly Usage</p>
              <p className="text-2xl font-bold text-white mt-1">
                {usage} <span className="text-sm font-normal text-slate-500">/ {usageLimit} operations</span>
              </p>
            </div>
            <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-900">
              <div 
                className="bg-indigo-500 h-full transition-all duration-500 rounded-full" 
                style={{ width: `${usagePercentage}%` }}
              />
            </div>
          </div>

          {/* Card 2: Current Plan */}
          <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-900 flex justify-between items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Current Plan</p>
              <p className="text-2xl font-bold text-white mt-1">Sandbox Free</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Active
            </span>
          </div>

          {/* Card 3: Platform Node Status */}
          <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-900 flex justify-between items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Node Status</p>
              <p className="text-2xl font-bold text-white mt-1">Operational</p>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </div>
          </div>

        </div>

        {/* Text Summarizer Workspace Area */}
        <div className="bg-slate-900/40 rounded-2xl border border-slate-900 p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">AI Content Summarizer</h2>
          </div>

          <textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste any article copy, product documentation, or transcript text to summarize..."
            rows={6}
            className="w-full p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition text-sm resize-none leading-relaxed" 
          />

          <div className="flex justify-end">
            <button 
              onClick={handleSummarize} 
              disabled={loading || !text.trim()}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.452L21 11.25 12.75 3 9.813 15.904z" />
                  </svg>
                  <span>Summarize with AI</span>
                </>
              )}
            </button>
          </div>

          {/* Generated Result Output Block */}
          {summary && (
            <div className="mt-4 bg-slate-950/60 rounded-xl border border-slate-800 p-5 flex flex-col gap-4 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Generated Summary</h3>
                <button 
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium hover:text-white hover:bg-slate-850 transition flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376A8.965 8.965 0 0012 12.75c-.197 0-.39.024-.577.07m.577 4.5V3.375c0-.621-.504-1.125-1.125-1.125h-1.5a1.125 1.125 0 00-1.125 1.125V18a1.125 1.125 0 001.125 1.125h1.5a1.125 1.125 0 001.125-1.125z" />
                      </svg>
                      <span className="text-slate-400">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}