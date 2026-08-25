import {useEffect, useState} from "react"; 

import {
  PlayIcon,
  LockIcon,
  CheckCircleIcon,
  HourglassIcon,
  XCircleIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";


const ModuleCard = ({ cursoIdSelecionado = 1, usuarioIdLogado = 1 }) => {
  const [modulos, setModulos] = useState([]);
  const [progresso, setProgresso] = useState([]);
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/modulos").then((res) => res.json()),
      fetch("http://localhost:3000/progresso").then((res) => res.json()),
      fetch("http://localhost:3000/aulas").then((res) => res.json()),
    ]).then(([dadosModulos, dadosProgresso, dadosAulas]) => {
      const modulosFiltrados = dadosModulos.filter(
        (modulo) => Number(modulo.cursoId) === Number(cursoIdSelecionado),
      );

      setModulos(modulosFiltrados);
      setProgresso(dadosProgresso);
      setAulas(dadosAulas);
    });
  }, [cursoIdSelecionado]);

  return (
    <>
      <div className="max-w-3xl w-full flex flex-col gap-4">
        {modulos.map((modulo, index) => {
          const aulasModulos = aulas.filter(
            (aula) => Number(aula.moduloId) === Number(modulo.id),
          );

          const ligacoesComStatus = aulasModulos.map((aula) => {
            const registroProgresso = progresso.find(
              (item) => Number(item.aulaId) === Number(aula.id),
            );

            let status = "pendente";
            if (registroProgresso) {
              status = registroProgresso.concluido ? "concluido" : "assistindo";
            }

            return {
              ...aula,
              status,
            };
          });

          const duracaoTotalMinutos = ligacoesComStatus.reduce(
            (acc, l) => acc + (Number(l.duracaoMinutos) || 0),
            0,
          );
          const tempoFormatado = `${Math.round(duracaoTotalMinutos)}min`;

          const moduloConcluido =
            ligacoesComStatus.length > 0 &&
            ligacoesComStatus.every(
              (ligacao) => ligacao.status === "concluido",
            );

          const moduloAnterior = index > 0 ? modulos[index - 1] : null;
          let moduloAnteriorConcluido = false;

          if (moduloAnterior) {
            const aulasAnteriores = aulas.filter(
              (aula) => Number(aula.moduloId) === Number(moduloAnterior.id),
            );
            moduloAnteriorConcluido =
              aulasAnteriores.length > 0 &&
              aulasAnteriores.every((aula) => {
                const p = progresso.find(
                  (item) =>
                    Number(item.usuarioId) === Number(usuarioIdLogado) &&
                    Number(item.aulaId) === Number(aula.id),
                );
                return p && p.concluido;
              });
          }

          const moduloBloqueado = index > 0 && !moduloAnteriorConcluido;

          let iconeModulo;
          let coresIcones;
          let corBorda;
          let textoStatus;

          if (moduloBloqueado) {
            iconeModulo = <LockIcon size={24} weight="bold" />;
            coresIcones = "bg-gray-100 text-gray-500";
            corBorda = "border-gray-200 bg-gray-50";
            textoStatus = "Bloqueado • Conclua o módulo anterior para acessar";
          } else if (moduloConcluido) {
            iconeModulo = <CheckCircleIcon size={24} weight="regular" />;
            coresIcones = "bg-green-100 text-green-600";
            corBorda = "border-gray-200 bg-white";
            textoStatus = `${ligacoesComStatus.length} lições • ${tempoFormatado}`;
          } else {
            iconeModulo = <PlayIcon size={24} weight="fill" />;
            coresIcones = "bg-purple-600 text-white rounded-lg";
            corBorda = "border-purple-100 bg-purple-50/30";
            textoStatus = `${
              ligacoesComStatus.length
            } lições • ${tempoFormatado} (Em andamento)`;
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
                    className={`text-lg font-bold ${
                      moduloBloqueado
                        ? "text-gray-600"
                        : moduloConcluido
                          ? "text-gray-800"
                          : "text-purple-700"
                    }`}
                  >
                    {modulo.nome}
                  </h2>
                  <span className="text-sm font-medium text-gray-500">
                    {textoStatus}
                  </span>
                </div>
                {!moduloBloqueado && (
                  <CaretDownIcon
                    size={20}
                    className="text-gray-400 group-open:rotate-180 transition-transform"
                  />
                )}
                {moduloBloqueado && (
                  <LockIcon size={20} className="text-gray-400" />
                )}
              </summary>
              <div>
                {ligacoesComStatus.map((licao) => {
                  let icone;
                  let classeIcone;

                  if (licao.status === "concluido") {
                    icone = <CheckCircleIcon size={24} weight="fill" />;
                    classeIcone = "text-green-500";
                  } else if (licao.status === "assistindo") {
                    icone = <HourglassIcon size={24} weight="duotone" />;
                    classeIcone = "text-blue-500";
                  } else if (licao.status === "pendente") {
                    icone = <XCircleIcon size={24} weight="regular" />;
                    classeIcone = "text-gray-500";
                  }

                  return (
                    <div
                      key={licao.id}
                      className="flex items-center justify-between p-3 border-t border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className={classeIcone}>{icone}</span>
                        <span className="text-gray-700 font-medium">
                          {licao.nome}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        Duração: {licao.duracaoMinutos} min
                      </span>
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