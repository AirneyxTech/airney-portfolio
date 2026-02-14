import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sigma } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'The Lab', href: '#lab' },
  { label: 'Archive', href: '#archive' },
  { label: 'Terminal', href: '#terminal' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-lg border-b border-emerald-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Sigma className="w-5 h-5 text-emerald-400" />
                <div className="absolute inset-0 rounded-lg bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white">Airney</span>
                <span className="text-lg font-bold text-emerald-400">Tech</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="mailto:contact@airneytech.dev"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-medium text-sm hover:bg-emerald-400 transition-colors"
              >
                <Terminal className="w-4 h-4" />
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-semibold text-white hover:text-emerald-400 transition-colors"
              style={{
                animation: isMobileMenuOpen 
                  ? `slideIn 0.3s ease-out ${index * 0.1}s both` 
                  : 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:contact@airneytech.dev"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-900 font-semibold"
            style={{
              animation: isMobileMenuOpen 
                ? `slideIn 0.3s ease-out ${navItems.length * 0.1}s both` 
                : 'none',
            }}
          >
            <Terminal className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
