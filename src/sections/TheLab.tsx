import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Shield, 
  ShoppingBag, 
  Smartphone, 
  Code2, 
  Database,
  Zap,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technicalAchievement?: string;
  icon: React.ElementType;
  tags: string[];
  links: { label: string; url: string; icon: React.ElementType }[];
  color: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 'omnix',
    title: 'OMNIX Protocol',
    subtitle: 'Universal Matrix Protocol',
    description: 'A decentralized digital identity and security framework. This project explores the logical layers of user authentication and the "Universal Matrix" blueprint for secure data transmission.',
    icon: Shield,
    tags: ['Cybersecurity', 'Logic', 'Protocol Design', 'Web3'],
    links: [
      { label: 'GitHub', url: 'https://github.com/AirneyxTech/Universal-Matrix-Protocol', icon: Github },
      { label: 'Live Site', url: 'https://tf72f4fvzscqe.ok.kimi.link', icon: ExternalLink },
    ],
    color: 'from-emerald-500 to-teal-600',
    features: [
      'Decentralized Identity Blueprint',
      'Logical Matrix Mapping',
      'Secure Authentication Flow',
      'Privacy-First Architecture',
    ],
  },
  {
    id: 'annyloveths',
    title: 'Annyloveths Boutique',
    subtitle: 'E-Commerce Platform',
    description: 'A professional full-stack e-commerce solution for handmade knitwear and jewelry. Features a custom WhatsApp ordering system and optimized product browsing.',
    technicalAchievement: 'Successfully engineered a custom layout-reflow solution utilizing CSS containment strategies and forced synchronous layout triggers to bypass mobile rendering constraints on Chromium-based browsers, achieving 60fps scroll performance across all viewport sizes.',
    icon: ShoppingBag,
    tags: ['React', 'Vite', 'Tailwind', 'WhatsApp API'],
    links: [
      { label: 'Live Site', url: 'https://annyloveths-stitches.vercel.app/', icon: ExternalLink },
      { label: 'GitHub', url: 'https://github.com/AirneyxTech/annyloveths-stitches', icon: Github },
    ],
    color: 'from-violet-500 to-purple-600',
    features: [
      'Custom Mobile Reflow Logic',
      'WhatsApp Order Integration',
      'Responsive Image Loading',
      'Optimized Stacking Context',
    ],
  },
  {
    id: 'vtu',
    title: 'Airney VTU',
    subtitle: 'Virtual Top-Up Platform',
    description: 'A high-speed airtime and data vending platform built using the Samora framework. Engineered with custom profit margin calculations and Paystack payment integration.',
    icon: Smartphone,
    tags: ['Samora', 'Paystack', 'Fintech', 'Automation'],
    links: [
      { label: 'Live App', url: 'https://sabuss.com/airneyx6', icon: ExternalLink },
    ],
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Automated API Integration',
      'Custom Profit Margin Logic',
      'Paystack Gateway Integration',
      'Transaction Analytics',
    ],
  },
];

const TheLab = () => {
  
 const [expandedAchievement, setExpandedAchievement] = useState<string | null>(null);

  return (
    <section 
      id="lab"
      className="relative w-full py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0f172a 100%)' }}
    >
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

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
            <Terminal className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-emerald-400 font-mono text-sm tracking-wider">PROJECTS</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          The <span className="text-emerald-500">Lab</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl">
          Where 200L Mathematics theory meets engineering. These are my live applications and security research protocols.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative flex flex-col h-full min-h-[520px] bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
              
            >
              {/* Card Header with Gradient */}
              <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.color} p-6`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 opacity-20">
                  <Cpu className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {project.technicalAchievement && (
                  <div className="mb-4 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Solution Engineering</span>
                    </div>
                    <p className={`text-xs text-slate-400 leading-relaxed ${expandedAchievement === project.id ? '' : 'line-clamp-2'}`}>
                      {project.technicalAchievement}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setExpandedAchievement(expandedAchievement === project.id ? null : project.id);
                      }}
                      className="mt-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {expandedAchievement === project.id ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Project Scope</span>
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                        <Code2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-slate-700/50">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-all duration-300 text-sm font-medium border border-slate-700 hover:border-emerald-500/50"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Notice */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-slate-900/50 border border-emerald-500/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex-shrink-0">
              <Database className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity Research</h3>
              <p className="text-slate-400 mb-4">
                I focus on the intersection of mathematics and defensive security. I am currently researching how algebraic structures can improve decentralized authentication protocols. My GitHub contains my experiments in Termux scripting and Nmap automation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/airneytech"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLab;