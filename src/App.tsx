import React from 'react';
import HomePage from './components/HomePage';
import ColorPreview from './components/ColorPreview';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';

function App() {
  // Für Development: ColorPreview anzeigen
  // Für Production: HomePage anzeigen
  const showColorPreview = window.location.search.includes('colors');
  const showLegalPage = window.location.search.includes('legal') || window.location.hash === '#legal';
  
  if (showColorPreview) {
    return (
      <>
        <ColorPreview />
        <Footer />
      </>
    );
  }

  if (showLegalPage) {
    return (
      <>
        <LegalPage />
      </>
    );
  }

  return (
    <>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
