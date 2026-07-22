import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, CheckCircle2, Heart } from 'lucide-react';
import { BitComSoftwaresLogo } from './Logos';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Responsible Company (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3 bg-slate-800/80 p-3 px-4 rounded-2xl border border-slate-700/80 inline-flex">
              <BitComSoftwaresLogo className="h-10 w-auto bg-white p-1 rounded-lg" />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-base tracking-tight uppercase">BitCom Pedidos</span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-wide uppercase mt-0.5">Comanda Eletrônica</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Sistema de automação comercial especialista em atendimento de mesas, comanda eletrônica e gestão de restaurantes, bares, lanchonetes e pizzarias.
            </p>
          </div>

          {/* Col 2: Fast Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-extrabold text-white text-sm uppercase tracking-wider">Navegação</p>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#recursos" className="hover:text-amber-400 transition-colors">Recursos do Sistema</a></li>
              <li><a href="#simulador" className="hover:text-amber-400 transition-colors">Testar no Celular</a></li>
              <li><a href="#vantagens" className="hover:text-amber-400 transition-colors">Vantagens do Restaurante</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Sales Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-extrabold text-white text-sm uppercase tracking-wider">Atendimento & Suporte</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Fale diretamente com nossa equipe comercial para agendar uma demonstração no seu estabelecimento.
            </p>

            <button
              onClick={onOpenWhatsApp}
              className="w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} BitCom Softwares<sup>®</sup>. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>BitCom Pedidos v1.1.0 — Tecnologia para Restaurantes do Brasil</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
