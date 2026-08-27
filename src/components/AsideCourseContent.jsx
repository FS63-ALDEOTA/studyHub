import { useEffect, useState } from "react";
import { DownloadSimpleIcon, CaretDownIcon } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

function AsideCourseContent() {

  const { id } = useParams()
  const cursoId = id;
  const usuarioId = 1;
  const [modulos, setModulos] = useState([]);
  const [progresso, setProgresso] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregarConteudo = async () => {
      try {
        const respostas = await Promise.all([
          fetch(`http://localhost:3000/modulos?cursoId=${cursoId}`),
          fetch("http://localhost:3000/aulas"),
          fetch(`http://localhost:3000/progresso?cursoId=${cursoId}&usuarioId=${usuarioId}`),
        ]);

        if (!respostas.every((resposta) => resposta.ok)) {
          throw new Error("Não foi possível carregar o conteúdo do curso.");
        }

        const [modulosApi, aulasApi, progressoApi] = await Promise.all(
          respostas.map((resposta) => resposta.json()),
        );
        console.log(modulosApi, aulasApi, progressoApi)

        setModulos(modulosApi.map((modulo) => ({
          ...modulo,
          aulas: aulasApi.filter((aula) => String(aula.moduloId) === String(modulo.id)),
        })));
        setProgresso(progressoApi);

      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    carregarConteudo();
  }, []);

  function aulaConcluida(aulaId) {
    progresso.some(
      (registro) => String(registro.aulaId) === String(aulaId) && registro.concluido,)
  }

  const totalAulas = modulos.reduce((total, modulo) => total + modulo.aulas.length, 0);
  const aulasConcluidas = progresso.filter((registro) => registro.concluido).length;
  const porcentagem = totalAulas > 0 ? Math.round((aulasConcluidas / totalAulas) * 100) : 0;

  const alterarProgresso = async (modulo, aula) => {
    const concluido = !aulaConcluida(aula.id)
    const registroAtual = progresso.find(
      (registro) => String(registro.aulaId) === String(aula.id),
    );
    const progressoAnterior = progresso;
    const novoRegistro = {
      ...(registroAtual || {}),
      usuarioId,
      cursoId,
      moduloId: modulo.id,
      aulaId: aula.id,
      concluido,
      dataConclusao: concluido ? new Date().toISOString() : null,
    };

    setProgresso((registros) => registroAtual
      ? registros.map((registro) => registro.id === registroAtual.id ? novoRegistro : registro)
      : [...registros, novoRegistro]);

    try {
      const response = await fetch(
        registroAtual
          ? `http://localhost:3000/progresso/${registroAtual.id}`
          : "http://localhost:3000/progresso",
        {
          method: registroAtual ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(novoRegistro),
        },
      );

      if (!response.ok) {
        throw new Error("Não foi possível atualizar o progresso.");
      }

      const registroSalvo = await response.json();
      setProgresso((registros) => registros.map((registro) => (
        String(registro.aulaId) === String(aula.id) ? registroSalvo : registro
      )));
    } catch (error) {
      setProgresso(progressoAnterior);
      setErro(error.message);
    }
  };

  return (
    <div className="flex flex-col w-[25%] ml-auto mr-6 border-l border-[#CCC3D84D]">
      <h1 className="font-semibold text-[20px] mx-6 mt-6 text-base">Conteúdo do Curso</h1>
      <div className="flex flex-col justify-between align-middle m-6">
        <div className="flex justify-between">
          <span className="font-semibold ">Progresso</span>
          <span className="font-semibold">{porcentagem}% concluído</span>
        </div>
        <progress id="progress" value={porcentagem} max="100" className="mt-2 w-full [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:bg-[#CCC3D84D] [&::-webkit-progress-bar]:h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg" />
      </div>

      {carregando && <p className="mx-6 text-[#7B7487]">Carregando conteúdo...</p>}
      {erro && <p className="mx-6 text-red-600">{erro}</p>}
      {!carregando && !erro && modulos.map((modulo) => (
        <details key={modulo.id}>
          <summary className="flex items-center justify-between cursor-pointer list-none bg-[#DEE8FF80] font-medium py-4 px-6">
            {modulo.nome}
            <CaretDownIcon size={26} />
          </summary>
          {modulo.aulas.map((aula, index) => {
            const minutos = Math.floor(aula.duracaoMinutos);
            const segundos = Math.round((aula.duracaoMinutos - minutos) * 60);

            return (
              <label key={aula.id} htmlFor={`aula-${aula.id}`} className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50 cursor-pointer">
                <input
                  type="checkbox"
                  id={`aula-${aula.id}`}
                  checked={aulaConcluida(aula.id)}
                  onChange={() => alterarProgresso(modulo, aula)}
                  className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white checked:bg-primary"
                />
                <div>
                  <p>{index + 1}. {aula.nome}</p>
                  <span className="text-[15px] text-[#7B7487]">{String(minutos).padStart(2, "0")}:{String(segundos).padStart(2, "0")}</span>
                </div>
              </label>
            );
          })}
        </details>
      ))}

      {porcentagem == 100 && <div className="h-full border-t border-[#CCC3D84D] cursor-pointer">
        <div className="flex m-6 items-center justify-center rounded-2xl bg-primary text-white font-medium p-3 gap-2">
          <button className="cursor-pointer">
            <DownloadSimpleIcon size={26} />
          </button>
          <span>Baixar Certificado</span>
        </div>
      </div>}
    </div>
  )
}

export default AsideCourseContent