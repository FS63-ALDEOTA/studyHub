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
        let classeIconeModulo;

        if (moduloBloqueado) {
          iconeModulo = "🔒";
          classeIconeModulo = "text-gray-500";
        } else if (moduloConcluido) {
          iconeModulo = "✅";
          classeIconeModulo = "text-green-500";
        } else {
          iconeModulo = "▶";
          classeIconeModulo = "text-primary";
        }

          
        return (
          <details key={modulo.id} className="border rounded-xl p-4 mb-4">
            <summary
              className={
                moduloBloqueado
                  ? "cursor-not-allowed"
                  : "cursor-pointer p-3 border-b"
              }
              onClick={(e) => {
                if (moduloBloqueado) {
                  e.preventDefault();
                  alert(
                    "Você precisa concluir o módulo anterior para acessar este módulo.",
                  );
                }
              }}
            >
              <h2
                className={`text-lg font-semibold text-gray-700 ${classeIconeModulo}`}
              >
                {modulo.titulo} {iconeModulo}
              </h2>
              <span
                className={`${classeIconeModulo} text-lg font-semibold text-gray-700`}
              >
                {modulo.licoes.length} Lições • {modulo.tempo} {iconeModulo}
              </span>
            </summary>
            <div>
              {modulo.licoes.map((licao) => {
                let icone;
                let classeIcone;

                if (licao.status === "concluido") {
                  icone = "✅";
                  classeIcone = "text-green-500";
                } else if (licao.status === "assistindo") {
                  icone = "⏳";
                  classeIcone = "text-blue-500";
                } else if (licao.status === "pendente") {
                  icone = "❌";
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
    </>
  );
};

export default ModuleCard;