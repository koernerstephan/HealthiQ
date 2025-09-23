import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const StickyNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');

  const menuItems = [
    { label: 'HealthiQ', href: '#hero-section' },
    { label: 'Problem & Lösung', href: '#problem-solution' },
    { label: 'Säulen', href: '#pillars' },
    { label: 'Wirkung', href: '#impact' },
    { label: 'Über uns', href: '#about-us' },
    { label: 'Kontakt', href: '#contact' },
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
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-healthiq-primary/95 backdrop-blur-sm border-b border-healthiq-secondary/30">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero-section')}
              className="text-xl font-bold bg-healthiq-primary"
            >
              <img 
                src="/Logo_HealthiQ.JPG" 
                alt="HealthiQ Logo" 
                className="h-14 w-auto"
              />
            </button>

            {/* Menu Items */}
            <div className="flex items-center space-x-8">
              {menuItems.slice(1).map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-healthiq-secondary border-b-2 border-healthiq-secondary pb-1'
                      : 'text-healthiq-background/90 hover:text-healthiq-background hover:border-b-2 hover:border-healthiq-secondary/50 hover:pb-1'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-healthiq-primary/95 backdrop-blur-sm border-b border-healthiq-secondary/30">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero-section')}
              className="text-xl font-bold text-healthiq-background"
            >
              HealthiQ
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-healthiq-background hover:text-healthiq-secondary transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 bg-healthiq-primary/98 backdrop-blur-sm border-b border-healthiq-secondary/30 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            {menuItems.slice(1).map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left text-base font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-healthiq-secondary'
                    : 'text-healthiq-background/90 hover:text-healthiq-background'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default StickyNavigation;
