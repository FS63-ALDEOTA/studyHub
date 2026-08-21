import { useEffect, useState } from "react";
import { CaretDownIcon, DownloadSimpleIcon } from "@phosphor-icons/react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const DEFAULT_CURSO_ID = "1";
const DEFAULT_USUARIO_ID = "1";

function formatDuration(minutos) {
  // aulas.duracaoMinutos vem em minutos, pode ser decimal (ex: 45.33) ou grande (ex: 240)
  if (minutos == null) return "00:00";

  const value = typeof minutos === "string" ? Number(minutos) : minutos;
  if (Number.isNaN(value)) return "00:00";

  const totalSeconds = Math.round(value * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}

function AsideCourseContent({ cursoId = DEFAULT_CURSO_ID, usuarioId = DEFAULT_USUARIO_ID }) {
  const [modulos, setModulos] = useState([]);
  const [aulas, setAulas] = useState([]);
  const [progresso, setProgresso] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingIds, setSavingIds] = useState([]); // aula ids sendo salvos


  async function load() {
    setLoading(true);
    setError(null);

    try {
      const [modulosRes, aulasRes, progressoRes] = await Promise.all([
        fetch(`${API_URL}/modulos?cursoId=${cursoId}`),
        fetch(`${API_URL}/aulas`),
        fetch(`${API_URL}/progresso?cursoId=${cursoId}&usuarioId=${usuarioId}`),
      ]);

      if (!modulosRes.ok || !aulasRes.ok || !progressoRes.ok) {
        throw new Error("Falha ao buscar dados do curso");
      }

      const [modulosData, aulasData, progressoData] = await Promise.all([
        modulosRes.json(),
        aulasRes.json(),
        progressoRes.json(),
      ]);

      setModulos(modulosData || []);
      setAulas(aulasData || []);
      setProgresso(progressoData || []);
    } catch (err) {
      console.error("Erro carregando conteúdo do curso:", err);
      setError("Não foi possível carregar o conteúdo do curso.");
      setModulos([]);
      setAulas([]);
      setProgresso([]);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    load();

  }, [cursoId, usuarioId]);

  const aulasPorModulo = (moduloId) => aulas
    .filter((a) => String(a.moduloId) === String(moduloId))
    .sort((x, y) => Number(x.id) - Number(y.id));

  const isAulaConcluida = (aulaId) => {

    const p = progresso.find((pr) => pr.aulaId === Number(aulaId));
    return p ? p.concluido : false;
  };

  const handleToggle = async (aula) => {
    const existing = progresso.find((p) => p.aulaId === Number(aula.id));
    const nextValue = !isAulaConcluida(aula.id);

    setSavingIds((s) => [...s, aula.id]);

    try {
      if (existing) {
        const body = {
          ...existing,
          concluido: nextValue,
          dataConclusao: nextValue ? new Date().toISOString() : null,
        };
        const res = await fetch(`${API_URL}/progresso/${existing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error("PUT failed");
        const updated = await res.json();
        setProgresso((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
        load()
      } else {
        const body = {
          usuarioId,
          cursoId,
          moduloId: aula.moduloId,
          aulaId: aula.id,
          concluido: nextValue,
          dataConclusao: nextValue ? new Date().toISOString() : null,
        };
        const res = await fetch(`${API_URL}/progresso`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error("POST failed");
        const created = await res.json();
        setProgresso((prev) => [...prev, created]);
        load()
      }
    } catch (err) {
      console.error("Erro salvando progresso:", err);
    } finally {
      setSavingIds((s) => s.filter((id) => id !== aula.id));
    }
  };

  const totalAulas = aulas.filter((a) => modulos.some((m) => String(m.id) === String(a.moduloId))).length;
  const aulasConcluidasCount = progresso.filter((p) => p.concluido === true).length;
  const porcentagem = totalAulas > 0 ? Math.round((aulasConcluidasCount / totalAulas) * 100) : 0;

  console.log(aulasConcluidasCount)

  // numeração contínua das aulas (1, 2, 3...) através de todos os módulos, como no design
  let aulaCounter = 0;

  return (
    <div className="flex flex-col w-[25%] ml-auto mr-6 border-l border-[#CCC3D84D]">
      <h1 className="font-semibold text-[20px] mx-6 mt-6 text-base">Conteúdo do Curso</h1>

      <div className="flex flex-col justify-between align-middle m-6">
        <div className="flex justify-between">
          <span className="font-semibold">Progresso</span>
          <span className="font-semibold">{porcentagem}% concluído</span>
        </div>
        <progress
          id="progress"
          value={porcentagem}
          max="100"
          className="mt-2 w-full [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:bg-[#CCC3D84D] [&::-webkit-progress-bar]:h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg"
        >
          {porcentagem}%
        </progress>
      </div>

      {loading && <p className="mx-6">Carregando módulos e aulas...</p>}

      {!loading && error && <p className="mx-6 text-red-400 text-sm">{error}</p>}

      {!loading && !error && (
        <>
          {modulos.length === 0 && <p className="mx-6">Nenhum módulo encontrado.</p>}

          {modulos.map((modulo, moduloIndex) => {
            const aulasDoModulo = aulasPorModulo(modulo.id);

            return (
              <details key={modulo.id}>
                <summary className="flex items-center justify-between cursor-pointer list-none bg-[#DEE8FF80] font-medium py-4 px-6">
                  Módulo {moduloIndex + 1}: {modulo.nome || `Módulo ${modulo.id}`}
                  <CaretDownIcon size={26} />
                </summary>

                {aulasDoModulo.map((aula) => {
                  aulaCounter += 1;
                  const saving = savingIds.includes(aula.id);
                  console.log("progressoaula:", isAulaConcluida(aula.id), aula.id)
                  return (
                    <div
                      key={aula.id}
                      className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50"
                    >
                      <input
                        type="checkbox"
                        name="checkDone"
                        id={`checkDone-${aula.id}`}
                        checked={isAulaConcluida(aula.id)}
                        onChange={() => handleToggle(aula)}
                        disabled={saving}
                        className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white checked:bg-primary checked:border-primary disabled:opacity-50"
                      />
                      <div>
                        <label htmlFor={`checkDone-${aula.id}`} className="cursor-pointer">
                          {aulaCounter}. {aula.nome}
                        </label>
                        <br />
                        <span className="text-[15px] text-[#7B7487]">
                          {formatDuration(aula.duracaoMinutos)}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {aulasDoModulo.length === 0 && (
                  <p className="text-[15px] text-[#7B7487] py-4 px-6 bg-[#DEE8FF80]/50">
                    Nenhuma aula neste módulo.
                  </p>
                )}
              </details>
            );
          })}
        </>
      )}

      <div className="h-full border-t border-[#CCC3D84D] cursor-pointer">
        <div className="flex m-6 items-center justify-center rounded-2xl bg-primary text-white font-medium p-3 gap-2">
          <button className="cursor-pointer">
            <DownloadSimpleIcon size={26} />
          </button>
          <span>Baixar Certificado</span>
        </div>
      </div>
    </div>
  );
}

export default AsideCourseContent;