import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Privacy, Terms, Refund, Shipping, LegalWrapper } from './pages/Legal';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<LegalWrapper><Privacy /></LegalWrapper>} />
            <Route path="/terms" element={<LegalWrapper><Terms /></LegalWrapper>} />
            <Route path="/refund" element={<LegalWrapper><Refund /></LegalWrapper>} />
            <Route path="/shipping" element={<LegalWrapper><Shipping /></LegalWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;