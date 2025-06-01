
import React, { useState, useEffect } from 'react';
import { Menu, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, data } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.key);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-green-500/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <span className="text-green-500">&lt;</span>
            Portfolio
            <span className="text-green-500">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.key
                    ? 'text-green-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {data.navigation[item.key as keyof typeof data.navigation]}
                {activeSection === item.key && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 animate-scale-in" />
                )}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 border border-green-500/30 rounded-lg hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/50 transition-all duration-200"
              title={language === 'pt' ? 'Switch to English' : 'Trocar para Português'}
            >
              <Languages size={16} />
              <span>{language === 'pt' ? 'PT' : 'EN'}</span>
              <span className="text-xs opacity-70">→</span>
              <span className="text-xs opacity-70">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/20 animate-fade-in">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.key
                    ? 'text-green-500 bg-green-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {data.navigation[item.key as keyof typeof data.navigation]}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
