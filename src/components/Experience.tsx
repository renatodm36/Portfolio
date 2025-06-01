
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { data } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.experience.title}
          </h2>
          <p className="text-green-500 text-lg">{data.experience.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {data.experience.items.map((company, companyIndex) => (
            <div
              key={company.id}
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${companyIndex * 0.2}s` }}
            >
              {/* Company Header */}
              <div className="bg-gray-900 rounded-xl p-6 border border-green-500/20 mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{company.company}</h3>
              </div>

              {/* Positions Timeline */}
              <div className="relative pl-8">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-500/30" />

                {company.positions.map((position, positionIndex) => (
                  <div
                    key={positionIndex}
                    className="relative mb-8 animate-fade-in"
                    style={{ animationDelay: `${(companyIndex * 0.2) + (positionIndex * 0.1)}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />

                    {/* Position Card */}
                    <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{position.title}</h4>
                        <span className="text-green-500 font-medium">{position.period}</span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">{position.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
