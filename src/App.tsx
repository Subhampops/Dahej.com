import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = "Dahej.Com - Calculate Your Marriage Market Value";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Calculator />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;