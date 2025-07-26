import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Facebook, Instagram, Music } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Lighting', 'About', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.toLowerCase() === 'lighting' ? 'lighting-products' : sectionId.toLowerCase();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg`
          : `${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm`
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo className="h-12 w-auto" isDark={isDark} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'lighting' ? 'lighting-products' : item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`font-medium transition-colors hover:text-yellow-500 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://facebook.com/Matonda"
              target="_blank"
              rel="noopener noreferrer"
             aria-label="Visit our Facebook page"
              className={`p-2 rounded-full transition-all hover:scale-110 hover:bg-blue-600 hover:text-white ${
                isDark ? 'text-white hover:bg-blue-600' : 'text-gray-700 hover:bg-blue-600'
              }`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/Matonda.branding01"
              target="_blank"
              rel="noopener noreferrer"
             aria-label="Visit our Instagram page"
              className={`p-2 rounded-full transition-all hover:scale-110 hover:bg-pink-600 hover:text-white ${
                isDark ? 'text-white' : 'text-gray-700'
              }`}
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://tiktok.com/@matondabranding"
              target="_blank"
              rel="noopener noreferrer"
             aria-label="Visit our TikTok page"
              className={`p-2 rounded-full transition-all hover:scale-110 hover:bg-black hover:text-white ${
                isDark ? 'text-white' : 'text-gray-700'
              }`}
            >
              <Music size={20} />
            </a>
            <button
              onClick={toggleTheme}
             aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                isDark ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'text-white' : 'text-gray-700'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className={`p-2 ${isDark ? 'text-white' : 'text-gray-700'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden mt-4 py-4 rounded-lg transition-all duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <nav className="flex flex-col space-y-4 px-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase() === 'lighting' ? 'lighting-products' : item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`text-left font-medium transition-colors hover:text-yellow-500 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-6 mt-6">
              <a
                href="https://facebook.com/Matonda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className={`p-2 rounded-full transition-all hover:scale-110 hover:bg-blue-600 hover:text-white ${
                  isDark ? 'text-white' : 'text-gray-700'
                }`}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/Matonda.branding01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className={`p-2 rounded-full transition-all hover:scale-110 hover:bg-pink-600 hover:text-white ${
                  isDark ? 'text-white' : 'text-gray-700'
                }`}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@matondabranding"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page"
                className={`p-2 rounded-full transition-all hover:scale-110 hover:bg-black hover:text-white ${
                  isDark ? 'text-white' : 'text-gray-700'
                }`}
              >
                <Music size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;