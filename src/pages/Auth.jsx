import React, { useState } from 'react'

export default function Auth({ onNavigate, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode)
  
  return (
    <main className="flex-grow flex items-center justify-center bg-surface-container-low py-xxxxl px-lg animate-fade-in relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary blur-[160px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary blur-[160px]"></div>
      </div>

      <div className="w-full max-w-xl bg-surface-container-lowest rounded-[48px] border border-outline-variant shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Branding/Visual */}
        <div className="hidden md:flex md:w-2/5 bg-primary p-xl flex-col justify-between text-white relative">
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)] animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <div onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-xl cursor-pointer">
              <span className="material-symbols-outlined text-[32px]">explore</span>
              <span className="font-display text-h2 tracking-tight">Voyage</span>
            </div>
            <h2 className="font-display text-display-lg leading-tight mb-md">Unlock the World of Resonant Travel.</h2>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Curated for</p>
            <p className="font-display text-h3">Modern Explorers</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-grow p-xl md:p-xxl">
          <div className="flex gap-lg border-b border-outline-variant mb-xl">
            <button 
              onClick={() => setMode('login')}
              className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${mode === 'login' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Sign In
              {mode === 'login' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></div>}
            </button>
            <button 
              onClick={() => setMode('join')}
              className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${mode === 'join' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Join Now
              {mode === 'join' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></div>}
            </button>
          </div>

          <div className="space-y-xl animate-fade-in" key={mode}>
            <div>
              <h1 className="font-display text-h1 text-on-surface mb-xs">
                {mode === 'login' ? 'Welcome back' : 'Start your journey'}
              </h1>
              <p className="text-on-surface-variant text-body-md">
                {mode === 'login' ? 'Enter your credentials to continue exploring.' : 'Create an account to save your favorite vibes and trips.'}
              </p>
            </div>

            <form className="space-y-lg" onSubmit={(e) => e.preventDefault()}>
              {mode === 'join' && (
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="explorer@voyage.com" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </div>

              {mode === 'login' && (
                <div className="flex justify-end">
                  <button className="text-[10px] font-bold text-primary uppercase hover:underline">Forgot Password?</button>
                </div>
              )}

              <button 
                onClick={() => onNavigate('home')}
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-primary/90 transition-all active:scale-95"
              >
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-surface-container-lowest px-4 text-on-surface-variant font-bold tracking-widest">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-lg">
              <button className="flex items-center justify-center gap-2 py-4 border border-outline-variant rounded-2xl hover:bg-surface-container-low transition-all">
                 <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                 <span className="text-xs font-bold text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-4 border border-outline-variant rounded-2xl hover:bg-surface-container-low transition-all">
                 <img src="https://www.apple.com/favicon.ico" className="w-5 h-5" alt="Apple" />
                 <span className="text-xs font-bold text-on-surface">Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
