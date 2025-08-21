import React, { useState } from 'react';
import { Copy, Check, Palette, Eye } from 'lucide-react';

interface ColorCardProps {
  name: string;
  hex: string;
  description: string;
  textColor: string;
  bgClass: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, hex, description, textColor, bgClass }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
      {/* Color Block */}
      <div className={`${bgClass} h-32 flex items-center justify-center relative group`}>
        <div className={`text-center ${textColor}`}>
          <h3 className="text-lg font-bold mb-1">{name}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/30"
        >
          {copied ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <Copy className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">HEX-Wert</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 text-healthiq-primary hover:text-healthiq-text transition-colors"
          >
            <span className="font-mono text-sm">{hex}</span>
            {copied ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>
        
        {/* Usage Examples */}
        <div className="text-xs text-gray-500">
          <p className="mb-1">Tailwind: <code className="bg-gray-100 px-1 rounded">bg-healthiq-{name.toLowerCase().replace(' ', '-')}</code></p>
          <p>CSS: <code className="bg-gray-100 px-1 rounded">color: {hex}</code></p>
        </div>
      </div>
    </div>
  );
};

const ColorPreview: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const colors = [
    {
      name: 'Primary',
      hex: '#5a7c61',
      description: 'Salbeigrün',
      textColor: 'text-white',
      bgClass: 'bg-healthiq-primary',
    },
    {
      name: 'Secondary',
      hex: '#dfd1b6',
      description: 'Natural Hessian',
      textColor: 'text-healthiq-text',
      bgClass: 'bg-healthiq-secondary',
    },
    {
      name: 'Background',
      hex: '#f4f1de',
      description: 'Creme',
      textColor: 'text-healthiq-text',
      bgClass: 'bg-healthiq-background',
    },
    {
      name: 'Text',
      hex: '#3b4e3a',
      description: 'Dunkles Salbei',
      textColor: 'text-white',
      bgClass: 'bg-healthiq-text',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-healthiq-light'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-healthiq-primary rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-healthiq-primary'
            }`}>
              HealthiQ Farbpalette
            </h1>
          </div>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${
            darkMode ? 'text-gray-300' : 'text-healthiq-text'
          }`}>
            Die offizielle Farbpalette für das HealthiQ Corporate Design. 
            Alle Farben sind optimiert für Barrierefreiheit und moderne Webstandards.
          </p>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center space-x-2 mx-auto px-4 py-2 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-healthiq-text hover:bg-gray-50'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'} Vorschau</span>
          </button>
        </div>

        {/* Color Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {colors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              hex={color.hex}
              description={color.description}
              textColor={color.textColor}
              bgClass={color.bgClass}
            />
          ))}
        </div>

        {/* Usage Guidelines */}
        <div className={`rounded-2xl p-8 md:p-12 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-healthiq-primary'
          }`}>
            Verwendungsrichtlinien
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-gray-200' : 'text-healthiq-text'
              }`}>
                Primärfarbe (Salbeigrün)
              </h3>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Hauptbuttons und Call-to-Actions</li>
                <li>• Überschriften und wichtige Textelemente</li>
                <li>• Navigation und Header-Bereiche</li>
                <li>• Icons und grafische Akzente</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-gray-200' : 'text-healthiq-text'
              }`}>
                Sekundärfarbe (Natural Hessian)
              </h3>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Card-Hintergründe und Container</li>
                <li>• Sekundäre Buttons (Outline-Style)</li>
                <li>• Hover-Zustände und Akzente</li>
                <li>• Abgetrennte Sektionen</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-gray-200' : 'text-healthiq-text'
              }`}>
                Hintergrundfarbe (Creme)
              </h3>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Haupt-Hintergründe und Sektionen</li>
                <li>• Textbereiche und Content-Container</li>
                <li>• Formulare und Input-Felder</li>
                <li>• Neutrale Bereiche</li>
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-gray-200' : 'text-healthiq-text'
              }`}>
                Textfarbe (Dunkles Salbei)
              </h3>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Fließtext und Beschreibungen</li>
                <li>• Sekundäre Überschriften</li>
                <li>• Labels und Formular-Texte</li>
                <li>• Kontrastreiche Lesbarkeit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className={`mt-8 p-6 rounded-xl ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-healthiq-background border border-healthiq-secondary'
        }`}>
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-healthiq-primary rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <h3 className={`font-semibold ${
              darkMode ? 'text-white' : 'text-healthiq-primary'
            }`}>
              Barrierefreiheit
            </h3>
          </div>
          <p className={`text-sm ${
            darkMode ? 'text-gray-300' : 'text-healthiq-text'
          }`}>
            Alle Farbkombinationen erfüllen die WCAG 2.1 AA Standards für Kontrast und Lesbarkeit. 
            Die Palette wurde speziell für optimale Zugänglichkeit entwickelt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPreview;