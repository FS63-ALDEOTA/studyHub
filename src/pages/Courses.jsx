// import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import Banner from "../components/Banner";
import AsideCourseContent from "../components/AsideCourseContent"
import NavCourse from "./NavCourse";

const Courses = () => {
  const [cursosDoUsuario, setCursosDoUsuario] = useState([]);

  useEffect(() => {
    const urlGitHub =
      "https://raw.githubusercontent.com/FS63-ALDEOTA/studyHubAPI/refs/heads/main/db.json";

    fetch(urlGitHub)
      .then((resposta) => resposta.json())
      .then((db) => {
        const ID_USUARIO_LOGADO = 1;
        const alunoMatriculas = db.matriculas.filter(
          (m) => m.usuarioId === ID_USUARIO_LOGADO,
        );

        const listaCurso = alunoMatriculas.map((matricula) => {
          const cursoInfo = db.cursos.find((c) => c.id === matricula.cursoId);
          const aulasConcluidas = db.progresso.filter(
            (p) =>
              p.usuarioId === ID_USUARIO_LOGADO &&
              p.cursoId === matricula.cursoId &&
              p.concluido === true,
          ).length;

          const porcentagemCalculada =
            cursoInfo.totalAulas > 0
              ? Math.round((aulasConcluidas / cursoInfo.totalAulas) * 100)
              : 0;

          return {
            id: cursoInfo.id,
            nome: cursoInfo.nome,
            professor: cursoInfo.professor,
            duracao: cursoInfo.duracaoHoras,
            totalAulas: cursoInfo.totalAulas,
            tags: cursoInfo.palavrasChave,
            imagem: cursoInfo.imagem,
            progresso: porcentagemCalculada,
          };
        });

        setCursosDoUsuario(listaCurso);
      })

      .catch((erro) => {
        console.error("Erro ao processar banco de dados:", erro);
      });
  }, []);

  return (
    <div className="border-b-2 border-[#CCC3D8] pl-6 pb-6">
      <NavCourse/>
      <h1>Meus cursos</h1>
   
      <Banner dados={cursosDoUsuario[1]} />
      
      <AsideCourseContent/>
    </div>
  );
};

export default Courses;
