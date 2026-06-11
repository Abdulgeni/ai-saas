import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <nav className="flex justify-between items-center px-8 py-6">
        <h2 className="text-2xl font-bold text-white">AI SaaS</h2>
        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-2 text-white border border-white/30 rounded-full hover:bg-white/10 transition">Login</Link>
          <Link href="/signup" className="px-6 py-2 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-200 transition">Sign Up</Link>
        </div>
      </nav>
      
      <div className="max-w-6xl mx-auto px-4 py-32 text-center">
        <div className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-8">
          🚀 Powered by Gemini AI
        </div>
        <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
          Summarize Anything<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">in Seconds</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          The complete AI-powered SaaS platform. Built with Next.js, Stripe, and Google Gemini. Ready to deploy and scale.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all">
            Start Free Trial →
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition">
            View Pricing
          </Link>
        </div>
        
        <div className="mt-24 grid grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Summarize any text in milliseconds with Gemini's advanced AI models.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-2">Secure Auth</h3>
            <p className="text-gray-400">Enterprise-grade authentication with NextAuth and PostgreSQL.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-3xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-white mb-2">Built-in Billing</h3>
            <p className="text-gray-400">Stripe integration for subscriptions. Start free, upgrade when ready.</p>
          </div>
        </div>
      </div>
    </div>
  );
}