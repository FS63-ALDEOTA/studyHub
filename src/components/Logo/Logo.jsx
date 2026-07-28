import { createContext,useContext } from 'react';

import LogoIcon_Outline from '../../assets/logos/capelo_filled.svg?react';
import LogoIcon_Filled from "../../assets/logos/capelo_outline.svg?react";

const LogoPropriedades = createContext(null);

export function Logo({children, variant = "outline", color = "roxo", size = "md", className = "",}) {
  const bgColors = {
    roxo: "bg-purple-50 text-purple-600",
    escuro: "bg-gray-900 text-white",
    claro: "bg-white text-gray-900",
  };


return (
       <LogoPropriedades.Provider value={{ variant, color, size }}>
      <div className={`flex items-center gap-3 font-sans select-none p-4 rounded-xl ${bgColors[color] || ''} ${className}`}>
        {children}
      </div>
    </LogoPropriedades.Provider>
  );
}

// Icone Opções

Logo.Icon = function LogoIconComponent({className=''}) {
    const {variant,color, size} = useContext (LogoPropriedades);

    const sizes = {
      sm: "w-8 h-8 rounded-lg p-1.5",
      md: "w-11 h-11 rounded-xl p-2.5", 
      lg: "w-16 h-16 rounded-2xl p-3.5",
    };

    const iconColors ={
        roxo: 'text-purple-600',
        escuro: 'text-purple-400',
        claro: 'text-gray-900'

    };
    return (
      <div
        className={`${sizes[size] || sizes.md} ${iconColors[color] || "text-purple-600"} transition-colors ${className}`}
      >
        {variant === "outline" ? (
          <LogoIcon_Outline className="w-full h-full object-contain" />
        ) : (
          <LogoIcon_Filled className="w-full h-full object-contain" />
        )}
      </div>
    );
};

// Texto do Logo

Logo.Text = function LogoTextComponent({ className = "" }) {
 
  const { variant, color, size } = useContext(LogoPropriedades);

  const textSizes = {
    sm: "text-base tracking-wide",
    md: "text-2xl tracking-wide",
    lg: "text-4xl tracking-wider",
  };


  const textColors = {
    roxo: "text-purple-900",
    escuro: "text-white",
    claro: "text-gray-900",
  };

 
  const fontWeight = variant === "outline" ? "font-medium" : "font-bold";

  return (
    <span
      className={`${fontWeight} ${textColors[color] || "text-purple-900"} ${textSizes[size] || textSizes.md} ${className}`}
    >
      StudyHub
    </span>
  );
};

