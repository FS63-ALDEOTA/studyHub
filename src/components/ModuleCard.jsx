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
          status: "andamento",
        },
        {
          id: 4,
          titulo: "Primeiro projeto",
          duracao: "20:10",
          status: "bloqueado",
        },
      ],
      tempo: "1h 20minutos",
    },
    {
      id: 2,
      titulo: "Módulo 2: Props e Componentes",
      licoes: [],
      tempo: "2h 10minutos",
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

        const moduloConcluido =
          modulo.licoes.length > 0 &&
          modulo.licoes.every((licao) => licao.status === "concluido");
          return (

            <details key={modulo.id} className="border rounded-xl p-4">
              <summary className="cursor-pointer">
                <h2>{modulo.titulo}</h2>
                <span>
                  {modulo.licoes.length} Lições • {modulo.tempo}
                </span>
              </summary>
          <div>
            {modulo.licoes.map((licao) => {
              let icone;
              let classeIcone;

              if (licao.status === "concluido") { 
                icone = "✅";
                classeIcone = "text-green-500";
              } else if (licao.status === "andamento") {
                icone = "⏳";
                classeIcone = "text-blue-500";
              } else if (licao.status === "bloqueado") {
                icone = "🔒";
                classeIcone = "text-gray-500";
              }

              return (
                <div key={licao.id}>
                <span className={classeIcone}>{icone}</span>
                <span>{licao.titulo}</span>
                <span>Duração: {licao.duracao}</span>
              </div>
              );
            })
            }
          </div>
        </details>)
      } 
    )}
    </>
  );
}

export default ModuleCard