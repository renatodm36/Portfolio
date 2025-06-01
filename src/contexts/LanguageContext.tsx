
import React, { createContext, useContext, useState, useEffect } from 'react';
import portfolioData from '@/data/portfolio.json';

type Language = 'pt' | 'en';
type PortfolioData = typeof portfolioData.pt;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const data = portfolioData[language];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};
