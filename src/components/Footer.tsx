import React from 'react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = '/#contact';
    }
  };

  const navigateToLegal = () => {
    window.location.href = '?legal=true';
    // Simulate navigation to LegalPage - in a real router setup this would be handled differently
    import('./LegalPage').then(({ default: LegalPage }) => {
      const root = document.getElementById('root');
      if (root) {
        const { createRoot } = require('react-dom/client');
        const reactRoot = createRoot(root);
        reactRoot.render(React.createElement(LegalPage));
      }
    });
  };

  return (
    <footer className="bg-healthiq-primary text-healthiq-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Spalte 1 - Logo & Kurzbeschreibung */}
          <div>
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo_HealthiQ.JPG" 
                alt="HealthiQ Logo" 
                className="h-14 w-auto"
              />
              <p className="text-healthiq-background/90">
                Die Plattform für smarte Arzttermine.
              </p>
            </div>
          </div>

          {/* Spalte 2 - Impressum & Datenschutz */}
          <div className="flex items-center justify-center">
            <button
              onClick={navigateToLegal}
              className="text-healthiq-background/90 hover:text-healthiq-secondary transition-colors duration-200"
            >
              Impressum & Datenschutz
            </button>
          </div>

          {/* Spalte 3 - Kontakt */}
          <div className="flex items-center justify-center">
            <button
              onClick={scrollToContact}
              className="text-healthiq-background/90 hover:text-healthiq-secondary transition-colors duration-200"
            >
              Kontakt
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-healthiq-secondary pt-6">
          <div className="text-center">
            <p className="text-sm text-healthiq-background/80">
              © {currentYear} HealthiQ GesbR – Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;