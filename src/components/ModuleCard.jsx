import { useEffect, useState } from "react";
import {
  PlayIcon,
  LockIcon,
  CheckCircleIcon,
  XCircleIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

function calcularStatus(aula, progresso, usuarioId) {
  const registro = progresso.find(
    (item) =>
      Number(item.aulaId) === Number(aula.id) &&
      Number(item.usuarioId) === Number(usuarioId),
  );
  if (!registro) return "pendente";
  return registro.concluido ? "concluido" : "assistindo";
}

function calcularAulasDoModulo(modulo, aulas, progresso, usuarioId) {
  const aulasModulos = aulas.filter(
    (aula) => Number(aula.moduloId) === Number(modulo.id),
  );
  return aulasModulos.map((aula) => ({
    ...aula,
    status: calcularStatus(aula, progresso, usuarioId),
  }));
}

function calcularDuracaoTotal(aulasComStatus) {
  const totalMinutos = aulasComStatus.reduce(
    (acc, aula) => acc + (Number(aula.duracaoMinutos) || 0),
    0,
  );
  return `${Math.round(totalMinutos)}min`;
}

function moduloEstaConcluido(aulasComStatus) {
  return (
    aulasComStatus.length > 0 &&
    aulasComStatus.every((aula) => aula.status === "concluido")
  );
}

function moduloAnteriorFoiConcluido(
  moduloAnterior,
  aulas,
  progresso,
  usuarioId,
) {
  if (!moduloAnterior) return true;

  const aulasAnteriores = aulas.filter(
    (aula) => Number(aula.moduloId) === Number(moduloAnterior.id),
  );

  return (
    aulasAnteriores.length > 0 &&
    aulasAnteriores.every((aula) => {
      const registro = progresso.find(
        (item) =>
          Number(item.usuarioId) === Number(usuarioId) &&
          Number(item.aulaId) === Number(aula.id),
      );
      return registro && registro.concluido;
    })
  );
}

function definirVisualDoModulo({
  bloqueado,
  concluido,
  totalAulas,
  tempoFormatado,
}) {
  if (bloqueado) {
    return {
      icone: <LockIcon size={24} weight="bold" />,
      coresIcones: "bg-gray-100 text-gray-500",
      corBorda: "border-gray-200 bg-gray-50",
      textoStatus: "Bloqueado • Conclua o módulo anterior para acessar",
    };
  }

  if (concluido) {
    return {
      icone: <CheckCircleIcon size={24} weight="regular" />,
      coresIcones: "bg-green-100 text-green-600",
      corBorda: "border-gray-200 bg-white",
      textoStatus: `${totalAulas} lições • ${tempoFormatado}`,
    };
  }

  return {
    icone: <PlayIcon size={24} weight="fill" />,
    coresIcones: "bg-purple-600 text-white rounded-lg",
    corBorda: "border-purple-100 bg-purple-50/30",
    textoStatus: `${totalAulas} lições • ${tempoFormatado} (Em andamento)`,
  };
}

function definirVisualDaAula(status) {
  const mapa = {
    concluido: {
      icone: <CheckCircleIcon size={24} weight="fill" />,
      classe: "text-green-500",
      classeContainer: "border-t border-gray-100",
    },
    assistindo: {
      icone: <PlayIcon size={20} weight="fill" />,
      classe: "text-purple-600",
      classeContainer: "border-2 border-purple-600 rounded-lg m-1",
    },
    pendente: {
      icone: <XCircleIcon size={24} weight="regular" />,
      classe: "text-gray-500",
      classeContainer: "border-t border-gray-100",
    },
  };
  return mapa[status];
}

function BadgeStatus({ status }) {
  if (status !== "assistindo") return null;
  return (
    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded uppercase tracking-wide">
      Assistindo
    </span>
  );
}

async function alternarConclusaoAula(
  aulaId,
  usuarioId,
  progresso,
  setProgresso,
) {
  const registroExistente = progresso.find(
    (item) =>
      Number(item.aulaId) === Number(aulaId) &&
      Number(item.usuarioId) === Number(usuarioId),
  );

  if (registroExistente) {
    const atualizado = {
      ...registroExistente,
      concluido: !registroExistente.concluido,
    };
    await fetch(`http://localhost:3000/progresso/${registroExistente.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(atualizado),
    });
    setProgresso((prev) =>
      prev.map((item) =>
        item.id === registroExistente.id ? atualizado : item,
      ),
    );
  } else {
    const novoRegistro = { aulaId: Number(aulaId), usuarioId: Number(usuarioId), concluido: true };
    const resposta = await fetch("http://localhost:3000/progresso", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoRegistro),
    });
    const criado = await resposta.json();
    setProgresso((prev) => [...prev, criado]);
  }
}

function processarModulos(modulos, aulas, progresso, usuarioId) {
  return modulos.map((modulo, index) => {
    const aulasComStatus = calcularAulasDoModulo(
      modulo,
      aulas,
      progresso,
      usuarioId,
    );
    const tempoFormatado = calcularDuracaoTotal(aulasComStatus);
    const concluido = moduloEstaConcluido(aulasComStatus);

    const moduloAnterior = index > 0 ? modulos[index - 1] : null;
    const bloqueado =
      index > 0 &&
      !moduloAnteriorFoiConcluido(moduloAnterior, aulas, progresso, usuarioId);

    const visual = definirVisualDoModulo({
      bloqueado,
      concluido,
      totalAulas: aulasComStatus.length,
      tempoFormatado,
    });

    return {
      ...modulo,
      aulasComStatus,
      bloqueado,
      concluido,
      ...visual,
    };
  });
}

const ModuleCard = ({ cursoIdSelecionado = 1, usuarioIdLogado = 1 }) => {
  const [modulos, setModulos] = useState([]);
  const [progresso, setProgresso] = useState([]);
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/modulos").then((res) => res.json()),
      fetch("http://localhost:3000/progresso").then((res) => res.json()),
      fetch("http://localhost:3000/aulas").then((res) => res.json()),
    ])
      .then(([dadosModulos, dadosProgresso, dadosAulas]) => {
        const modulosFiltrados = dadosModulos.filter(
          (modulo) => Number(modulo.cursoId) === Number(cursoIdSelecionado),
        );
        setModulos(modulosFiltrados);
        setProgresso(dadosProgresso);
        setAulas(dadosAulas);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do curso:", error);
      });
  }, [cursoIdSelecionado]);

  const modulosProcessados = processarModulos(
    modulos,
    aulas,
    progresso,
    usuarioIdLogado,
  );

  return (
    <div className="max-w-3xl w-full flex flex-col gap-4">
      {modulosProcessados.map((modulo) => (
        <details
          key={modulo.id}
          className={`border rounded-xl shadow-sm overflow-hidden group ${modulo.corBorda}`}
        >
          <summary
            className={`list-none flex items-center gap-4 p-4 [&::-webkit-details-marker]:hidden ${
              modulo.bloqueado ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={(e) => modulo.bloqueado && e.preventDefault()}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${modulo.coresIcones}`}
            >
              {modulo.icone}
            </div>
            <div className="flex-1 flex flex-col">
              <h2
                className={`text-lg font-bold ${
                  modulo.bloqueado
                    ? "text-gray-600"
                    : modulo.concluido
                      ? "text-gray-800"
                      : "text-purple-700"
                }`}
              >
                {modulo.nome}
              </h2>
              <span className="text-sm font-medium text-gray-500">
                {modulo.textoStatus}
              </span>
            </div>
            {modulo.bloqueado ? (
              <LockIcon size={20} className="text-gray-400" />
            ) : (
              <CaretDownIcon
                size={20}
                className="text-gray-400 group-open:rotate-180 transition-transform"
              />
            )}
          </summary>

          <div>
            {modulo.aulasComStatus.map((licao) => {
              const visual = definirVisualDaAula(licao.status);
              return (
                <div
                  key={licao.id}
                  className={`flex items-center justify-between p-3 ${visual.classeContainer}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={visual.classe}>{visual.icone}</span>
                    <span className="text-gray-700 font-medium">
                      {licao.nome}
                    </span>
                    <BadgeStatus status={licao.status} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">
                      {licao.duracaoMinutos} min
                    </span>
                    <button
                      onClick={() =>
                        alternarConclusaoAula(
                          licao.id,
                          usuarioIdLogado,
                          progresso,
                          setProgresso,
                        )
                      }
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        licao.status === "concluido"
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 hover:border-purple-500"
                      }`}
                      aria-label={
                        licao.status === "concluido"
                          ? "Desmarcar aula como concluída"
                          : "Marcar aula como concluída"
                      }
                    >
                      {licao.status === "concluido" && (
                        <CheckCircleIcon
                          size={14}
                          weight="fill"
                          className="text-white"
                        />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </details>
      ))}
    </div>
  );
};

export default ModuleCard;
