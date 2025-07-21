import React from 'react';
import { ArrowRight, Star, CheckCircle, Users } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-20 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Premium Branding Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your
              <span className="text-yellow-400 block">Brand Story</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
              From custom garments to large format printing, we bring your vision to life 
              with premium quality and attention to detail that sets you apart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Services
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5★</div>
                <div className="text-sm text-gray-300">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-float">
            <div className={`p-6 rounded-2xl backdrop-blur-lg border ${
              isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-white/10 border-white/20'
            } transform hover:scale-105 transition-all duration-300`}>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-gray-300">Premium materials and precision craftsmanship in every project</p>
            </div>
            
            <div className={`p-6 rounded-2xl backdrop-blur-lg border ${
              isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-white/10 border-white/20'
            } transform hover:scale-105 transition-all duration-300 ml-8`}>
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Experienced professionals dedicated to bringing your vision to life</p>
            </div>
            
            <div className={`p-6 rounded-2xl backdrop-blur-lg border ${
              isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-white/10 border-white/20'
            } transform hover:scale-105 transition-all duration-300`}>
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Quick turnaround times without compromising on quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;