'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    const res = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">AI SaaS</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{session?.user?.email}</span>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </div>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">👋 Welcome{/*, {session?.user?.name}*/}</h1>
          <p className="text-gray-500 mt-2">Your AI-powered content dashboard</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Summaries Today</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Words Processed</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Plan</p>
            <p className="text-3xl font-bold text-blue-600">Free</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">🤖 AI Content Summarizer</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste any text, article, or document to summarize..."
            rows={6}
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-800 resize-none"
          />
          <button
            onClick={handleSummarize}
            disabled={loading || !text}
            className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold disabled:opacity-50 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            {loading ? '⚡ Summarizing...' : '✨ Summarize with AI'}
          </button>
          
          {summary && (
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-800 mb-3">📋 Summary</h3>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}