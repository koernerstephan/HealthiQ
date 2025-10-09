import React, { useState, useEffect } from 'react';
import { Users, Heart, Building2, TrendingUp, Calendar, Clock, Leaf, Star, UserPlus, Phone, Mail, FileText, Menu, X, ChevronRight } from 'lucide-react';
import StickyNavigation from './StickyNavigation';
import WordBubbleCloud from './WordBubbleCloud';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');

  const sections = ['hero-section', 'about', 'problem-solution', 'pillars', 'impact', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <StickyNavigation />
      


      {/* Hero Section */}
      <section id="hero-section" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Logo */}
        <div className="absolute top-6 left-6 z-40">
          <img 
            src="/logo-placeholder.svg" 
            alt="HealthiQ Logo" 
            className="h-10 w-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
        </div>

        <div className="container mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="w-full max-w-4xl">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                HealthiQ –<br />
                Damit Versorgung<br />
                funktioniert.<br />
                Für alle.
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl font-light leading-relaxed">
                Wir bringen Patient:innen, Behandler:innen und das System zusammen – effizient, fair und digital.
              </h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white py-6 md:py-8">
        </div>
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-teal-200 rounded-full opacity-25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-20 blur-2xl"></div>
        
        {/* Medical Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-blue-50 to-transparent" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #6366f1 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </section>

      {/* Vision, Mission & Werte Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto px-8">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Vision, Mission & Werte
                </h2>
                <p className="text-xl text-healthiq-text max-w-3xl mx-auto leading-relaxed">
                  Wir denken das Gesundheitswesen neu – fair, digital und für alle.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <ScrollAnimationWrapper animationType="fade-up" delay={100}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <svg className="w-16 h-16 text-healthiq-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      {/* Stethoskop Icon */}
                      <circle cx="6" cy="6" r="2" />
                      <circle cx="18" cy="6" r="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8v4c0 2 1 3 3 3h6c2 0 3-1 3-3V8" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v3" />
                      <circle cx="12" cy="20" r="2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-base leading-relaxed">
                    Unsere Mission ist es, Patient:innen, Behandler:innen und das Gesundheitssystem auf einer einzigen Plattform zu verbinden – effizient, transparent und nachhaltig. Wir reduzieren Wartezeiten, senken Verwaltungskosten und schaffen echte Entlastung für das medizinische Personal. Dabei steht der Mensch immer im Mittelpunkt.
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Vision */}
              <ScrollAnimationWrapper animationType="fade-up" delay={200}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <svg className="w-16 h-16 text-healthiq-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-base leading-relaxed">
                    Wir gestalten ein digitales Gesundheitssystem, das niemanden zurücklässt. Eine Welt, in der Arzttermine in Sekunden gefunden werden, Praxen optimal ausgelastet sind und das System intelligent Ressourcen steuert. Wir wollen Vorreiter sein – technologisch, gesellschaftlich und ethisch.
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Werte */}
              <ScrollAnimationWrapper animationType="fade-up" delay={300}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <svg className="w-16 h-16 text-healthiq-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Werte</h3>
                  <p className="text-base leading-relaxed">
                    Fairness, Transparenz und Innovation sind unser Fundament. Wir handeln verantwortungsvoll mit Daten, denken nachhaltig und arbeiten partnerschaftlich mit allen Stakeholdern. Unser Ziel ist ein Gesundheitssystem, das Vertrauen schafft – für Generationen.
                  </p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section id="problem-solution" className="bg-white">
        <div className="container mx-auto px-6">
          {/* Block A - Headline */}
          <div className="bg-white py-12 md:py-16">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Das Problem: Ein System am Limit.
                </h2>
                <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  Was heute hakt – aus Sicht von Patient:innen, Behandler:innen und dem System.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Block B - Bubble Cloud */}
          <div className="bg-white py-6 md:py-8">
            <ScrollAnimationWrapper animationType="scale" delay={200}>
              <div className="max-w-6xl mx-auto">
                <WordBubbleCloud bubbles={[
                  // PATIENTS
                  {label:'Wartezeiten',group:'patients'},{label:'überfüllte Leitungen',group:'patients'},
                  {label:'keine Termintransparenz',group:'patients'},{label:'Arzt-Odyssee',group:'patients'},
                  {label:'No-Show-Erinnerung fehlt',group:'patients'},{label:'Sprachbarrieren',group:'patients'},
                  {label:'Barrierefreiheit',group:'patients'},{label:'Doppeluntersuchungen',group:'patients'},
                  {label:'Papierformulare',group:'patients'},{label:'unsichere Infos',group:'patients'},
                  {label:'Notaufnahme-Überlastung',group:'patients'},{label:'digitale Hürden',group:'patients'},
                  // PROVIDERS
                  {label:'Telefonstress',group:'providers'},{label:'No-Shows',group:'providers'},
                  {label:'Kurzfristige Absagen',group:'providers'},{label:'Leerzeiten',group:'providers'},
                  {label:'Überbuchung',group:'providers'},{label:'Kalender-Chaos',group:'providers'},
                  {label:'Papier & Ablage',group:'providers'},{label:'Rezept-Abholfahrten',group:'providers'},
                  {label:'Dokumenten-Handling',group:'providers'},{label:'Abrechnungsaufwand',group:'providers'},
                  {label:'Personalmangel',group:'providers'},{label:'Burnout-Risiko',group:'providers'},
                  {label:'Insellösungen',group:'providers'},{label:'schwache Online-Sichtbarkeit',group:'providers'},
                  {label:'zu wenige Bewertungen',group:'providers'},
                  // POLICY / SYSTEM
                  {label:'fehlende Versorgungsdaten',group:'policy'},{label:'Steuerungsblindflug',group:'policy'},
                  {label:'Versorgungslücken',group:'policy'},{label:'Stadt-Land-Gefälle',group:'policy'},
                  {label:'ineffiziente Mittelverwendung',group:'policy'},{label:'CO₂-Emissionen',group:'policy'},
                  {label:'Papierverbrauch',group:'policy'},{label:'Fahrten & Stau',group:'policy'},
                  {label:'fehlende Schnittstellen',group:'policy'},{label:'fragmentierte IT',group:'policy'},
                  {label:'Datensilos',group:'policy'},{label:'keine Echtzeit',group:'policy'},
                  {label:'Qualität ohne Transparenz',group:'policy'}
                ]} />
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Block C - Trenner */}
          <div className="h-px bg-healthiq-secondary my-10 md:my-14"></div>

          {/* Unsere Lösung Block */}
          <ScrollAnimationWrapper animationType="fade-up" delay={400}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Unsere Lösung: HealthiQ.
              </h2>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed mt-4">
                HealthiQ verbindet Patient:innen, Behandler:innen und das System auf einer Plattform. 
                Echtzeit-Suche & Wartelisten für Patient:innen, automatisierte Terminorganisation & Sichtbarkeit für Praxen, 
                transparente Versorgungsdaten & Steuerungs-Insights für Politik und Kassen. 
                Ergebnis: weniger Wartezeiten, weniger No-Shows, weniger Papier – mehr Versorgung.
              </p>
              <div className="mt-8">
                <a
                  href="#pillars"
                  className="inline-block bg-healthiq-primary text-healthiq-background hover:bg-healthiq-secondary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#pillars');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Zu den drei Säulen
                </a>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Legacy Problem Solution Section - keeping for reference */}
      <section className="hidden py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Was ist HealthiQ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Die Antwort auf die Herausforderungen im Gesundheitswesen
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Das Problem</h3>
                <div className="h-64 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <span className="text-gray-500">Problem Content Slot</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Die Lösung</h3>
                <div className="h-64 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <span className="text-gray-500">Solution Content Slot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  HealthiQ basiert auf drei Säulen.
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Unser System bringt genau jene zusammen, die einander brauchen – und schafft Mehrwert auf allen Ebenen.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Patient:innen Säule */}
              <ScrollAnimationWrapper animationType="fade-up" delay={100}>
                <button
                  onClick={() => window.open('/HealthiQ_ImpactPaper_PatientInnen_1.0.pdf', '_blank')}
                  className="group bg-stone-50 hover:bg-stone-100 rounded-2xl p-8 text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-stone-200 hover:border-stone-300 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-stone-600 group-hover:bg-stone-700 rounded-full mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors duration-300">
                    Patient:innen
                  </h3>
                  <div className="text-stone-700 group-hover:text-stone-800 transition-colors duration-300">
                    <p className="text-sm leading-relaxed">
                      Schnelle Hilfe, passende Behandler:innen, weniger Bürokratie
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-200 group-hover:border-stone-300 transition-colors duration-300">
                    <div className="flex items-center justify-center text-stone-600 group-hover:text-stone-800 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">Impact Paper öffnen</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </ScrollAnimationWrapper>
              
              {/* Behandler:innen Säule */}
              <ScrollAnimationWrapper animationType="fade-up" delay={200}>
                <button
                  onClick={() => window.open('/HealthiQ_ImpactPaper_BehandlerInnen_1.0.pdf', '_blank')}
                  className="group bg-stone-50 hover:bg-stone-100 rounded-2xl p-8 text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-stone-200 hover:border-stone-300 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-stone-600 group-hover:bg-stone-700 rounded-full mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors duration-300">
                    Behandler:innen
                  </h3>
                  <div className="text-stone-700 group-hover:text-stone-800 transition-colors duration-300">
                    <p className="text-sm leading-relaxed">
                      Weniger No-Shows, mehr Effizienz, bessere Sichtbarkeit
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-200 group-hover:border-stone-300 transition-colors duration-300">
                    <div className="flex items-center justify-center text-stone-600 group-hover:text-stone-800 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">Impact Paper öffnen</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </ScrollAnimationWrapper>
              
              {/* Politik & System Säule */}
              <ScrollAnimationWrapper animationType="fade-up" delay={300}>
                <button
                  onClick={() => window.open('/HealthiQ_ImpactPaper_Politik&System_1.0 copy.pdf', '_blank')}
                  className="group bg-stone-50 hover:bg-stone-100 rounded-2xl p-8 text-center hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-stone-200 hover:border-stone-300 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-stone-600 group-hover:bg-stone-700 rounded-full mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors duration-300">
                    Politik & System
                  </h3>
                  <div className="text-stone-700 group-hover:text-stone-800 transition-colors duration-300">
                    <p className="text-sm leading-relaxed">
                      Transparente Daten, Versorgungssicherheit, weniger Kosten
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-200 group-hover:border-stone-300 transition-colors duration-300">
                    <div className="flex items-center justify-center text-stone-600 group-hover:text-stone-800 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">Impact Paper öffnen</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </ScrollAnimationWrapper>
            </div>
            
            {/* Placeholder Sektionen für die Säulen-Details */}
            <div className="hidden">
              <div id="pillar-patients"></div>
              <div id="pillar-providers"></div>
              <div id="pillar-policy"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Wirkung, die zählt.
                </h2>
                <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
                  HealthiQ spart Zeit, senkt Kosten, reduziert Emissionen und verbessert die Versorgung – belegbar, skalierbar, nachhaltig.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* No-Shows Reduktion */}
              <ScrollAnimationWrapper animationType="scale" delay={100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-200 text-center">
                  <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">–60 %</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">weniger No-Shows</h3>
                  <p className="text-stone-700 leading-relaxed">
                    durch Erinnerungen & dynamisches Wartelisten-Matching
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Kosteneinsparung */}
              <ScrollAnimationWrapper animationType="scale" delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-200 text-center">
                  <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">+13.700 €</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">jährlich eingespart</h3>
                  <p className="text-stone-700 leading-relaxed">
                    pro Assistenzkraft durch digitale Terminorganisation
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              {/* CO2 Reduktion */}
              <ScrollAnimationWrapper animationType="scale" delay={300}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-200 text-center">
                  <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">–4,5 t CO₂</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">pro Praxis und Jahr</h3>
                  <p className="text-stone-700 leading-relaxed">
                    durch weniger Fahrten, Papier und Effizienz
                  </p>
                </div>
              </ScrollAnimationWrapper>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* deutlich höhere Patientenzufriedenheit */}
              <ScrollAnimationWrapper animationType="fade-left" delay={400}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-200 text-center">
                  <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">Deutlich</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">höhere Patient:innenzufriedenheit und Compliance</h3>
                  <p className="text-stone-700 leading-relaxed">
                    massiv gesteigerte Zufriedenheit durch bessere Erfahrung
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Teilhabe fördern */}
              <ScrollAnimationWrapper animationType="fade-right" delay={500}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-200 text-center">
                  <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-stone-900 mb-2">Teilhabe fördern</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">für alle und jeden</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Mehrsprachige, barrierefreie Plattform
                  </p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Impact Section - keeping for reference */}
      <section className="hidden py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Zahlen & Wirkung
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Messbare Erfolge und nachweisbare Auswirkungen
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">ROI</div>
                <div className="h-20 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <span className="opacity-75">ROI Content Slot</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Statistik</div>
                <div className="h-20 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <span className="opacity-75">Stats Content Slot</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Impact</div>
                <div className="h-20 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <span className="opacity-75">Impact Content Slot</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Wachstum</div>
                <div className="h-20 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <span className="opacity-75">Growth Content Slot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Über uns
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Die Köpfe hinter HealthiQ – zwei Gründer mit einer Vision für das Gesundheitswesen von morgen.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Team Photo */}
              <ScrollAnimationWrapper animationType="fade-left" delay={200}>
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <img 
                      src="/Bene_Stephan_quadrat.jpg" 
                      alt="Benedikt Hochmuth und Stephan Körner - Die Gründer von HealthiQ" 
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Team Info */}
              <ScrollAnimationWrapper animationType="fade-right" delay={300}>
                <div className="order-1 lg:order-2 flex flex-col justify-between h-full space-y-6">
                  {/* Benedikt Hochmuth */}
                  <button
                    onClick={() => window.open('/Benedikt Hochmuth_Lebenslauf.pdf', '_blank')}
                    className="group bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-left hover:shadow-md transform hover:scale-102 transition-all duration-300 border border-gray-200 hover:border-gray-300 cursor-pointer w-full flex-1"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Benedikt Hochmuth
                    </h3>
                    <p className="text-lg text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Co-Founder & CEO</p>
                    <p className="text-gray-700 leading-relaxed">
                      Visionärer Stratege mit Erfahrung im Rettungsdienst und HR-Management, verantwortlich für Wachstum, Partnerschaften und die Etablierung von HealthiQ als neuen Standard.
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                      <div className="flex items-center justify-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        <span className="text-sm font-medium mr-2">Lebenslauf öffnen</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {/* Stephan Körner */}
                  <button
                    onClick={() => window.open('/Stephan Körner_Lebenslauf2.0.pdf', '_blank')}
                    className="group bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-left hover:shadow-md transform hover:scale-102 transition-all duration-300 border border-gray-200 hover:border-gray-300 cursor-pointer w-full flex-1"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Stephan Körner
                    </h3>
                    <p className="text-lg text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">Co-Founder & COO</p>
                    <p className="text-gray-700 leading-relaxed">
                      Operativer Stratege mit Hintergrund im Gesundheitsmanagement. Verantwortlich für klare Strukturen und reibungslose Umsetzung. Sein Fokus: Operations & Projektsteuerung.
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                      <div className="flex items-center justify-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        <span className="text-sm font-medium mr-2">Lebenslauf öffnen</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gray-200 opacity-50 max-w-6xl mx-auto"></div>
      </div>

      {/* Partner Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Unsere Partner
                </h2>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper animationType="fade-up" delay={200}>
              <div className="flex items-center justify-center space-x-12 md:space-x-16">
                <img 
                  src="/FFG-Logo.png" 
                  alt="FFG Logo" 
                  className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <img 
                  src="/MCI-Logo.svg.png" 
                  alt="MCI Logo" 
                  className="h-12 md:h-18 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <img 
                  src="/healthhub_logo.png" 
                  alt="Health Hub Logo" 
                  className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </ScrollAnimationWrapper>

             <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sonstiges
                </h2>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-8">
                <p className="text-gray-700 leading-relaxed">
                    <a href="https://brutkasten.com/artikel/healthiq-mci-innsbruck-studenten-entwickeln-plattform-fuer-ein-vernetztes-gesundheitswesen/10" target="_blank">brutkasten-Artikel über HealthiQ</a>
                </p>
                 <p className="text-gray-700 leading-relaxed">
                    <a href="https://www.mci.edu/de/news-filter/37-studiengaenge/161-news-sozial-gesundheits-public-management/6612-aus-dem-studium-zur-gruendungsidee" target="_blank">MCI-Artikel über HealthiQ</a>
                </p>
              </div>
            </ScrollAnimationWrapper>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-600 text-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animationType="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Kontakt aufnehmen
                </h2>
                <p className="text-xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
                  Du willst HealthiQ in deiner Praxis, deinem Netzwerk oder deinem System?<br />
                  Lass uns sprechen. Gemeinsam gestalten wir das Gesundheitssystem von morgen.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Direktkontakt */}
              <ScrollAnimationWrapper animationType="fade-left" delay={200}>
                <div className="bg-stone-700 rounded-2xl p-8 shadow-sm border border-stone-500 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-stone-50 mb-8 text-center">
                    Direktkontakt
                  </h3>
                  
                  <div className="space-y-8 flex-grow flex flex-col justify-center">
                    {/* Benedikt Hochmuth */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-stone-50 mb-4">
                        Benedikt Hochmuth
                      </h4>
                      <div className="space-y-3">
                        <a 
                          href="tel:+4916095169473"
                          className="flex items-center justify-center text-stone-200 hover:text-stone-50 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +49 160 95169473
                        </a>
                        <a 
                          href="mailto:benedikt.hochmuth@icloud.com"
                          className="flex items-center justify-center text-stone-200 hover:text-stone-50 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          benedikt.hochmuth@icloud.com
                        </a>
                      </div>
                    </div>
                    
                    {/* Stephan Körner */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-stone-50 mb-4">
                        Stephan Körner
                      </h4>
                      <div className="space-y-3">
                        <a 
                          href="tel:+436763859331"
                          className="flex items-center justify-center text-stone-200 hover:text-stone-50 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +43 676 3859331
                        </a>
                        <a 
                          href="mailto:stkoerner@outlook.com"
                          className="flex items-center justify-center text-stone-200 hover:text-stone-50 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          stkoerner@outlook.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Call-to-Action */}
              <ScrollAnimationWrapper animationType="fade-right" delay={300}>
                <div className="bg-stone-700 rounded-2xl p-8 shadow-sm border border-stone-500 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-stone-50 mb-8 text-center">
                    Nächste Schritte
                  </h3>
                  
                  <div className="space-y-6 flex-grow flex flex-col justify-center">
                    <a 
                      href="mailto:benedikt.hochmuth@icloud.com,stkoerner@outlook.com?subject=HealthiQ%20Interesse&body=Hallo%20Benedikt%20und%20Stephan,%0A%0Aich%20interessiere%20mich%20für%20HealthiQ%20und%20würde%20gerne%20mehr%20erfahren.%0A%0AViele%20Grüße"
                      className="w-full group px-8 py-4 bg-stone-50 text-stone-600 rounded-xl font-semibold text-lg hover:bg-stone-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Jetzt Kontakt aufnehmen
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                    
                    <div className="text-center pt-4">
                      <p className="text-stone-300 text-sm leading-relaxed">
                        Wir freuen uns auf das Gespräch und darauf, gemeinsam die Zukunft der Gesundheitsversorgung zu gestalten.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
