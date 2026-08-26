// import bgImage from "../assets/banner-bgs/react-do-zero.jpg";

import { useEffect, useState } from "react";

const Banner = () => {
  // const [cursosDoUsuario, setCursosDoUsuario] = useState([]);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const IdUserLog = localStorage.getItem("id");

        console.log("Inicio do aluno");

        const resMatriculas = await fetch(
          `http://localhost:3000/matriculas?usuarioId=${IdUserLog}`,
        );
        const matriculas = await resMatriculas.json();
        console.log("matriculas");
        console.log(matriculas);
        const resCursos = await fetch(`http://localhost:3000/cursos`);
        const cursos = await resCursos.json();

        const resProgresso = await fetch(
          `http://localhost:3000/progresso?usuarioId=${IdUserLog}`,
        );
        const progresso = await resProgresso.json();

        console.log("Progresso:", progresso);

        const MaisRecente = progresso.sort((a, b) => {
          const antigo = new Date(a.dataConclusao).getTime();
          const recente = new Date(b.dataConclusao).getTime();
          return recente - antigo;
        });

        console.log("recente", MaisRecente[0]);

        debugger;

        const resCurso = await fetch(
          `http://localhost:3000/cursos/id=${MaisRecente.cursoId}`,
        );
        const Curso = await resCurso.json();

        console.log("Curso", Curso);

        setDados({
          CursoNome: Curso.nome,
          CursoProfessor: Curso.professor,
          CursoDuracao: Curso.duracaoHoras,
          CursoTotalAulas: Curso.totalAulas,
          CursoTags: Curso.palavrasChaves,
          CursoImagem: Curso.imagem,
        });

        // const alunoMatriculas = matriculas.filter((m) => m.usuarioId === IdUserLog,
        // );

        // const listaCurso = alunoMatriculas
        //   .map((matricula) => {
        //     const cursoInfo = cursos.find((c) => c.id === matricula.cursoId);

        //     // Trava de segurança para não quebrar a aplicação caso o curso não exista
        //     if (!cursoInfo) return null;

        //     const aulasConcluidas = progresso.filter(
        //       (p) =>
        //         p.usuarioId === IdUserLog &&
        //         p.cursoId === matricula.cursoId &&
        //         p.concluido === true,
        //     ).length;

        //     const totalAulasCurso = cursoInfo.totalAulas || 0;
        //     const porcentagemCalculada =
        //       totalAulasCurso > 0
        //         ? Math.round((aulasConcluidas / totalAulasCurso) * 100)
        //         : 0;

        //     return {
        //       id: cursoInfo.id,
        //       nome: cursoInfo.nome,
        //       professor: cursoInfo.professor,
        //       duracao: cursoInfo.duracaoHoras,
        //       totalAulas: totalAulasCurso,
        //       tags: cursoInfo.palavrasChave,
        //       imagem: cursoInfo.imagem,
        //       progresso: porcentagemCalculada,
        //     };
        //   })
        //   .filter(Boolean);

        // setCursosDoUsuario(listaCurso);
      } catch (erro) {
        console.error("Erro ao processar banco de dados local:", erro);
      }
    };

    carregarDados();
  }, []);

  if (!dados) {
    return (
      <div className="text-white text-center py-10">Carregando dados...</div>
    );
  }

  const nomeDoArquivo = dados.CursoImagem.split("/").pop();

  const imagemLocalUrl = new URL(
    `../assets/banner-bgs/${nomeDoArquivo}`,
    import.meta.url,
  ).href;

  const professorAvatar = new URL(
    `../assets/Prof_avatar/Prof_01.png`,
    import.meta.url,
  ).href;

  return (
    <>
      <div className="w-full max-w-5xl mx-auto p-1 flex flex-col">
        <div
          className="flex flex-col relative p-10 items-start bg-cover bg-top overflow-hidden"
          style={{ backgroundImage: `url(${imagemLocalUrl})` }}
        >
          <div className="flex gap-2 text-xs text-white font-bold">
            {dados.tags?.map((tagTexto, index) => (
              <div
                key={index}
                className={`px-2.5 py-1 rounded-full
                  ${index === 0 ? "bg-[#630ED4]" : "bg-white/20"}`}
              >
                <p>{tagTexto}</p>
              </div>
            ))}
          </div>

          <div className="text-white font-bold text-5xl py-10">
            <h1>{dados.nome} </h1>
          </div>

          <div className="flex">
            <div>
              <img
                src={professorAvatar}
                alt="Foto"
                className="w-12 h-12 rounded-full object-cover object-[center_10%] shadow-md"
              />
            </div>

            <div className="ml-5 flex-col">
              <p className="text-white/60">Instrutor</p>
              <h2 className="text-white font-bold">{dados.professor}</h2>
            </div>
            <div className="ml-5 flex-col">
              <p className="text-white/60">Duração Total</p>
              <p className="text-white font-bold">{dados.duracao} horas</p>
            </div>
            <div className="ml-5 flex-col">
              <p className="text-white/60">Certificado</p>
              <p className="text-white font-bold">Incluso</p>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="text-white font-bold mt-6 flex justify-between w-100">
              <p> Seu progresso</p>
              <span>{dados.progresso}%</span>
            </div>
            <div className="flex items-baseline">
              <div className="w-100 bg-white/20 h-2.5 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="bg-[#630ED4] h-full rounded-full"
                  style={{ width: `${dados.progresso}%` }}
                />
              </div>
              <button className="ml-10 w-full md:w-auto px-6 py-2 bg-white text-[#630ED4] font-bold text-sm rounded-xl transition-all shadow-lg hover:bg-slate-50 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                Continuar curso
                <span className="text-base font-normal">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
