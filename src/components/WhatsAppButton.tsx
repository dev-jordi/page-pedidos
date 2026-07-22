import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, CheckCircle2 } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "555197097176", // Editable phone number
  defaultMessage = "Olá! Gostaria de agendar uma demonstração do BitCom Pedidos para o meu restaurante."
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(defaultMessage);

  const handleSendWhatsApp = () => {
    const encodedMsg = encodeURIComponent(customMsg);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Tooltip Badge */}
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Fale com um Consultor no WhatsApp
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative"
          aria-label="Abrir conversa no WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              {/* Pulse effect */}
              <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none"></span>
              <MessageCircle className="w-7 h-7 fill-white text-emerald-500 relative z-10" />
            </>
          )}
        </button>
      </div>

      {/* WhatsApp Dialog Popover */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Atendimento BitCom Pedidos</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online no WhatsApp
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Chat Preview */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs space-y-1">
              <p className="font-bold text-slate-900 text-xs">👋 Olá! Seja bem-vindo à BitCom Softwares!</p>
              <p className="text-slate-600 text-[11px]">
                Deseja modernizar o atendimento das suas mesas e automatizar seu restaurante? Envie sua mensagem e fale com nosso consultor técnico.
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Sua Mensagem:
              </label>
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                rows={3}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none bg-white shadow-inner"
              />
            </div>

            {/* Direct Quick Benefits */}
            <div className="space-y-1 text-[11px] text-slate-600 font-medium pt-1">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Demonstração sem compromisso</span>
              </p>
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Suporte técnico rápido e humano</span>
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Iniciar Conversa no WhatsApp</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
};
