import { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Code2, 
  Database, 
  Globe, 
  Sigma,
  GitBranch,
  Lock,
  Copy,
  Check,
  ShieldAlert,
  BrainCircuit
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ElementType;
  description: string;
}

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'success';
  content: string;
  timestamp?: string;
}

// Updated with your actual Cisco Certifications and real skills
const skills: Skill[] = [
  { name: 'Mathematics', level: 90, category: 'Theory', icon: Sigma, description: '200L Bsc student. Strong in logic, sets, and algebraic structures.' },
  { name: 'Cybersecurity', level: 85, category: 'Security', icon: ShieldAlert, description: 'Cisco Certified: Introduction to Cybersecurity & Cybersecurity Administration.' },
  { name: 'Ethical Hacking', level: 80, category: 'Security', icon: Lock, description: 'Cisco Certified Ethical Hacker. Experienced in penetration testing concepts.' },
  { name: 'Modern AI', level: 75, category: 'Theory', icon: BrainCircuit, description: 'Cisco Certified: Introduction to Modern AI & AI Automation.' },
  { name: 'Data Science', level: 70, category: 'Theory', icon: Database, description: 'Cisco Certified: Introduction to Data Science & Analytics.' },
  { name: 'Python', level: 85, category: 'Languages', icon: Code2, description: 'Used for AI automation and custom Termux scripts.' },
  { name: 'React/Vite', level: 82, category: 'Frontend', icon: Globe, description: 'Building high-performance apps with mobile-first optimization.' },
  { name: 'Git/Vercel', level: 75, category: 'Tools', icon: GitBranch, description: 'Managing repositories and deploying live production apps.' },
];

const categories = ['All', 'Languages', 'Frontend', 'Security', 'Theory', 'Tools'];

const TheTerminal = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  useEffect(() => {
    const initialLines: TerminalLine[] = [
      { type: 'output', content: 'AirneyTech OS v2.0.26 [Authenticated Edition]', timestamp: new Date().toLocaleTimeString() },
      { type: 'output', content: '----------------------------------------' },
      { type: 'output', content: 'Verifying Cisco Academy Credentials...' },
      { type: 'success', content: '✓ Cybersecurity & Ethical Hacking Badges verified.' },
      { type: 'output', content: '' },
      { type: 'command', content: 'whoami' },
      { type: 'output', content: 'airney@lasustech:~$ 200L Mathematics Student | Cisco Certified Security Analyst | Author' },
      { type: 'output', content: '' },
      { type: 'command', content: 'cat /proc/location' },
      { type: 'output', content: 'Node: Ikorodu, Lagos, Nigeria' },
    ];
    setTerminalLines(initialLines);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLines]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      const newLines: TerminalLine[] = [
        { type: 'command', content: currentCommand },
      ];

      const cmd = currentCommand.toLowerCase().trim();
      
      if (cmd === 'help') {
        newLines.push(
          { type: 'output', content: 'Available commands:' },
          { type: 'output', content: '  skills     - Display verified skill matrix' },
          { type: 'output', content: '  clear      - Clear terminal' },
          { type: 'output', content: '  about      - The AirneyTech story' },
          { type: 'output', content: '  certs      - List Cisco Networking Academy Badges' },
          { type: 'output', content: '  contact    - Reach out to @the.ai.k1d' },
        );
      } else if (cmd === 'skills') {
        newLines.push({ type: 'output', content: 'Loading authenticated skill matrix...' });
        skills.forEach(skill => {
          newLines.push({ 
            type: 'output', 
            content: `  ${skill.name.padEnd(20)} [${'█'.repeat(skill.level / 5)}${'░'.repeat(20 - skill.level / 5)}] ${skill.level}%` 
          });
        });
      } else if (cmd === 'certs') {
        newLines.push(
          { type: 'success', content: '✓ Ethical Hacker (Cisco)' },
          { type: 'success', content: '✓ Cybersecurity Administration (Cisco)' },
          { type: 'success', content: '✓ Introduction to Modern AI (Cisco)' },
          { type: 'success', content: '✓ Introduction to Data Science (Cisco)' },
        );
      } else if (cmd === 'about') {
        newLines.push(
          { type: 'output', content: 'AirneyTech: Merging mathematical logic with offensive security.' },
          { type: 'output', content: 'Currently studying 200L Mathematics @ LASUSTECH.' },
          { type: 'output', content: 'Author of philosophical protocols and technical books.' },
        );
      } else if (cmd === 'contact') {
        newLines.push(
          { type: 'output', content: 'TikTok:  @the.ai.k1d' },
          { type: 'output', content: 'GitHub:  github.com/airneytech' },
        );
      } else if (cmd === 'clear') {
        setTerminalLines([]);
        setCurrentCommand('');
        return;
      } else {
        newLines.push({ type: 'error', content: `Command not found: ${cmd}.` });
      }

      setTerminalLines(prev => [...prev, ...newLines]);
      setCurrentCommand('');
    }
  };

  const copyToClipboard = () => {
    const text = terminalLines.map(line => line.content).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="terminal"
      className="relative w-full py-24 md:py-32 bg-slate-950"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <Terminal className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 font-mono text-sm tracking-wider">SECURE_ACCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-emerald-500">Node</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Verified Cisco Academy certifications and mathematical foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-xl overflow-hidden">
            <div className="px-4 py-3 flex items-center justify-between bg-slate-800/50 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-slate-400 text-sm font-mono">airney@lasustech:~$</div>
              <button onClick={copyToClipboard} className="text-slate-400 hover:text-emerald-400 transition-colors">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 h-96 overflow-y-auto font-mono text-sm">
              {terminalLines.map((line, index) => (
                <div key={index} className="mb-1">
                  {line.type === 'command' && (
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span className="text-white">{line.content}</span>
                    </div>
                  )}
                  {line.type === 'output' && <span className="text-slate-300">{line.content}</span>}
                  {line.type === 'success' && <span className="text-emerald-400">{line.content}</span>}
                  {line.type === 'error' && <span className="text-red-400">{line.content}</span>}
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-emerald-400">➜</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent text-white outline-none font-mono"
                  placeholder="Type 'help'..."
                  autoFocus
                />
                <span className={`w-2 h-5 bg-emerald-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <div ref={terminalEndRef} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-2">
                    <skill.icon className="w-5 h-5 text-emerald-400" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-emerald-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 ml-9">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTerminal;