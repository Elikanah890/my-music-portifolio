
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Instruments } from './components/Instruments';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Hero />
      <About />
      <Instruments />
      <Gallery />
      <Contact />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;