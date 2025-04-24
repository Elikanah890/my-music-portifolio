import  { useEffect, useRef } from 'react';
import { Music, Disc } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY;
        heroRef.current.style.transform = `translateY(${offset * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - offset * 0.002}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          >
            {i % 2 === 0 ? 
              <Music size={80} className="text-purple-500" /> : 
              <Disc size={80} className="text-pink-500" />
            }
          </div>
        ))}
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Music is My</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Language & Passion
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            I express myself through piano, guitar, and various musical instruments. 
            Join me on this musical journey and discover the rhythm of life.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#instruments" 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-all transform hover:scale-105"
            >
              Explore My Skills
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/20 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/20 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/public/20250316_151539 (1).jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Musician Profile" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};