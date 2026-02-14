import { 
  Github, 
  Twitter, 
  Mail, 
  Terminal,
  Sigma,
  Heart,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Airneyxtech', label: 'GitHub' },
  { icon: MessageCircle, href: 'https://www.tiktok.com/@the.ai.k1d', label: 'TikTok' },
  { icon: Twitter, href: '#', label: 'AirneyxTech' },
  { icon: Mail, href: 'mailto:contact@airneytech.dev', label: 'Email' },
];

const quickLinks = [
  { label: 'The Lab', href: '#lab' },
  { label: 'Author\'s Archive', href: '#archive' },
  { label: 'The Terminal', href: '#terminal' },
];

const techStack = [
  'React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Node.js'
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-16 overflow-hidden" style={{ background: '#020617' }}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Sigma className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Airney</span>
                <span className="text-2xl font-bold text-emerald-400">Tech</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              200-Level Mathematics student at LASUSTECH. Merging mathematical logic 
              with defensive security architectures and literary storytelling.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Location */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Deployment
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-[10px] text-slate-400 font-mono uppercase tracking-tighter"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Node: Ikorodu, Lagos State.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 flex items-center gap-1">
              © {currentYear} AirneyTech. Built with 
              <Heart className="w-4 h-4 text-red-500 fill-current mx-1" />
              in the Matrix.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-600 font-mono">
                MATHEMATICS × CODE
              </span>
              <span className="text-xs text-slate-600">
                v2.0.26
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-emerald-500/50 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;