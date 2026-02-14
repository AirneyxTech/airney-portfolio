import { useState } from 'react';
import { 
  BookOpen, 
  Feather, 
  Quote, 
  ChevronRight, 
  Library, 
  Lock, 
  Clock, 
  MessageCircle 
} from 'lucide-react';

interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  rating: number;
  status: string;
  tags: string[];
  coverGradient: string;
  quote: string;
}

const books: Book[] = [
  {
    id: 'universal-algorithm',
    title: 'The Universal Algorithm',
    subtitle: 'Decoding the Bugs in Life, Love, and Money',
    description: 'A mathematical deep-dive into the operating systems of the human mind. This book introduces the "Trinity Theorem" and provides the source code for upgrading your internal software from a system of survival to a system of abundance.',
    pages: 21,
    rating: 5.0,
    status: 'In Review',
    tags: ['Mathematics', 'Mindset Logic', 'System Theory'],
    coverGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    quote: 'If your internal system has short circuits, adding 100 Million Naira will not turn on the lights—it will burn down the house.',
  },
  {
    id: 'folder-001',
    title: 'Folder 001',
    subtitle: 'The Encrypted Love of a Father',
    description: 'A powerful narrative of legacy and sacrifice. When a Software Engineer decrypts a forgotten folder left by his late father—a simple mechanic—he discovers that the greatest hero in his life wore a stained jumpsuit instead of a cape.',
    pages: 10,
    rating: 5.0,
    status: 'In Review',
    tags: ['Legacy', 'Storytelling', 'Sacrifice'],
    coverGradient: 'from-violet-600 via-purple-600 to-pink-600',
    quote: 'A rocket does not look back at the launchpad once it flies. If you looked back, you would have slowed down.',
  },
  {
    id: 'battery-dies',
    title: 'Before The Battery Dies',
    subtitle: 'A Story of Connection, Sacrifice, and Regret',
    description: 'Set in the heat of Ikorodu, this story follows "System" and "Jay." It serves as a reminder that we often treat human connection like a suggestion until the battery hits 1% and the signal is lost forever.',
    pages: 12,
    rating: 4.8,
    status: 'In Review',
    tags: ['Tech Life', 'Ikorodu', 'Friendship'],
    coverGradient: 'from-amber-600 via-orange-600 to-red-600',
    quote: 'We think the "Low Battery" warning is just a suggestion, not a countdown.',
  }
];

const AuthorsArchive = () => {
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);

  return (
    <section 
      id="archive"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)' }}
    >
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[BookOpen, Feather, Library].map((Icon, index) => (
          <Icon
            key={index}
            className="absolute text-emerald-500/5"
            style={{
              width: `${80 + index * 20}px`,
              height: `${80 + index * 20}px`,
              left: `${20 + index * 30}%`,
              top: `${10 + index * 25}%`,
              animation: `float ${4 + index}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <Feather className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 font-mono text-sm tracking-wider">PUBLICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Author&apos;s <span className="text-emerald-500">Archive</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Where mathematical precision meets the human heart. These are the books written to bridge the gap between the "trench" and the "tech."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Book List */}
          <div className="lg:col-span-4 space-y-4">
            {books.map((book) => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                  selectedBook.id === book.id
                    ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/30 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-18 rounded-lg bg-gradient-to-br ${book.coverGradient} flex-shrink-0 flex items-center justify-center shadow-lg`}>
                    <BookOpen className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold truncate ${selectedBook.id === book.id ? 'text-emerald-400' : 'text-white'}`}>
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter">{book.status}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedBook.id === book.id ? 'text-emerald-400 rotate-90' : 'text-slate-600'}`} />
                </div>
              </button>
            ))}

            {/* Collection Stats */}
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <Library className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Library Stats</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-slate-900/50">
                  <div className="text-xl font-bold text-white">3</div>
                  <div className="text-xs text-slate-500">Drafts</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-slate-900/50">
                  <div className="text-xl font-bold text-white">43</div>
                  <div className="text-xs text-slate-500">Total Pages</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Display */}
          <div className="lg:col-span-8">
            <div 
              className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700"
            >
              <div className={`relative h-64 md:h-80 bg-gradient-to-br ${selectedBook.coverGradient} overflow-hidden`}>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="flex items-end gap-6">
                    <div className="w-24 h-32 md:w-32 md:h-40 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-2xl">
                      <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-white/90" />
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedBook.title}</h3>
                      <p className="text-lg text-white/80 mb-3">{selectedBook.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedBook.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="relative mb-6 pl-6 border-l-2 border-emerald-500/50">
                  <Quote className="absolute -left-3 -top-1 w-6 h-6 text-emerald-500/20" />
                  <p className="text-lg text-slate-300 italic leading-relaxed">
                    {selectedBook.quote}
                  </p>
                </div>

                <p className="text-slate-400 leading-relaxed mb-8">
                  {selectedBook.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-800 text-slate-500 font-semibold cursor-not-allowed border border-slate-700"
                  >
                    <Lock className="w-5 h-5" />
                    Pending Selar Upload
                  </button>
                  <a
                    href="https://wa.me/2348153286393?text=Hello%20AirneyTech,%20I'm%20interested%20in%20the%20waitlist%20for%20your%20book."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join the Waitlist
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap gap-6 text-xs text-slate-500 uppercase font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Status: {selectedBook.status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{selectedBook.pages} Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsArchive;