import { createContext,useContext } from 'react';

import LogoIcon_Outline from '../assets/logos/capelo_outline.svg?react';
import LogoIcon_Filled from "../assets/logos/capelo_filled.svg?react";

const LogoPropriedades = createContext(null);

export function Logo({children, variant = "outline", color = "roxo", size = "md", className = "",}) {
  // const bgColors = {
  //   roxo: "bg-purple-600 text-white",
  //   escuro: "bg-gray-900 text-white",
  //   claro: "bg-white text-purple-600",
  // };


return (
      <LogoPropriedades.Provider value={{ variant, color, size }}>
        {/* <div className={`flex items-center gap-3 font-sans select-none p-4 rounded-xl ${bgColors[color] || ''} ${className}`}> */}
      <div className={`flex items-center gap-3 font-sans select-none p-4  ${className}`}>
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

    const iconColors = {
      roxo: "text-white",
      escuro: "text-purple-600",
      claro: "text-purple-600",
    };

    const bgIconColors = {
      roxo: "bg-purple-600",
      escuro: "bg-white",
      claro: "bg-white",
    };

    return (
      <div
        className={`${sizes[size] || sizes.md} ${iconColors[color] || "text-purple-600"} ${bgIconColors[color] || "text-purple-600"} ${className}`}
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
    sm: "text-base tracking-tight",
    md: "text-2xl tracking-tight",
    lg: "text-4xl ttracking-tight",
  };


  const textColors = {
    roxo: "text-purple-600",
    escuro: "text-white",
    claro: "text-purple-600",
  };

 
  const fontWeight = variant === "outline" ? "font-light" : "font-bold";

  return (
    <span
      className={`${fontWeight} ${textColors[color] || "text-purple-900"} ${textSizes[size] || textSizes.md} ${className}`}
    >
      StudyHub
    </span>
  );
};

