
import { Music } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
              <Music className="text-purple-500" size={28} />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Elkanah karera
              </span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Sharing my passion for music through piano, lead guitar, bass guitar, and rhythm guitar performances.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#instruments" className="text-gray-400 hover:text-purple-400 transition-colors">Instruments</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">0784004690</li>
                <li className="text-gray-400">Arusha, Tanzania</li>
                <li className="text-gray-400">elkanahbaha@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500">
            © {currentYear} Elkanah karera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};