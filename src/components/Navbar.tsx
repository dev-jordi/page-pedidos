import React, { useState } from 'react';
import { Smartphone, Sparkles, MessageCircle, Menu, X } from 'lucide-react';
import { BitComSoftwaresLogo } from './Logos';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Header (Company Logo Image 1x) */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <BitComSoftwaresLogo className="h-11 w-auto" />
            <div className="flex flex-col leading-none border-l border-slate-200 pl-3">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-slate-900 text-lg tracking-tight uppercase">Pedidos</span>
                <span className="bg-amber-500/10 text-amber-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md uppercase">Garçom</span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">Comanda Eletrônica</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links (Sales Focused) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-600">
          <a href="#recursos" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Recursos
          </a>
          <a href="#simulador" className="hover:text-amber-600 transition-colors flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            Ver no Celular
          </a>
          <a href="#faq" className="hover:text-amber-600 transition-colors">
            Perguntas Frequentes
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all flex items-center gap-2 shadow-2xs"
          >
            <Smartphone className="w-4 h-4 text-slate-700" />
            Testar App Garçom
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="px-5 py-2.5 bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            WhatsApp
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
          aria-label="Alternar Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          {/* Company credit in mobile menu */}
          <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-500">Desenvolvido por:</span>
            <BitComSoftwaresLogo className="h-8 w-auto" />
          </div>

          <a
            href="#recursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold uppercase text-slate-700 hover:bg-slate-100 hover:text-amber-600"
          >
            Recursos do Sistema
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold uppercase text-slate-700 hover:bg-slate-100 hover:text-amber-600"
          >
            Simulador do App Garçom
          </a>
          <a
            href="#vantagens"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold uppercase text-slate-700 hover:bg-slate-100 hover:text-amber-600"
          >
            Vantagens do Restaurante
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold uppercase text-slate-700 hover:bg-slate-100 hover:text-amber-600"
          >
            Dúvidas Frequentes
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 px-4 text-xs font-bold uppercase rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-slate-700" />
              Testar Demonstrativo
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-3 px-4 text-xs font-extrabold uppercase rounded-xl bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
