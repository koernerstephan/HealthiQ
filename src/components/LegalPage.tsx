import React from 'react';
import { Shield, Mail, Phone, MapPin, FileText, Users, Clock, ArrowLeft } from 'lucide-react';
import Footer from './Footer';

const LegalPage: React.FC = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className="min-h-screen bg-healthiq-background">
      {/* Hero Section */}
      <section className="min-h-[40vh] bg-gradient-to-br from-healthiq-background to-healthiq-secondary flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-healthiq-primary mb-6 leading-tight">
              Impressum & Datenschutz
            </h1>
            <p className="text-xl md:text-2xl text-healthiq-text leading-relaxed max-w-3xl">
              Transparenz, Sicherheit und Vertrauen – wir nehmen Ihre Daten und Rechte ernst.
            </p>
            <div className="flex items-center space-x-6 text-healthiq-text mt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Österreichisches Recht</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Transparente Kommunikation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum Section */}
      <section className="py-20 bg-healthiq-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-healthiq-primary rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-healthiq-background" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-healthiq-primary">Impressum</h2>
          </div>
          
          <div className="bg-healthiq-background p-8 md:p-12 rounded-2xl">
            <div className="space-y-8">
              {/* Unternehmensangaben */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">Unternehmensangaben</h3>
                <div className="space-y-3 text-healthiq-text">
                  <p className="font-semibold text-lg">HealthiQ GesbR</p>
                  <p>Gesellschafter: Benedikt Hochmuth, Stephan Körner</p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-healthiq-primary mb-2">Anschrift:</h4>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-healthiq-primary" />
                      <span>Pacherstraße 8, 6020 Innsbruck, Österreich</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-healthiq-primary mb-2">Kontakt:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-healthiq-primary" />
                        <span>+49 160 95169473</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-healthiq-primary" />
                        <span>benedikt.hochmuth@healthiq.at</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-healthiq-primary" />
                        <span>+43 676 3859331</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-healthiq-primary" />
                        <span>stephan.koerner@healthiq.at</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rechtliche Angaben */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">Rechtliche Angaben</h3>
                <div className="space-y-2 text-healthiq-text">
                  <p><strong>Rechtsform:</strong> Gesellschaft bürgerlichen Rechts (GesbR) nach österreichischem Recht</p>
                  <p><strong>Firmenbuchnummer:</strong> entfällt (nicht eintragungspflichtig)</p>
                  <p><strong>UID-Nummer:</strong> entfällt</p>
                  <p><strong>Mitgliedschaften:</strong> keine</p>
                </div>
              </div>

              {/* Unternehmensgegenstand */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">Unternehmensgegenstand</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Entwicklung, Betrieb und Vermarktung einer digitalen Plattform zur Vermittlung, 
                  Buchung und Verwaltung von Terminen im Gesundheitswesen, einschließlich 
                  patientenorientierter, praxisorientierter und systemorientierter Anwendungen.
                </p>
              </div>

              {/* Weitere rechtliche Angaben */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">Weitere Angaben</h3>
                <div className="space-y-2 text-healthiq-text">
                  <p><strong>Vertretungsberechtigte Personen:</strong> Benedikt Hochmuth, Stephan Körner</p>
                  <p><strong>Berufsbezeichnung:</strong> Unternehmer im Bereich digitale Gesundheitsplattformen</p>
                  <p><strong>Berufsrecht:</strong> Es bestehen keine berufsrechtlichen Regelungen.</p>
                  <p><strong>Aufsichtsbehörde:</strong> keine</p>
                </div>
              </div>

              {/* Haftungsausschlüsse */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-healthiq-primary mb-2">Haftung für Inhalte</h4>
                  <p className="text-healthiq-text leading-relaxed">
                    Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-healthiq-primary mb-2">Haftung für Links</h4>
                  <p className="text-healthiq-text leading-relaxed">
                    Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Für diese Inhalte übernehmen wir keine Gewähr.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-healthiq-primary mb-2">Urheberrecht</h4>
                  <p className="text-healthiq-text leading-relaxed">
                    Die Inhalte dieser Website unterliegen dem Urheberrecht. Jede Verwendung außerhalb 
                    der engen Grenzen des Urheberrechtsgesetzes ist ohne Zustimmung unzulässig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datenschutz Section */}
      <section className="py-20 bg-healthiq-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-healthiq-primary rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-healthiq-background" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-healthiq-primary">Datenschutzerklärung</h2>
          </div>
          
          <div className="bg-healthiq-background p-8 md:p-12 rounded-2xl">
            <div className="space-y-8">
              {/* 1. Allgemeines */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">1. Allgemeines</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen 
                  (DSGVO, TKG 2003). Diese Datenschutzerklärung informiert Sie über die wichtigsten 
                  Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>
              </div>

              {/* 2. Verantwortliche Stelle */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">2. Verantwortliche Stelle</h3>
                <div className="bg-healthiq-secondary p-6 rounded-xl">
                  <div className="space-y-2 text-healthiq-text">
                    <p className="font-semibold">HealthiQ GesbR</p>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-healthiq-primary" />
                      <span>Pacherstraße 8, 6020 Innsbruck, Österreich</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-healthiq-primary" />
                      <span>benedikt.hochmuth@healthiq.at</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Erhebung und Verarbeitung */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Wir verarbeiten personenbezogene Daten, die Sie uns freiwillig über unsere Website mitteilen 
                  (z. B. über Kontaktformulare, E-Mail, Telefon). Dazu gehören Name, E-Mail-Adresse, 
                  Telefonnummer und Ihre Nachricht.
                </p>
              </div>

              {/* 4. Zweck der Verarbeitung */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">4. Zweck der Verarbeitung</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kommunikation und 
                  für die Erfüllung vertraglicher oder vorvertraglicher Maßnahmen verwendet.
                </p>
              </div>

              {/* 5. Speicherdauer */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">5. Speicherdauer</h3>
                <div className="bg-healthiq-secondary p-6 rounded-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-5 h-5 text-healthiq-primary" />
                    <span className="font-semibold text-healthiq-primary">Aufbewahrungsfristen</span>
                  </div>
                  <p className="text-healthiq-text leading-relaxed">
                    Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der Zwecke 
                    erforderlich ist oder wie es gesetzliche Aufbewahrungspflichten vorsehen.
                  </p>
                </div>
              </div>

              {/* 6. Weitergabe von Daten */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">6. Weitergabe von Daten</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung 
                  erforderlich ist oder gesetzlich vorgeschrieben wird.
                </p>
              </div>

              {/* 7. Ihre Rechte */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">7. Ihre Rechte</h3>
                <p className="text-healthiq-text leading-relaxed mb-4">
                  Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, 
                  Datenübertragbarkeit und Widerspruch gegen die Verarbeitung. Beschwerden können Sie 
                  an die Österreichische Datenschutzbehörde richten.
                </p>
              </div>

              {/* 8. Datensicherheit */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">8. Datensicherheit</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten 
                  vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
                </p>
              </div>

              {/* 9. Cookies & Tracking */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">9. Cookies & Tracking</h3>
                <p className="text-healthiq-text leading-relaxed">
                  Unsere Website verwendet Cookies, um die Nutzerfreundlichkeit zu verbessern. 
                  Diese können in den Browsereinstellungen deaktiviert werden.
                </p>
              </div>

              {/* 10. Kontakt */}
              <div>
                <h3 className="text-xl font-bold text-healthiq-primary mb-4">10. Kontakt bei Datenschutzfragen</h3>
                <div className="bg-healthiq-secondary p-6 rounded-xl">
                  <div className="space-y-2 text-healthiq-text">
                    <p className="font-semibold">Benedikt Hochmuth</p>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-healthiq-primary" />
                      <span>benedikt.hochmuth@healthiq.at</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-healthiq-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <button
            onClick={navigateHome}
            className="bg-healthiq-background text-healthiq-primary px-8 py-4 rounded-lg hover:bg-healthiq-secondary transition-colors flex items-center space-x-2 justify-center mx-auto text-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zur Startseite</span>
          </button>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default LegalPage;