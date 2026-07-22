import React, { useState } from 'react';
import { Smartphone, RefreshCw, Settings, Plus, QrCode, Trash2, Send, CheckCircle2, Search, Play, Users, Utensils, Clock, MessageCircle, DollarSign, ChevronRight } from 'lucide-react';
import { initialGroups, initialProducts, initialMesas } from '../data/mockData';
import { Mesa, OrderItem, Product } from '../types';
import { BitComSoftwaresLogo, BitComPedidosAppIcon } from './Logos';

export const InteractiveSimulator: React.FC<{ onOpenWhatsApp?: () => void }> = ({ onOpenWhatsApp }) => {
  // App State
  const [mesas, setMesas] = useState<Mesa[]>(initialMesas);
  const [products] = useState<Product[]>(initialProducts);
  
  // Mobile App UI State
  const [selectedMesa, setSelectedMesa] = useState<Mesa | null>(null);
  const [showNovaMesaModal, setShowNovaMesaModal] = useState(false);
  const [novaMesaNum, setNovaMesaNum] = useState<string>('');
  const [isScanningQr, setIsScanningQr] = useState(false);
  
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<number | null>(null);
  const [tempItemNote, setTempItemNote] = useState<{ [key: number]: string }>({});
  
  const [garcomName] = useState('Lucas (Garçom)');
  const [toastMessage, setToastMessage] = useState<string | null>('✓ Sincronizado com o Caixa BitCom');

  const handleOpenMesa = (num: number) => {
    let existing = mesas.find(m => m.numero === num && m.status === 'A');
    if (!existing) {
      existing = {
        id: Date.now(),
        numero: num,
        dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
        percGarcom: 10,
        totalConsumo: 0,
        totalMesa: 0,
        status: 'A',
        itens: []
      };
      setMesas(prev => [...prev, existing!]);
    }
    setSelectedMesa(existing);
    setShowNovaMesaModal(false);
    setNovaMesaNum('');
  };

  const handleScanQrCodeSimulation = () => {
    setIsScanningQr(true);
    setTimeout(() => {
      const randomMesa = Math.floor(Math.random() * 12) + 2;
      setIsScanningQr(false);
      handleOpenMesa(randomMesa);
      setToastMessage(`✓ Mesa ${randomMesa} lida por QR Code!`);
      setTimeout(() => setToastMessage(null), 3500);
    }, 1000);
  };

  const handleAddItemToCurrentMesa = (prod: Product) => {
    if (!selectedMesa) return;
    const obs = tempItemNote[prod.id] || '';

    const newItem: OrderItem = {
      id: Date.now() + Math.random(),
      produtoId: prod.id,
      produtoNome: prod.nome,
      quantidade: 1,
      precoUnitario: prod.preco,
      totalItem: prod.preco,
      observacao: obs,
      garcom: garcomName
    };

    const updatedItens = [...selectedMesa.itens, newItem];
    const newTotal = updatedItens.reduce((acc, curr) => acc + curr.totalItem, 0);

    const updatedMesa = {
      ...selectedMesa,
      itens: updatedItens,
      totalConsumo: newTotal,
      totalMesa: newTotal
    };

    setSelectedMesa(updatedMesa);
    setMesas(prev => prev.map(m => m.id === updatedMesa.id ? updatedMesa : m));
    setTempItemNote(prev => ({ ...prev, [prod.id]: '' }));
    setShowAddItemModal(false);

    setToastMessage(`Item "${prod.nome}" adicionado!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateItemQty = (itemId: number, delta: number) => {
    if (!selectedMesa) return;
    const updatedItens = selectedMesa.itens.map(item => {
      if (item.id === itemId) {
        const newQty = Math.max(1, item.quantidade + delta);
        return {
          ...item,
          quantidade: newQty,
          totalItem: newQty * item.precoUnitario
        };
      }
      return item;
    });

    const newTotal = updatedItens.reduce((acc, curr) => acc + curr.totalItem, 0);
    const updatedMesa = {
      ...selectedMesa,
      itens: updatedItens,
      totalConsumo: newTotal,
      totalMesa: newTotal
    };

    setSelectedMesa(updatedMesa);
    setMesas(prev => prev.map(m => m.id === updatedMesa.id ? updatedMesa : m));
  };

  const handleRemoveItem = (itemId: number) => {
    if (!selectedMesa) return;
    const updatedItens = selectedMesa.itens.filter(i => i.id !== itemId);
    const newTotal = updatedItens.reduce((acc, curr) => acc + curr.totalItem, 0);

    const updatedMesa = {
      ...selectedMesa,
      itens: updatedItens,
      totalConsumo: newTotal,
      totalMesa: newTotal
    };

    setSelectedMesa(updatedMesa);
    setMesas(prev => prev.map(m => m.id === updatedMesa.id ? updatedMesa : m));
  };

  const handleEnviarPedido = () => {
    if (!selectedMesa) return;
    setToastMessage(`🚀 Pedido da Mesa ${selectedMesa.numero} enviado para a Cozinha e Bar!`);
    setTimeout(() => setToastMessage(null), 4000);
    setSelectedMesa(null);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.nome.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = selectedGroupFilter ? p.grupoId === selectedGroupFilter : true;
    return matchesSearch && matchesGroup;
  });

  return (
    <section id="simulador" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest shadow-2xs">
            <Smartphone className="w-3.5 h-3.5 text-amber-600" />
            Demonstração Interativa em Tempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Veja Como o Garçom Trabalha com o BitCom Pedidos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experimente agora! Clique nas mesas, lance pedidos, selecione observações e envie direto para a cozinha como se estivesse no salão do restaurante.
          </p>
        </div>

        {/* SIMULATOR GRID (App on phone + Realtime kitchen feed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">

          {/* LEFT: PHONE SIMULATOR (8-cols on desktop or centered) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm bg-[#0d0d0f] rounded-[42px] p-4 border-4 border-slate-300 shadow-2xl relative">
              
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-slate-900 rounded-b-xl mx-auto mb-2 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                <span className="w-8 h-1 rounded-full bg-slate-950" />
              </div>

              {/* Phone Screen Container */}
              <div className="bg-white text-slate-900 rounded-[28px] overflow-hidden h-[630px] flex flex-col justify-between shadow-inner relative font-sans">
                
                {/* Android App Header */}
                <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BitComPedidosAppIcon className="w-8 h-8" />
                    <div>
                      <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest leading-tight">BitCom Pedidos</p>
                      <p className="text-xs font-black text-white leading-tight">Atendimento Salão</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Conectado ao Caixa" />
                    <button
                      onClick={() => {
                        setToastMessage("Lista de mesas atualizada!");
                        setTimeout(() => setToastMessage(null), 2500);
                      }}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Main Screen Content */}
                <div className="p-4 flex-1 space-y-3 bg-slate-50/80 overflow-y-auto">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 px-1">
                    <span>Mesas Abertas: ({mesas.filter(m => m.status === 'A').length})</span>
                    <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                      Garçom: {garcomName}
                    </span>
                  </div>

                  {/* Mesa List Cards */}
                  <div className="space-y-2.5">
                    {mesas.filter(m => m.status === 'A').map(mesa => (
                      <div
                        key={mesa.id}
                        onClick={() => setSelectedMesa(mesa)}
                        className="bg-white hover:bg-amber-50/70 transition-all p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between cursor-pointer active:scale-[0.98] group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center border border-amber-200">
                            M{mesa.numero}
                          </div>
                          <div>
                            <p className="font-extrabold text-slate-900 text-sm">Mesa 0{mesa.numero}</p>
                            <p className="text-xs font-bold text-emerald-700">
                              Total: R$ {mesa.totalMesa.toFixed(2).replace('.', ',')}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 group-hover:text-amber-600 font-bold text-xs">
                          <span>{mesa.itens.length} itens</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Nova Mesa Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowNovaMesaModal(true)}
                      className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Abrir Nova Mesa</span>
                    </button>
                  </div>

                </div>

                {/* Bottom App Footer */}
                <div className="bg-slate-100 p-2.5 border-t border-slate-200 text-center flex items-center justify-between px-4">
                  <span className="text-[10px] font-extrabold text-slate-700 tracking-tight">BitCom Softwares<sup>®</sup></span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase">BitCom Pedidos Mobile</span>
                </div>

                {/* Toast Notification Banner */}
                {toastMessage && (
                  <div className="absolute bottom-12 left-3 right-3 bg-slate-900 text-white text-xs py-2.5 px-3.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
                    <span className="text-emerald-400 font-bold">{toastMessage}</span>
                  </div>
                )}

                {/* MODAL 1: NOVA MESA */}
                {showNovaMesaModal && (
                  <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-xs z-20 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl border border-slate-200 text-center space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center font-black text-lg">
                        M
                      </div>
                      <h3 className="text-base font-black text-slate-900">Abrir Nova Mesa</h3>
                      <p className="text-xs text-slate-600 font-medium">Digite o número ou comanda:</p>

                      <input
                        type="number"
                        value={novaMesaNum}
                        onChange={(e) => setNovaMesaNum(e.target.value)}
                        placeholder="Ex: 10"
                        className="w-full py-2.5 text-center text-2xl font-black text-slate-900 bg-slate-50 border-2 border-amber-500 rounded-xl focus:outline-none shadow-inner"
                      />

                      <button
                        onClick={handleScanQrCodeSimulation}
                        disabled={isScanningQr}
                        className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100"
                      >
                        <QrCode className="w-4 h-4 text-amber-600" />
                        {isScanningQr ? "Escaneando QR Code..." : "Ler QR Code da Mesa"}
                      </button>

                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <button
                          onClick={() => setShowNovaMesaModal(false)}
                          className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => {
                            const val = parseInt(novaMesaNum) || 1;
                            handleOpenMesa(val);
                          }}
                          className="py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs"
                        >
                          Iniciar Mesa
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL 2: MESA DETAIL / PEDIDO SCREEN */}
                {selectedMesa && (
                  <div className="absolute inset-0 bg-white z-30 flex flex-col justify-between font-sans">
                    
                    {/* Top Header */}
                    <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-400" />
                        <span className="font-extrabold text-sm text-white">Mesa {selectedMesa.numero}</span>
                      </div>
                      <button onClick={() => setSelectedMesa(null)} className="text-xs font-bold text-amber-400">
                        Voltar
                      </button>
                    </div>

                    {/* Order Items List */}
                    <div className="p-4 flex-1 space-y-3 overflow-y-auto bg-slate-50">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                        <span>Lançamentos na Mesa:</span>
                        <button
                          onClick={() => setShowAddItemModal(true)}
                          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1 shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" /> Adicionar Item
                        </button>
                      </div>

                      {selectedMesa.itens.length === 0 ? (
                        <div className="text-center py-12 text-slate-400 text-xs space-y-2">
                          <p className="font-bold text-slate-700">Mesa vazia no momento.</p>
                          <p>Clique em "+ Adicionar Item" para escolher bebidas, pizzas e pratos.</p>
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          {selectedMesa.itens.map(item => (
                            <div key={item.id} className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="font-black text-slate-900 text-xs uppercase">{item.produtoNome}</p>
                                  {item.observacao && (
                                    <p className="text-[11px] text-amber-800 font-semibold italic">Obs: {item.observacao}</p>
                                  )}
                                  <p className="text-xs font-extrabold text-emerald-700 pt-0.5">
                                    R$ {item.totalItem.toFixed(2).replace('.', ',')}
                                  </p>
                                </div>

                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                                    <button
                                      onClick={() => handleUpdateItemQty(item.id, -1)}
                                      className="font-black text-slate-800 text-sm px-1"
                                    >
                                      -
                                    </button>
                                    <span className="text-xs font-bold text-slate-900">{item.quantidade}</span>
                                    <button
                                      onClick={() => handleUpdateItemQty(item.id, 1)}
                                      className="font-black text-slate-800 text-sm px-1"
                                    >
                                      +
                                    </button>
                                  </div>

                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="p-1.5 text-rose-600 hover:text-rose-800"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Order Action Bar */}
                    <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                      <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 flex items-center justify-between font-black text-slate-900">
                        <span className="text-xs uppercase text-slate-600">Total Consumo:</span>
                        <span className="text-base text-amber-900">
                          R$ {selectedMesa.totalMesa.toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedMesa(null)}
                          className="py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                        >
                          Voltar
                        </button>
                        <button
                          onClick={handleEnviarPedido}
                          className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <Send className="w-3.5 h-3.5" /> Enviar Pedido
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL 3: CARDÁPIO / ADICIONAR ITEM */}
                {showAddItemModal && (
                  <div className="absolute inset-0 bg-slate-900/70 z-40 flex flex-col justify-end">
                    <div className="bg-white rounded-t-3xl max-h-[85%] flex flex-col p-4 space-y-3 shadow-2xl">
                      
                      <div className="flex items-center justify-between border-b pb-2">
                        <h3 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">Cardápio do Restaurante</h3>
                        <button onClick={() => setShowAddItemModal(false)} className="text-xs font-bold text-slate-500">
                          Fechar
                        </button>
                      </div>

                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Buscar produto (ex: pizza, refrigerante)..."
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      {/* Filter Chips */}
                      <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
                        <button
                          onClick={() => setSelectedGroupFilter(null)}
                          className={`px-3 py-1 rounded-full whitespace-nowrap font-bold ${
                            selectedGroupFilter === null
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          Todos
                        </button>
                        {initialGroups.map(g => (
                          <button
                            key={g.id}
                            onClick={() => setSelectedGroupFilter(g.id)}
                            className={`px-3 py-1 rounded-full whitespace-nowrap font-bold ${
                              selectedGroupFilter === g.id
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {g.nome}
                          </button>
                        ))}
                      </div>

                      {/* Product List */}
                      <div className="overflow-y-auto flex-1 space-y-2 pr-1">
                        {filteredProducts.map(p => (
                          <div key={p.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-bold text-xs text-slate-900">{p.nome}</p>
                                <p className="text-[10px] text-slate-500">{p.descricao}</p>
                                <p className="text-xs font-black text-amber-700 pt-1">
                                  R$ {p.preco.toFixed(2).replace('.', ',')}
                                </p>
                              </div>
                              <button
                                onClick={() => handleAddItemToCurrentMesa(p)}
                                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black rounded-lg shadow-2xs"
                              >
                                + Lançar
                              </button>
                            </div>

                            <input
                              type="text"
                              value={tempItemNote[p.id] || ''}
                              onChange={(e) => setTempItemNote({ ...tempItemNote, [p.id]: e.target.value })}
                              placeholder="Obs: Ex: sem cebola, com gelo..."
                              className="w-full text-[11px] px-2.5 py-1 border border-slate-300 rounded-lg bg-white"
                            />
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* RIGHT: REALTIME KITCHEN & CASHIER DISPLAY */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Realtime Kitchen Monitor Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                    <Utensils className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Monitor da Cozinha & Bar</h3>
                    <p className="text-xs text-slate-500">Impressão instantânea do pedido na praça</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300 animate-pulse">
                  Ao Vivo
                </span>
              </div>

              {/* Live Orders Feed */}
              <div className="space-y-3 min-h-[220px]">
                {mesas.flatMap(m => m.itens.map(item => ({ ...item, mesaNum: m.numero }))).length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs space-y-2">
                    <p className="font-bold text-slate-600">Nenhum pedido enviado ainda.</p>
                    <p>Use o celular no lado esquerdo para simular o lançamento de um garçom.</p>
                  </div>
                ) : (
                  mesas.flatMap(m => m.itens.map(item => ({ ...item, mesaNum: m.numero }))).slice(-3).reverse().map(i => (
                    <div key={i.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-900 text-xs uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
                          Mesa {i.mesaNum}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">Garçom: {i.garcom}</span>
                      </div>
                      <div className="flex items-baseline justify-between pt-1">
                        <div>
                          <p className="text-sm font-black text-slate-900">{i.quantidade}x {i.produtoNome}</p>
                          {i.observacao && (
                            <p className="text-xs text-amber-800 font-bold italic">Observação: {i.observacao}</p>
                          )}
                        </div>
                        <span className="text-sm font-extrabold text-emerald-700">R$ {i.totalItem.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Callout box */}
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-900 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sua cozinha sem gritaria e sem bilhetes rasurados!</span>
                </div>
              </div>
            </div>

            {/* Direct Commercial Call to Action */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-7 rounded-3xl text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <BitComSoftwaresLogo className="h-9 w-auto bg-white p-0.5 rounded-md" />
              </div>

              <h3 className="text-xl font-extrabold leading-tight">
                Gostou do que viu? Leve essa tecnologia para o seu restaurante!
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Nossos consultores instalam e configuram tudo no seu estabelecimento em tempo recorde, treinando toda a sua equipe.
              </p>

              <button
                onClick={onOpenWhatsApp}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Conversar com Consultor Comercial no WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
