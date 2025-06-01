
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { data } = useLanguage();

  const contactMethods = [
    {
      label: 'Email',
      value: data.contact.email,
      href: `mailto:${data.contact.email}`,
      icon: '📧'
    },
    {
      label: 'WhatsApp',
      value: data.contact.phone,
      href: `https://wa.me/${data.contact.phone.replace(/\D/g, '')}`,
      icon: '💬'
    },
    {
      label: 'Location',
      value: data.contact.location,
      href: '#',
      icon: '📍'
    }
  ];


  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.contact.title}
          </h2>
          <p className="text-green-500 text-lg mb-6">{data.contact.subtitle}</p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {data.contact.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                className="group bg-black rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 text-center hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-white font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-300 group-hover:text-green-500 transition-colors duration-200">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
