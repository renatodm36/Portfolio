
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { data } = useLanguage();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="animate-fade-in">
          <p className="text-green-500 text-lg mb-4 animate-scale-in">{data.hero.greeting}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">{data.hero.name}</span>
            <span className="block text-green-500 mt-2">{data.hero.title}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.hero.description}
          </p>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            {data.hero.cta}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-500 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
