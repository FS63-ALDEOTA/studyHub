import React from "react"; 

import {
  Play,
  Lock,
  CheckCircle,
  Hourglass,
  XCircle,
  CaretDown,
} from "@phosphor-icons/react";

const ModuleCard = () => {
  const modulos = [
    {
      id: 1,
      titulo: "Módulo 1: Introdução",
      licoes: [
        {
          id: 1,
          titulo: "O que é React?",
          duracao: "18:20",
          status: "concluido",
        },
        {
          id: 2,
          titulo: "Componentes",
          duracao: "20:10",
          status: "concluido",
        },
        {
          id: 3,
          titulo: "Estrutura de pastas",
          duracao: "21:30",
          status: "assistindo",
        },
        {
          id: 4,
          titulo: "Primeiro projeto",
          duracao: "20:10",
          status: "pendente",
        },
      ],
      tempo: "1h 20minutos",
    },
    {
      id: 2,
      titulo: "Módulo 2: Props e Componentes",
      licoes: [],
      tempo: "2h 45minutos",
    },
    {
      id: 3,
      titulo: "Módulo 3: State e Hooks",
      licoes: [],
      tempo: "1h 40minutos",
    },
  ];

  return (
    <>
    <div className="max-w-3xl w-full flex flex-col gap-4">
      {modulos.map((modulo) => {
        const idModuloAnterior = modulo.id - 1;

        const moduloAnterior = modulos.find(
          (item) => item.id === idModuloAnterior,
        );

        const moduloAnteriorConcluido =
          moduloAnterior &&
          moduloAnterior.licoes.length > 0 &&
          moduloAnterior.licoes.every((licao) => licao.status === "concluido");

        const moduloConcluido =
          modulo.licoes.length > 0 &&
          modulo.licoes.every((licao) => licao.status === "concluido");

        const moduloBloqueado =
          moduloAnterior && !moduloAnteriorConcluido;

        let iconeModulo;
        let coresIcones;
        let corBorda;
        let textoStatus;

        if (moduloBloqueado) {
          iconeModulo = <Lock size={24} weight="bold" />;
          coresIcones = "bg-gray-100 text-gray-500";
          corBorda = "border-gray-200 bg-gray-50";
          textoStatus = "Bloqueado • Conclua o módulo anterior para acessar";
        } else if (moduloConcluido) {
          iconeModulo = <CheckCircle size={24} weight="regular" />;
          coresIcones = "bg-green-100 text-green-600";
          corBorda = "border-gray-200 bg-white";
          textoStatus = `${modulo.licoes.length} lições • ${modulo.tempo}`;
        } else {
          iconeModulo = <Play size={24} weight="fill" />;
          coresIcones = "bg-purple-600 text-white rounded-lg";
          corBorda = "border-purple-100 bg-purple-50/30";
          textoStatus = `${modulo.licoes.length} lições • ${modulo.tempo} (Em andamento)`;
        }

        return (
          <details
            key={modulo.id}
            className={`border rounded-xl shadow-sm overflow-hidden group ${corBorda}`}
          >
            <summary
              className={
                moduloBloqueado
                  ? "list-none flex items-center gap-4 p-4 cursor-not-allowed [&::-webkit-details-marker]:hidden"
                  : "list-none flex items-center gap-4 p-4 cursor-pointer [&::-webkit-details-marker]:hidden"
              }
              onClick={(e) => {
                if (moduloBloqueado) {
                  e.preventDefault();
                }
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${coresIcones}`}
              >
                {iconeModulo}
              </div>
              <div className="flex-1 flex flex-col">
                <h2
                  className={`text-lg font-bold ${moduloBloqueado ? "text-gray-600" : moduloConcluido ? "text-gray-800" : "text-purple-700"}`}
                >
                  {modulo.titulo}
                </h2>
                <span className="text-sm font-medium text-gray-500">
                  {textoStatus}
                </span>
              </div>
              {!moduloBloqueado && (
                <CaretDown
                  size={20}
                  className="text-gray-400 group-open:rotate-180 transition-transform"
                />
              )}
              {moduloBloqueado && <Lock size={20} className="text-gray-400" />}
            </summary>
            <div>
              {modulo.licoes.map((licao) => {
                let icone;
                let classeIcone;

                if (licao.status === "concluido") {
                  icone = <CheckCircle size={24} weight="fill" />;
                  classeIcone = "text-green-500";
                } else if (licao.status === "assistindo") {
                  icone = <Hourglass size={24} weight="duotone" />;
                  classeIcone = "text-blue-500";
                } else if (licao.status === "pendente") {
                  icone = <XCircle size={24} weight="regular" />;
                  classeIcone = "text-gray-500";
                }

                return (
                  <div key={licao.id}>
                    <span className={classeIcone}>{icone}</span>
                    <span>{licao.titulo}</span>
                    <span>Duração: {licao.duracao}</span>
                  </div>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
    </>
  );
};

export default ModuleCard;