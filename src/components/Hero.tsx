import React from 'react';
import { Smartphone, Zap, CheckCircle2, MessageCircle, Play, ShieldCheck, Clock, TrendingUp, Users, Utensils } from 'lucide-react';
import { BitComPedidosAppIcon } from './Logos';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenWhatsApp }) => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-12 pb-20 lg:pt-16 lg:pb-28 text-slate-900 border-b border-slate-200">
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Sales Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Soft Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100 border border-amber-300 rounded-full shadow-2xs">
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
              <span className="text-xs text-amber-900 font-extrabold uppercase tracking-wide">
                Sistema de Comandas & Atendimento Inteligente
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight text-slate-900">
              Acelere as Mesas do seu Restaurante e <br />
              <span className="font-extrabold text-amber-600">Venda Muito Mais!</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Com o aplicativo <strong>BitCom Pedidos</strong>, seus garçons lançam os pedidos na mesa direto pelo celular e a cozinha recebe na hora. Acabe com atrasos, erros em comandas de papel e filas no caixa.
            </p>

            {/* Value Props Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0">
              
              <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-2xs">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-left">
                  <span className="block text-slate-900 font-extrabold text-xs">Atendimento 3x Rápido</span>
                  <span className="text-[11px] text-slate-500 font-normal">Sem viagens à cozinha</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-left">
                  <span className="block text-slate-900 font-extrabold text-xs">Zero Erros de Pedido</span>
                  <span className="text-[11px] text-slate-500 font-normal">Pedido claro e direto</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-2xs">
                <TrendingUp className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-left">
                  <span className="block text-slate-900 font-extrabold text-xs">Aumenta o Faturamento</span>
                  <span className="text-[11px] text-slate-500 font-normal">Giro de mesa mais rápido</span>
                </div>
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenWhatsApp}
                className="px-7 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-sm uppercase tracking-wider rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center gap-3 transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </button>

              <button
                onClick={onOpenDemo}
                className="px-6 py-4 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm uppercase tracking-wider rounded-2xl border border-slate-300 transition-colors flex items-center gap-2 shadow-2xs"
              >
                <Play className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>Ver Demonstração Prática</span>
              </button>
            </div>

            {/* Social Trust note */}
            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Desenvolvido pela <strong>BitCom Softwares®</strong> — Tradição e Confiança em Automação.</span>
            </div>

          </div>

          {/* Right Product Interactive Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              {/* Top Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <BitComPedidosAppIcon className="w-12 h-12" />
                  <div>
                    <h3 className="font-black text-slate-900 text-base leading-tight">BitCom Pedidos</h3>
                    <p className="text-xs text-amber-600 font-bold">App Garçom & Comanda</p>
                  </div>
                </div>
                <div className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Ao Vivo</span>
                </div>
              </div>

              {/* Realtime Order Visual Mockup */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-inner">
                
                {/* Table Status Bar */}
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wide">Mesa 08 — Garçom Lucas</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Enviado à Cozinha
                  </span>
                </div>

                {/* Items in Table Order */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <div>
                      <p className="font-bold text-slate-900">1x Pizza Calabresa Especial</p>
                      <p className="text-[11px] text-slate-500">Obs: Sem Cebola, Borda Recheada</p>
                    </div>
                    <span className="font-extrabold text-amber-600 text-xs">R$ 68,00</span>
                  </div>

                  <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <div>
                      <p className="font-bold text-slate-900">2x Refrigerante Guaraná 350ml</p>
                      <p className="text-[11px] text-slate-500">Obs: Com gelo e fatia de limão</p>
                    </div>
                    <span className="font-extrabold text-amber-600 text-xs">R$ 14,00</span>
                  </div>
                </div>

                {/* Total Summary Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 px-1">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Total Consumido:</span>
                  <span className="text-xl font-black text-slate-900">R$ 82,00</span>
                </div>

              </div>

              {/* Callout box */}
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-center gap-3">
                <Utensils className="w-6 h-6 text-amber-600 shrink-0" />
                <p className="text-xs text-amber-900 font-medium leading-relaxed">
                  Sem taxas por pedido. Sistema definitivo instalado no caixa do seu estabelecimento com suporte total!
                </p>
              </div>

              {/* Quick Interactive Button */}
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>Simular Pedido no App Garçom Agora</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
