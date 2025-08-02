
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
const { data, language } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.projects.title}
          </h2>
          <p className="text-green-500 text-lg">{data.projects.subtitle}</p>
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
              {data.projects.items.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative bg-gray-900 rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all duration-300 animate-fade-in hover:scale-105 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={`/img/${project.image}`}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-green-500 text-black text-xs font-semibold rounded">
                          {language === 'pt' ? 'Destaque' : 'Featured'}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded border border-green-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm"
                          >
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            about="Live Demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-gray-900 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/50 text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-gray-900 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/50 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
