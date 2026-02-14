import { useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import TheTerminal from './sections/TheTerminal';
import TheLab from './sections/TheLab';
import AuthorsArchive from './sections/AuthorsArchive';
import Footer from './sections/Footer';

function App() {
  /**
   * THE MOBILE SHIELD
   * This effect triggers a microscopic scroll on mount.
   * It forces mobile browser engines (Chrome/Safari) to calculate 
   * the viewport correctly, preventing the "blank screen" ghosting.
   */
  useEffect(() => {
    // Forces the browser to recognize the content height immediately
    window.scrollTo(0, 1);
    
    // Optional: Log for the developer console to confirm "Node" activation
    console.log("AirneyTech OS v2.0.26: Systems Nominal.");
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation Bar */}
      <Navigation />
      
      <main>
        {/* Identity & Brand */}
        <Hero />
        
        {/* Technical Skills & Terminal Emulator */}
        <TheTerminal />
        
        {/* Live Projects & Case Studies */}
        <TheLab />
        
        {/* Literary Works & Philosophical Archive */}
        <AuthorsArchive />
      </main>

      {/* Footer & Social Connections */}
      <Footer />
    </div>
  );
}

export default App;