import React from 'react';
import { Smartphone, Zap, ShieldCheck, Clock, TrendingUp, Users, Utensils, CheckCircle2, QrCode, Wifi, DollarSign, Award } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="recursos" className="py-20 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Por que Escolher o BitCom Pedidos?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tudo o que seu Restaurante Precisa para Vender Mais e Melhor
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Desenvolvido pensando na rotina corrida de garçons, gerentes e cozinheiros. Descubra os pilares de eficiência que vão elevar o nível do seu estabelecimento.
          </p>
        </div>

        {/* 6 Key Commercial Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Velocidade Surpreendente */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group space-y-4 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Atendimento Ultra Rápido</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O garçom atende o cliente, seleciona as opções na tela do celular e envia. O pedido já é impresso na cozinha ou no bar imediatamente, sem precisar andar até o caixa.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Elimina ida e volta constante do garçom</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Aumenta a satisfação dos clientes</span>
              </li>
            </ul>
          </div>

          {/* 2. Leitura Prática de Comandas por QR Code */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group space-y-4 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
              <QrCode className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Abertura por QR Code & Cartão</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Basta apontar a câmera do celular para o QR Code da mesa ou código de barras do cartão de comanda. A mesa abre instantaneamente sem risco de digitação errada.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Leitura rápida via câmera do celular</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ideal para comandeiros individuais</span>
              </li>
            </ul>
          </div>

          {/* 3. Observações e Adicionais Personalizados */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group space-y-4 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
              <Utensils className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Pedidos Exatos com Detalhes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O cliente quer sem cebola? Com gelo e limão? Borda recheada? O garçom insere os detalhes em poucos toques, garantindo que a cozinha entregue exatamente o desejado.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Menos desperdício e refaimento de pratos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Aumenta a fidelidade do cliente</span>
              </li>
            </ul>
          </div>

          {/* 4. Funciona sem Depender da Internet Externa */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group space-y-4 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
              <Wifi className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">4. Funcionamento em Rede Local</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sua operação não para nunca! O sistema se comunica diretamente pelo roteador Wi-Fi da sua loja. Se a internet da rua cair, suas vendas continuam normais.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Estabilidade total sem quedas de nuvem</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Segurança e privacidade dos seus dados</span>
              </li>
            </ul>
          </div>

          {/* 5. Aumento de Giro de Mesas e Ticket */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group space-y-4 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">5. Maior Giro e Venda de Adicionais</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Com o atendimento rápido, as mesas desocupam mais cedo e novos clientes se sentam. Além disso, o garçom é incentivado a oferecer sobremesas e bebidas.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Até 30% mais faturamento por horário</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fechamento da conta com 1 toque</span>
              </li>
            </ul>
          </div>

          {/* 6. Integração Total com o Caixa BitCom */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all group space-y-4 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">6. Integrado ao Sistema BitCom</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Todos os lançamentos do aplicativo alimentam automaticamente o sistema de caixa e retaguarda do seu restaurante. Controle financeiro impecável.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Relatórios consolidados de vendas por garçom</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Suporte técnico especializado pela BitCom Softwares</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

// Internal icon helper
function Sparkles(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9 1.9 5.8 1.9-5.8 5.8-1.9-5.8-1.9z" />
      <path d="m5 3 1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
    </svg>
  );
}
