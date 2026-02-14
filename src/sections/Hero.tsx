import { useEffect, useState, useRef } from 'react';
import { Terminal, Code2, Sigma, ChevronDown, ShieldCheck, Feather } from 'lucide-react';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Merging mathematical logic with defensive security to build robust digital systems.';
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const mathSymbols = ['∑', '∫', '∂', 'π', '√', '∞', 'λ', 'θ', 'Δ', 'Ω', 'α', 'β', 'γ', 'δ', 'ε', 'φ'];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020617 0%, #0f172a 50%, #0f172a 100%)' }}
    >
      {/* Animated Background Grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

      {/* Floating Math Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mathSymbols.map((symbol, index) => (
          <span
            key={index}
            className="absolute text-emerald-500/10 font-mono text-4xl md:text-6xl select-none"
            style={{
              left: `${(index * 7) % 100}%`,
              top: `${(index * 13) % 100}%`,
              animation: `float ${3 + (index % 4)}s ease-in-out infinite`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Credentials Badge */}
          <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-mono text-emerald-400">Cisco Certified Security Analyst</span>
            <span className="hidden sm:inline text-emerald-600">|</span>
            <Sigma className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-mono text-emerald-400">200L Mathematics @ LASUSTECH</span>
          </div>

          {/* Main Headline - Airneyx Tech */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span className="text-white">Airneyx</span>
            <span className="inline-block mx-2 md:mx-4 text-emerald-400">
              <Sigma className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 inline-block align-middle animate-pulse" />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Tech</span>
          </h1>

          {/* Subtitle with Typing Effect */}
          <div className="max-w-3xl mx-auto mb-10 min-h-[60px]">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              <span ref={typingRef} className="font-mono">
                {typedText}
              </span>
              <span
                className={`inline-block w-0.5 h-6 bg-emerald-400 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </div>

          {/* Impact Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {[
              { value: '2+', label: 'Years Dev', icon: Code2 },
              { value: '12+', label: 'Projects', icon: Terminal },
              { value: '7', label: 'Books Authored', icon: Feather },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lab"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-emerald-500 text-slate-900 font-bold text-lg transition-all hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Explore The Lab
            </a>
            <a
              href="#archive"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-slate-700 text-white font-bold text-lg transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5"
            >
              Read My Archive
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="w-8 h-8 text-emerald-400" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes matrix-fall {
          from { transform: translateY(-100%); }
          to { transform: translateY(100vh); }
        }
      `}</style>
    </section>
  );
}

export default Hero;