
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { data } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {data.about.title}
            </h2>
            <p className="text-green-500 text-lg mb-6">{data.about.subtitle}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {data.about.description}
            </p>

            <div className="space-y-4">
              {data.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/20 backdrop-blur-sm relative">
              <div className="absolute inset-4 rounded-xl bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center overflow-hidden">
                    <img
                      src="/img/Eu.jpg"
                      alt="Minha Foto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-semibold">Desenvolvedor</p>
                  <p className="text-green-500">Full Stack</p>
                </div>
              </div>
            </div>


            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
