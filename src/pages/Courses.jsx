import { useState, useEffect } from "react";

import Banner from "../components/Banner";
import AsideCourseContent from "../components/AsideCourseContent";

const Courses = () => {
  const [cursosDoUsuario, setCursosDoUsuario] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const ID_USUARIO_LOGADO = 1;

        // 1. Buscando as tabelas de forma assíncrona
        const resMatriculas = await fetch("http://localhost:3000/matriculas");
        const matriculas = await resMatriculas.json();

        const resCursos = await fetch("http://localhost:3000/cursos");
        const cursos = await resCursos.json();

        const resProgresso = await fetch("http://localhost:3000/progresso");
        const progresso = await resProgresso.json();

        // 2. Filtrando as matrículas do aluno logado
        const alunoMatriculas = matriculas.filter(
          (m) => m.usuarioId === ID_USUARIO_LOGADO,
        );

        // 3. Montando a lista corrigida sem usar 'db.'
        const listaCurso = alunoMatriculas
          .map((matricula) => {
            const cursoInfo = cursos.find((c) => c.id === matricula.cursoId);

            // Trava de segurança para não quebrar a aplicação caso o curso não exista
            if (!cursoInfo) return null;

            const aulasConcluidas = progresso.filter(
              (p) =>
                p.usuarioId === ID_USUARIO_LOGADO &&
                p.cursoId === matricula.cursoId &&
                p.concluido === true,
            ).length;

            const totalAulasCurso = cursoInfo.totalAulas || 0;
            const porcentagemCalculada =
              totalAulasCurso > 0
                ? Math.round((aulasConcluidas / totalAulasCurso) * 100)
                : 0;

            return {
              id: cursoInfo.id,
              nome: cursoInfo.nome,
              professor: cursoInfo.professor,
              duracao: cursoInfo.duracaoHoras,
              totalAulas: totalAulasCurso,
              tags: cursoInfo.palavrasChave,
              imagem: cursoInfo.imagem,
              progresso: porcentagemCalculada,
            };
          })
          .filter(Boolean); 

        setCursosDoUsuario(listaCurso);
      } catch (erro) {
        console.error("Erro ao processar banco de dados local:", erro);
      }
    };

    carregarDados();
  }, []);

  return (
    <div>
      <h1>Meus cursos</h1>

      <Banner />
   {cursosDoUsuario.length > 0 && <Banner dados={cursosDoUsuario[0]} />} 
      <AsideCourseContent />
    </div>
  );
};

export default Courses;
