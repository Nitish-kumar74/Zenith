'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    router.push('/login');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/logo2.jpg')" }}>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Email Subscription Component */}
      <div className="relative z-10 text-center w-full max-w-md px-4 backdrop-blur-sm bg-white/5 rounded-xl py-10 border border-white/10">
        <h2 className="text-3xl font-medium text-white mb-8">
          Modern <span className="text-amber-300">𝓩𝓔𝓝𝓘𝓣𝓗</span> Kitchen & Bar
        </h2>

        <form className="space-y-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border-b-2 border-white/30 focus:border-amber-400 text-white 
                      placeholder-white/50 focus:outline-none focus:ring-0 transition-all duration-300 rounded-t"
              placeholder="Your email address"
              required
            />
            {error && (
              <p className="text-red-400 text-sm mt-2 text-left">{error}</p>
            )}
          </div>

          <button
            type="submit"
            onClick={handleLoginClick}
            className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 
                      text-white font-medium rounded-lg shadow-lg hover:shadow-amber-500/30 transition-all duration-300
                      flex items-center justify-center space-x-2"
          >
            <span>Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>

        <div className="mt-8 text-sm text-white/70">
          <p>Get exclusive recipes, chef's specials, and event invites</p>
          <p className="mt-2 text-xs text-white/50">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}
