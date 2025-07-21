import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  isDark: boolean;
}

// Custom TikTok Icon Component
const TikTokIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04.57z"/>
  </svg>
);
const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Garments',
    'Large Format Printing',
    'Paper Printing',
    'Signages',
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo className="h-16 w-auto" isDark={true} />
            <p className="text-gray-300 leading-relaxed">
              Premium branding solutions that transform your business presence. 
              From custom garments to large format printing, we deliver quality that speaks for itself.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com/Matonda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/Matonda.branding01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-pink-600 text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@matondabranding"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-black text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:0768895536"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>0768 895 536</span>
              </a>
              <a
                href="tel:0103154528"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>0103 154 528</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>info@matondasigns.co.ke</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <h4 className="font-semibold text-white mb-2">Business Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Sat: 9:00 AM - 4:00 PM</div>
                <div>Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Matonda Signs & Branding. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ for premium branding solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;