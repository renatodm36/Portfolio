
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Database, Server, Globe, Smartphone, Cloud } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Skills = () => {
  const { data } = useLanguage();

  const getTechIcon = (techName: string) => {
    const name = techName.toLowerCase();
    if (name.includes('react') || name.includes('css') || name.includes('html') || name.includes('javascript') || name.includes('typescript') || name.includes('tailwind')) {
      return <Globe className="w-8 h-8 text-green-500" />;
    }
    if (name.includes('node') || name.includes('python')) {
      return <Server className="w-8 h-8 text-green-500" />;
    }
    if (name.includes('mysql') || name.includes('oracle') || name.includes('sql server')) {
      return <Database className="w-8 h-8 text-green-500" />;
    }
    if (name.includes('git') || name.includes('devops')) {
      return <Cloud className="w-8 h-8 text-green-500" />;
    }
    return <Code className="w-8 h-8 text-green-500" />;
  };

  const getLevelBadgeVariant = (level: string) => {
    switch (level.toLowerCase()) {
      case 'avançado':
      case 'advanced':
        return 'default';
      case 'Intermediário':
      case 'intermediate':
        return 'default';
      case 'básico':
      case 'basic':
        return 'secondary';
      default:
        return 'default';
    }
  };

  //Ajustar para ver se vou adicionar isso ou não
  const additionalTechs = [
    // { name: 'React', icon: <Globe className="w-6 h-6 text-green-500" /> },
    // { name: 'Node.js', icon: <Server className="w-6 h-6 text-green-500" /> },
    // { name: 'TypeScript', icon: <Code className="w-6 h-6 text-green-500" /> },
    // { name: 'Docker', icon: <Cloud className="w-6 h-6 text-green-500" /> },
    // { name: 'AWS', icon: <Cloud className="w-6 h-6 text-green-500" /> },
    // { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-500" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.skills.title}
          </h2>
          <p className="text-green-500 text-lg">{data.skills.subtitle}</p>
        </div>


        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {data.skills.categories.map((category, categoryIndex) => (
                <CarouselItem key={category.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    key={categoryIndex}
                    className="bg-black rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                  >
                    <h3 className="text-xl font-bold text-white mb-6 text-center">{category.name}</h3>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg animate-fade-in"
                          style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                        >
                          <div className="flex items-center space-x-3">
                            {getTechIcon(skill.name)}
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <Badge
                            variant={getLevelBadgeVariant(skill.level)}
                            className="text-xs font-bold"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-gray-900 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/50 text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-gray-900 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/50 text-white" />
          </Carousel>
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {additionalTechs.map((tech, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-4 text-center border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-2">
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
