
import { Award, Heart, Users, Star } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <Award size={24} className="text-purple-500" />, value: '10+', label: 'Years Experience' },
    { icon: <Heart size={24} className="text-pink-500" />, value: '100+', label: 'Performances' },
    { icon: <Users size={24} className="text-blue-500" />, value: '50+', label: 'Collaborations' },
    { icon: <Star size={24} className="text-yellow-500" />, value: '4', label: 'Instruments Mastered' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            About Me
            <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Hi it's Elkanah Karera My journey through the world of music and my passion for creating melodious experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Playing Music" 
                className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-white">My Musical Journey</h3>
            <p className="text-gray-300 mb-6">
              I discovered my passion for music at an early age. What started as curiosity has blossomed into a lifelong 
              journey of musical exploration. I've dedicated myself to mastering multiple instruments, including piano, 
              lead guitar, bass guitar, and rhythm guitar.
            </p>
            <p className="text-gray-300 mb-6">
              Each instrument tells a different story, and through them, I express emotions that words cannot capture. 
              Music has taken me to various stages and connected me with incredible people who share the same passion.
            </p>
            <p className="text-gray-300 mb-8">
              I continue to grow as a musician, always learning and expanding my musical horizons while staying true to my 
              authentic sound and style.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};