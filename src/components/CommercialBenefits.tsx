import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2, ShieldCheck, DollarSign, Award, Utensils, MessageCircle, Clock, Zap } from 'lucide-react';

interface CommercialBenefitsProps {
  onOpenWhatsApp: () => void;
}

export const CommercialBenefits: React.FC<CommercialBenefitsProps> = ({ onOpenWhatsApp }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso de internet no restaurante para o sistema funcionar?",
      answer: "Não! O BitCom Pedidos opera 100% via rede local Wi-Fi. Mesmo que a internet da sua operadora caia, os garçons continuam lançando pedidos e a cozinha continua imprimindo normalmente."
    },
    {
      question: "O aplicativo funciona em qualquer celular Android?",
      answer: "Sim! Ele foi otimizado para rodar de forma ultra rápida em qualquer smartphone ou tablet Android simples (a partir do Android 7.0)."
    },
    {
      question: "Como funciona o envio dos pedidos para a cozinha e bar?",
      answer: "Assim que o garçom confirma o pedido na mesa, o sistema envia e imprime automaticamente na impressora da cozinha, bar ou copa correspondente, separando os itens por setor."
    },
    {
      question: "O sistema cobra mensalidades ou taxas por pedido?",
      answer: "Não cobramos nenhuma taxa por pedido! O sistema é seu, instalado diretamente no caixa do seu restaurante com suporte e treinamento completo fornecido pela BitCom Softwares."
    },
    {
      question: "Consigo testar uma demonstração antes de fechar?",
      answer: "Com certeza! Basta clicar no botão do WhatsApp nesta página para agendar uma demonstração rápida sem compromisso com nossos especialistas."
    }
  ];

  return (
    <section id="vantagens" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: Business Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-2xs">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              Retorno sobre o Investimento
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Solução Definitiva que se Paga nos Primeiros Meses
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              O atraso de atendimento no salão é o principal motivo de insatisfação de clientes e perda de faturamento. Veja como o BitCom Pedidos transforma a gestão do seu restaurante:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Menos Tempo de Espera nas Mesas</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Pedidos enviados instantaneamente. As bebidas chegam na mesa antes mesmo do garçom terminar de anotar os pratos principais.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                  <DollarSign className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Controle Total de Consumo sem Furos</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Nenhum prato ou bebida sai sem estar lançado no sistema. Adeus consumo esquecido de ser cobrado no fechamento de conta.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Equipe mais Produtiva e Motivada</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Garçons atendem até o dobro de mesas sem cansaço extremo, focando em vender mais e encantar os clientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quero Automatizar meu Restaurante</span>
              </button>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl space-y-6">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              Ideal para Todos os Nichos
            </div>

            <h3 className="text-2xl font-extrabold leading-tight">
              A Solução Perfeita para:
            </h3>

            <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-200">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
                <span className="text-xl">🍕</span>
                <p className="text-white text-sm">Pizzarias & Massas</p>
                <p className="text-[11px] text-slate-400 font-normal">Lançamento de sabores meio a meio e bordas recheadas.</p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
                <span className="text-xl">🍺</span>
                <p className="text-white text-sm">Bares & Pubs</p>
                <p className="text-[11px] text-slate-400 font-normal">Comandas individuais por cliente com fechamento rápido.</p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
                <span className="text-xl">🍔</span>
                <p className="text-white text-sm">Hamburguerias & Lanches</p>
                <p className="text-[11px] text-slate-400 font-normal">Adicionais de hambúrguer e molhos customizados.</p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
                <span className="text-xl">🍱</span>
                <p className="text-white text-sm">Restaurantes À La Carte</p>
                <p className="text-[11px] text-slate-400 font-normal">Envio por etapas de entrada, prato principal e sobremesa.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto space-y-8 pt-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              Tire suas Dúvidas
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-100"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
