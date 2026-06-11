'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.error || 'Signup failed');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🚀</div>
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Start your free trial today</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm">{error}</div>
        )}
        
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-800"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Free Account'}
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}