import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { CommercialBenefits } from './components/CommercialBenefits';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const scrollToDemo = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi o site do BitCom Pedidos e gostaria de agendar uma demonstração sem compromisso para o meu restaurante.");
    window.open(`https://wa.me/555197097176?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenDemo={scrollToDemo} onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Commercial Content */}
      <main>
        {/* Sales Hero Section */}
        <Hero onOpenDemo={scrollToDemo} onOpenWhatsApp={handleOpenWhatsApp} />

        {/* System Features Overview */}
        <FeaturesSection />

        {/* Live Waiter App Interactive Simulator */}
        <InteractiveSimulator onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Business Benefits & FAQ */}
        <CommercialBenefits onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Floating WhatsApp Sales Button */}
      <WhatsAppButton />
    </div>
  );
}
