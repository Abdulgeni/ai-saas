'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/dashboard' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
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
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Sign In
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}