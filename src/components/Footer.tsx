import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, data } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/renatodm36', icon: '🔗' },
    { name: 'LinkedIn', href: 'https://br.linkedin.com/in/renato-duarte36', icon: '💼' }
  ];

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="animate-fade-in">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-green-500">&lt;</span>
              Portfolio
              <span className="text-green-500">/&gt;</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {language === 'pt'
                ? 'Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis através de código limpo e design inovador.'
                : 'Full Stack Developer passionate about creating incredible digital experiences through clean code and innovative design.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-white font-semibold mb-4">
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() =>
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-300 hover:text-green-500 transition-colors duration-200 capitalize"
                  >
                    {data.navigation[item.key as keyof typeof data.navigation]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-semibold mb-4">
              {language === 'pt' ? 'Conecte-se' : 'Connect'}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-300 hover:bg-green-500/20 hover:text-green-500 transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Renato Duarte.{' '}
            {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/2 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
