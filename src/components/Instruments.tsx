import  { useState } from 'react';
import { Piano, Guitar, Music } from 'lucide-react';

export const Instruments = () => {
  const [activeTab, setActiveTab] = useState('piano');
  
  const instruments = [
    {
      id: 'piano',
      name: 'Piano',
      icon: <Piano size={24} />,
      description: 'I express emotion through the keys, creating melodies that range from classical compositions to modern interpretations.',
      image: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      skills: ['Classical', 'Jazz', 'Contemporary', 'Composition']
    },
    {
      id: 'lead-guitar',
      name: 'Lead Guitar',
      icon: <Guitar size={24} />,
      description: 'My lead guitar work focuses on melodic solos and expressive playing that tells a story through each note.',
      image: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      skills: ['Solo Techniques', 'Improvisation', 'Melodic Phrasing', 'Speed Picking']
    },
    {
      id: 'bass-guitar',
      name: 'Bass Guitar',
      icon: <Guitar size={24} />,
      description: 'I lay down the foundation with groove-focused bass playing that supports the rhythm while adding musical depth.',
      image: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      skills: ['Fingerstyle', 'Slap Technique', 'Walking Bass', 'Harmony']
    },
    {
      id: 'rhythm-guitar',
      name: 'Rhythm Guitar',
      icon: <Guitar size={24} />,
      description: 'My rhythm guitar creates the harmonic structure and drives the song forward with dynamic playing.',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      skills: ['Strumming Patterns', 'Chord Progressions', 'Rhythm Variations', 'Arpeggios']
    }
  ];

  const activeInstrument = instruments.find(instrument => instrument.id === activeTab);

  return (
    <section id="instruments" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            My Instruments
            <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the different instruments I play and my approach to each one
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Tabs */}
            <div className="w-full md:w-1/4 bg-gray-900">
              <div className="flex md:flex-col">
                {instruments.map((instrument) => (
                  <button
                    key={instrument.id}
                    className={`flex items-center gap-2 p-4 w-full text-left transition-all ${
                      activeTab === instrument.id
                        ? 'bg-gray-800 border-l-4 border-purple-500 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(instrument.id)}
                  >
                    <span className="hidden md:inline-block">{instrument.icon}</span>
                    <span>{instrument.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            {activeInstrument && (
              <div className="w-full md:w-3/4 bg-gray-800">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={activeInstrument.image}
                          alt={activeInstrument.name}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white">{activeInstrument.name}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <p className="text-gray-300 mb-6">{activeInstrument.description}</p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Music size={18} className="text-purple-500" />
                          Skills & Techniques
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeInstrument.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href="#gallery"
                        className="inline-block px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-white font-medium"
                      >
                        See me play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};