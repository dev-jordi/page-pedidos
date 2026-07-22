import React from 'react';
import officialCompanyLogoImg from '../assets/images/official_bitcom_logo_1784680835975.jpg';
import bitcomPedidosIconImg from '../assets/images/bitcom_pedidos_icon_1784680996666.jpg';

// Logo Oficial da Empresa (BitCom Softwares - 4 blocos coloridos)
export const BitComSoftwaresLogo: React.FC<{ className?: string; altText?: string }> = ({ 
  className = "h-10",
  altText = "BitCom Softwares Logo"
}) => {
  return (
    <img 
      src={officialCompanyLogoImg} 
      alt={altText} 
      className={`object-contain rounded-md shrink-0 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

// Logo Oficial do Aplicativo BitCom Pedidos (App Garçom & Comanda)
export const BitComPedidosAppIcon: React.FC<{ className?: string }> = ({ 
  className = "w-10 h-10"
}) => {
  return (
    <img 
      src={bitcomPedidosIconImg} 
      alt="BitCom Pedidos App Icon" 
      className={`object-contain rounded-xl shrink-0 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};





