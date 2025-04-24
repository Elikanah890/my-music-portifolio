
import { Phone, MapPin, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            Contact Me
            <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in booking me for a performance or have any questions? Get in touch!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl">
            {/* Contact Info */}
            <div className="md:w-2/5 bg-gray-900 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Talk Music</h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to new opportunities, collaborations, and musical adventures. 
                  Don't hesitate to reach out for bookings, questions, or just to connect.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-gray-400">0784004690</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-400">Arusha, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-400">elkanahbaha@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-3">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-800 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5 bg-white p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Elkanah karera"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="elkanahbaha@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Booking Request"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium hover:opacity-90 transition-all transform hover:scale-[1.02] w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};