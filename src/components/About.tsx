import React, { useEffect, useState, useRef } from 'react';
import { Award, Clock, Users, CheckCircle } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, rating: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { projects: 500, clients: 100, years: 8, rating: 5 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        rating: Math.floor(targets.rating * progress * 10) / 10
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "We use only the finest materials and latest printing technology to ensure exceptional results."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Quick delivery times without compromising on quality. Most projects completed within 24-48 hours."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our experienced professionals bring creativity and technical expertise to every project."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee with unlimited revisions until you're completely happy."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose
                <span className="text-yellow-500 block">Matonda Signs?</span>
              </h2>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                With years of experience in the branding industry, we've built a reputation for 
                delivering exceptional quality and service that exceeds expectations. Our commitment 
                to excellence has made us Kenya's trusted partner for premium branding solutions.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-yellow-500 text-black">
                      {feature.icon}
                    </div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className={`p-8 rounded-3xl ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            } text-center`}>
              <h3 className={`text-2xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Our Track Record
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-yellow-500">
                    {counters.projects}+
                  </div>
                  <div className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Projects Completed
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-500">
                    {counters.clients}+
                  </div>
                  <div className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Happy Clients
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">
                    {counters.years}+
                  </div>
                  <div className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Years Experience
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-500">
                    {counters.rating}★
                  </div>
                  <div className={`text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Client Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`p-8 rounded-3xl text-center ${
              isDark
                ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20'
                : 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to Transform Your Brand?
              </h3>
              <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Join hundreds of satisfied clients who trust us with their branding needs.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;